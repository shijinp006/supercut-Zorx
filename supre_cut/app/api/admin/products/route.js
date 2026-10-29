import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getAdmin } from "../../../../lib/auth";
import { getDb } from "../../../../lib/db";
import { productSchema, fieldErrors } from "../../../../lib/validation";
import { verifyUploadedImage, deleteImage } from "../../../../lib/cloudinary";

const forbidden = () => NextResponse.json({ error: "Admin access required" }, { status: 403 });

export async function GET() {
  if (!(await getAdmin())) return forbidden();
  const db = await getDb();
  const products = await db.collection("products").find().sort({ createdAt: -1 }).toArray();
  return NextResponse.json({
    products: products.map((p) => ({ ...p, _id: p._id.toString() })),
  });
}

export async function POST(request) {
  const admin = await getAdmin();
  if (!admin) return forbidden();

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = productSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the highlighted fields", fields: fieldErrors(parsed.error) }, { status: 400 });
  }
  const { title, description, imagePublicId } = parsed.data;

  // Don't trust the client's URL: confirm the upload exists in our account and is a real image
  const image = await verifyUploadedImage(imagePublicId);
  if (!image.ok) {
    return NextResponse.json({ error: image.error, fields: { image: image.error } }, { status: 400 });
  }

  const db = await getDb();
  const doc = {
    title,
    description,
    imageUrl: image.url,
    imagePublicId,
    createdAt: new Date(),
    createdBy: admin.email,
  };
  const { insertedId } = await db.collection("products").insertOne(doc);

  revalidatePath("/products");
  return NextResponse.json({ product: { ...doc, _id: insertedId.toString() } }, { status: 201 });
}

export async function DELETE(request) {
  if (!(await getAdmin())) return forbidden();

  const id = new URL(request.url).searchParams.get("id");
  if (!id || !ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid product id" }, { status: 400 });
  }

  const db = await getDb();
  const product = await db.collection("products").findOneAndDelete({ _id: new ObjectId(id) });
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await deleteImage(product.imagePublicId).catch(() => {});
  revalidatePath("/products");
  return NextResponse.json({ ok: true });
}

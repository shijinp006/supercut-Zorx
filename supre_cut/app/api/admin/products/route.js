import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdmin } from "../../../../lib/auth";
import { getDb } from "../../../../lib/db";
import { listProducts, serializeProduct } from "../../../../lib/products";
import { productSchema, fieldErrors } from "../../../../lib/validation";
import { verifyUploadedImage } from "../../../../lib/cloudinary";

const forbidden = () => NextResponse.json({ error: "Admin access required" }, { status: 403 });

export async function GET() {
  if (!(await getAdmin())) return forbidden();
  return NextResponse.json({ products: await listProducts() });
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

  // Don't trust the client: confirm the upload exists in our account and is a real image
  const image = await verifyUploadedImage(imagePublicId);
  if (!image.ok) return NextResponse.json({ error: image.error, fields: { image: image.error } }, { status: 400 });

  const db = await getDb();
  const doc = { title, description, imageUrl: image.url, imagePublicId, createdAt: new Date(), createdBy: admin.email };
  const { insertedId } = await db.collection("products").insertOne(doc);

  revalidatePath("/products");
  return NextResponse.json({ product: serializeProduct({ ...doc, _id: insertedId }) }, { status: 201 });
}

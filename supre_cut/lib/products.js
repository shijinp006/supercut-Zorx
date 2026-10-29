import { getDb } from "./db";

/** All products in display order (oldest first, so the original catalogue leads) */
export async function listProducts() {
  const db = await getDb();
  const docs = await db.collection("products").find().sort({ createdAt: 1, _id: 1 }).toArray();
  return docs.map(serializeProduct);
}

export function serializeProduct(p) {
  return {
    _id: p._id.toString(),
    title: p.title,
    description: p.description,
    imageUrl: p.imageUrl,
    imagePublicId: p.imagePublicId,
  };
}

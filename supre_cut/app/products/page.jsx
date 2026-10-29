import { ProductsGrid } from "../../components/ProductsGrid";
import { getDb } from "../../lib/db";

export const metadata = { title: "Products" };

// Rebuilt when an admin adds or deletes a product (revalidatePath), and hourly as a fallback
export const revalidate = 3600;

async function getAddedProducts() {
  try {
    const db = await getDb();
    const docs = await db.collection("products").find().sort({ createdAt: -1 }).toArray();
    return docs.map((p) => ({
      id: p._id.toString(),
      title: [p.title.toUpperCase()],
      image: p.imageUrl,
      alt: p.title,
      desc: p.description,
    }));
  } catch (err) {
    // The page should still show the built-in products if the database is unreachable
    console.error("Could not load products from MongoDB:", err.message);
    return [];
  }
}

export default async function Page() {
  return <ProductsGrid addedItems={await getAddedProducts()} />;
}

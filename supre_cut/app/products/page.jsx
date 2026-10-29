import { ProductsGrid } from "../../components/ProductsGrid";
import { listProducts } from "../../lib/products";
import { PAGES } from "../../data/insertsData";
import { cldUrl } from "../../lib/cloudinaryUrl";

export const metadata = { title: "Products" };

// Rebuilt when an admin adds, edits or deletes a product (revalidatePath), and hourly as a fallback
export const revalidate = 3600;

async function getItems() {
  try {
    const products = await listProducts();
    return products.map((p) => ({
      id: p._id,
      title: [p.title.toUpperCase()],
      image: cldUrl(p.imageUrl, 900),
      alt: p.title,
      desc: p.description,
    }));
  } catch (err) {
    // Database unreachable (e.g. env vars missing): show the built-in catalogue rather than an empty page
    console.error("Could not load products from MongoDB:", err.message);
    return PAGES.flatMap((p) => p.items);
  }
}

export default async function Page() {
  return <ProductsGrid items={await getItems()} />;
}

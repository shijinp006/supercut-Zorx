import { redirect } from "next/navigation";
import { getAdmin } from "../../lib/auth";
import { getDb } from "../../lib/db";
import { AdminDashboard } from "../../components/admin/AdminDashboard";

export const metadata = { title: "Admin dashboard", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function Page() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");

  const db = await getDb();
  const products = await db.collection("products").find().sort({ createdAt: -1 }).toArray();

  return (
    <AdminDashboard
      adminEmail={admin.email}
      initialProducts={products.map((p) => ({
        _id: p._id.toString(),
        title: p.title,
        description: p.description,
        imageUrl: p.imageUrl,
        imagePublicId: p.imagePublicId,
      }))}
    />
  );
}

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { GROTESK_FONT } from "../fonts";
import { AdminHeader } from "./AdminHeader";
import { api, readError } from "./api";
import { cldUrl } from "../../lib/cloudinaryUrl";

// Edit popup (and its form) is only downloaded when Edit is first clicked
const EditModal = dynamic(() => import("./EditModal"), { ssr: false });


export function ProductsManager({ adminEmail, initialProducts }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");

  const shown = products.filter((p) => `${p.title} ${p.description}`.toLowerCase().includes(query.trim().toLowerCase()));

  const handleDelete = async (product) => {
    if (!window.confirm(`Delete “${product.title}”? This also removes its image from Cloudinary.`)) return;
    try {
      await api.delete(`/api/admin/products/${product._id}`);
      setProducts((list) => list.filter((p) => p._id !== product._id));
      setNotice(`“${product.title}” deleted.`);
    } catch (err) {
      const { message, expired } = readError(err);
      if (expired) return router.replace("/admin/login");
      setNotice(message);
    }
  };

  return (
    <section className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col bg-[#0b1f4b] text-white" style={{ fontFamily: GROTESK_FONT }}>
      <AdminHeader adminEmail={adminEmail} />

      <div className="flex-1 lg:min-h-0 px-4 sm:px-8 lg:px-12 py-6 lg:py-8 flex flex-col">
        <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h1 className="text-[22px] sm:text-[24px] font-semibold tracking-tight">
            Products <span className="text-white/50 font-normal">({products.length})</span>
          </h1>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            aria-label="Search products"
            className="w-full sm:w-72 bg-[#163672] border border-white/10 text-white placeholder:text-white/45 rounded-lg px-4 py-2.5 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        {notice && <p role="status" className="shrink-0 mb-3 text-[14px] text-[#b6f0c8]">{notice}</p>}

        {shown.length === 0 ? (
          <p className="text-white/60">{products.length ? "No products match your search." : "No products yet."}</p>
        ) : (
          <ul data-lenis-prevent className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin] grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,220px)] sm:justify-start auto-rows-max gap-3 sm:gap-4 content-start">
            {shown.map((p) => (
              <li key={p._id} className="h-[300px] bg-[#f4f4f4] text-[#111] rounded-xl overflow-hidden flex flex-col">
                <div className="relative h-[140px] shrink-0 bg-[#e4e4e4] overflow-hidden">
                  <img src={cldUrl(p.imageUrl, 500)} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-contain p-3 mix-blend-multiply" />
                </div>
                <div className="p-3 flex-1 min-h-0 flex flex-col">
                  <p className="font-semibold uppercase text-[14px] leading-snug line-clamp-2">{p.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-neutral-600 line-clamp-2">{p.description}</p>
                  <div className="mt-auto pt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setEditing(p)}
                      className="flex-1 text-[13px] font-semibold bg-[#0b1f4b] text-white px-3 py-1.5 rounded-lg hover:bg-[#13306b] transition-colors cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(p)}
                      className="flex-1 text-[13px] font-semibold border border-[#0b1f4b] text-[#0b1f4b] px-3 py-1.5 rounded-lg hover:bg-[#0b1f4b] hover:text-white transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {editing && (
        <EditModal
          product={editing}
          onClose={() => setEditing(null)}
          onSaved={(updated) => {
            setProducts((list) => list.map((p) => (p._id === updated._id ? updated : p)));
            setEditing(null);
            setNotice(`“${updated.title}” saved.`);
          }}
        />
      )}
    </section>
  );
}

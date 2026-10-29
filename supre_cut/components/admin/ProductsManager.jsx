"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GROTESK_FONT } from "../fonts";
import { AdminHeader } from "./AdminHeader";
import { ProductForm } from "./ProductForm";
import { api, readError } from "./api";
import { cldUrl } from "../../lib/cloudinaryUrl";

function EditModal({ product, onClose, onSaved }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={`Edit ${product.title}`} onClick={onClose} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg max-h-[92vh] bg-[#13306b] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col">
        <h2 className="shrink-0 text-[20px] font-semibold mb-3">Edit product</h2>
        <ProductForm product={product} onSaved={onSaved} onCancel={onClose} className="flex-1 min-h-[440px]" />
      </div>
    </div>
  );
}

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
          <ul data-lenis-prevent className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-max gap-3 sm:gap-4 content-start">
            {shown.map((p) => (
              <li key={p._id} className="bg-[#f4f4f4] text-[#111] rounded-xl overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-[#e4e4e4]">
                  <img src={cldUrl(p.imageUrl, 500)} alt={p.title} loading="lazy" className="w-full h-full object-contain p-3 mix-blend-multiply" />
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <p className="font-semibold uppercase text-[13.5px] sm:text-[15px] leading-snug">{p.title}</p>
                  <p className="mt-1 text-[13px] text-neutral-600 line-clamp-2 flex-1">{p.description}</p>
                  <div className="mt-3 flex gap-2">
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

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { GROTESK_FONT } from "../fonts";

const PRODUCT_IMAGE_FOLDER = "supercut/products";

const inputClass =
  "w-full bg-[#163672] border border-white/10 text-white placeholder:text-white/45 rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-white";

const EMPTY = { title: "", description: "" };

export function AdminDashboard({ adminEmail, initialProducts }) {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState(EMPTY);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!image) {
      setErrors({ image: "Upload a product image" });
      return;
    }
    setErrors({});
    setSaving(true);
    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, imagePublicId: image.publicId, imageUrl: image.url }),
      });
      const data = await res.json();
      if (res.status === 403) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        setErrors(data.fields || { form: data.error });
        return;
      }
      setProducts((list) => [data.product, ...list]);
      setForm(EMPTY);
      setImage(null);
      setMessage(`“${data.product.title}” added to the Products page.`);
    } catch {
      setErrors({ form: "Network error, please try again" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (product) => {
    if (!window.confirm(`Delete “${product.title}”? This also removes its image.`)) return;
    const res = await fetch(`/api/admin/products?id=${product._id}`, { method: "DELETE" });
    if (res.status === 403) return router.replace("/admin/login");
    if (res.ok) setProducts((list) => list.filter((p) => p._id !== product._id));
  };

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <section className="min-h-screen bg-[#0b1f4b] text-white" style={{ fontFamily: GROTESK_FONT }}>
      <header className="border-b border-white/10 px-4 sm:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/supercut_logo_stacked.webp" alt="SUPER CUT" className="h-10 w-auto bg-white rounded-lg px-2 py-1" />
          <span className="font-semibold text-[17px]">Admin</span>
        </div>
        <div className="flex items-center gap-3 text-[14px]">
          <span className="hidden sm:inline text-white/70">{adminEmail}</span>
          <a href="/products" target="_blank" rel="noopener noreferrer" className="border border-white/20 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
            View site
          </a>
          <button type="button" onClick={logout} className="bg-white text-[#0b1f4b] font-semibold px-3 py-2 rounded-lg hover:bg-[#dbe4f3] transition-colors cursor-pointer">
            Log out
          </button>
        </div>
      </header>

      <div className="px-4 sm:px-8 lg:px-12 py-10 grid lg:grid-cols-[420px_1fr] gap-10 items-start">
        {/* Add product */}
        <form onSubmit={handleSubmit} noValidate className="bg-[#13306b] border border-white/10 rounded-2xl p-6 space-y-4">
          <h1 className="text-[24px] font-semibold tracking-tight">Add product</h1>

          <div>
            <CldUploadWidget
              signatureEndpoint="/api/admin/sign-upload"
              options={{
                folder: PRODUCT_IMAGE_FOLDER,
                sources: ["local"],
                multiple: false,
                maxFiles: 1,
                resourceType: "image",
                clientAllowedFormats: ["jpg", "jpeg", "png", "webp"],
                maxFileSize: 5 * 1024 * 1024,
              }}
              onSuccess={(result) => {
                setImage({ publicId: result.info.public_id, url: result.info.secure_url });
                setErrors((e) => ({ ...e, image: undefined }));
              }}
              onError={() => setErrors((e) => ({ ...e, image: "Upload failed. Check you are still signed in." }))}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="w-full aspect-[4/3] rounded-lg border-2 border-dashed border-white/25 hover:border-white/60 bg-[#0b1f4b] flex items-center justify-center overflow-hidden transition-colors cursor-pointer"
                >
                  {image ? (
                    <CldImage src={image.publicId} alt="Uploaded product" width="600" height="450" crop="pad" background="white" className="w-full h-full object-contain bg-white" />
                  ) : (
                    <span className="text-white/70 text-[14px] text-center px-4">
                      Click to upload image
                      <br />
                      <span className="text-white/45 text-[12.5px]">JPG, PNG or WebP · max 5 MB</span>
                    </span>
                  )}
                </button>
              )}
            </CldUploadWidget>
            {errors.image && <p className="mt-1.5 text-[13px] text-[#ffb4b4]">{errors.image}</p>}
          </div>

          <div>
            <input value={form.title} onChange={set("title")} placeholder="Product name" aria-label="Product name" maxLength={80} className={inputClass} />
            {errors.title && <p className="mt-1.5 text-[13px] text-[#ffb4b4]">{errors.title}</p>}
          </div>

          <div>
            <textarea value={form.description} onChange={set("description")} placeholder="Description" aria-label="Description" rows={5} maxLength={600} className={`${inputClass} resize-y`} />
            {errors.description && <p className="mt-1.5 text-[13px] text-[#ffb4b4]">{errors.description}</p>}
          </div>

          {(errors.form || errors.imagePublicId || errors.imageUrl) && (
            <p role="alert" className="text-[14px] text-[#ffb4b4]">{errors.form || errors.imagePublicId || errors.imageUrl}</p>
          )}
          {message && <p role="status" className="text-[14px] text-[#b6f0c8]">{message}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-white text-[#0b1f4b] font-semibold text-[15px] py-3 rounded-lg hover:bg-[#dbe4f3] disabled:opacity-60 transition-colors cursor-pointer"
          >
            {saving ? "Saving…" : "Add product"}
          </button>
        </form>

        {/* Added products */}
        <div>
          <h2 className="text-[20px] font-semibold mb-4">
            Added products <span className="text-white/50 font-normal">({products.length})</span>
          </h2>
          {products.length === 0 ? (
            <p className="text-white/60">No products added yet. Products you add here appear on the Products page.</p>
          ) : (
            <ul className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {products.map((p) => (
                <li key={p._id} className="bg-[#f4f4f4] text-[#111] rounded-xl overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] bg-[#e4e4e4]">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-contain p-3 mix-blend-multiply" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="font-semibold uppercase">{p.title}</p>
                    <p className="mt-1 text-[13.5px] text-neutral-600 line-clamp-2 flex-1">{p.description}</p>
                    <button
                      type="button"
                      onClick={() => handleDelete(p)}
                      className="mt-3 self-start text-[13px] font-semibold border border-[#0b1f4b] text-[#0b1f4b] px-3 py-1.5 rounded-lg hover:bg-[#0b1f4b] hover:text-white transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

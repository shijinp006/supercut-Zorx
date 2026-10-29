"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import { CONDENSED_FONT, GROTESK_FONT } from "./fonts";
import { PAGES } from "../data/insertsData";

const ALL_ITEMS = PAGES.flatMap((p) => p.items);
const PAGE_SIZE = 6;

function ProductModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const title = item.title.join(" ");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        <div className="flex justify-between items-center px-5 sm:px-6 py-4 border-b border-neutral-200 shrink-0">
          <span style={{ fontFamily: CONDENSED_FONT }} className="text-[#e5233d] text-[11px] font-bold uppercase tracking-[0.12em]">
            Super Cut
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 text-xl font-bold cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="h-52 sm:h-64 w-full bg-[#ececec] flex items-center justify-center">
            <img src={item.image} alt={item.alt} className="max-w-full max-h-full object-contain p-6 mix-blend-multiply" />
          </div>

          <div className="p-5 sm:p-6 text-center flex flex-col items-center">
            <h3 style={{ fontFamily: GROTESK_FONT }} className="text-[#111] text-[24px] sm:text-[28px] font-semibold leading-tight">
              {title}
            </h3>
            <p className="mt-2 max-w-md text-[14.5px] sm:text-[15.5px] text-neutral-600 leading-relaxed">{item.desc}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/97126788921?text=${encodeURIComponent(`Hello Super Cut, I would like to inquire about ${title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#e5233d] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#c01b32] transition-colors"
              >
                Enquire on WhatsApp
              </a>
              <a
                href="/images/1212_compressed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#111] text-[#111] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#111] hover:text-white transition-colors"
              >
                Full Catalogue (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsGrid() {
  const [query, setQuery] = useState("");
  const [activeItem, setActiveItem] = useState(null);
  const [page, setPage] = useState(1);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ITEMS;
    return ALL_ITEMS.filter((it) => `${it.title.join(" ")} ${it.desc}`.toLowerCase().includes(q));
  }, [query]);

  const pageCount = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (n) => {
    setPage(n);
    window.__lenis?.scrollTo(0, { immediate: true });
  };

  return (
    <section className="bg-[#173a8c] text-white py-16 lg:py-24 min-h-screen">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h1 style={{ fontFamily: GROTESK_FONT }} className="text-[44px] sm:text-[56px] font-bold leading-none tracking-tight">
            Products
          </h1>
          <label className="relative w-full sm:w-80">
            <span className="sr-only">Search products</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none">
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search"
              className="w-full bg-[#d9d9d9] text-[#111] placeholder:text-neutral-600 rounded-lg pl-10 pr-4 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#e5233d]"
            />
          </label>
        </div>

        {items.length === 0 ? (
          <p className="text-white/60 text-[16px] py-20 text-center">No products match “{query}”.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pageItems.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 60} className="h-full">
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="group w-full h-full text-left rounded-xl overflow-hidden bg-[#f4f4f4] flex flex-col cursor-pointer ring-2 ring-transparent hover:ring-[#e5233d] transition-all duration-300"
                >
                  <div className="aspect-[4/3] w-full bg-[#e4e4e4] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 transition-colors duration-300 group-hover:bg-[#e5233d]">
                    <h2
                      style={{ fontFamily: GROTESK_FONT }}
                      className="text-[#111] group-hover:text-white text-[17px] sm:text-[18px] font-semibold leading-snug transition-colors"
                    >
                      {item.title.join(" ")}
                    </h2>
                    <span className="block mt-1.5 h-[2px] w-24 bg-[#e5233d] group-hover:bg-white transition-colors" />
                    <span className="mt-4 inline-flex items-center gap-2 bg-[#e5233d] text-white group-hover:bg-white group-hover:text-[#e5233d] text-[13.5px] font-semibold px-4 py-2 rounded-lg transition-colors">
                      View Product
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        )}

        {pageCount > 1 && (
          <nav aria-label="Products pagination" className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white hover:border-[#e5233d] hover:text-[#e5233d] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => goToPage(n)}
                aria-current={n === currentPage ? "page" : undefined}
                style={{ fontFamily: GROTESK_FONT }}
                className={`w-10 h-10 rounded-lg text-[15px] font-semibold transition-colors cursor-pointer ${
                  n === currentPage
                    ? "bg-[#e5233d] text-white"
                    : "border border-white/15 text-white hover:border-[#e5233d] hover:text-[#e5233d]"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pageCount}
              aria-label="Next page"
              className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white hover:border-[#e5233d] hover:text-[#e5233d] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </nav>
        )}
      </div>

      {activeItem && <ProductModal item={activeItem} onClose={() => setActiveItem(null)} />}
    </section>
  );
}

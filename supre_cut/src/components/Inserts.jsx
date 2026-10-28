import { useState } from "react";
import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { PAGES } from "../data/insertsData";
import { DIMENSIONS } from "../data/catalogueData";

const ALL_ITEMS = PAGES.flatMap(p => p.items);

export function Inserts() {
  const [showAll, setShowAll] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const displayedItems = showAll ? ALL_ITEMS : ALL_ITEMS.slice(0, 6);

  const activeSpec = activeItem ? DIMENSIONS.find((g) => g.id === activeItem.id) : null;

  return (
    <section id="inserts" className="bg-white text-[#0c1a2e] py-16 lg:py-24">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-12 border-b border-black/10 pb-4">
            <h2 style={{ fontFamily: DISPLAY_FONT }} className="text-[clamp(40px,5vw,72px)] font-black uppercase tracking-wide leading-none text-[#0c1a2e]">
              Our Products
            </h2>
          </div>
        </Reveal>

        {/* 2 columns on mobile (grid-cols-2), 3 columns on tablet/desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayedItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50} variant="scale" className="w-full h-full">
              {/* Card wrapper: rounded-xl, cursor-pointer */}
              <div className="bg-white rounded-xl overflow-hidden border border-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer group flex flex-col h-full transform hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] transition-all duration-300">

                {/* Category label */}
                <div className="px-3 sm:px-5 pt-3 sm:pt-4">
                  <span style={{ fontFamily: CONDENSED_FONT }} className="text-[#e5233d] text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em]">
                    Super Cut
                  </span>
                </div>

                {/* Text Top */}
                <div className="px-3 sm:px-5 pb-3 sm:pb-4 pt-1 bg-white z-10 text-center flex-none flex items-center justify-center min-h-[60px] sm:min-h-[75px]">
                  <h3 style={{ fontFamily: DISPLAY_FONT }} className="text-[#0e2547] uppercase text-[15px] sm:text-[20px] lg:text-[24px] font-black leading-tight">
                    {item.title.join(" ")}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square w-full bg-white overflow-hidden flex-none border-y border-black/5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain p-2 sm:p-4 group-hover:scale-[1.05] transition-transform duration-700 relative z-0 mix-blend-multiply"
                    loading="lazy"
                  />
                  {/* Mirror Light Glare Effect */}
                  <div className="absolute top-0 left-[-120%] h-full w-[60%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:left-[200%] transition-all duration-[1000ms] ease-in-out pointer-events-none z-10" />
                </div>

                {/* Description */}
                <div className="p-4 sm:p-5 bg-gray-50 flex flex-col flex-1">
                  <p className="text-[12px] sm:text-[14px] font-semibold text-[#0e2547] leading-snug line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* View Product — opens this product's detail panel */}
                <button
                  onClick={() => setActiveItem(item)}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="block w-full text-center bg-[#e5233d] text-white font-bold uppercase tracking-[0.1em] text-[11px] sm:text-[12.5px] py-2.5 sm:py-3 hover:bg-[#c01b32] transition-colors cursor-pointer"
                >
                  View Product
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Global Show More / Show Less Button */}
        {ALL_ITEMS.length > 6 && (
          <Reveal delay={200}>
            <div className="flex justify-center mt-12 sm:mt-16">
              {!showAll ? (
                <button
                  onClick={() => setShowAll(true)}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-[#0c1a2e] cursor-pointer text-white font-bold uppercase tracking-[0.12em] text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-[#e5233d] transition-colors shadow-lg flex items-center gap-3 group"
                >
                  Show More
                  <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowAll(false);
                    setTimeout(() => {
                      document.getElementById('inserts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 10);
                  }}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-[#0c1a2e] cursor-pointer text-white font-bold uppercase tracking-[0.12em] text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-[#e5233d] transition-colors shadow-lg flex items-center gap-3 group"
                >
                  Show Less
                  <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              )}
            </div>
          </Reveal>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg max-w-2xl w-full shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            <div className="flex justify-between items-center px-5 sm:px-6 py-4 border-b border-neutral-200 shrink-0">
              <span style={{ fontFamily: CONDENSED_FONT }} className="text-[#e5233d] text-[11px] font-bold uppercase tracking-[0.12em]">
                Super Cut
              </span>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close"
                className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 text-xl font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            <div
              className="overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="h-52 sm:h-64 w-full bg-neutral-50 flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="max-w-full max-h-full object-contain p-6"
                />
              </div>

              <div className="p-5 sm:p-6 text-center flex flex-col items-center">
                <h3
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="text-[#0e2547] uppercase text-[24px] sm:text-[28px] font-black leading-tight"
                >
                  {activeItem.title.join(" ")}
                </h3>
                <p className="mt-2 max-w-md text-[14.5px] sm:text-[15.5px] text-neutral-700 leading-relaxed">
                  {activeItem.desc}
                </p>

                {activeSpec && (
                  <div className="mt-5 w-full">
                    <h4 style={{ fontFamily: CONDENSED_FONT }} className="text-[12px] font-bold uppercase tracking-[0.12em] text-neutral-500 mb-2 text-center">
                      Dimensions (Inches/mm)
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center border-collapse text-[13px]">
                        <thead>
                          <tr className="border-b border-neutral-300">
                            {activeSpec.rows.some((r) => r.type) && (
                              <th className="py-2 px-3 font-bold text-[#0c1a2e]">Type</th>
                            )}
                            <th className="py-2 px-3 font-bold text-[#0c1a2e]">Part No</th>
                            <th className="py-2 px-3 font-bold text-[#0c1a2e]">Dia./Width</th>
                            <th className="py-2 px-3 font-bold text-[#0c1a2e]">Thick./Height</th>
                            <th className="py-2 px-3 font-bold text-[#0c1a2e]">Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          {activeSpec.rows.map((r) => (
                            <tr key={r.part} className="border-b border-neutral-100">
                              {activeSpec.rows.some((row) => row.type) && (
                                <td className="py-2 px-3 text-neutral-700">{r.type ?? activeSpec.type}</td>
                              )}
                              <td className="py-2 px-3 text-neutral-700">{r.part}</td>
                              <td className="py-2 px-3 text-neutral-700">{r.dia}</td>
                              <td className="py-2 px-3 text-neutral-700">{r.thick}</td>
                              <td className="py-2 px-3 text-neutral-700">{r.len}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/97126788921?text=${encodeURIComponent(
                      `Hello Super Cut, I would like to inquire about ${activeItem.title.join(" ")}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: CONDENSED_FONT }}
                    className="bg-[#e5233d] text-white font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-3 rounded-sm hover:bg-[#c01b32] transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="/images/1212_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: CONDENSED_FONT }}
                    className="border-2 border-[#0c1a2e] text-[#0c1a2e] font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-3 rounded-sm hover:bg-[#0c1a2e] hover:text-white transition-colors"
                  >
                    Full Catalogue (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState } from "react";
import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { PAGES } from "../data/insertsData";

const ALL_ITEMS = PAGES.flatMap(p => p.items);

export default function Inserts() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? ALL_ITEMS : ALL_ITEMS.slice(0, 6);

  return (
    <section id="inserts" className="bg-[#4472b8] text-white py-16 lg:py-24">
      <div className="px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="mb-12 border-b border-white/55 pb-4">
            <h2 style={{ fontFamily: DISPLAY_FONT }} className="text-[clamp(40px,5vw,72px)] font-black uppercase tracking-wide leading-none">
              Featured Inserts
            </h2>
          </div>
        </Reveal>

        {/* 2 columns on mobile (grid-cols-2), 3 columns on tablet/desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {displayedItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 50} variant="scale" className="w-full h-full">
              {/* Card wrapper: rounded-xl, cursor-pointer */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.15)] cursor-pointer group flex flex-col h-full transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300">
                
                {/* Text Top */}
                <div className="p-3 sm:p-5 bg-white z-10 text-center border-b border-gray-100 flex-none flex items-center justify-center min-h-[70px] sm:min-h-[85px]">
                  <h3 style={{ fontFamily: DISPLAY_FONT }} className="text-[#0e2547] uppercase text-[15px] sm:text-[20px] lg:text-[24px] font-black leading-tight">
                    {item.title.join(" ")}
                  </h3>
                </div>

                {/* Image Container */}
                <div className="relative aspect-square w-full bg-white overflow-hidden flex-none">
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
                  className="bg-white cursor-pointer text-[#1a4b9c] font-bold uppercase tracking-[0.12em] text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-3 group"
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
                  className="bg-white cursor-pointer text-[#1a4b9c] font-bold uppercase tracking-[0.12em] text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-3 group"
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
    </section>
  );
}

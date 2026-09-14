import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";

const PAGES = [
  {
    pageNumber: "03",
    items: [
      {
        id: "square-inserts",
        title: ["SQUARE", "INSERTS"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_57_50 PM.webp",
        alt: "Square Inserts",
        desc: "SC006 — 3/8 high-precision square profile for milling & stabilizer dressing.",
        position: "left", // text on left, image on right
      },
      {
        id: "composite-rod",
        title: ["TUNGSTEN", "CARBIDE", "COMPOSITE ROD"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_59_32 PM.webp",
        alt: "Tungsten Carbide Composite Rod",
        desc: "Flux-coated composite rod with crushed carbide for severe wear.",
        position: "right", // text on right, image on left
      },
      {
        id: "star-cut-inserts",
        title: ["STAR CUT", "INSERTS"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_58_39 PM_nobg.png",
        alt: "Star Cut Inserts",
        desc: "SC007–SC010 star geometry — aggressive cutting, high chip evacuation.",
        position: "left", // text on left, image on right
      },
    ],
  },
  {
    pageNumber: "04",
    items: [
      {
        id: "chip-breaker",
        title: ["SC CHIP", "BREAKER"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_52_31 PM.webp",
        alt: "SC Chip Breaker",
        desc: "Ribbed breaker top for controlled chip formation in milling tools.",
        position: "left",
      },
      {
        id: "tricorn-inserts",
        title: ["SC TRICORN", "INSERTS"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_56_58 PM.webp",
        alt: "SC Tricorn Inserts",
        desc: "Triangular insert with concave face — fishing & hole-opener duty.",
        position: "right",
      },
      {
        id: "round-tapered",
        title: ["ROUND TAPERED", "INSERTS"],
        image: "/images/ChatGPT Image Sep 4, 2026, 12_18_06 PM.webp",
        alt: "Round Tapered Inserts",
        desc: "SC001 round tapered — reamers, casing cutters & coring tools.",
        position: "left",
      },
    ],
  },
  {
    pageNumber: "05",
    items: [
      {
        id: "octacut-inserts",
        title: ["SC OCTACUT", "INSERTS"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_53_51 PM.webp",
        alt: "SC Octacut Inserts",
        desc: "SC004 / SC005 octagon tapered — 8-point wear edge for stabilizers.",
        position: "left",
      },
      {
        id: "rectangular-tapered",
        title: ["RECTANGULAR", "TAPERED INSERT"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_52_56 PM.webp",
        alt: "Rectangular Tapered Insert",
        desc: "SC014 / SC015 brick pattern — screw feeders & sand mixers.",
        position: "right",
      },
      {
        id: "pdc-inserts",
        title: ["PDC", "INSERTS"],
        image: "/images/ChatGPT Image Sep 3, 2026, 02_55_57 PM.webp",
        alt: "PDC Inserts",
        desc: "PDC cutters with premium diamond table for drilling performance.",
        position: "left",
      },
    ],
  },
];

function ProductRow({ item, index }) {
  const isTextLeft = item.position === "left";

  return (
    <div>
      {index !== 0 && <div className="h-px bg-white/55 my-10 lg:my-14 opacity-70" />}

      <div
        className={`grid gap-6 lg:gap-8 items-center py-2 ${isTextLeft
            ? "lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px]"
            : "lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr]"
          }`}
      >
        {/* TEXT ON LEFT, IMAGE ON RIGHT */}
        {isTextLeft ? (
          <>
            {/* Left Column: Enlarged Headline + Fade Bar */}
            <Reveal
              variant="fade-right"
              className="flex justify-center lg:justify-end items-center order-1 w-full"
            >
              <div className="inline-flex items-stretch">
                <h3
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="uppercase text-white text-[clamp(44px,5.8vw,90px)] text-right leading-[1.08] font-black tracking-[0.06em] select-none space-y-1.5 sm:space-y-2.5"
                >
                  {item.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <div
                  className="w-[45px] sm:w-[60px] lg:w-[75px] ml-3 sm:ml-4 shrink-0 bg-gradient-to-r from-white via-white/85 to-transparent rounded-[1px] self-stretch my-1"
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Right Column: Card with image + caption (Aligned to the right px margin) */}
            <Reveal
              variant="scale"
              delay={120}
              className="flex justify-center lg:justify-end items-center order-2 w-full"
            >
              <div className="bg-white overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.28)] max-w-[480px] xl:max-w-[520px] w-full rounded-xs">
                <div className="aspect-square w-full bg-white overflow-hidden relative group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 relative z-0"
                    loading="lazy"
                  />
                  {/* Mirror Light Glare Effect */}
                  <div className="absolute top-0 left-[-120%] h-full w-[60%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:left-[200%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-10 mix-blend-overlay" />
                </div>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#0e2547] px-5 py-3.5 bg-white border-t border-neutral-100 leading-snug">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          </>
        ) : (
          /* TEXT ON RIGHT, IMAGE ON LEFT */
          <>
            {/* Left Column: Card with image + caption (Aligned to the left px margin) */}
            <Reveal
              variant="scale"
              delay={120}
              className="flex justify-center lg:justify-start items-center order-2 lg:order-1 w-full"
            >
              <div className="bg-white overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.28)] max-w-[480px] xl:max-w-[520px] w-full rounded-xs">
                <div className="aspect-square w-full bg-white overflow-hidden relative group cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 relative z-0"
                    loading="lazy"
                  />
                  {/* Mirror Light Glare Effect */}
                  <div className="absolute top-0 left-[-120%] h-full w-[60%] -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:left-[200%] transition-all duration-[1200ms] ease-in-out pointer-events-none z-10 mix-blend-overlay" />
                </div>
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#0e2547] px-5 py-3.5 bg-white border-t border-neutral-100 leading-snug">
                  {item.desc}
                </p>
              </div>
            </Reveal>

            {/* Right Column: Fade Bar + Enlarged Headline */}
            <Reveal
              variant="fade-left"
              className="flex justify-center lg:justify-start items-center order-1 lg:order-2 w-full"
            >
              <div className="inline-flex items-stretch">
                <div
                  className="w-[45px] sm:w-[60px] lg:w-[75px] mr-3 sm:mr-4 shrink-0 bg-gradient-to-l from-white via-white/85 to-transparent rounded-[1px] self-stretch my-1"
                  aria-hidden="true"
                />
                <h3
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="uppercase text-white text-[clamp(46px,5.8vw,92px)] text-left leading-[1.08] font-black tracking-[0.06em] select-none space-y-1.5 sm:space-y-2.5"
                >
                  {item.title.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
              </div>
            </Reveal>
          </>
        )}
      </div>
    </div>
  );
}

export default function Inserts() {
  return (
    <section id="inserts" className="bg-[#4472b8] text-white py-12 lg:py-16">
      <div className="px-10">
        {PAGES.map((page, pIdx) => (
          <div key={page.pageNumber} className={pIdx > 0 ? "mt-16 lg:mt-24" : ""}>
            {/* Top Page Divider with Page Number */}
            <div className="w-full border-b border-white/55 pb-2 mb-8 sm:mb-12 flex justify-end items-end">
              <span
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-2xl sm:text-3xl font-bold tracking-wider text-white/95 select-none"
              >
                {page.pageNumber}
              </span>
            </div>

            {/* Product Rows */}
            <div className="space-y-4">
              {page.items.map((item, idx) => (
                <ProductRow key={item.id} item={item} index={idx} />
              ))}
            </div>

            {/* Bottom Page Line */}
            <div className="border-t border-white/50 mt-12 lg:mt-16" />
          </div>
        ))}
      </div>
    </section>
  );
}

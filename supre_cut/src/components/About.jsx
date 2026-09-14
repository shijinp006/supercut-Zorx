import { useState } from "react";
import Reveal, { CONDENSED_FONT } from "./Reveal";

const OFFERINGS_LEFT = [
  "Tungsten Carbide Composite Rods",
  "Special Carbide Composite Rods (Insert-Embedded & Sintered)",
  "We provide customized alloy formulas, particle distributions, and rod dimensions to meet specific operational demands.",
  "Flexible Hardfacing Ropes (HF5000)",
];

const OFFERINGS_RIGHT = [
  "Tungsten Carbide Insert (TCI)",
  "Nickel Silver Tinning Rods and other Brazing alloys",
  "Our technical sales engineering team is ready to assist you in selecting the ideal hardfacing solution.",
];

export default function About() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="about" className="bg-white py-12 lg:py-16 text-neutral-900">
      <div className="px-10">
        {/* Top Page Number & Line */}
        <div className="w-full border-b border-neutral-300 pb-2 mb-8 sm:mb-10 flex justify-end items-end">
          <span
            style={{ fontFamily: CONDENSED_FONT }}
            className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-800 select-none"
          >
            02
          </span>
        </div>

        {/* Top Section: About Box (Left) + Lead Paragraph (Right) */}
        <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[440px_1fr] gap-6 lg:gap-10 items-center mb-7 sm:mb-8">
          {/* About Us Box */}
          <Reveal variant="fade-right">
            <div className="border border-neutral-800 p-6 sm:p-8 bg-white shadow-xs">
              <div className="flex items-stretch gap-4">
                <div className="w-[4px] bg-[#0c2340] rounded-xs shrink-0 self-stretch my-1" />
                <div>
                  <h2
                    style={{ fontFamily: CONDENSED_FONT }}
                    className="uppercase text-[46px] sm:text-[58px] lg:text-[64px] font-black leading-[0.88] tracking-tight"
                  >
                    <span className="text-[#0c1f38]">ABOUT</span>{" "}
                    <span className="text-[#1a56a6]">US</span>
                  </h2>
                  <p className="mt-3 text-[15px] sm:text-[16px] text-[#0c1f38] leading-tight">
                    <strong className="font-black text-[#0c1f38]">SUPER CUT</strong>{" "}
                    <span className="font-medium text-neutral-600">Hardface Solutions</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Lead Description */}
          <Reveal delay={100} variant="fade-left">
            <p className="text-[16px] sm:text-[17.5px] lg:text-[18.5px] leading-[1.65] text-neutral-800">
              <strong className="font-bold text-neutral-950">
                At SUPER CUT Hardface Solutions,
              </strong>{" "}
              we specialize in providing high-performance milling and hardfacing
              materials engineered to extend component lifespan, enhance operational
              efficiency, and reduce downtime across demanding industrial applications.
              Backed by years of field expertise and rigorous quality control, we
              deliver specialized wear solutions tailored to global industrial
              standards.
            </p>
          </Reveal>
        </div>

        {/* Global Presence Full Width Text */}
        <Reveal delay={150} className="mb-8">
          <p className="text-[16px] sm:text-[17.5px] lg:text-[18.5px] leading-[1.65] text-neutral-800">
            With an established presence across key markets in the UAE, UK, and USA, our
            global network allows us to serve clients efficiently with expert technical
            assistance and rapid deployment.
          </p>
        </Reveal>

        {/* Core Product Offerings */}
        <div className="mb-12">
          <Reveal delay={200}>
            <h3 className="font-extrabold text-[21px] sm:text-[23px] text-[#0c1f38] mb-4">
              Our Core Product Offerings:
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-3">
            {/* Left Column Offerings */}
            <Reveal delay={250}>
              <ul className="space-y-3 text-[15.5px] sm:text-[17px] leading-[1.5] text-neutral-800">
                {OFFERINGS_LEFT.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-xl leading-none font-bold text-neutral-900 select-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Right Column Offerings */}
            <Reveal delay={300}>
              <ul className="space-y-3 text-[15.5px] sm:text-[17px] leading-[1.5] text-neutral-800">
                {OFFERINGS_RIGHT.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-xl leading-none font-bold text-neutral-900 select-none mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Certificates Section (Matching brochure bottom layout) */}
        <div className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Certificate 1: Registration Certificate */}
            <div className="md:col-span-4">
              <Reveal
                delay={200}
                className="h-full bg-white border border-neutral-300 rounded-sm p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center cursor-pointer group"
              >
                <div
                  onClick={() => setActiveCert({ src: "/images/SUPER_CUT_QMS_Certificate.webp", title: "Registration Certificate - ISO 9001:2015" })}
                  className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/images/SUPER_CUT_QMS_Certificate.webp"
                    alt="Registration Certificate - ISO 9001:2015 Quality Management Systems"
                    className="w-full max-h-[340px] sm:max-h-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs font-semibold text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Certificate 2: Quality Policy Statement */}
            <div className="md:col-span-4">
              <Reveal
                delay={250}
                className="h-full bg-white border border-neutral-300 rounded-sm p-3 sm:p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center cursor-pointer group"
              >
                <div
                  onClick={() => setActiveCert({ src: "/images/Quality_Policy_Statement.webp", title: "Quality Policy Statement - SUPER CUT TRADING-L.L.C-S.P.C" })}
                  className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/images/Quality_Policy_Statement.webp"
                    alt="Quality Policy Statement"
                    className="w-full max-h-[340px] sm:max-h-[380px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs font-semibold text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Certificate 3 & 4: Stacked Badges */}
            <div className="md:col-span-4 flex flex-col gap-4 sm:gap-5 justify-between">
              {/* ISO 9001:2015 Certified Badge */}
              <Reveal
                delay={300}
                className="flex-1 bg-white border border-neutral-300 rounded-sm p-3 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center cursor-pointer group"
              >
                <div
                  onClick={() => setActiveCert({ src: "/images/Royal UAF Logo QMS.JPG.webp", title: "ISO 9001 : 2015 Certified" })}
                  className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/images/Royal UAF Logo QMS.JPG.webp"
                    alt="ISO 9001 : 2015 Certified - UAF & RICL"
                    className="w-full max-h-[160px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="mt-1 text-xs font-semibold text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </Reveal>

              {/* United Accreditation Foundation Badge */}
              <Reveal
                delay={350}
                className="flex-1 bg-white border border-neutral-300 rounded-sm p-3 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center items-center cursor-pointer group"
              >
                <div
                  onClick={() => setActiveCert({ src: "/images/RICL UAF Logo.jpg.webp", title: "United Accreditation Foundation" })}
                  className="w-full h-full flex flex-col items-center justify-center overflow-hidden"
                >
                  <img
                    src="/images/RICL UAF Logo.jpg.webp"
                    alt="United Accreditation Foundation - USA"
                    className="w-full max-h-[160px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <span className="mt-1 text-xs font-semibold text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to enlarge
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Page Line */}
        <div className="border-t border-neutral-300 mt-14 pt-2" />
      </div>

      {/* Lightbox Modal for Certificate Preview */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg max-w-3xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center pb-3 border-b border-neutral-200 mb-4">
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                {activeCert.title}
              </h4>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label="Close"
                className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 text-xl font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="overflow-auto w-full flex justify-center py-2">
              <img
                src={activeCert.src}
                alt={activeCert.title}
                className="max-h-[75vh] w-auto object-contain rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

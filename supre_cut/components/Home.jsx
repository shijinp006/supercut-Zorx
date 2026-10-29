"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { CONDENSED_FONT, GROTESK_FONT } from "./fonts";

export function Home() {
  return (
    <section className="relative bg-[#0b1f4b] overflow-hidden">
      <style>{`@keyframes sc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20">
        {/* Modern full-bleed image hero card: dramatic photo, dark gradient, overlaid copy */}
        <Reveal>
          <div className="relative w-full min-h-[520px] sm:min-h-[620px] lg:min-h-[680px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <img
              src="/images/Compositer.jpeg"
              alt="Super Cut tungsten carbide composite rod — precision metalworking"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081a40] via-[#081a40]/70 to-[#081a40]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#081a40]/80 via-transparent to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
              <p
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-white/85 font-semibold tracking-[0.14em] sm:tracking-[0.22em] text-[11px] sm:text-[13px] mb-4 sm:mb-5"
              >
                ● ABU DHABI • UK • USA — GLOBAL SUPPLY
              </p>

              <h1
                style={{ fontFamily: GROTESK_FONT }}
                className="max-w-3xl text-[40px] min-[390px]:text-[44px] sm:text-[60px] md:text-[72px] lg:text-[80px] leading-[1.04] tracking-tight text-white font-semibold"
              >
                Premium milling.<br />
                Built to resist wear.
              </h1>

              <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/75 font-normal leading-relaxed">
                Engineered performance for high-abrasion &amp; impact applications — hardfacing, precision milling &amp; wear-resistant tooling tolerance up to 0.01 mm.
              </p>

              <div className="mt-8 flex items-center gap-3 sm:gap-4 flex-nowrap">
                <Link
                  href="/products"
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-white text-[#0b1f4b] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-[#dbe4f3] transition-colors shadow-lg shrink-0 whitespace-nowrap"
                >
                  Explore Products
                </Link>
                <Link
                  href="/about"
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="border-2 border-white/60 text-white font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white hover:text-[#0b1f4b] transition-colors shrink-0 whitespace-nowrap"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="bg-white text-[#0b1f4b] overflow-hidden py-3 border-t border-white/10">
        <div className="flex whitespace-nowrap w-max" style={{ animation: "sc-marquee 28s linear infinite" }}>
          {[0, 1].map((k) => (
            <span key={k} style={{ fontFamily: CONDENSED_FONT }} className="uppercase tracking-[0.2em] text-[13px] pr-8">
              Tungsten Carbide Composite Rods &nbsp; • &nbsp; Star Cut Inserts &nbsp; • &nbsp; SC Octacut &nbsp; • &nbsp; PDC Inserts &nbsp; • &nbsp; HF-5000 Flexible Rope &nbsp; • &nbsp; Nickel Silver Tinning Rods &nbsp; • &nbsp; ISO 9001:2015 &nbsp; • &nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

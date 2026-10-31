"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { CONDENSED_FONT, GROTESK_FONT } from "./fonts";

export function Home() {
  return (
    <section className="relative bg-[#0b1f4b] overflow-hidden">
      <style>{`@keyframes sc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="relative px-4 sm:px-8 md:px-12 lg:px-20 pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20">
        {/* Face-mill photo (Unsplash License) faded into the navy on the text side */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img src="/images/hero-face-mill.webp" alt="" fetchPriority="high" className="absolute inset-y-0 right-0 w-full md:w-[70%] h-full object-cover object-center md:[mask-image:linear-gradient(to_right,transparent,black_45%)]" />
          <div className="absolute inset-0 bg-[#0b1f4b]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#0b1f4b] md:via-[#0b1f4b]/80 md:to-[#0b1f4b]/40" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1f4b] to-transparent" />
        </div>

        <Reveal>
          <div className="relative w-full">
            <div className="relative flex flex-col py-10 sm:py-16 lg:py-20">
              <h1
                style={{ fontFamily: GROTESK_FONT }}
                className="max-w-5xl text-[46px] min-[390px]:text-[52px] sm:text-[72px] md:text-[86px] lg:text-[100px] leading-[1.02] tracking-tight text-white font-bold"
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

"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { ContactLink } from "./ContactLink";
import { CONDENSED_FONT, GROTESK_FONT } from "./fonts";
import { cldImage } from "../lib/cloudinaryUrl";

// Floating product tiles in the hero. Positions/sizes are % of a square box so the collage scales with the screen.
const TILES = [
  { id: "star-cut-inserts", alt: "Star cut inserts", box: "left-[13%] top-[4%] w-[20%] aspect-square", glow: "bg-[#5fa8ff]", float: "6s", delay: "-1s" },
  { id: "octacut-inserts", alt: "SC Octacut inserts", box: "left-[56%] top-[6%] w-[44%] aspect-[3/2]", glow: "bg-[#ff8a4c]", float: "8s", delay: "-2s" },
  { id: "composite-rod", alt: "Tungsten carbide composite rods", box: "left-0 top-[25%] w-[60%] aspect-[10/9]", glow: "bg-[#7cc4ff]", float: "7s", delay: "0s" },
  { id: "tricorn-inserts", alt: "SC Tricorn inserts", box: "left-[61%] top-[69%] w-[31%] aspect-square", glow: "bg-[#4fd1e8]", float: "9s", delay: "-3s" },
];

const CONTACTS = [
  // Opens Gmail compose in the browser (new tab) instead of the computer's default mail app
  { label: "sales@supercutglobal.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=sales@supercutglobal.com", icon: "M3 6h18v12H3z M3 7l9 6 9-6" },
  { label: "Abu Dhabi, United Arab Emirates", icon: "M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" },
];

export function Home() {
  return (
    <section className="relative overflow-hidden">
      <style>{`@keyframes sc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      <div className="relative bg-[#0b1f4b] px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <Reveal>
            <div className="text-center lg:text-left">
              <h1
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-white font-bold uppercase leading-[1.02] tracking-[0.01em] text-[36px] min-[390px]:text-[40px] sm:text-[56px] md:text-[62px] lg:text-[52px] xl:text-[64px] 2xl:text-[76px]"
              >
                Premium milling, hardface
                <br className="hidden sm:block" /> &amp; wear-resistant alloys
              </h1>

              <p style={{ fontFamily: GROTESK_FONT }} className="mt-4 sm:mt-5 text-white/75 text-[17px] sm:text-[20px] lg:text-[22px] font-medium leading-snug">
                Engineered performance for high-abrasion
                <br className="hidden sm:block" /> &amp; impact applications
              </p>

              <div className="mt-7 sm:mt-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/products"
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-white text-[#0b1f4b] font-semibold uppercase tracking-[0.12em] text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-[#dbe4f3] transition-colors shadow-lg whitespace-nowrap"
                >
                  Explore Products
                </Link>
                <ContactLink
                  
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="border-2 border-white/60 text-white font-semibold uppercase tracking-[0.12em] text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white hover:text-[#0b1f4b] transition-colors whitespace-nowrap"
                >
                  Get a Quote
                </ContactLink>
              </div>

              <ul style={{ fontFamily: GROTESK_FONT }} className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[14px] sm:text-[15px] text-white/85 w-fit max-w-full mx-auto lg:mx-0 text-left">
                {CONTACTS.map((c) => {
                  const body = (
                    <>
                      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={c.icon} />
                      </svg>
                      <span className="truncate">{c.label}</span>
                    </>
                  );
                  return (
                    <li key={c.label} className="min-w-0">
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:underline underline-offset-4">{body}</a>
                      ) : (
                        <span className="flex items-center gap-2.5">{body}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Floating product tiles, each with a soft colour glow behind it */}
          <Reveal variant="zoom-in" delay={150}>
            <div className="relative w-full max-w-[520px] mx-auto aspect-[233/268]">
              {TILES.map((t) => (
                <Link
                  key={t.id}
                  href="/products"
                  aria-label={t.alt}
                  className={`group absolute ${t.box} motion-safe:animate-[hero-tile-float_var(--float)_ease-in-out_infinite]`}
                  style={{ "--float": t.float, animationDelay: t.delay }}
                >
                  <span aria-hidden="true" className={`absolute inset-[6%] rounded-3xl ${t.glow} opacity-60 blur-2xl transition-opacity group-hover:opacity-90`} />
                  <img
                    src={cldImage(`supercut/products/${t.id}`, 600)}
                    alt={t.alt}
                    loading="lazy"
                    className="relative w-full h-full object-cover rounded-2xl bg-white ring-1 ring-white/20 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bg-[#f8f4ea] text-[#0b1f4b] overflow-hidden py-3">
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

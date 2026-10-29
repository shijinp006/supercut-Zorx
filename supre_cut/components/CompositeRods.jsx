"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import { DISPLAY_FONT } from "./fonts";
import { IMAGES } from "../data/catalogueData";

const FEATURES = [
  { title: "Matrix Integrity", text: "Formulated with high-tensile brazing alloys for optimum chip retention." },
  { title: "High Performance", text: "Made with specially processed, crushed tungsten carbide to ensure consistent strength and quality." },
  { title: "Maximum Durability", text: "Uses sharp, intact carbide particles to resist extreme wear and improve milling efficiency." },
];

// Shown in order while the section is pinned; each slides down to reveal the next
const SLIDES = [
  { src: IMAGES.rodPodium, alt: "Super Cut tungsten carbide composite rods", fit: "object-cover" },
  { src: IMAGES.rodClose, alt: "Close-up of crushed tungsten carbide in brazing matrix", fit: "object-cover" },
  { src: "/images/ChatGPT Image Sep 4 2026 12_35_16 PM.webp", alt: "Star cut composite rods", fit: "object-contain p-6" },
];

const NAV_HEIGHT = 64;

export function CompositeRods() {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      let progress = 0;
      if (desktop.matches) {
        const scrollable = section.offsetHeight - (window.innerHeight - NAV_HEIGHT);
        const scrolled = NAV_HEIGHT - section.getBoundingClientRect().top;
        progress = Math.min(Math.max(scrolled / scrollable, 0), 1) * (SLIDES.length - 1);
      }
      slideRefs.current.forEach((el, i) => {
        if (!el) return;
        // Ease each hand-off into the middle of its scroll segment so slides rest between transitions
        const t = Math.min(Math.max((progress - i) * 1.5 - 0.25, 0), 1);
        el.style.transform = `translateY(${t * 100}%)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} data-slides="composite" className="relative bg-[#0f0f0f] text-white lg:h-[300vh]">
      <div className="py-16 lg:py-0 lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] flex items-center">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-20 items-center">
          <div>
            <Reveal>
              <h1
                style={{ fontFamily: DISPLAY_FONT }}
                className="text-[clamp(44px,6.2vw,88px)] font-black uppercase leading-[1.04] tracking-[0.02em]"
              >
                <span className="block text-white">Tungsten Carbide</span>
                <span className="block text-[#e5233d] mt-1.5 sm:mt-3">Composite Rods</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-8 text-[17px] sm:text-[18.5px] leading-[1.65] text-white/80">
                <strong className="font-bold text-white">SUPER CUT</strong> Composite Rods combine high-grade tungsten carbide crushed chips embedded in a tough, high-tensile brazing matrix. Designed for severe wear, milling and cutting operations, these rods deliver maximum abrasion resistance and cutting speed.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 70}>
                  <div className="border-l-2 border-[#e5233d] pl-4">
                    <h3 className="font-bold text-white text-[18px] sm:text-[19px] leading-tight">{f.title}</h3>
                    <p className="text-white/75 text-[16px] sm:text-[17px] leading-relaxed mt-1">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="scale">
            <div className="relative w-full max-w-[340px] mx-auto aspect-[3/5] rounded-2xl overflow-hidden bg-white">
              {SLIDES.map((slide, i) => (
                <img
                  key={slide.src}
                  ref={(el) => (slideRefs.current[i] = el)}
                  src={slide.src}
                  alt={slide.alt}
                  style={{ zIndex: SLIDES.length - i }}
                  className={`absolute inset-0 w-full h-full bg-white ${slide.fit} will-change-transform`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { IMAGES } from "../data/catalogueData";
import { HOME_PRODUCTS } from "../data/homeData";

function GlobeRotator() {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, startAngle: 0 });
  const animFrameRef = useRef(null);

  const products = HOME_PRODUCTS;

  const total = products.length;
  const step = (Math.PI * 2) / total;

  // Continuous 360-degree rotation animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!dragRef.current.isDown && !isHovered) {
        // Continuous smooth rotation: ~16 seconds per full revolution
        setAngle((prev) => (prev + delta * 0.4) % (Math.PI * 2));
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isHovered]);

  // Pointer drag to spin manually
  const handlePointerDown = (e) => {
    dragRef.current = {
      isDown: true,
      startX: e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0,
      startAngle: angle,
    };
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDown) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0;
    const diff = clientX - dragRef.current.startX;
    setAngle((dragRef.current.startAngle + diff * 0.008 + Math.PI * 2) % (Math.PI * 2));
  };

  const handlePointerUp = () => {
    dragRef.current.isDown = false;
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        dragRef.current.isDown = false;
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full select-none cursor-grab active:cursor-grabbing flex items-center justify-center bg-transparent [--orbit-x:30px] sm:[--orbit-x:100px] lg:[--orbit-x:150px] [--orbit-z:20px] sm:[--orbit-z:80px] lg:[--orbit-z:110px]"
      style={{
        aspectRatio: "16/11",
        minHeight: "380px",
        perspective: "1100px",
      }}
    >
      {/* Continuous 3D Orbital Stream Stage */}
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {products.map((item, idx) => {
          const itemAngle = angle + idx * step;

          // Use Math functions to determine multipliers and normalize depth
          const xMultiplier = Math.sin(itemAngle);
          const zMultiplier = Math.cos(itemAngle);

          // Depth normalization: cos goes from -1 to 1 -> normalize to 0 to 1
          const normZ = (zMultiplier + 1) / 2;

          const scale = 0.68 + 0.38 * normZ;
          const opacity = Math.max(0.06, Math.pow(normZ, 1.8));
          const bankY = -xMultiplier * 14;
          const zIndex = Math.round(normZ * 100);

          return (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2"
              style={{ zIndex, transformStyle: "preserve-3d" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  transform: `translate(-50%, -50%) translateX(calc(${xMultiplier} * var(--orbit-x))) translateZ(calc(${zMultiplier} * var(--orbit-z))) rotateY(${bankY}deg) scale(${scale})`,
                  opacity,
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className={`${item.heightClass} w-auto max-w-[220px] min-[400px]:max-w-[280px] sm:max-w-[380px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]`}
                  style={{ WebkitBoxReflect: "below -10px linear-gradient(transparent, transparent 60%, rgba(255,255,255,0.3))" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default function Home() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.5 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative bg-white pt-[72px] overflow-hidden">
      <style>{`@keyframes sc-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      <div className="px-4 sm:px-6 md:px-10">
        <div className="flex justify-end pt-4 sm:pt-6">
          <Reveal variant="scale" className="text-right">
            <div className="inline-flex flex-col items-end">
              <img
                src="/images/supercut_logo_stacked.webp"
                alt="SUPER CUT Hardface Solutions"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center pb-16 sm:pb-24 md:pb-28 pt-2 sm:pt-4">
          <div>
            <Reveal>
              <p
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-[#1a4b9c] font-semibold tracking-[0.14em] sm:tracking-[0.22em] text-[11px] sm:text-[13px] mb-4 whitespace-nowrap"
              >
                ● ABU DHABI • UK • USA — GLOBAL SUPPLY
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                style={{ fontFamily: DISPLAY_FONT }}
                className="text-[34px] min-[390px]:text-[38px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.12] sm:leading-[1.0] tracking-[0.04em] sm:tracking-[0.05em] uppercase text-[#0e2547] font-black"
              >
                <span className="block mb-2 sm:mb-1">PREMIUM MILLING,</span>
                <span className="block mb-2 sm:mb-1">HARDFACE</span>
                <span className="block mb-2 sm:mb-1">&amp; WEAR-RESISTANT</span>
                <span className="block">ALLOYS</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-base sm:text-lg text-neutral-700 max-w-xl font-normal leading-relaxed">
                Engineered Performance For High-Abrasion &amp; Impact Applications
              </p>
              <div className="mt-8 flex items-center gap-3 sm:gap-4 flex-nowrap">
                <button
                  onClick={() => scrollTo("#inserts")}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-[#1a4b9c] text-white font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3 rounded-sm hover:bg-[#0e2547] transition-colors shadow-sm shrink-0 whitespace-nowrap"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => scrollTo("#about")}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="border-2 border-[#0e2547] text-[#0e2547] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3 rounded-sm hover:bg-[#0e2547] hover:text-white transition-colors shrink-0 whitespace-nowrap"
                >
                  About Us — 02
                </button>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-[#0e2547]">
                <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-[#1a4b9c] inline-block" /> Tungsten Carbide Composite Rods</span>
                <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-[#1a4b9c] inline-block" /> TCI Inserts • HF-5000 Rope • Brazing Alloys</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} variant="scale" className="relative">
            <GlobeRotator className="mb-[-20px]" />
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.35fr] gap-3 sm:gap-4">
              <div className="rounded-xl overflow-hidden bg-white border border-black/10 p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 shadow-sm">
                <img src={IMAGES.buckets} alt="Super Cut packaging" className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 object-cover rounded-lg" />
                <p className="text-[12px] sm:text-[11px] xl:text-[12px] font-bold leading-snug text-[#0e2547]">
                  FACTORY SEALED<br />SUPER CUT<br />PACKAGING
                </p>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0e2547] text-white p-3 sm:p-3.5 flex items-center gap-3 sm:gap-3.5 shadow-sm">
                <img src={IMAGES.rodPodium} alt="Composite rods" className="w-16 sm:w-20 h-14 sm:h-16 shrink-0 object-cover rounded-lg" />
                <p className="text-[12px] sm:text-[11px] xl:text-[12px] font-semibold leading-snug">
                  SC-Cr-70 / SC-Cr-60<br />BARE OR FLUX-COATED<br /><span className="text-[#8ab4e8]">10 MESH – 3/8 GRIT</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="px-10 py-5 grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <div className="text-[15px] font-medium text-[#0e2547] leading-tight">
            sales@supercutglobal.com<br />www.supercutglobal.com
          </div>
          <div className="hidden md:block w-px h-12 bg-[#0e2547]/70 mx-6" />
          <div className="md:text-right text-[14px] leading-tight font-bold text-[#0e2547]">
            ABU DHABI<br />UNITED ARAB EMIRATES
            <span className="block font-medium mt-1">◉ +971 2 678 8921 &nbsp; ▤ +971 2 678 8921</span>
          </div>
        </div>
      </div>

      <div className="bg-[#0e2547] text-white overflow-hidden py-3">
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
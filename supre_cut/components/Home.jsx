"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { CONDENSED_FONT, GROTESK_FONT } from "./fonts";
import { IMAGES } from "../data/catalogueData";
import { HOME_PRODUCTS } from "../data/homeData";

function GlobeRotator() {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragRef = useRef({ isDown: false, startX: 0, startAngle: 0 });
  const animFrameRef = useRef(null);
  const isMobileRef = useRef(typeof window !== "undefined" ? window.innerWidth < 768 : false);

  const products = HOME_PRODUCTS;

  const total = products.length;
  const step = (Math.PI * 2) / total;

  useEffect(() => {
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 768;
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Continuous 360-degree rotation animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!dragRef.current.isDown && !isHovered) {
        // Faster rotation on mobile (~8s per rev) vs desktop (~16s per rev)
        const speed = isMobileRef.current ? 0.78 : 0.4;
        setAngle((prev) => (prev + delta * speed) % (Math.PI * 2));
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
      className="relative w-full select-none cursor-grab active:cursor-grabbing flex items-center justify-center bg-transparent [--orbit-x:90px] min-[400px]:[--orbit-x:110px] sm:[--orbit-x:130px] lg:[--orbit-x:160px] [--orbit-z:55px] min-[400px]:[--orbit-z:70px] sm:[--orbit-z:90px] lg:[--orbit-z:110px]"
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
                  className={`${item.heightClass} w-auto max-w-[170px] min-[400px]:max-w-[230px] sm:max-w-[380px] object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.55)]`}
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


export function Home() {
  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14">
              <p
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-[#e5233d] font-semibold tracking-[0.14em] sm:tracking-[0.22em] text-[11px] sm:text-[13px] mb-4 sm:mb-5"
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
                  className="bg-[#e5233d] text-white font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#c01b32] transition-colors shadow-lg shrink-0 whitespace-nowrap"
                >
                  Explore Products
                </Link>
                <Link
                  href="/about"
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="border-2 border-white/60 text-white font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em] text-xs sm:text-sm px-5 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white hover:text-[#0f0f0f] transition-colors shrink-0 whitespace-nowrap"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Product carousel + highlight cards — modern rounded "glimpse" strip under the hero */}
        <Reveal delay={150} variant="scale" className="relative mt-10 sm:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">
            <GlobeRotator />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden bg-white p-4 flex items-center gap-3.5 shadow-lg">
                <img src={IMAGES.buckets} alt="Super Cut packaging" className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 object-cover rounded-xl" />
                <p className="text-[12px] sm:text-[12.5px] font-bold leading-snug text-[#0e2547]">
                  FACTORY SEALED<br />SUPER CUT<br />PACKAGING
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden bg-[#e5233d] text-white p-4 flex items-center gap-3.5 shadow-lg">
                <img src={IMAGES.rodPodium} alt="Composite rods" className="w-16 sm:w-20 h-14 sm:h-16 shrink-0 object-cover rounded-xl" />
                <p className="text-[12px] sm:text-[12.5px] font-semibold leading-snug">
                  SC-Cr-70 / SC-Cr-60<br />BARE OR FLUX-COATED<br /><span className="text-white/80">10 MESH – 3/8 GRIT</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-white/85">
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-[#e5233d] inline-block rounded-full" /> Tungsten Carbide Composite Rods</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 bg-[#e5233d] inline-block rounded-full" /> TCI Inserts • HF-5000 Rope • Brazing Alloys</span>
          </div>
        </Reveal>
      </div>

      <div className="bg-[#e5233d] text-white overflow-hidden py-3 border-t border-white/10">
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

import { useState, useEffect } from "react";
import Reveal, { CONDENSED_FONT } from "./Reveal";
import { OFFICES } from "../data/contactData";

export function Contact() {
  const [activeOffice, setActiveOffice] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [inContactView, setInContactView] = useState(false);



  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show sticky action buttons only when contact section is in viewport
  useEffect(() => {
    const contactEl = document.getElementById("contact");
    if (!contactEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInContactView(entry.isIntersecting);
      },
      { root: null, rootMargin: "-60px 0px -60px 0px", threshold: 0 }
    );
    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-white scroll-mt-20 pt-6 sm:pt-8 md:pt-10 border-t border-black/10 overflow-hidden">
      {/* Top Left: Stacked SUPER CUT Logo */}
      <div className="px-4 sm:px-6 md:px-10">
        <Reveal>
          <div className="mb-1 sm:mb-2">
            <img
              src="/images/supercut_logo_stacked.webp"
              alt="SUPER CUT Hardface Solutions"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain block"
            />
          </div>
        </Reveal>
      </div>

      {/* Center: Full-Width World Map with transparent background, static upright orientation, and 3 icons in mobile view */}
      <Reveal delay={60}>
        <div className="relative w-full mb-4 sm:mb-6 md:mb-8 select-none">
          <style>{`
            @keyframes map-sonar-ping-mobile {
              0% {
                transform: translate(-50%, -50%) scale(0.2);
                opacity: 0.9;
              }
              60% {
                opacity: 0.4;
              }
              100% {
                transform: translate(-50%, -50%) scale(2.0);
                opacity: 0;
              }
            }
            @keyframes map-sonar-ping-desktop {
              0% {
                transform: translate(-50%, -50%) scale(0.2);
                opacity: 0.9;
              }
              60% {
                opacity: 0.5;
              }
              100% {
                transform: translate(-50%, -50%) scale(3.8);
                opacity: 0;
              }
            }
            @keyframes map-pin-float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-4px);
              }
            }
            @keyframes map-stream-flow {
              0% {
                stroke-dashoffset: 850;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          {/* Static Upright Earth Container */}
          <div className="relative w-full">
            {/* 
              Transparent Background World Map, Edge-to-Edge w-full
            */}
            <img
              src="/images/global_network_map.png"
              alt="Super Cut Global Presence Map"
              className="w-full h-auto object-contain block pointer-events-none"
            />

            {/* Clean Red Flowing Connecting Stream across hubs inside the continents */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flowGradRed" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e5233d" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#e5233d" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#e5233d" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Responsive Connecting Guide Arc */}
              <path
                d={
                  isMobile
                    ? "M 200 215 Q 500 150 800 230"
                    : "M 180 200 Q 245 215 310 215 Q 375 165 440 150 Q 505 140 570 160 Q 635 195 700 230 Q 765 265 830 285"
                }
                fill="none"
                stroke="#e5233d"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                strokeOpacity="0.3"
              />
              {/* Flowing Animated Stream */}
              <path
                d={
                  isMobile
                    ? "M 200 215 Q 500 150 800 230"
                    : "M 180 200 Q 245 215 310 215 Q 375 165 440 150 Q 505 140 570 160 Q 635 195 700 230 Q 765 265 830 285"
                }
                fill="none"
                stroke="url(#flowGradRed)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="65 785"
                style={{ animation: "map-stream-flow 4.2s linear infinite" }}
              />
            </svg>

            {/* Red Teardrop Location Icons: ONLY 3 ICONS in mobile view (USA, UK, MENA), all 6 in desktop view */}
            {OFFICES.map((office) => {
              const isHovered = activeOffice === office.id;
              const isLeftEdge = office.id === "usa" || office.id === "usa-west";
              const isRightEdge = office.id === "mena" || office.id === "apac";

              const leftPos = isMobile && office.mobileLeft ? office.mobileLeft : office.left;
              const topPos = isMobile && office.mobileTop ? office.mobileTop : office.top;

              return (
                <div
                  key={office.id}
                  style={{
                    left: leftPos,
                    top: topPos,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-full z-10 cursor-pointer group ${office.mobileHidden ? "hidden md:block" : "block"
                    }`}
                  onMouseEnter={() => setActiveOffice(office.id)}
                  onMouseLeave={() => setActiveOffice(null)}
                  onClick={() => setActiveOffice(activeOffice === office.id ? null : office.id)}
                >
                  {/* Delicate Non-Overlapping Red Sonar Waves at Pin Base */}
                  <div className="absolute bottom-0 left-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 w-3 h-3 sm:w-5 sm:h-5 flex items-center justify-center">
                    {/* Core red droplet dot */}
                    <div className="absolute w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e5233d] shadow-[0_0_6px_#e5233d]" />

                    {/* Expanding Sonar Ping Ring 1 - Crimson Red (compact on mobile to prevent overlap) */}
                    <div
                      className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-[#e5233d]/70 bg-[#e5233d]/10"
                      style={{
                        animation: isMobile
                          ? "map-sonar-ping-mobile 2.4s cubic-bezier(0.1, 0.45, 0.3, 1) infinite"
                          : "map-sonar-ping-desktop 2.6s cubic-bezier(0.1, 0.45, 0.3, 1) infinite",
                        animationDelay: "0s",
                      }}
                    />

                    {/* Expanding Sonar Ping Ring 2 - Crimson Red */}
                    <div
                      className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-[#e5233d]/50 bg-[#e5233d]/5"
                      style={{
                        animation: isMobile
                          ? "map-sonar-ping-mobile 2.4s cubic-bezier(0.1, 0.45, 0.3, 1) infinite"
                          : "map-sonar-ping-desktop 2.6s cubic-bezier(0.1, 0.45, 0.3, 1) infinite",
                        animationDelay: "1.0s",
                      }}
                    />
                  </div>

                  {/* Red Teardrop Pin - Clean Vector with White Center Dot (Floating Upright) */}
                  <div
                    className="relative transform transition-all duration-200 ease-out group-hover:scale-125 group-hover:-translate-y-1"
                    style={{
                      animation: `map-pin-float 3.2s ease-in-out infinite`,
                      animationDelay: office.delay,
                    }}
                  >
                    <svg
                      viewBox="0 0 32 44"
                      className="w-4 sm:w-5 md:w-6 lg:w-7 h-auto block drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]"
                      aria-label={office.tag}
                    >
                      {/* Teardrop pin body in vivid red */}
                      <path
                        d="M16 0C7.16344 0 0 7.16344 0 16C0 27.5 16 44 16 44C16 44 32 27.5 32 16C32 7.16344 24.8366 0 16 0Z"
                        fill="#e5233d"
                      />
                      {/* Inner center dot in pure white */}
                      <circle cx="16" cy="15" r="5" fill="#ffffff" />
                    </svg>
                  </div>

                  {/* Interactive Tooltip Card on Hover / Touch - Perfectly Upright Above Pin */}
                  <div
                    className={`absolute bottom-[118%] ${isLeftEdge
                      ? "left-0 sm:left-1/2 sm:-translate-x-1/2"
                      : isRightEdge
                        ? "right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2"
                        : "left-1/2 -translate-x-1/2"
                      } bg-[#0c1f38] text-white text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg shadow-2xl whitespace-nowrap transition-all duration-150 pointer-events-none z-30 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                      }`}
                  >
                    <p className="font-bold text-white text-[11px] sm:text-[13px]">{office.tag}</p>
                    <p className="text-neutral-300 text-[10px] sm:text-[11.5px] mt-0.5">{office.city}</p>
                    <div
                      className={`w-2 h-2 bg-[#0c1f38] rotate-45 absolute -bottom-1 ${isLeftEdge
                        ? "left-3 sm:left-1/2 sm:-translate-x-1/2"
                        : isRightEdge
                          ? "right-3 sm:right-auto sm:left-1/2 sm:-translate-x-1/2"
                          : "left-1/2 -translate-x-1/2"
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Lower Section: Divider and Contact Information */}
      <div className="px-4 sm:px-6 md:px-10">
        {/* Clean Horizontal Divider Rule */}
        <div className="w-full h-[1px] sm:h-[1.5px] bg-[#9ca3af] my-6 sm:my-8 md:my-12" />

        {/* Contact Us Section with Vertical Separator & Offices */}
        <Reveal delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-4 sm:gap-6 md:gap-10 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
            {/* Left: Contact Us : */}
            <div>
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-extrabold text-[#0c1a2e] tracking-tight leading-none">
                Contact Us :
              </h2>
            </div>

            {/* Right: The 3 Offices with Vertical Divider on md+ screens */}
            <div className="border-t md:border-t-0 md:border-l-[1.5px] border-[#9ca3af] pt-4 sm:pt-5 md:pt-0 md:pl-6 lg:pl-10 space-y-4 sm:space-y-5 md:space-y-6">
              {/* Super Cut – USA */}
              <div>
                <h3 className="font-bold text-[#0c1a2e] text-[15px] sm:text-[16px] md:text-[17.5px] flex items-baseline gap-2 leading-tight">
                  <span>•</span>
                  <span>Super Cut – USA</span>
                </h3>
                <p className="text-[#1e293b] text-[13px] sm:text-[14px] md:text-[15.5px] pl-3.5 sm:pl-4 mt-0.5 sm:mt-1 font-normal leading-snug">
                  9463 Hwy 377 Benbrook, TX 76126, Texas.
                </p>
              </div>

              {/* Super Cut – UK */}
              <div>
                <h3 className="font-bold text-[#0c1a2e] text-[15px] sm:text-[16px] md:text-[17.5px] flex items-baseline gap-2 leading-tight">
                  <span>•</span>
                  <span>Super Cut – UK</span>
                </h3>
                <p className="text-[#1e293b] text-[13px] sm:text-[14px] md:text-[15.5px] pl-3.5 sm:pl-4 mt-0.5 sm:mt-1 font-normal leading-snug">
                  19 Arthur street Luton, LU1 3SF, London
                </p>
              </div>

              {/* Super Cut – MENA */}
              <div>
                <h3 className="font-bold text-[#0c1a2e] text-[15px] sm:text-[16px] md:text-[17.5px] flex items-baseline gap-2 leading-tight">
                  <span>•</span>
                  <span>Super Cut – MENA</span>
                </h3>
                <p className="text-[#1e293b] text-[13px] sm:text-[14px] md:text-[15.5px] pl-3.5 sm:pl-4 mt-0.5 sm:mt-1 font-normal leading-snug">
                  PO Box : 778323, Abu Dhabi United Arab Emirates
                </p>
              </div>

            </div>
          </div>
        </Reveal>
      </div>

      {/* Sticky Action Icons on Right Side (Pure Icons, No Borders, No Text, ONLY Visible in Contact Page) */}
      <div
        className={`fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 transition-all duration-300 select-none ${inContactView
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-12 pointer-events-none"
          }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/97126788921?text=Hello%20Super%20Cut%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          aria-label="WhatsApp"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.55)] hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>

        {/* Catalogue PDF */}
        <a
          href="/images/1212_compressed.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Catalogue PDF"
          aria-label="Catalogue PDF"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a4b9c] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(26,75,156,0.4)] hover:shadow-[0_6px_22px_rgba(26,75,156,0.55)] hover:bg-[#143d80] hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </a>

        {/* Get Quote */}
        <a
          href="mailto:sales@supercutglobal.com?subject=Quote%20Request%20-%20Super%20Cut"
          title="Get Quote"
          aria-label="Get Quote"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0c1a2e] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(12,26,46,0.4)] hover:shadow-[0_6px_22px_rgba(12,26,46,0.55)] hover:bg-[#1a4b9c] hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {/* Full-Width Dark Navy Bottom Banner */}
      <div className="w-full bg-[#0c1a2e] py-5 sm:py-6 md:py-7 px-4 sm:px-6 md:px-10 text-center">
        <p className="text-[11.5px] sm:text-[12.5px] md:text-[14px] text-white/95 max-w-4xl mx-auto leading-relaxed font-normal">
          We supply premium-grade Tungsten from leading Global manufacturers, selected through rigorous technical evaluation to ensure optimum performance, reliability, durability, and compliance with international engineering standards.
        </p>
      </div>
    </section>
  );
}

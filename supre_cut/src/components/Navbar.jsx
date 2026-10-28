import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/catalogueData";
import { CONDENSED_FONT } from "./Reveal";

function Logo() {
  return (
    <a href="#home" className="flex items-center shrink-0 bg-white rounded-lg px-[10px] py-[6px] sm:px-[12px] sm:py-[8px]">
      <img
        src="/images/supercut_logo_horizontal.webp"
        alt="SUPER CUT Hardface Solutions"
        className="h-7 sm:h-8 w-auto object-contain"
      />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
    else if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 animate-nav-slide-down transition-all duration-300 bg-[#0c1a2e] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 h-[64px] flex items-center justify-between gap-x-4">
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                style={{ fontFamily: CONDENSED_FONT }}
                className="group relative text-[12.5px] xl:text-[13px] font-semibold tracking-[0.12em] xl:tracking-[0.14em] uppercase text-white/75 hover:text-white transition-colors whitespace-nowrap py-1"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#e5233d] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2 xl:gap-3">
            {/* Desktop-only standalone Get Quote (hidden on mobile) */}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              style={{ fontFamily: CONDENSED_FONT }}
              className="hidden lg:inline-block text-[13px] font-bold tracking-[0.12em] uppercase bg-[#e5233d] text-white px-5 py-2.5 rounded-sm hover:bg-[#c01b32] transition-colors shrink-0"
            >
              Get Quote
            </a>

            {/* Mobile / Tablet Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md border border-white/20 hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <div className="w-5 h-3.5 flex flex-col justify-between items-center pointer-events-none">
                <span
                  className={`h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                    open ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-5 bg-white rounded-full transition-all duration-200 ${
                    open ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-5 bg-white rounded-full transition-all duration-300 origin-center ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0c1a2e] border-t border-white/10 ${
            open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-3 sm:py-4 space-y-0.5">
            {NAV_LINKS.map((l, index) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                style={{
                  fontFamily: CONDENSED_FONT,
                  transitionDelay: open ? `${40 + index * 25}ms` : "0ms",
                }}
                className={`block py-2.5 sm:py-3 border-b border-white/10 text-[15px] sm:text-[16px] font-bold tracking-[0.12em] uppercase text-white/90 hover:text-[#e5233d] transition-all duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
              >
                {l.label}
              </a>
            ))}

            {/* GET QUOTE Button */}
            <div
              style={{ transitionDelay: open ? `${40 + NAV_LINKS.length * 25}ms` : "0ms" }}
              className={`pt-3 transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <a
                href="#contact"
                onClick={(e) => go(e, "#contact")}
                style={{ fontFamily: CONDENSED_FONT }}
                className="block w-full py-3.5 text-center text-[14px] font-bold tracking-[0.14em] uppercase bg-[#e5233d] text-white rounded-sm hover:bg-[#c01b32] active:scale-[0.99] shadow-md transition-all"
              >
                GET QUOTE
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Modal Backdrop Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 top-[64px] bg-[#0a1930]/50 backdrop-blur-sm transition-opacity duration-300 z-30 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />
    </>
  );
}
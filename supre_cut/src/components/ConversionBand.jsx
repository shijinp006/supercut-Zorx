import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";

function goTo(e, href) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el && window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
  else if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function ConversionBand() {
  return (
    <section className="bg-[#0c1a2e] text-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16 text-center">
        <Reveal>
          <h2
            style={{ fontFamily: DISPLAY_FONT }}
            className="text-[clamp(30px,4vw,48px)] font-black uppercase tracking-wide"
          >
            Request a Quote Today
          </h2>
          <p className="mt-3 text-white/70 text-[15px] sm:text-[16px]">
            Speak with our team about custom alloy formulas, grit sizes &amp; rapid deployment.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+97126788921"
              style={{ fontFamily: CONDENSED_FONT }}
              className="text-white font-bold tracking-[0.05em] text-[17px] sm:text-[19px] hover:text-[#e5233d] transition-colors"
            >
              +971 2 678 8921
            </a>
            <a
              href="#contact"
              onClick={(e) => goTo(e, "#contact")}
              style={{ fontFamily: CONDENSED_FONT }}
              className="bg-[#e5233d] text-white font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-7 py-3 rounded-sm hover:bg-[#c01b32] transition-colors shadow-sm"
            >
              Request Pricing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

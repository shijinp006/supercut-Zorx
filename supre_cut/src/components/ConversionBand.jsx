import { useState } from "react";
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

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(`Please add this email to the Super Cut mailing list: ${email}`);
    window.location.href = `mailto:sales@supercutglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-[#eceef0] border-t border-black/5">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-12">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <h3
              style={{ fontFamily: CONDENSED_FONT }}
              className="text-[20px] sm:text-[24px] font-bold text-[#0c1a2e] tracking-tight"
            >
              Stay Connected
            </h3>
            <form onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL ADDRESS"
                className="flex-1 sm:w-80 border border-neutral-400 bg-white px-4 py-3 text-[13px] tracking-[0.04em] text-[#0c1a2e] placeholder:text-neutral-400 focus:outline-none focus:border-[#e5233d]"
              />
              <button
                type="submit"
                style={{ fontFamily: CONDENSED_FONT }}
                className="bg-[#e5233d] text-white font-semibold uppercase tracking-[0.1em] text-sm px-6 py-3 hover:bg-[#c01b32] transition-colors shrink-0"
              >
                Submit
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { CONDENSED_FONT } from "./Reveal";
import { NAV_LINKS } from "../data/catalogueData";
import { OFFICES } from "../data/contactData";

const PRODUCT_LINKS = [
  { label: "TCI & Star Cut Inserts", href: "#inserts" },
  { label: "Dimensions", href: "#dimensions" },
  { label: "Composite Rods", href: "#composite" },
  { label: "HF-5000 Flexible Rope", href: "#rope" },
  { label: "Tinning Rods", href: "#tinning" },
];

function goTo(e, href) {
  const el = document.querySelector(href);
  if (el) {
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  }
}

export function Footer() {
  return (
    <footer className="bg-[#081322] text-white">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Logo + offices */}
          <div>
            <img
              src="/images/supercut_logo_stacked.webp"
              alt="SUPER CUT Hardface Solutions"
              className="h-16 w-auto object-contain mb-5 bg-white rounded-md px-3 py-2 inline-block"
            />
            <div className="space-y-4">
              {OFFICES.map((o) => (
                <p key={o.id} className="text-[13px] leading-snug text-white/65">
                  <span className="block font-bold text-white/90">{o.tag}</span>
                  {o.addr}
                </p>
              ))}
            </div>
            <a
              href="mailto:sales@supercutglobal.com"
              className="block mt-4 text-[13.5px] font-semibold text-white/80 hover:text-[#e5233d] transition-colors"
            >
              sales@supercutglobal.com
            </a>
          </div>

          {/* Company links */}
          <div>
            <h4 style={{ fontFamily: CONDENSED_FONT }} className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/50 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    className="text-[14px] text-white/75 hover:text-[#e5233d] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h4 style={{ fontFamily: CONDENSED_FONT }} className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/50 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => goTo(e, l.href)}
                    className="text-[14px] text-white/75 hover:text-[#e5233d] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 style={{ fontFamily: CONDENSED_FONT }} className="text-[13px] font-bold uppercase tracking-[0.14em] text-white/50 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+97126788921" className="text-[14px] text-white/75 hover:text-[#e5233d] transition-colors">
                  +971 2 678 8921
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/97126788921?text=Hello%20Super%20Cut%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/75 hover:text-[#e5233d] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="/images/1212_compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/75 hover:text-[#e5233d] transition-colors"
                >
                  Download Catalogue (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 sm:px-8 md:px-12 lg:px-20 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left text-[11px] sm:text-[12px] text-white/50">
        <span>© {new Date().getFullYear()} SUPER CUT Hardface Solutions. All rights reserved.</span>
        <span>ISO 9001:2015 • UAE — UK — USA</span>
      </div>
    </footer>
  );
}

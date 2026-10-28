import { useState } from "react";
import Reveal, { CONDENSED_FONT } from "./Reveal";

const TRUST_ITEMS = [
  {
    label: "ISO 9001:2015 Certified",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    label: "Global Presence — UAE • UK • USA",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
      </>
    ),
  },
  {
    label: "Custom Alloy Formulas",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-1.308L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    ),
  },
  {
    label: "Factory-Sealed Packaging",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    ),
  },
  {
    label: "Rapid Technical Support",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    ),
  },
];

export function ProgramBand() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section className="bg-white">
      {/* Program / quality band */}
      <div className="bg-[#eceef0]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-12">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                style={{ fontFamily: CONDENSED_FONT }}
                className="text-[26px] sm:text-[32px] font-bold text-[#0c1a2e] tracking-tight"
              >
                Custom Alloy &amp; Quality Program
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed">
                Custom alloy formulas, particle distributions &amp; rod dimensions are available on request.
                Every batch is backed by our{" "}
                <strong className="text-[#0c1a2e] font-semibold">ISO 9001:2015</strong> quality management
                certification.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/images/1212_compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-[#e5233d] text-white font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-3 rounded-sm hover:bg-[#c01b32] transition-colors shadow-sm"
                >
                  Download Brochure
                </a>
                <button
                  onClick={() => setShowCert(true)}
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="bg-white border-2 border-[#0c1a2e] text-[#0c1a2e] font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 py-3 rounded-sm hover:bg-[#0c1a2e] hover:text-white transition-colors cursor-pointer"
                >
                  View Certification
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust indicator row */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-12">
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e5233d"
                  strokeWidth={1.6}
                  className="w-9 h-9 sm:w-10 sm:h-10 shrink-0"
                >
                  {item.icon}
                </svg>
                <p className="text-[12.5px] sm:text-[13.5px] font-semibold text-[#0c1a2e] leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Certification lightbox */}
      {showCert && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowCert(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg max-w-3xl w-full p-4 sm:p-6 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col items-center"
          >
            <div className="w-full flex justify-between items-center pb-3 border-b border-neutral-200 mb-4">
              <h4 className="font-bold text-neutral-900 text-base sm:text-lg">
                ISO 9001:2015 Certified — Quality Management Systems
              </h4>
              <button
                type="button"
                onClick={() => setShowCert(false)}
                aria-label="Close"
                className="text-neutral-500 hover:text-neutral-900 p-1.5 rounded-full hover:bg-neutral-100 text-xl font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="overflow-auto w-full flex justify-center py-2">
              <img
                src="/images/SUPER_CUT_QMS_Certificate.webp"
                alt="Registration Certificate - ISO 9001:2015 Quality Management Systems"
                className="max-h-[75vh] w-auto object-contain rounded-sm shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

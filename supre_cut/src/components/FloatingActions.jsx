export function FloatingActions() {
  const handleContactClick = (e) => {
    const el = document.querySelector("#contact");
    if (el) {
      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 select-none pointer-events-auto"
      aria-label="Quick Actions"
    >
      <style>{`
        @keyframes sc-float-enter {
          0% {
            opacity: 0;
            transform: translateX(60px) scale(0.5);
          }
          65% {
            opacity: 1;
            transform: translateX(-6px) scale(1.08);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
      `}</style>

      {/* WhatsApp */}
      <div style={{ animation: "sc-float-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) 350ms both" }}>
        <a
          href="https://wa.me/97126788921?text=Hello%20Super%20Cut%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          aria-label="WhatsApp"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.55)] hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer block"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      {/* Catalogue PDF */}
      <div style={{ animation: "sc-float-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) 500ms both" }}>
        <a
          href="/images/1212_compressed.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Download Catalogue PDF"
          aria-label="Catalogue PDF"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a4b9c] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(26,75,156,0.4)] hover:shadow-[0_6px_22px_rgba(26,75,156,0.55)] hover:bg-[#143d80] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer block"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </a>
      </div>

      {/* Get Quote / Contact */}
      <div style={{ animation: "sc-float-enter 0.7s cubic-bezier(0.16, 1, 0.3, 1) 650ms both" }}>
        <a
          href="#contact"
          onClick={handleContactClick}
          title="Get Quote / Contact"
          aria-label="Get Quote"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0c1a2e] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(12,26,46,0.4)] hover:shadow-[0_6px_22px_rgba(12,26,46,0.55)] hover:bg-[#1a4b9c] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer block"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

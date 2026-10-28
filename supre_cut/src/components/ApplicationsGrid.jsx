import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { MATRIX_GRADES } from "../data/catalogueData";

// Dedupe application tags across both matrix grades — real content, no invented copy.
const APPLICATIONS = [...new Set(MATRIX_GRADES.flatMap((g) => g.apps))];

const ICONS = [
  // Reamers & hole openers
  <path key="a" strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.9 2.6-4.5 5.7-4.5 9a4.5 4.5 0 109 0c0-3.3-1.6-6.4-4.5-9z" />,
  // Fishing & milling tools
  <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0L15 21l-1.5-6L4.5 4.5zm15 15L13.5 13.5" />,
  // Casing cutters & coring tools
  <>
    <circle key="c1" cx="12" cy="12" r="8.25" />
    <circle key="c2" cx="12" cy="12" r="3" />
  </>,
  // Stabilizers & screw feeders
  <path key="d" strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0113.5-4.5M19.5 12a7.5 7.5 0 01-13.5 4.5M3 3v4.5h4.5M21 21v-4.5h-4.5" />,
  // Reamers & sand mixers
  <path key="e" strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M3 12h18M3 16.5h18" />,
  // General abrasive applications
  <path key="f" strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.5a.56.56 0 01.976 0l2.14 4.337a.56.56 0 00.422.307l4.787.696a.56.56 0 01.31.955l-3.463 3.374a.56.56 0 00-.161.496l.818 4.767a.56.56 0 01-.812.59l-4.282-2.251a.56.56 0 00-.52 0l-4.282 2.25a.56.56 0 01-.812-.589l.818-4.767a.56.56 0 00-.161-.496L3.795 9.795a.56.56 0 01.31-.955l4.787-.696a.56.56 0 00.422-.307l2.14-4.337z" />,
];

export function ApplicationsGrid() {
  return (
    <section className="bg-[#0c1a2e] py-14 lg:py-20">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <Reveal>
          <h2
            style={{ fontFamily: DISPLAY_FONT }}
            className="text-[clamp(32px,4.2vw,52px)] font-black uppercase tracking-wide text-white mb-10 sm:mb-12"
          >
            Our Products Are Used By
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {APPLICATIONS.map((app, idx) => (
            <Reveal key={app} delay={idx * 60} variant="scale">
              <div className="bg-white/5 border border-white/10 rounded-sm p-6 sm:p-7 h-full flex items-center gap-4 hover:bg-white/10 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e5233d"
                  strokeWidth={1.4}
                  className="w-9 h-9 shrink-0"
                >
                  {ICONS[idx % ICONS.length]}
                </svg>
                <p
                  style={{ fontFamily: CONDENSED_FONT }}
                  className="text-white font-bold uppercase tracking-[0.03em] text-[14.5px] sm:text-[15.5px] leading-snug"
                >
                  {app}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

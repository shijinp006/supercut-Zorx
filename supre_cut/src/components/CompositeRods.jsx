import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { MATRIX_GRADES, GRIT_70, GRIT_60, IMAGES } from "./data";

export default function CompositeRods() {
  return (
    <>
      <section id="composite" className="bg-[#154785] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="px-4 sm:px-6 md:px-10">
          {/* Top Page Number & Rule */}
          <div className="relative mb-8 sm:mb-10">
            <div className="flex justify-end mb-1">
              <span style={{ fontFamily: CONDENSED_FONT }} className="text-[32px] sm:text-[38px] font-bold text-white tracking-wider leading-none">
                07
              </span>
            </div>
            <div className="h-[1.5px] bg-white/60 w-full" />
          </div>

          {/* Main Headline with soft right gradient sheen matching brochure */}
          <Reveal>
            <div className="relative mb-8 py-2 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.28) 100%)",
                }}
              />
              <h2
                style={{ fontFamily: DISPLAY_FONT }}
                className="relative text-[clamp(44px,6.2vw,92px)] font-black uppercase leading-[1.06] tracking-[0.02em]"
              >
                <span className="block text-white">TUNGSTEN CARBIDE</span>
                <span className="block text-[#82b1ec] mt-1.5 sm:mt-3">COMPOSITE RODS</span>
              </h2>
            </div>
          </Reveal>

          {/* Lead Intro Paragraph */}
          <Reveal>
            <p className="text-[17px] sm:text-[18.5px] leading-[1.65] text-white/95 max-w-[1250px] mb-8 font-normal">
              <strong className="font-bold text-white">SUPER CUT</strong> Composite Rods combine high-grade tungsten carbide crushed chips embedded in a tough, high-tensile brazing matrix. Designed for severe wear, milling and cutting operations, these rods deliver maximum abrasion resistance and cutting speed.
            </p>
          </Reveal>

          {/* Three Feature Points */}
          <div className="space-y-6 mb-12 max-w-[1250px]">
            <Reveal>
              <div>
                <h4 className="font-bold text-white text-[18px] sm:text-[19px] leading-tight">Matrix Integrity:</h4>
                <p className="text-white/90 text-[16px] sm:text-[17px] leading-relaxed mt-1">
                  Formulated with high-tensile brazing alloys for optimum chip retention.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h4 className="font-bold text-white text-[18px] sm:text-[19px] leading-tight">High Performance:</h4>
                <p className="text-white/90 text-[16px] sm:text-[17px] leading-relaxed mt-1">
                  Made with specially processed, crushed tungsten carbide to ensure consistent strength and quality.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <h4 className="font-bold text-white text-[18px] sm:text-[19px] leading-tight">Maximum Durability:</h4>
                <p className="text-white/90 text-[16px] sm:text-[17px] leading-relaxed mt-1">
                  Uses sharp, intact carbide particles to resist extreme wear and improve milling efficiency.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Subheading: Chemical Composition & Matrix Grades */}
          <Reveal className="mb-6">
            <div className="flex items-stretch gap-4">
              <div className="w-[3.5px] bg-white self-stretch rounded-full" />
              <div>
                <h3
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="uppercase text-[clamp(20px,4.8vw,48px)] font-black leading-[1.08] tracking-[0.02em]"
                >
                  <span className="block text-white whitespace-nowrap">CHEMICAL COMPOSITION &amp;</span>
                  <span className="block text-[#82b1ec] whitespace-nowrap mt-0.5 sm:mt-1.5">MATRIX GRADES</span>
                </h3>
              </div>
            </div>
          </Reveal>

          {/* Chemical Composition & Matrix Grades Table */}
          <Reveal delay={100} className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-white border-collapse border border-white text-[14px] sm:text-[15px]">
              <thead style={{ fontFamily: CONDENSED_FONT }}>
                <tr className="text-center font-bold tracking-wider text-[14px] sm:text-[15px]">
                  <th className="py-3.5 px-4 border border-white w-[14%]">GRADE CODE</th>
                  <th className="py-3.5 px-4 border border-white w-[18%]">HARD PHASE</th>
                  <th className="py-3.5 px-6 border border-white w-[36%]">MATRIX / BONDING PHASE COMPOSITION</th>
                  <th className="py-3.5 px-6 border border-white w-[32%]">PRIMARY APPLICATIONS</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: SC-Cr-70 */}
                <tr className="align-middle hover:bg-white/5 transition-colors">
                  <td className="py-5 px-4 text-center font-bold text-[16px] border border-white whitespace-nowrap">
                    SC-Cr-70
                  </td>
                  <td className="py-5 px-4 text-center border border-white leading-snug">
                    Carbide Grits<br />(75%)
                  </td>
                  <td className="py-5 px-6 border border-white align-top">
                    <strong className="block font-bold text-white text-[15px] mb-1">25% Cu Matrix</strong>
                    <span className="text-white/90 text-[14px] leading-relaxed">
                      (Cu 56-66%, Fe 0.5% Max, Sn 0.5% Max, Zn Bal.)
                    </span>
                  </td>
                  <td className="py-5 px-6 border border-white align-top">
                    <ul className="space-y-1 text-[14px] text-white/95 leading-relaxed">
                      <li>• Reamers & Hole Openers</li>
                      <li>• Fishing & Milling Tools</li>
                      <li>• Casing Cutters & Coring Tools</li>
                    </ul>
                  </td>
                </tr>

                {/* Row 2: SC-Cr-60 */}
                <tr className="align-middle hover:bg-white/5 transition-colors">
                  <td className="py-5 px-4 text-center font-bold text-[16px] border border-white whitespace-nowrap">
                    SC-Cr-60
                  </td>
                  <td className="py-5 px-4 text-center border border-white leading-snug">
                    Carbide Grits<br />(65%)
                  </td>
                  <td className="py-5 px-6 border border-white align-top">
                    <strong className="block font-bold text-white text-[15px] mb-1">35% Cu Matrix</strong>
                    <span className="text-white/90 text-[14px] leading-relaxed">
                      (Cu 56-66%, Fe 0.5% Max, Sn 0.5% Max, Zn Bal.) • Stabilizers & Screw Feeders •
                    </span>
                  </td>
                  <td className="py-5 px-6 border border-white align-top">
                    <ul className="space-y-1 text-[14px] text-white/95 leading-relaxed">
                      <li>• Stabilizers & Screw Feeders</li>
                      <li>• Reamers & Sand Mixers</li>
                      <li>• General Abrasive Applications</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="px-4 sm:px-6 md:px-10">
          {/* Top Page Number & Rule */}
          <div className="relative mb-6 sm:mb-8">
            <div className="flex justify-end mb-1">
              <span style={{ fontFamily: CONDENSED_FONT }} className="text-[32px] sm:text-[38px] font-bold text-[#0c1f38] tracking-wider leading-none">
                08
              </span>
            </div>
            <div className="h-[1.5px] bg-black/60 w-full" />
          </div>

          {/* Headline with Vertical Blue Accent Bar */}
          <Reveal>
            <div className="flex items-stretch gap-4 mb-2">
              <div className="w-[4px] bg-[#154785] self-stretch rounded-full shrink-0 my-1" />
              <div>
                <h2
                  style={{ fontFamily: DISPLAY_FONT }}
                  className="uppercase text-[clamp(36px,5vw,72px)] font-black leading-[1.05] tracking-[0.02em]"
                >
                  <span className="block text-[#154785]">TUNGSTEN CARBIDE</span>
                  <span className="block text-[#1c2f4a] mt-1 sm:mt-1.5">COMPOSITE RODS</span>
                </h2>
              </div>
            </div>
            <p className="font-bold text-[#111827] text-[17px] sm:text-[19px] mb-7 sm:mb-9">
              Grit &amp; Physical Dimensions
            </p>
          </Reveal>

          {/* Table 1: SC-Cr-70 */}
          <Reveal>
            <div className="border-[2px] border-black overflow-hidden mb-8 sm:mb-10">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-center border-collapse text-[14px] sm:text-[15px]">
                  <thead style={{ fontFamily: CONDENSED_FONT }}>
                    <tr className="border-b-[2px] border-black font-bold tracking-wider text-[14px] sm:text-[15px] bg-white">
                      <th className="py-3 px-4 border border-black w-[15%]">GRADE</th>
                      <th className="py-3 px-4 border border-black w-[22%]">PART NUMBER</th>
                      <th className="py-3 px-4 border border-black w-[23%] leading-tight">
                        CARBIDE GRIT<br />
                        <span className="text-[12px] sm:text-[13px] font-semibold">SIZE (INCHES)</span>
                      </th>
                      <th className="py-3 px-4 border border-black w-[40%]">SURFACE FINISH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GRIT_70.map(([p, g], i) => (
                      <tr key={p} className="hover:bg-neutral-50 transition-colors">
                        {i === 0 && (
                          <td
                            rowSpan={GRIT_70.length}
                            className="border border-black font-extrabold text-[17px] sm:text-[18px] text-[#0c1f38] align-middle px-4"
                          >
                            SC-Cr-70
                          </td>
                        )}
                        <td className="border border-black py-2 px-3 font-medium text-neutral-800">{p}</td>
                        <td className="border border-black py-2 px-3 text-neutral-800">{g}</td>
                        <td className="border border-black py-2 px-3 text-neutral-800">Bare or Flux-Coated</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Table 2: SC-Cr-60 */}
          <Reveal>
            <div className="border-[2px] border-black overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-center border-collapse text-[14px] sm:text-[15px]">
                  <thead style={{ fontFamily: CONDENSED_FONT }}>
                    <tr className="border-b-[2px] border-black font-bold tracking-wider text-[14px] sm:text-[15px] bg-white">
                      <th className="py-3 px-4 border border-black w-[15%]">GRADE</th>
                      <th className="py-3 px-4 border border-black w-[22%]">PART NUMBER</th>
                      <th className="py-3 px-4 border border-black w-[23%] leading-tight">
                        CARBIDE GRIT<br />
                        <span className="text-[12px] sm:text-[13px] font-semibold">SIZE (INCHES)</span>
                      </th>
                      <th className="py-3 px-4 border border-black w-[40%]">SURFACE FINISH</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GRIT_60.map(([p, g], i) => (
                      <tr key={p} className="hover:bg-neutral-50 transition-colors">
                        {i === 0 && (
                          <td
                            rowSpan={GRIT_60.length}
                            className="border border-black font-extrabold text-[17px] sm:text-[18px] text-[#0c1f38] align-middle px-4"
                          >
                            SC-Cr-60
                          </td>
                        )}
                        <td className="border border-black py-2 px-3 font-medium text-neutral-800">{p}</td>
                        <td className="border border-black py-2 px-3 text-neutral-800">{g}</td>
                        <td className="border border-black py-2 px-3 text-neutral-800">Bare or Flux-Coated</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

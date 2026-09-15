import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";
import { IMAGES } from "../data/catalogueData";

export function HardfacingRope() {
  return (
    <section id="rope" className="bg-white py-12 lg:py-16 border-t border-black/10">
      <div className="px-10">
        {/* Top Page Number & Rule */}
        <div className="relative mb-8 sm:mb-10">
          <div className="flex justify-end mb-1">
            <span style={{ fontFamily: CONDENSED_FONT }} className="text-[34px] sm:text-[40px] font-bold text-neutral-800 tracking-wider leading-none">
              09
            </span>
          </div>
          <div className="h-[1.5px] bg-neutral-400 w-full" />
        </div>

        {/* Top Two-Column Block: Big Headline (Left) & Intro Paragraph (Right) */}
        <Reveal>
          <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-8 lg:gap-14 items-start mb-10">
            <div>
              <h2 style={{ fontFamily: DISPLAY_FONT }} className="uppercase leading-[0.92] tracking-tight">
                <span className="block text-[#1d5096] text-[clamp(56px,6.5vw,92px)] font-black">FLEXIBLE</span>
                <span className="block text-[#162740] text-[clamp(26px,3.2vw,42px)] font-black mt-1 tracking-normal">HARDFACING ROPE</span>
                <span className="block text-[#162740] text-[clamp(26px,3.2vw,42px)] font-black mt-0.5 tracking-normal">(HF-5000)</span>
              </h2>
            </div>
            <div className="text-[15.5px] sm:text-[17px] leading-[1.65] text-neutral-800 lg:pt-1">
              <h3 className="font-bold text-black text-[17.5px] sm:text-[19px] mb-2">
                Flexible Hardfacing Rope
              </h3>
              <p>
                <strong className="font-bold text-black">SUPER CUT</strong> Flexible Hardfacing Rope consists of premium cast tungsten carbide, spherical cast tungsten carbide, or a blend of both suspended in a nickel-based self-fluxing binder. Built around a central nickel wire core, this rope enables precise torch deposition on complex geometries.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Middle Block: Three Feature Points (Left) + Rope Spool Image (Right) */}
        <Reveal delay={80}>
          <div className="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_440px] gap-8 items-center mb-8">
            <div className="space-y-5 text-[15.5px] sm:text-[16.5px] text-neutral-800">
              <div>
                <h4 className="font-bold text-black leading-tight text-[16.5px] sm:text-[17.5px]">
                  Erosion &amp; Abrasion Defense:
                </h4>
                <p className="leading-relaxed mt-0.5 text-neutral-800">
                  Provides a dense surface layer resistant to particle impact and sliding wear.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-black leading-tight text-[16.5px] sm:text-[17.5px]">
                  Low Working Temperature:
                </h4>
                <p className="leading-relaxed mt-0.5 text-neutral-800">
                  Deposited at approximately 1050°C, minimizing thermal damage to base metals.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-black leading-tight text-[16.5px] sm:text-[17.5px]">
                  Controlled Fluidity:
                </h4>
                <p className="leading-relaxed mt-0.5 text-neutral-800">
                  Superior puddle control during oxyacetylene deposition.
                </p>
              </div>
            </div>
            <div className="flex justify-start md:justify-end relative">
              <style>{`
                @keyframes float-spool {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-15px); }
                }
                .animate-float-spool {
                  animation: float-spool 6s ease-in-out infinite;
                }
              `}</style>
              <img
                src="/images/ChatGPT Image Sep 4, 2026, 12_55_12 PM.webp"
                alt="Flexible Hardfacing Rope Spool"
                className="w-full max-w-[360px] lg:max-w-[420px] h-auto object-contain mix-blend-multiply animate-float-spool"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        {/* Grade Specifications Subtitle */}
        <Reveal delay={120}>
          <h3 className="font-extrabold tracking-tight text-[26px] sm:text-[32px] text-black mb-5 uppercase">
            GRADE SPECIFICATIONS
          </h3>
        </Reveal>

        {/* Grade Specifications Table */}
        <Reveal delay={150}>
          <div className="border-[2px] border-black overflow-hidden">
            <div className="table-scroll-wrap">
              <div className="table-scroll">
                <table className="w-full min-w-[700px] border-collapse text-[14.5px] sm:text-[15.5px]">
                <thead>
                  <tr className="border-b-[2px] border-black font-extrabold tracking-wider text-[14px] sm:text-[15px] bg-white text-black">
                    <th className="border-r-[2px] border-black py-3.5 px-4 text-center w-[18%]">
                      GRADE CODE
                    </th>
                    <th className="border-r-[2px] border-black py-3.5 px-4 text-center w-[24%]">
                      HARD PHASE<br />COMPOSITION
                    </th>
                    <th className="border-r-[2px] border-black py-3.5 px-4 text-center w-[24%]">
                      BONDING PHASE<br />COMPOSITION
                    </th>
                    <th className="py-3.5 px-6 text-center w-[34%]">
                      PRIMARY<br />APPLICATIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-[2px] border-black hover:bg-neutral-50 transition-colors">
                    <td className="border-r-[2px] border-black py-6 px-4 text-center font-bold text-[16px] text-black align-middle">
                      SC-2100
                    </td>
                    <td className="border-r-[2px] border-black py-6 px-4 text-center text-neutral-900 leading-snug align-middle">
                      Cast Tungsten<br />Carbide (65%)
                    </td>
                    <td className="border-r-[2px] border-black py-6 px-4 text-center text-neutral-900 leading-snug align-middle">
                      Self-Fluxing<br />Nickel Alloy<br />(35%)
                    </td>
                    <td className="py-6 px-6 text-left text-neutral-900 leading-relaxed align-middle">
                      <div className="flex items-start gap-2">
                        <span>•</span>
                        <span>Oilfield Stabilizers &amp; Drilling Tools</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="border-r-[2px] border-black py-6 px-4 text-center font-bold text-[16px] text-black align-middle">
                      SC-2200
                    </td>
                    <td className="border-r-[2px] border-black py-6 px-4 text-center text-neutral-900 leading-snug align-middle">
                      Spherical Cast<br />Tungsten Carbide<br />(65%)
                    </td>
                    <td className="border-r-[2px] border-black py-6 px-4 text-center text-neutral-900 leading-snug align-middle">
                      Self-Fluxing<br />Nickel Alloy<br />(35%)
                    </td>
                    <td className="py-6 px-6 text-left text-neutral-900 leading-relaxed align-middle">
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Brick &amp; Clay Manufacturing Plates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span>•</span>
                          <span>Decanter Screws in Food / Chemical Processing</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p className="table-scroll-label">SWIPE <span className="arrow">›</span></p>
            </div>
          </div>
        </Reveal>

        {/* Bottom Page Dividing Line */}
        <div className="h-[1.5px] bg-neutral-400 w-full mt-12 sm:mt-16" />
      </div>
    </section>
  );
}

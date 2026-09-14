import Reveal, { CONDENSED_FONT } from "./Reveal";
import { DIMENSIONS } from "./data";

const cell = "border border-black px-3 py-2.5 text-center align-middle";
const head = "border border-black py-3 px-3 text-[13px] sm:text-[14px] font-black uppercase text-center";

export default function Dimensions() {
  return (
    <section id="dimensions" className="bg-white py-12 lg:py-16 text-neutral-900">
      <div className="px-10">
        {/* Top Page Number & Horizontal Divider (Page 06) */}
        <Reveal className="flex justify-end mb-2">
          <span
            style={{ fontFamily: CONDENSED_FONT }}
            className="text-2xl sm:text-3xl font-bold tracking-wider text-neutral-800 select-none"
          >
            06
          </span>
        </Reveal>

        <Reveal className="border-t border-neutral-300 pt-6">
          <div className="w-full border-2 border-black overflow-hidden bg-white shadow-xs">
            {/* Table Title Banner */}
            <div className="bg-white py-3.5 sm:py-4.5 text-center border-b-2 border-black">
              <h2
                style={{ fontFamily: CONDENSED_FONT }}
                className="font-bold tracking-[0.05em] text-[22px] sm:text-[28px] uppercase text-black"
              >
                DIMENSIONS <span className="font-normal text-[18px] sm:text-[23px]">(INCHES/mm)</span>
              </h2>
            </div>

            {/* Table with 6 Columns Matching Brochure Page 06 */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-black border-collapse">
                <thead>
                  <tr className="bg-white" style={{ fontFamily: CONDENSED_FONT }}>
                    <th className={`${head} w-[22%]`}>TYPE</th>
                    <th className={`${head} w-[14%]`}>PART NO</th>
                    <th className={`${head} w-[15%]`}>DIA./WIDTH</th>
                    <th className={`${head} w-[17%]`}>THICK./HEIGHT</th>
                    <th className={`${head} w-[14%]`}>LENGTH</th>
                    <th className={`${head} w-[18%]`}>{/* Product Image Column */}</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] sm:text-[14.5px] font-medium">
                  {DIMENSIONS.map((g) =>
                    g.rows.map((r, i) => (
                      <tr key={`${g.type}-${r.part}`} className="bg-white hover:bg-neutral-50/60 transition-colors">
                        {/* Type cell spans all rows in group */}
                        {i === 0 && (
                          <td
                            rowSpan={g.rows.length}
                            className="border border-black px-4 sm:px-6 py-3.5 font-bold text-[14.5px] sm:text-[15.5px] leading-tight text-center sm:text-left sm:pl-6 align-middle"
                          >
                            {g.type}
                          </td>
                        )}

                        <td className={cell}>{r.part}</td>
                        <td className={cell}>{r.dia}</td>
                        <td className={cell}>{r.thick}</td>
                        <td className={cell}>{r.len}</td>

                        {/* Image cell spans all rows in group */}
                        {i === 0 && (
                          <td
                            rowSpan={g.rows.length}
                            className="border border-black p-2 text-center align-middle bg-white"
                          >
                            <div className="flex items-center justify-center min-h-[58px] sm:min-h-[68px] p-1">
                              <img
                                src={g.image}
                                alt={g.type}
                                className="max-h-[64px] sm:max-h-[76px] max-w-[105px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                              />
                            </div>
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote */}
          <p className="mt-4 text-[13px] text-neutral-600 font-medium text-center sm:text-left">
            All dimensions in inches unless marked mm. Custom alloy formulas, particle distributions &amp; rod dimensions available on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

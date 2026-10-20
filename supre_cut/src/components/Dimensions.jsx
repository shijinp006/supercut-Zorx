import Reveal, { CONDENSED_FONT } from "./Reveal";
import { DIMENSIONS } from "../data/catalogueData";

const cell = "border border-black px-1.5 py-1.5 text-center align-middle text-[11px] sm:text-[12px]";
const head = "border border-black py-1.5 px-1.5 text-[9.5px] sm:text-[10.5px] font-black uppercase text-center leading-tight";

export function Dimensions() {
  return (
    <section id="dimensions" className="bg-white py-12 lg:py-16 text-neutral-900">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
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
            <div className="table-scroll-wrap">
            <div className="overflow-x-auto table-scroll">
              <table className="w-full min-w-[520px] sm:min-w-[600px] text-black border-collapse table-fixed">
                <thead>
                  <tr className="bg-white" style={{ fontFamily: CONDENSED_FONT }}>
                    <th className={`${head} w-[18%]`}>TYPE</th>
                    <th className={`${head} w-[14%]`}>PART NO</th>
                    <th className={`${head} w-[15%]`}>DIA./WIDTH</th>
                    <th className={`${head} w-[16%]`}>THICK./HEIGHT</th>
                    <th className={`${head} w-[13%]`}>LENGTH</th>
                    <th className={`${head} w-[14%]`}>{/* Product Image Column */}</th>
                  </tr>
                </thead>
                <tbody className="font-medium">
                  {DIMENSIONS.map((g) =>
                    g.rows.map((r, i) => (
                      <tr key={`${g.type ?? r.type}-${r.part}`} className="bg-white hover:bg-neutral-50/60 transition-colors">
                        {/* Type cell: merged across the group when it shares one label,
                            otherwise each row shows its own type (image column still merges below) */}
                        {g.type ? (
                          i === 0 && (
                            <td
                              rowSpan={g.rows.length}
                              className="border border-black px-1.5 py-1.5 font-bold text-[10.5px] sm:text-[11.5px] leading-[1.15] text-left align-middle"
                            >
                              {g.type}
                            </td>
                          )
                        ) : (
                          <td className="border border-black px-1.5 py-1.5 font-bold text-[10.5px] sm:text-[11.5px] leading-[1.15] text-left align-middle">
                            {r.type}
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
                            className="border border-black p-1 text-center align-middle bg-white"
                          >
                            <div className="flex items-center justify-center min-h-[30px] sm:min-h-[36px] p-0.5">
                              <img
                                src={g.image}
                                alt={g.type ?? g.rows.map((row) => row.type).join(" / ")}
                                className={`${
                                  g.rows.length >= 4
                                    ? "max-h-[62px] sm:max-h-[72px] max-w-[60px]"
                                    : g.rows.length === 2
                                    ? "max-h-[42px] sm:max-h-[48px] max-w-[55px]"
                                    : "max-h-[34px] sm:max-h-[40px] max-w-[50px]"
                                } w-auto h-auto object-contain transition-transform duration-300 hover:scale-105`}
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
            <p className="table-scroll-label">SWIPE <span className="arrow">›</span></p>
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

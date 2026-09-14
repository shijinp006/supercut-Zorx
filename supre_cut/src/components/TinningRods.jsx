import Reveal, { DISPLAY_FONT, CONDENSED_FONT } from "./Reveal";

export default function TinningRods() {
  return (
    <section id="tinning" className="bg-[#143a75] text-white py-14 lg:py-20">
      <div className="px-10">
        <div className="flex justify-end mb-2"><span style={{ fontFamily: CONDENSED_FONT }} className="text-[26px] text-white/90">10</span></div>
        <div className="h-px bg-white/60 mb-10" />
        <Reveal>
          <h2 style={{ fontFamily: DISPLAY_FONT }} className="uppercase text-[clamp(40px,5.8vw,78px)] font-black tracking-[0.02em] leading-[1.05]">
            <span className="block text-white">NICKEL SILVER</span>
            <span className="block text-[#8ab4e8] mt-2.5 sm:mt-4">TINNING RODS</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 text-[16.5px] lg:text-[18px] leading-[1.65] text-white/90 max-w-[1050px]">
            <strong className="text-white">SUPER CUT</strong> Nickel Silver Tinning Rods are high-strength, multi-purpose oxyacetylene rods for joining and surfacing ferrous and non-ferrous metals. They are ideal for joining tungsten carbide and inserts with steel surface as well as serving as the bonding matrix for loose carbide grits.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <h3 style={{ fontFamily: CONDENSED_FONT }} className="font-bold tracking-[0.06em] text-[clamp(22px,3vw,32px)] mb-4">CHEMICAL COMPOSITION</h3>
          <div className="overflow-x-auto border border-white/70">
            <table className="w-full min-w-[640px] text-center text-white border-collapse text-[14.5px]">
              <thead style={{ fontFamily: CONDENSED_FONT }}><tr><th className="py-3 border border-white/70">GRADE</th><th className="py-3 border border-white/70">CU</th><th className="py-3 border border-white/70">NI</th><th className="py-3 border border-white/70">SI</th><th className="py-3 border border-white/70">ZN</th></tr></thead>
              <tbody><tr><td className="py-3 border border-white/70">RBCuZn-D</td><td className="py-3 border border-white/70">46.0 - 50.0%</td><td className="py-3 border border-white/70">10.0 - 11.0%</td><td className="py-3 border border-white/70">0.25% Max</td><td className="py-3 border border-white/70">Balance</td></tr></tbody>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h3 style={{ fontFamily: CONDENSED_FONT }} className="font-bold tracking-[0.06em] text-[clamp(22px,3vw,32px)] mb-4 leading-tight">MECHANICAL &<br />PHYSICAL CHARACTERISTICS</h3>
          <div className="overflow-x-auto border border-white/70">
            <table className="w-full min-w-[760px] text-center text-white border-collapse text-[14px]">
              <thead style={{ fontFamily: CONDENSED_FONT }}><tr><th className="py-3 px-2 border border-white/70">SIZES</th><th className="py-3 px-2 border border-white/70">PART NUMBER</th><th className="py-3 px-2 border border-white/70">TYPICAL HARDNESS</th><th className="py-3 px-2 border border-white/70">MELTING POINT</th><th className="py-3 px-2 border border-white/70">TENSILE STRENGTH</th><th className="py-3 px-2 border border-white/70">SURFACE FINISH</th></tr></thead>
              <tbody>
                <tr><td className="py-3 border border-white/70">1/8” (3.2mm)</td><td className="py-3 border border-white/70">SC-bz-01</td><td className="py-3 border border-white/70">120 HB</td><td className="py-3 border border-white/70">915°C</td><td className="py-3 border border-white/70">—</td><td className="py-3 border border-white/70">—</td></tr>
                <tr><td className="py-3 border border-white/70">3/16” (4.8mm)</td><td className="py-3 border border-white/70">SC-bz-02</td><td className="py-3 border border-white/70">120 HB</td><td className="py-3 border border-white/70">915°C</td><td className="py-3 border border-white/70">—</td><td className="py-3 border border-white/70">—</td></tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="h-px bg-white/60 mt-12" />
      </div>
    </section>
  );
}

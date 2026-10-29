import Reveal from "./Reveal";
import { DISPLAY_FONT } from "./fonts";
import { IMAGES } from "../data/catalogueData";

export function TinningRods() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 lg:py-24">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-20 items-center">
        <div>
          <Reveal>
            <h1 style={{ fontFamily: DISPLAY_FONT }} className="uppercase text-[clamp(44px,5.8vw,82px)] font-black tracking-[0.02em] leading-[1.05]">
              <span className="block text-white">Nickel Silver</span>
              <span className="block text-[#e5233d] mt-2.5 sm:mt-4">Tinning Rods</span>
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-[17px] sm:text-[18.5px] leading-[1.65] text-white/80">
              <strong className="text-white">SUPER CUT</strong> Nickel Silver Tinning Rods are high-strength, multi-purpose oxyacetylene rods for joining and surfacing ferrous and non-ferrous metals. They are ideal for joining tungsten carbide and inserts with steel surface as well as serving as the bonding matrix for loose carbide grits.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <div className="w-full max-w-[340px] mx-auto aspect-[3/5] bg-white rounded-2xl p-6 flex items-center justify-center">
            <img
              src={IMAGES.goldWhiteRods}
              alt="Super Cut nickel silver tinning rods"
              className="w-full h-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import { GROTESK_FONT } from "./fonts";
import { IMAGES } from "../data/catalogueData";

function ArrowLink({ href, children }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2.5 text-white font-medium text-[15px] hover:text-[#e5233d] transition-colors">
      {children}
      <span className="w-5 h-5 rounded-full bg-[#e5233d] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="w-3 h-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
        </svg>
      </span>
    </Link>
  );
}

export function HomeSections() {
  return (
    <div className="bg-[#0f0f0f] text-white" style={{ fontFamily: GROTESK_FONT }}>
      {/* Crafting Excellence — text left, image right */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <h2 className="text-[38px] sm:text-[48px] font-semibold leading-[1.08] tracking-tight">
            Engineered for<br />extreme wear
          </h2>
          <div className="mt-6 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-white/80">
            <p>
              At SUPER CUT Hardface Solutions, we specialize in providing high-performance milling and hardfacing
              materials engineered to extend component lifespan, enhance operational efficiency, and reduce downtime
              across demanding industrial applications.
            </p>
            <p>
              Backed by years of field expertise and rigorous quality control, we deliver specialized wear solutions
              tailored to global industrial standards.
            </p>
          </div>
          <div className="mt-8">
            <ArrowLink href="/about">Learn More About Us</ArrowLink>
          </div>
        </Reveal>
        <Reveal variant="scale">
          <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
            <img src={IMAGES.collage} alt="Super Cut tungsten carbide inserts" className="w-full h-full object-contain p-6" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Commitment to Quality — image left, text right */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal variant="scale" className="order-2 lg:order-1">
          <div className="bg-white rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
            <img src={IMAGES.millTool} alt="Super Cut hardfaced milling tool" className="w-full h-full object-contain p-6 grayscale" loading="lazy" />
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2 lg:text-right">
          <h2 className="text-[38px] sm:text-[48px] font-semibold leading-[1.08] tracking-tight">
            Commitment to<br />quality
          </h2>
          <div className="mt-6 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-white/80">
            <p>
              Every shipment is backed by certified quality management systems and accredited testing standards —
              SUPER CUT is ISO 9001:2015 certified.
            </p>
            <p>
              From high-grade tungsten carbide grits to factory-sealed packaging, each product is made to deliver
              consistent strength and performance in the field.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Designed to Last — full-bleed darkened photo */}
      <section className="relative overflow-hidden">
        <img src={IMAGES.rodClose} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/75" />
        <Reveal className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-24 lg:py-36 max-w-4xl mx-auto text-center">
          <h2 className="text-[38px] sm:text-[52px] font-semibold leading-[1.08] tracking-tight">Designed to last</h2>
          <div className="mt-6 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-white/85">
            <p>
              Our composite rods deliver maximum abrasion resistance and cutting speed, while our hardfacing rope
              lays down a dense surface layer resistant to particle impact and sliding wear.
            </p>
            <p>
              With an established presence across key markets in the UAE, UK, and USA, our global network allows us to
              serve clients efficiently with expert technical assistance and rapid deployment.
            </p>
          </div>
          <div className="mt-9 flex justify-center">
            <ArrowLink href="/products">Discover Our Products</ArrowLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

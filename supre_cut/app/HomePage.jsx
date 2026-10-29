"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { ProgramBand } from "../components/ProgramBand";
import { About } from "../components/About";
import { Inserts } from "../components/Inserts";
import { Dimensions } from "../components/Dimensions";
import { CompositeRods } from "../components/CompositeRods";
import { HardfacingRope } from "../components/HardfacingRope";
import { TinningRods } from "../components/TinningRods";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: false,
      mirror: true,
      offset: 50,
    });

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 0.9,
    });
    window.__lenis = lenis;

    // AOS only needs to re-measure element offsets after layout actually
    // changes (resize, images loading) — not on every scroll frame. Calling
    // AOS.refresh() inside the RAF loop was forcing a full offset
    // recalculation 60x/second, fighting Lenis's own smoothing and making
    // the scroll feel janky instead of buttery.
    AOS.refreshHard();
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const el = document.querySelector(id);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -70, duration: 1.4 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", onLoad);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0b1526] antialiased overflow-x-clip" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <style>{`html.lenis, html.lenis body { height: auto; } .lenis.lenis-smooth { scroll-behavior: auto !important; } .lenis.lenis-stopped { overflow: hidden; } ::selection { background: #1a4b9c; color: #fff; }`}</style>
      <Navbar />
      <FloatingActions />
      <main>
        <Home />
        <ProgramBand />
        <About />
        <Inserts />
        <Dimensions />
        <CompositeRods />
        <HardfacingRope />
        <TinningRods />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

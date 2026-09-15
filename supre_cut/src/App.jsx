import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Inserts } from "./components/Inserts";
import { Dimensions } from "./components/Dimensions";
import { CompositeRods } from "./components/CompositeRods";
import { HardfacingRope } from "./components/HardfacingRope";
import { TinningRods } from "./components/TinningRods";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 50,
    });

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });
    window.__lenis = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      AOS.refresh();
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
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0b1526] antialiased overflow-x-clip" style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}>
      <style>{`html.lenis, html.lenis body { height: auto; } .lenis.lenis-smooth { scroll-behavior: auto !important; } .lenis.lenis-stopped { overflow: hidden; } ::selection { background: #1a4b9c; color: #fff; }`}</style>
      <Navbar />
      <main>
        <Home />
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

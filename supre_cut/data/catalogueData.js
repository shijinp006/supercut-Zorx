// Central catalogue data
// Images are matched from public/images folder

const img = (name) => {
  const dot = name.lastIndexOf(".");
  const base = dot !== -1 ? name.substring(0, dot) : name;
  return `/images/${base}.webp`;
};

export const IMAGES = {
  collage: img("1212121.webp"),
  goldWhiteRods: img("ChatGPT Image Sep 4 2026 12_15_07 PM.webp"),
  millTool: img("ChatGPT Image Sep 4 2026 12_33_30 PM.webp"),
  roundSingle: img("ChatGPT Image Sep 4 2026 12_06_44 PM.webp"),
  buckets: img("ChatGPT Image Sep 3 2026 03_00_28 PM.webp"),
  rodPodium: "/images/Compositer.jpeg",
  rodClose: img("WhatsApp Image 2026-09-02 at 10.11.48 AM.webp"),
  drillBit: img("ChatGPT Image Sep 4 2026 12_36_44 PM.webp"),
  ropeSpool: img("ChatGPT Image Sep 4 2026 12_55_12 PM.webp"),
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Composite Rods", href: "/composite-rods" },
  { label: "HF Rope", href: "/hf-rope" },
  { label: "Tinning Rods", href: "/tinning-rods" },
  { label: "Contact", href: "/contact" },
];

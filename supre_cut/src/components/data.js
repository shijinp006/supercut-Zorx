// Central catalogue data — mirrors PDF brochure 01-11
// Images are matched from public/images folder

const img = (name) => {
  const dot = name.lastIndexOf(".");
  const base = dot !== -1 ? name.substring(0, dot) : name;
  return `/images/${base}.webp`;
};

export const IMAGES = {
  collage: img("1212121.webp"),
  goldWhiteRods: img("ChatGPT Image Sep 4, 2026, 12_15_07 PM.webp"),
  millTool: img("ChatGPT Image Sep 4, 2026, 12_33_30 PM.webp"),
  roundSingle: img("ChatGPT Image Sep 4, 2026, 12_06_44 PM.webp"),
  buckets: img("ChatGPT Image Sep 3, 2026, 03_00_28 PM.webp"),
  rodPodium: img("ChatGPT Image Sep 3, 2026, 02_59_32 PM.webp"),
  rodClose: img("WhatsApp Image 2026-09-02 at 10.11.48 AM.webp"),
  drillBit: img("ChatGPT Image Sep 4, 2026, 12_36_44 PM.webp"),
};

export const INSERT_ROWS = [
  {
    id: "square",
    titleA: "SQUARE",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 3, 2026, 02_57_50 PM.webp"),
    desc: "SC006 — 3/8 high-precision square profile for milling & stabilizer dressing.",
    align: "right",
  },
  {
    id: "composite-rod",
    titleA: "TUNGSTEN",
    titleB: "CARBIDE COMPOSITE ROD",
    image: img("ChatGPT Image Sep 3, 2026, 02_59_32 PM.webp"),
    desc: "Flux-coated composite rod with crushed carbide for severe wear.",
    align: "left",
  },
  {
    id: "star-cut",
    titleA: "STAR CUT",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 3, 2026, 02_58_39 PM_nobg.png"),
    desc: "SC007–SC010 star geometry — aggressive cutting, high chip evacuation.",
    align: "right",
  },
  {
    id: "chip-breaker",
    titleA: "SC CHIP",
    titleB: "BREAKER",
    image: img("ChatGPT Image Sep 3, 2026, 02_52_31 PM.webp"),
    desc: "Ribbed breaker top for controlled chip formation in milling tools.",
    align: "right",
  },
  {
    id: "tricorn",
    titleA: "SC TRICORN",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 3, 2026, 02_56_58 PM.webp"),
    desc: "Triangular insert with concave face — fishing & hole-opener duty.",
    align: "left",
  },
  {
    id: "round-tapered",
    titleA: "ROUND TAPERED",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 4, 2026, 12_18_06 PM.webp"),
    desc: "SC001 round tapered — reamers, casing cutters & coring tools.",
    align: "right",
  },
  {
    id: "octacut",
    titleA: "SC OCTACUT",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 3, 2026, 02_53_51 PM.webp"),
    desc: "SC004 / SC005 octagon tapered — 8-point wear edge for stabilizers.",
    align: "right",
  },
  {
    id: "rectangular",
    titleA: "RECTANGULAR",
    titleB: "TAPERED INSERT",
    image: img("ChatGPT Image Sep 3, 2026, 02_52_56 PM.webp"),
    desc: "SC014 / SC015 brick pattern — screw feeders & sand mixers.",
    align: "left",
  },
  {
    id: "pdc",
    titleA: "PDC",
    titleB: "INSERTS",
    image: img("ChatGPT Image Sep 3, 2026, 02_55_57 PM.webp"),
    desc: "PDC cutters with premium diamond table for drilling performance.",
    align: "right",
  },
];

export const DIMENSIONS = [
  {
    type: "Round Tapered Inserts",
    image: "/images/ChatGPT Image Sep 4, 2026, 12_18_06 PM.webp",
    rows: [{ part: "SC001", dia: "3/8", thick: "1/4", len: "/" }],
  },
  {
    type: "Half Round Tapered",
    image: "/images/ChatGPT Image Sep 4, 2026, 12_06_44 PM.webp",
    rows: [
      { part: "SC002", dia: "0.366", thick: "3/16", len: "/" },
      { part: "SC003", dia: "3/8", thick: "1/4", len: "/" },
    ],
  },
  {
    type: "Octagon Tapered",
    image: "/images/ChatGPT Image Sep 3, 2026, 02_53_51 PM.webp",
    rows: [
      { part: "SC004", dia: "1/4", thick: "3/16", len: "/" },
      { part: "SC005", dia: "3/8", thick: "1/4", len: "/" },
    ],
  },
  {
    type: "Square",
    image: "/images/ChatGPT Image Sep 3, 2026, 02_57_50 PM.webp",
    rows: [{ part: "SC006", dia: "3/8", thick: "3/16", len: "" }],
  },
  {
    type: "Star Cut",
    image: "/images/ChatGPT Image Sep 3, 2026, 02_58_39 PM.webp",
    rows: [
      { part: "SC007", dia: "3/16", thick: "3/16", len: "/" },
      { part: "SC008", dia: "1/4", thick: "1/4", len: "/" },
      { part: "SC009", dia: "5/16", thick: "5/16", len: "/" },
      { part: "SC010", dia: "3/8", thick: "3/8", len: "/" },
    ],
  },
  {
    type: "SC Pyramid",
    image: "/images/WhatsApp Image 2026-09-02 at 1.39.44 PM.webp",
    rows: [{ part: "SC011", dia: "0.238", thick: "0.370", len: "/" }],
  },
  {
    type: "Rectangle HF3000 (Ribbed)",
    image: "/images/ChatGPT Image Sep 3, 2026, 02_52_31 PM.webp",
    rows: [
      { part: "SC012", dia: "5mm", thick: "3mm", len: "25mm" },
      { part: "SC013", dia: "5mm", thick: "3mm", len: "13mm" },
    ],
  },
  {
    type: "Rectangle Tapered",
    image: "/images/ChatGPT Image Sep 3, 2026, 02_52_56 PM.webp",
    rows: [
      { part: "SC014", dia: "3/8", thick: "1/4", len: "1/2" },
      { part: "SC015", dia: "3/8", thick: "3/8", len: "1/4" },
    ],
  },
];

export const MATRIX_GRADES = [
  { code: "SC-Cr-70", hard: "Carbide Grits (75%)", matrix: "25% Cu Matrix (Cu 56-66%, Fe 0.5% Max, Sn 0.5% Max, Zn Bal.)", apps: ["Reamers & Hole Openers", "Fishing & Milling Tools", "Casing Cutters & Coring Tools"] },
  { code: "SC-Cr-60", hard: "Carbide Grits (65%)", matrix: "35% Cu Matrix (Cu 56-66%, Fe 0.5% Max, Sn 0.5% Max, Zn Bal.)", apps: ["Stabilizers & Screw Feeders", "Reamers & Sand Mixers", "General Abrasive Applications"] },
];

export const GRIT_70 = [
  ["SC-CU-101", "10 – 18 Mesh"], ["SC-CU-102", "1/16 – 1/8"], ["SC-CU-103", "1/8 – 1/8"],
  ["SC-CU-104", "1/8 – 3/16"], ["SC-CU-105", "3/16 – 3/16"], ["SC-CU-106", "3/16 – 1/4"],
  ["SC-CU-107", "1/4 – 1/4"], ["SC-CU-108", "1/4 – 5/16"], ["SC-CU-109", "5/16 – 5/16"],
  ["SC-CU-110", "5/16 – 3/8"], ["SC-CU-111", "3/8 – 1/2"], ["SC-CU-112", "3/8 – 3/8"],
];

export const GRIT_60 = [
  ["SC-CU-113", "10 – 18 Mesh"], ["SC-CU-114", "1/16 – 1/8"], ["SC-CU-115", "1/8 – 1/8"],
  ["SC-CU-116", "1/8 – 3/16"], ["SC-CU-117", "3/16 – 3/16"], ["SC-CU-118", "3/16 – 1/4"],
  ["SC-CU-119", "1/4 – 1/4"], ["SC-CU-120", "1/4 – 5/16"], ["SC-CU-121", "5/16 – 5/16"],
  ["SC-CU-122", "5/16 – 3/8"], ["SC-CU-123", "3/8 – 1/2"], ["SC-CU-124", "3/8 – 3/8"],
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Inserts", href: "#inserts" },
  { label: "Dimensions", href: "#dimensions" },
  { label: "Composite Rods", href: "#composite" },
  { label: "HF Rope", href: "#rope" },
  { label: "Tinning Rods", href: "#tinning" },
  { label: "Contact", href: "#contact" },
];

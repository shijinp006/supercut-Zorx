import "./globals.css";

export const metadata = {
  title: "SUPER CUT — Hardface Solutions | Premium Milling & Wear-Resistant Alloys",
  description:
    "SUPER CUT Hardface Solutions — Premium Milling, Hardface & Wear-Resistant Alloys. Tungsten Carbide Composite Rods, Inserts, Hardfacing Rope, Brazing Alloys.",
  icons: {
    icon: "/images/supercut_logo_stacked.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

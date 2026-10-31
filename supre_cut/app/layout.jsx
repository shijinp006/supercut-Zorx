import "./globals.css";
import { SiteShell } from "../components/SiteShell";

export const metadata = {
  title: {
    default: "SUPER CUT — Hardface Solutions | Premium Milling & Wear-Resistant Alloys",
    template: "%s | SUPER CUT Hardface Solutions",
  },
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
          href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

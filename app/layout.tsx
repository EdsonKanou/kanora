import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

// next/font injecte les variables CSS --font-syne et --font-dm-sans sur <html>
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",       // utilisé via var(--font-syne) dans le CSS
  weight: ["400", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,     // évite le faux-bold du fallback qui étire
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "KANORA — Design. Digital. Intelligence.",
    template: "%s | KANORA Studio",
  },
  description:
    "Studio Digital & IA premium. Branding, web design et intelligence artificielle pour entreprises et startups ambitieuses.",
  keywords: ["studio digital", "agence IA", "branding", "web design premium", "Paris"],
  openGraph: {
    title: "KANORA — Design. Digital. Intelligence.",
    description: "Studio Digital & IA premium.",
    url: "https://kanora.studio",
    siteName: "KANORA Studio",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Les variables --font-syne et --font-dm-sans sont disponibles dans tout le DOM
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
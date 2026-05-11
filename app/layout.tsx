import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
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
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`} data-theme="dark">
      <body>
        {/*
          ThemeProvider est "use client" — il lit localStorage et pose
          data-theme="dark"|"light" sur <html> côté client.
          On met data-theme="dark" par défaut sur <html> pour le SSR
          pour éviter le flash de thème clair au premier rendu.
        */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 lg:px-20 transition-all duration-300 ${
          scrolled ? "glass-nav shadow-lg" : "glass-nav"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-syne font-extrabold text-xl tracking-[0.12em] text-gradient-white">
          KANORA
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-200 ${
                    isActive ? "text-[var(--color-k-text)]" : "text-[var(--color-k-text2)] hover:text-[var(--color-k-text)]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--color-k-accent)]"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-k-accent)] text-white text-sm font-medium tracking-wide transition-all duration-300 hover:brightness-110 hover:-translate-y-px hover:glow-accent-sm"
        >
          Démarrer un projet
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[6px] p-2 z-50 relative"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--color-k-text)] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-k-text)] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--color-k-text)] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="font-syne font-extrabold text-4xl tracking-tight text-[var(--color-k-text)] hover:text-[var(--color-k-accent)] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <Link
                href="/contact"
                className="mt-4 px-8 py-3 rounded-lg bg-[var(--color-k-accent)] text-white font-medium text-lg"
              >
                Démarrer un projet →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/content";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 lg:px-20 glass-nav ${
          scrolled ? "shadow-lg" : ""
        }`}
        style={{ transition: "box-shadow 0.3s ease" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-syne font-extrabold text-xl tracking-[0.12em] text-gradient-white flex-shrink-0"
        >
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
                  className="relative text-sm tracking-wide transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--k-text)" : "var(--k-text2)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--k-text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = isActive
                      ? "var(--k-text)"
                      : "var(--k-text2)")
                  }
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--k-accent)" }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: ThemeToggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wide transition-all duration-300 hover:brightness-110 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, var(--k-accent), #8B5CF6)",
              boxShadow: "0 4px 20px var(--k-glow)",
            }}
          >
            Démarrer un projet
          </Link>
        </div>

        {/* Mobile: ThemeToggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-[6px] p-2 z-50 relative"
            aria-label="Menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--k-text)",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--k-text)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "var(--k-text)",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{
              background: "var(--k-bg)",
              backdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="font-syne font-extrabold text-4xl tracking-tight transition-colors duration-200"
                  style={{ color: "var(--k-text)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--k-accent)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--k-text)")
                  }
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
                className="mt-4 px-8 py-3 rounded-xl text-white font-medium text-lg"
                style={{ background: "linear-gradient(135deg, var(--k-accent), #8B5CF6)" }}
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
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Button ────────────────────────────────────────────────
type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export function Button({ children, href, variant = "primary", className, onClick }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#7C6FFF] to-[#8B5CF6] text-white hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(124,111,255,0.4)]",
    ghost:
      "border text-[var(--k-text)] hover:border-[var(--k-accent)] hover:text-[var(--k-accent)] hover:bg-[rgba(124,111,255,0.05)]",
  };

  const ghostBorder = variant === "ghost" ? { borderColor: "var(--k-border2)" } : {};

  const cls = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={cls} style={ghostBorder}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls} style={ghostBorder}>
      {children}
    </button>
  );
}

// ─── Section Tag ───────────────────────────────────────────
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase px-3.5 py-1.5 rounded-full border"
      style={{
        color: "var(--k-accent)",
        borderColor: "rgba(124,111,255,0.3)",
        background: "rgba(124,111,255,0.06)",
      }}
    >
      {children}
    </span>
  );
}

// ─── FadeUp — viewport-triggered reveal ────────────────────
type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger container ─────────────────────────────────────
export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
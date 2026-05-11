"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/index";

// Floating glass card
function HeroCard({
  label,
  value,
  sub,
  barWidth,
  delay,
}: {
  label: string;
  value: string;
  sub: string;
  barWidth: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass rounded-2xl px-6 py-5 animate-float"
      style={{ animationDelay: `${delay * 2}s` }}
    >
      <p className="text-[11px] tracking-[0.08em] uppercase mb-1" style={{ color: "var(--k-text3)" }}>
        {label}
      </p>
      <p className="font-syne font-bold text-2xl text-gradient leading-none">{value}</p>
      <p className="text-xs mt-1 font-light" style={{ color: "var(--k-text2)" }}>{sub}</p>
      <div className="h-0.5 rounded-full mt-3 overflow-hidden" style={{ background: "var(--k-border2)" }}>
        <div
          className="h-full rounded-full"
          style={{
            width: barWidth,
            background: "linear-gradient(90deg, #7C6FFF, #00D1FF)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Generate particles once on mount
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 22; i++) {
      const p = document.createElement("div");
      p.style.cssText = `
        position:absolute;
        width:2px; height:2px;
        background:#7C6FFF;
        border-radius:50%;
        left:${Math.random() * 100}%;
        animation: rise ${8 + Math.random() * 8}s linear infinite;
        animation-delay: ${Math.random() * 12}s;
        opacity: 0;
      `;
      container.appendChild(p);
    }
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 pt-[72px]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbs */}
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(124,111,255,0.35), transparent)",
            filter: "blur(80px)",
            top: -200, right: -100,
          }}
        />
        <div
          className="absolute rounded-full animate-float2"
          style={{
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(0,209,255,0.25), transparent)",
            filter: "blur(80px)",
            bottom: -80, left: -60,
          }}
        />
        <div
          className="absolute rounded-full animate-float3"
          style={{
            width: 300, height: 300,
            background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent)",
            filter: "blur(60px)",
            top: "40%", left: "45%",
          }}
        />
        {/* Grid */}
        <div className="absolute inset-0 grid-overlay" />
        {/* Particles */}
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />
      </div>

      {/* ── Content ── */}
      <div className="container-k relative z-10 flex items-center justify-between gap-12 py-20">

        {/* Left — text */}
        <div className="max-w-[680px] flex-1">
          {/* Badge */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-xs tracking-[0.08em]"
            style={{
              borderColor: "var(--k-border2)",
              background: "var(--k-glass)",
              color: "var(--k-text2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--k-accent2)", animation: "pulseGlow 2s infinite" }}
            />
            Studio Digital & IA — Paris / Global
          </motion.div>

          {/* Title */}
          <motion.h1
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="font-syne font-extrabold leading-[0.9] tracking-[-0.03em] mb-5"
            style={{ fontSize: "clamp(72px, 11vw, 148px)" }}
          >
            KAN<span className="text-gradient">ORA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="font-syne text-sm md:text-base tracking-[0.28em] uppercase mb-7"
            style={{ color: "var(--k-text2)" }}
          >
            Design · Digital · Intelligence
          </motion.p>

          {/* Sub */}
          <motion.p
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-base md:text-lg font-light leading-[1.75] max-w-[520px] mb-12"
            style={{ color: "var(--k-text2)" }}
          >
            Nous aidons les entreprises, startups et événements à créer des
            expériences digitales modernes grâce au branding, au web et à
            l&apos;intelligence artificielle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.85}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary">
              Démarrer un projet
            </Button>
            <Button href="/portfolio" variant="ghost">
              Voir nos réalisations →
            </Button>
          </motion.div>
        </div>

        {/* Right — floating cards (hidden on mobile) */}
        <div className="hidden xl:flex flex-col gap-4 flex-shrink-0">
          <HeroCard label="Projets livrés"         value="50+"  sub="Expériences digitales uniques"   barWidth="82%"  delay={1.0} />
          <HeroCard label="Satisfaction client"    value="98%"  sub="Excellence mesurée"              barWidth="98%"  delay={1.2} />
          <HeroCard label="Solutions IA déployées" value="30+"  sub="Automatisations intelligentes"   barWidth="65%"  delay={1.4} />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--k-bg), transparent)" }}
      />
    </section>
  );
}
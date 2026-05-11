"use client";

import { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";

import { Button } from "@/components/ui/index";

/* =========================================================
   FLOATING GLASS CARD
========================================================= */

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
      transition={{
        delay,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        glass
        rounded-2xl
        px-6
        py-5
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(124,111,255,0.08)]
        animate-float
      "
      style={{
        animationDelay: `${delay * 2}s`,
      }}
    >
      <p className="mb-1 text-[11px] uppercase tracking-[0.08em] text-white/40">
        {label}
      </p>

      <p className="font-syne text-2xl font-bold leading-none text-gradient">
        {value}
      </p>

      <p className="mt-1 text-xs font-light text-white/60">
        {sub}
      </p>

      {/* Progress bar */}
      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full"
          style={{
            width: barWidth,
            background:
              "linear-gradient(90deg, #7C6FFF, #00D1FF)",
          }}
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   HERO SECTION
========================================================= */

export default function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null);

  /* =====================================================
     PARTICLES
  ===================================================== */

  useEffect(() => {
    const container = particlesRef.current;

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 22; i++) {
      const particle = document.createElement("div");

      particle.style.cssText = `
        position:absolute;
        width:2px;
        height:2px;
        background:#7C6FFF;
        border-radius:999px;
        left:${Math.random() * 100}%;

        animation: rise ${8 + Math.random() * 8}s linear infinite;
        animation-delay:${Math.random() * 12}s;

        opacity:0;
      `;

      container.appendChild(particle);
    }
  }, []);

  /* =====================================================
     MOTION VARIANTS
  ===================================================== */

  const fadeUpVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: (delay: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pt-[72px]
        md:px-12
        lg:px-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* ORB 1 */}
        <div
          className="absolute right-[-100px] top-[-200px] animate-float rounded-full"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(124,111,255,0.35), transparent)",
            filter: "blur(80px)",
          }}
        />

        {/* ORB 2 */}
        <div
          className="absolute bottom-[-80px] left-[-60px] animate-float2 rounded-full"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(0,209,255,0.25), transparent)",
            filter: "blur(80px)",
          }}
        />

        {/* ORB 3 */}
        <div
          className="absolute animate-float3 rounded-full"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "45%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.2), transparent)",
            filter: "blur(60px)",
          }}
        />

        {/* GRID */}
        <div className="absolute inset-0 grid-overlay" />

        {/* PARTICLES */}
        <div
          ref={particlesRef}
          className="absolute inset-0 overflow-hidden"
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          container-k
          relative
          z-10
          flex
          items-center
          justify-between
          gap-12
          py-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="max-w-[680px] flex-1">

          {/* BADGE */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              tracking-[0.08em]
              text-white/60
              backdrop-blur-xl
            "
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "#00D1FF",
                animation: "pulseGlow 2s infinite",
              }}
            />

            Studio Digital & IA — Paris / Global
          </motion.div>

          {/* TITLE */}
          <motion.h1
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              mb-5
              font-syne
              font-extrabold
              leading-[0.9]
              tracking-[-0.05em]
            "
            style={{
              fontSize: "clamp(72px, 11vw, 148px)",
            }}
          >
            KAN
            <span className="text-gradient">ORA</span>
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              mb-7
              font-syne
              text-sm
              uppercase
              tracking-[0.28em]
              text-white/50
              md:text-base
            "
          >
            Design · Digital · Intelligence
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="
              mb-12
              max-w-[520px]
              text-base
              font-light
              leading-[1.8]
              text-white/60
              md:text-lg
            "
          >
            Nous aidons les entreprises, startups et événements
            à créer des expériences digitales modernes grâce
            au branding, au web et à l’intelligence artificielle.
          </motion.p>

          {/* CTA */}
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

        {/* =================================================
            RIGHT CARDS
        ================================================= */}

        <div className="hidden flex-shrink-0 flex-col gap-4 xl:flex">

          <HeroCard
            label="Projets livrés"
            value="50+"
            sub="Expériences digitales uniques"
            barWidth="82%"
            delay={1}
          />

          <HeroCard
            label="Satisfaction client"
            value="98%"
            sub="Excellence mesurée"
            barWidth="98%"
            delay={1.2}
          />

          <HeroCard
            label="Solutions IA déployées"
            value="30+"
            sub="Automatisations intelligentes"
            barWidth="65%"
            delay={1.4}
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
        "
        style={{
          background:
            "linear-gradient(to top, #080808, transparent)",
        }}
      />
    </section>
  );
}
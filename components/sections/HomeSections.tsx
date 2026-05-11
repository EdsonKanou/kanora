"use client";

import { motion } from "framer-motion";
import { WHY_POINTS, PROCESS_STEPS, TESTIMONIALS } from "@/data/content";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem, Button } from "@/components/ui/index";

// ─── WHY KANORA ─────────────────────────────────────────────
export function WhySection() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: "var(--color-k-bg)" }}
    >
      {/* BG glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200, right: -200,
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(124,111,255,0.05), transparent)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }}
      />

      <div className="container-k">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <FadeUp>
            <SectionTag>Pourquoi KANORA</SectionTag>
            <p
              className="font-syne font-extrabold leading-[1] tracking-[-0.04em] mt-6"
              style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
            >
              L&apos;<span className="text-gradient">ambition</span>
              <br />comme
              <br />standard.
            </p>
          </FadeUp>

          {/* Right */}
          <StaggerContainer className="flex flex-col gap-1">
            {WHY_POINTS.map((point) => (
              <StaggerItem key={point.title}>
                <motion.div
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-transparent transition-all duration-300 cursor-default"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--color-k-bg3)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                >
                  <div
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg text-sm mt-0.5"
                    style={{
                      background: "rgba(124,111,255,0.1)",
                      color: "var(--color-k-accent)",
                    }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-semibold text-sm mb-1">{point.title}</h4>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "var(--color-k-text2)" }}>
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ────────────────────────────────────────────────
export function ProcessSection() {
  return (
    <section className="section-pad" style={{ background: "var(--color-k-bg2)" }}>
      <div className="container-k">
        <FadeUp className="text-center mb-20">
          <SectionTag>Notre Processus</SectionTag>
          <h2
            className="font-syne font-extrabold tracking-tight leading-[1.1] mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Du concept<br />au lancement
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), #7C6FFF, rgba(255,255,255,0.12), transparent)",
            }}
          />

          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.num} className="text-center relative z-10">
              <motion.div
                whileHover={{
                  background: "var(--color-k-accent)",
                  borderColor: "var(--color-k-accent)",
                  boxShadow: "0 0 24px rgba(124,111,255,0.5)",
                  transition: { duration: 0.2 },
                }}
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 border font-syne font-bold text-lg cursor-default"
                style={{
                  background: "var(--color-k-bg3)",
                  borderColor: "rgba(255,255,255,0.12)",
                  color: "var(--color-k-text2)",
                }}
              >
                {step.num}
              </motion.div>
              <h4 className="font-syne font-bold text-sm mb-2">{step.title}</h4>
              <p className="text-xs font-light leading-relaxed" style={{ color: "var(--color-k-text2)" }}>
                {step.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ───────────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="section-pad" style={{ background: "var(--color-k-bg)" }}>
      <div className="container-k">
        <FadeUp className="text-center mb-16">
          <SectionTag>Témoignages</SectionTag>
          <h2
            className="font-syne font-extrabold tracking-tight leading-[1.1] mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            Ce que disent<br />nos clients
          </h2>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative rounded-2xl p-8 border overflow-hidden transition-[border-color] duration-300"
                style={{
                  background: "var(--color-k-bg3)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,111,255,0.2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)")
                }
              >
                {/* Big quote mark */}
                <span
                  className="absolute top-2 right-5 font-syne font-extrabold leading-none pointer-events-none select-none"
                  style={{ fontSize: 100, color: "rgba(124,111,255,0.06)" }}
                >
                  &rdquo;
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[13px]" style={{ color: "var(--color-k-accent)" }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-sm font-light leading-[1.8] italic mb-6 relative z-10"
                  style={{ color: "var(--color-k-text)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-sm text-white flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C6FFF, #00D1FF)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--color-k-text2)" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ─── FINAL CTA ──────────────────────────────────────────────
export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden text-center px-6 py-40 md:px-12"
      style={{ background: "var(--color-k-bg2)" }}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% -20%, rgba(124,111,255,0.14), transparent 60%)",
        }}
      />
      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #7C6FFF, transparent)" }}
      />

      <div className="container-k relative z-10">
        <FadeUp>
          <SectionTag>Prêt à décoller ?</SectionTag>
          <h2
            className="font-syne font-extrabold tracking-tight leading-[1.1] mt-6 mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Construisons quelque chose<br />
            d&apos;<span className="text-gradient">exceptionnel.</span>
          </h2>
          <p
            className="text-base md:text-lg font-light leading-[1.75] max-w-[540px] mx-auto mb-12"
            style={{ color: "var(--color-k-text2)" }}
          >
            Du branding aux solutions IA, KANORA accompagne les marques
            ambitieuses dans la création d&apos;expériences digitales modernes
            et impactantes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary">Réserver un appel</Button>
            <Button href="/contact" variant="ghost">Lancer votre projet →</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
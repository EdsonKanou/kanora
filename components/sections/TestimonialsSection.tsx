"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/index";

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-k-bg">
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
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="relative rounded-2xl p-8 border overflow-hidden transition-[border-color] duration-300 flex flex-col"
      style={{
        background: "var(--k-bg3)",
        borderColor: "var(--k-border)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "rgba(124,111,255,0.25)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--k-border)")
      }
    >
      {/* Guillemet décoratif */}
      <span
        className="absolute top-2 right-5 font-syne font-extrabold leading-none pointer-events-none select-none"
        style={{ fontSize: 100, color: "rgba(124,111,255,0.06)" }}
      >
        &rdquo;
      </span>

      {/* Étoiles */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-[13px] text-k-accent">★</span>
        ))}
      </div>

      {/* Citation */}
      <p
        className="text-sm font-light leading-[1.8] italic mb-7 relative z-10 flex-1"
        style={{ color: "var(--k-text)" }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Auteur — avec espace photo */}
      <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: "var(--k-border)" }}>
        {/* Zone photo — remplacer par <Image> quand tu as la vraie photo */}
        <div
          className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative flex items-center justify-center"
          style={{
            background: t.photo
              ? "transparent"
              : "linear-gradient(135deg, var(--k-accent), var(--k-accent2))",
            border: "2px solid var(--k-border2)",
          }}
        >
          {t.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.photo}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-syne font-bold text-sm text-white">
              {t.initials}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="font-syne font-semibold text-sm truncate" style={{ color: "var(--k-text)" }}>
            {t.name}
          </p>
          <p className="text-xs truncate" style={{ color: "var(--k-text2)" }}>
            {t.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
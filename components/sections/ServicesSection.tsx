"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/content";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/index";

export default function ServicesSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--k-bg)" }}
    >
      <div className="container-k">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <FadeUp>
            <SectionTag>Nos Services</SectionTag>
            <h2
              className="font-syne font-extrabold tracking-tight leading-[1.1] mt-4"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              L&apos;excellence<br />à chaque étape
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p
              className="text-base md:text-lg font-light leading-[1.75]"
              style={{ color: "var(--k-text2)" }}
            >
              De l&apos;identité visuelle aux systèmes intelligents — nous
              construisons des expériences digitales qui marquent les esprits
              et accélèrent vos ambitions.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative group rounded-2xl p-9 flex flex-col h-full cursor-pointer overflow-hidden border card-top-line transition-[border-color,box-shadow] duration-400"
      style={{
        background: "var(--k-bg3)",
        borderColor: "var(--k-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,111,255,0.3)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(124,111,255,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--k-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(124,111,255,0.07), transparent)" }}
      />

      {/* Icon */}
      <div
        className="w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-7 flex-shrink-0"
        style={{
          width: 52, height: 52,
          background: "rgba(124,111,255,0.1)",
          border: "1px solid rgba(124,111,255,0.2)",
          color: "var(--k-accent)",
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-syne font-bold text-xl mb-3 tracking-[-0.01em]">
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm font-light leading-[1.75] mb-6 flex-1"
        style={{ color: "var(--k-text2)" }}
      >
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-7">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-3 py-1 rounded-full border"
            style={{
              color: "var(--k-text2)",
              borderColor: "var(--k-border2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow link */}
      <Link
        href={service.href}
        className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-4"
        style={{ color: "var(--k-accent)" }}
      >
        Explorer
        <motion.span
          className="inline-block"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}
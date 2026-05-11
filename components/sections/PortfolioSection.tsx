"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/data/content";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem, Button } from "@/components/ui/index";

// Visual placeholder for each project
function ProjectVisual({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
      }}
    >
      <div className="text-center px-6">
        <p
          className="font-syne font-extrabold tracking-[-0.02em] text-gradient"
          style={{ fontSize: project.featured ? 56 : 32 }}
        >
          {project.name.split(" ")[0]}
        </p>
        <p
          className="text-xs tracking-[0.2em] mt-2 uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          {project.category}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: typeof PROJECTS[0];
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.35, ease: "easeOut" } }}
      className="group rounded-2xl overflow-hidden border cursor-pointer transition-[border-color,box-shadow] duration-400"
      style={{
        background: "var(--k-bg3)",
        borderColor: "var(--k-border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,111,255,0.25)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 32px 80px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--k-border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Visual */}
      <div
        className="relative overflow-hidden"
        style={{ height: featured ? 320 : 240 }}
      >
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ProjectVisual project={project} />
        </motion.div>
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(to top, rgba(22,22,22,0.8), transparent)" }}
        />
      </div>

      {/* Info */}
      <div className="p-6">
        <p
          className="text-[11px] tracking-[0.1em] uppercase mb-2 font-medium"
          style={{ color: "var(--k-accent)" }}
        >
          {project.category}
        </p>
        <h3 className="font-syne font-bold text-lg mb-1">{project.name}</h3>
        <p className="text-sm font-semibold mb-2" style={{ color: "var(--k-text2)" }}>
          {project.subtitle}
        </p>
        <p
          className="text-sm font-light leading-relaxed mb-4"
          style={{ color: "var(--k-text2)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full border"
              style={{
                color: "var(--k-text3)",
                borderColor: "var(--k-border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      className="section-pad"
      style={{ background: "var(--k-bg2)" }}
    >
      <div className="container-k">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <FadeUp>
            <SectionTag>Portfolio</SectionTag>
            <h2
              className="font-syne font-extrabold tracking-tight leading-[1.1] mt-4"
              style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
            >
              Réalisations<br />sélectionnées
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Button href="/portfolio" variant="ghost">Tout voir →</Button>
          </FadeUp>
        </div>

        {/* Grid: 1 featured (span 2) + 3 regular */}
        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          <StaggerItem className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </StaggerItem>
          {rest.slice(0, 1).map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
          {rest.slice(1, 3).map((p) => (
            <StaggerItem key={p.id}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
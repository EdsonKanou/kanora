"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PROJECTS } from "@/data/content";

import {
  SectionTag,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  Button,
} from "@/components/ui/index";

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof PROJECTS)[0];
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{
        y: -8,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-white/20
        hover:shadow-[0_0_80px_-20px_rgba(124,108,255,0.25)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="relative overflow-hidden"
        style={{
          height: featured ? 420 : 280,
        }}
      >
        <Image
          src={project.image ?? "/placeholder.jpg"}
          alt={project.name}
          fill
          priority={featured}
          loading={featured ? "eager" : "lazy"}
          className="
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/85
            via-black/20
            to-transparent
          "
        />

        {/* Glow */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.18),transparent_70%)]
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            bottom-0
            left-0
            z-10
            w-full
            p-7
          "
        >
          <p
            className="
              mb-3
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-white/50
            "
          >
            {project.category}
          </p>

          <h3
            className="
              font-syne
              text-3xl
              font-extrabold
              tracking-[-0.04em]
              text-white
            "
          >
            {project.name}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-white/70
            "
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* =====================================================
          INFO
      ===================================================== */}

      <div className="p-7">

        <p
          className="
            text-[15px]
            leading-[1.8]
            text-white/60
          "
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-1.5
                text-[11px]
                uppercase
                tracking-[0.08em]
                text-white/50
                backdrop-blur-xl
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PORTFOLIO SECTION
========================================================= */

export default function PortfolioSection() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section className="section-pad bg-[#0A0A0A]">

      <div className="container-k">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-16
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <FadeUp>
            <SectionTag>Portfolio</SectionTag>

            <h2
              className="
                mt-4
                font-syne
                text-[clamp(36px,5vw,64px)]
                font-extrabold
                leading-[1]
                tracking-[-0.05em]
              "
            >
              Réalisations<br />
              sélectionnées
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <Button href="/portfolio" variant="ghost">
              Tout voir →
            </Button>
          </FadeUp>
        </div>

        {/* =================================================
            GRID
        ================================================= */}

        <StaggerContainer className="grid gap-5 md:grid-cols-3">

          {/* Featured */}
          <StaggerItem className="md:col-span-2">
            <ProjectCard
              project={featured}
              featured
            />
          </StaggerItem>

          {/* Right top */}
          {rest.slice(0, 1).map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}

          {/* Bottom */}
          {rest.slice(1, 3).map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}

        </StaggerContainer>
      </div>
    </section>
  );
}
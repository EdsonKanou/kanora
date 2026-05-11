import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  SectionTag,
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/index";

import { PROJECTS } from "@/data/content";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        {/* =======================================================
            HERO
        ======================================================= */}

        <section className="relative px-6 pt-[160px] pb-24 md:px-12 lg:px-20">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
            <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="container-k">
            <FadeUp>
              <SectionTag>Portfolio</SectionTag>

              <h1
                className="
                  mt-6
                  max-w-[900px]
                  font-syne
                  text-[clamp(58px,8vw,120px)]
                  font-extrabold
                  leading-[0.92]
                  tracking-[-0.06em]
                "
              >
                Des expériences
                <br />
                <span className="text-gradient">
                  pensées pour marquer.
                </span>
              </h1>

              <p
                className="
                  mt-8
                  max-w-[620px]
                  text-lg
                  leading-[1.9]
                  text-white/60
                "
              >
                Nous concevons des identités digitales premium,
                des plateformes immersives et des expériences
                qui transforment l’image des marques ambitieuses.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* =======================================================
            PORTFOLIO GRID
        ======================================================= */}

        <section className="px-6 pb-32 md:px-12 lg:px-20">
          <div className="container-k">
            <StaggerContainer className="grid gap-6 md:grid-cols-3">
              {/* Featured */}
              <StaggerItem className="md:col-span-2">
                <ProjectCard project={PROJECTS[0]} height={520} />
              </StaggerItem>

              <StaggerItem>
                <ProjectCard project={PROJECTS[1]} height={520} />
              </StaggerItem>

              {PROJECTS.slice(2).map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} height={340} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ===========================================================
   PROJECT CARD
=========================================================== */

function ProjectCard({
  project,
  height,
}: {
  project: (typeof PROJECTS)[0];
  height: number;
}) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-700
        hover:-translate-y-2
        hover:border-white/20
      "
    >
      {/* =======================================================
          VISUAL
      ======================================================= */}

      <div
        className="relative overflow-hidden"
        style={{ height }}
      >
        {/* IMAGE */}
        {/* 
          AJOUTE TES IMAGES ICI :
          /public/projects/nova.webp
          /public/projects/maison-verde.webp
          etc...
        */}

        <Image
          src={project.image}
          alt={project.name}
          fill
          priority={project.featured}
          className="
            object-cover
            transition-transform
            duration-[1400ms]
            ease-out
            group-hover:scale-105
          "
        />

        {/* Gradient overlay */}
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
            bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.16),transparent_70%)]
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
              tracking-[0.24em]
              text-white/50
            "
          >
            {project.category}
          </p>

          <h2
            className="
              font-syne
              text-3xl
              font-extrabold
              tracking-[-0.04em]
              text-white
              md:text-4xl
            "
          >
            {project.name}
          </h2>

          <p
            className="
              mt-3
              max-w-[520px]
              text-sm
              leading-relaxed
              text-white/70
            "
          >
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* =======================================================
          INFO
      ======================================================= */}

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
    </article>
  );
}
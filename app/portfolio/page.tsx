import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/index";
import { PROJECTS } from "@/data/content";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="px-6 pt-[140px] pb-20 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg)" }}
        >
          <div className="container-k">
            <FadeUp>
              <SectionTag>Portfolio</SectionTag>
              <h1
                className="font-syne font-extrabold tracking-tight leading-[1.0] mt-5"
                style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
              >
                Nos<br />
                <span className="text-gradient">réalisations</span>
              </h1>
              <p
                className="mt-6 text-lg font-light leading-[1.75] max-w-[540px]"
                style={{ color: "var(--color-k-text2)" }}
              >
                Chaque projet est une collaboration unique. Voici des exemples
                de ce que nous construisons pour des marques qui refusent
                d&apos;être ordinaires.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Grid */}
        <section
          className="px-6 pb-32 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg2)" }}
        >
          <div className="container-k">
            <StaggerContainer className="grid md:grid-cols-3 gap-5">
              {/* Featured — span 2 */}
              <StaggerItem className="md:col-span-2">
                <ProjectCard project={PROJECTS[0]} height={380} />
              </StaggerItem>
              <StaggerItem>
                <ProjectCard project={PROJECTS[1]} height={380} />
              </StaggerItem>
              {PROJECTS.slice(2).map((p) => (
                <StaggerItem key={p.id}>
                  <ProjectCard project={p} height={280} />
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

function ProjectCard({
  project,
  height,
}: {
  project: (typeof PROJECTS)[0];
  height: number;
}) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border cursor-pointer transition-all duration-400 hover:-translate-y-2"
      style={{
        background: "var(--color-k-bg3)",
        borderColor: "rgba(255,255,255,0.07)",
      }}
    >
      {/* Visual */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height,
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
        }}
      >
        <div className="text-center px-6 transition-transform duration-500 group-hover:scale-105">
          <p
            className="font-syne font-extrabold text-gradient tracking-tight"
            style={{ fontSize: project.featured ? 64 : 40 }}
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
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{
            background: "linear-gradient(to top, rgba(22,22,22,0.7), transparent)",
          }}
        />
      </div>

      {/* Info */}
      <div className="p-6">
        <p
          className="text-[11px] tracking-[0.1em] uppercase mb-2"
          style={{ color: "var(--color-k-accent)" }}
        >
          {project.category}
        </p>
        <h3 className="font-syne font-bold text-lg mb-1">{project.name}</h3>
        <p className="text-sm mb-3 font-light" style={{ color: "var(--color-k-text2)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full border"
              style={{
                color: "var(--color-k-text3)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
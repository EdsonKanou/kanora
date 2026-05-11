import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp, StaggerContainer, StaggerItem, Button } from "@/components/ui/index";

export const metadata: Metadata = { title: "À propos" };

const cards = [
  {
    title: "Notre Vision",
    body: "Devenir le studio digital de référence pour les marques ambitieuses d'Afrique et du monde — en créant des expériences qui rivalisent avec les meilleures productions mondiales, avec une sensibilité culturelle unique.",
    accent: false,
  },
  {
    title: "Notre Mission",
    body: "Transformer la vision de nos clients en réalité digitale tangible. Chaque projet est une opportunité de créer quelque chose qui dépasse les attentes. Nous ne livrons pas des sites web — nous livrons des armes de croissance.",
    accent: false,
  },
  {
    title: "Notre Philosophie",
    body: "Le beau est une stratégie. L'excellence n'est pas un luxe — c'est un avantage compétitif. Chaque pixel, chaque mot, chaque interaction peut faire la différence entre une marque oubliable et une marque inoubliable.",
    accent: false,
  },
  {
    title: "Vision 2027",
    body: "Être présent sur 3 continents, accompagner plus de 200 marques ambitieuses et avoir redéfini les standards du digital créatif en Afrique francophone. KANORA sera à nos marchés ce que Pentagram est au design mondial.",
    accent: true,
  },
];

const values = [
  { icon: "✦", title: "Excellence",   desc: "Chaque livrable doit être notre meilleur travail à ce jour." },
  { icon: "◈", title: "Innovation",   desc: "Toujours à la frontière des outils, des tendances et des possibles." },
  { icon: "★", title: "Impact",        desc: "Nous mesurons notre succès aux résultats de nos clients." },
  { icon: "◐", title: "Intégrité",    desc: "Transparence, honnêteté et respect à chaque étape du projet." },
  { icon: "⬡", title: "Ambition",     desc: "Viser l'international, dépasser les standards locaux, toujours." },
  { icon: "→", title: "Réactivité",   desc: "Disponibles, rapides et proactifs dans chaque collaboration." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="px-6 pt-[140px] pb-24 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg)" }}
        >
          <div className="container-k">
            <FadeUp>
              <SectionTag>À propos</SectionTag>
              <h1
                className="font-syne font-extrabold tracking-tight leading-[1.0] mt-5"
                style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
              >
                Bâtir<br />
                <span className="text-gradient">l&apos;avenir</span>
                <br />digital.
              </h1>
              <p
                className="mt-6 text-lg font-light leading-[1.75] max-w-[560px]"
                style={{ color: "var(--color-k-text2)" }}
              >
                KANORA est né de la conviction que les marques africaines et
                globales méritent une présence digitale au niveau des meilleures
                agences mondiales — sans compromis.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Vision / Mission / Philosophy */}
        <section
          className="px-6 pb-24 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg2)" }}
        >
          <div className="container-k grid md:grid-cols-2 gap-5">
            {cards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl border p-10 h-full"
                  style={{
                    background: c.accent
                      ? "rgba(124,111,255,0.04)"
                      : "var(--color-k-bg3)",
                    borderColor: c.accent
                      ? "rgba(124,111,255,0.2)"
                      : "rgba(255,255,255,0.07)",
                  }}
                >
                  <h3
                    className={`font-syne font-bold text-2xl mb-4 ${
                      c.accent ? "text-gradient" : ""
                    }`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-base font-light leading-[1.8]"
                    style={{ color: "var(--color-k-text2)" }}
                  >
                    {c.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Values */}
        <section
          className="px-6 pb-32 md:px-12 lg:px-20 text-center"
          style={{ background: "var(--color-k-bg)" }}
        >
          <div className="container-k">
            <FadeUp className="mb-16">
              <SectionTag>Nos valeurs</SectionTag>
              <h2
                className="font-syne font-extrabold tracking-tight leading-[1.1] mt-4"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Ce qui nous<br />distingue
              </h2>
            </FadeUp>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div
                    className="p-8 rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(124,111,255,0.3)]"
                    style={{
                      background: "var(--color-k-bg2)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="text-2xl mb-4" style={{ color: "var(--color-k-accent)" }}>
                      {v.icon}
                    </div>
                    <h4 className="font-syne font-bold text-base mb-2">{v.title}</h4>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "var(--color-k-text2)" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.3} className="mt-20">
              <Button href="/contact" variant="primary">
                Travaillons ensemble →
              </Button>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
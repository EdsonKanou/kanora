import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  SectionTag,
  FadeUp,
  StaggerContainer,
  StaggerItem,
  Button,
} from "@/components/ui/index";

export const metadata: Metadata = {
  title: "À propos",
};

const cards = [
  {
    title: "Notre Vision",
    body:
      "Devenir le studio digital de référence pour les marques ambitieuses d'Afrique et du monde — en créant des expériences qui rivalisent avec les meilleures productions mondiales, avec une sensibilité culturelle unique.",
    accent: false,
  },
  {
    title: "Notre Mission",
    body:
      "Transformer la vision de nos clients en réalité digitale tangible. Chaque projet est une opportunité de créer quelque chose qui dépasse les attentes. Nous ne livrons pas des sites web — nous livrons des armes de croissance.",
    accent: false,
  },
  {
    title: "Notre Philosophie",
    body:
      "Le beau est une stratégie. L'excellence n'est pas un luxe — c'est un avantage compétitif. Chaque pixel, chaque mot, chaque interaction peut faire la différence entre une marque oubliable et une marque inoubliable.",
    accent: false,
  },
  {
    title: "Vision 2027",
    body:
      "Être présent sur 3 continents, accompagner plus de 200 marques ambitieuses et avoir redéfini les standards du digital créatif en Afrique francophone. KANORA sera à nos marchés ce que Pentagram est au design mondial.",
    accent: true,
  },
];

const values = [
  { icon: "✦", title: "Excellence", desc: "Chaque livrable doit être notre meilleur travail à ce jour." },
  { icon: "◈", title: "Innovation", desc: "Toujours à la frontière des outils, des tendances et des possibles." },
  { icon: "★", title: "Impact", desc: "Nous mesurons notre succès aux résultats de nos clients." },
  { icon: "◐", title: "Intégrité", desc: "Transparence, honnêteté et respect à chaque étape du projet." },
  { icon: "⬡", title: "Ambition", desc: "Viser l'international, dépasser les standards locaux, toujours." },
  { icon: "→", title: "Réactivité", desc: "Disponibles, rapides et proactifs dans chaque collaboration." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* =========================
            HERO
        ========================= */}
        <section className="relative bg-k-bg px-6 pt-[160px] pb-24 md:px-12 lg:px-20">

          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
            <div className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="container-k">
            <FadeUp>
              <SectionTag>À propos</SectionTag>

              <h1
                className="
                  mt-6
                  font-syne
                  font-extrabold
                  tracking-[-0.05em]
                  leading-[0.95]
                  text-[clamp(52px,8vw,100px)]
                "
              >
                Bâtir
                <br />
                <span className="text-gradient">l&apos;avenir</span>
                <br />
                digital.
              </h1>

              <p className="mt-6 max-w-[600px] text-lg leading-[1.8] text-white/60">
                KANORA est né de la conviction que les marques africaines et globales
                méritent une présence digitale au niveau des meilleures agences mondiales.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* =========================
            CARDS
        ========================= */}
        <section className="bg-k-bg2 px-6 pb-24 md:px-12 lg:px-20">
          <div className="container-k grid gap-6 md:grid-cols-2">

            {cards.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.08}>
                <div
                  className={`
                    rounded-2xl
                    border
                    p-10
                    h-full
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    backdrop-blur-xl
                    bg-white/[0.03]
                    ${c.accent ? "border-violet-400/30" : "border-white/10"}
                  `}
                >
                  <h3
                    className={`font-syne text-2xl font-bold mb-4 ${
                      c.accent ? "text-gradient" : "text-white"
                    }`}
                  >
                    {c.title}
                  </h3>

                  <p className="text-white/60 leading-[1.8]">
                    {c.body}
                  </p>
                </div>
              </FadeUp>
            ))}

          </div>
        </section>

        {/* =========================
            VALUES
        ========================= */}
        <section className="bg-k-bg px-6 pb-32 md:px-12 lg:px-20 text-center">

          <div className="container-k">

            <FadeUp>
              <SectionTag>Nos valeurs</SectionTag>

              <h2 className="mt-4 font-syne text-[clamp(36px,5vw,60px)] font-extrabold leading-[1.1]">
                Ce qui nous distingue
              </h2>
            </FadeUp>

            <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-3">

              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.03]
                      p-8
                      text-left
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:border-white/20
                    "
                  >
                    <div className="mb-4 text-2xl text-violet-400">
                      {v.icon}
                    </div>

                    <h4 className="font-syne font-bold text-white mb-2">
                      {v.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-white/60">
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
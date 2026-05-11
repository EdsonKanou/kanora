import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp, Button } from "@/components/ui/index";

export const metadata: Metadata = {
  title: "Services",
};

const serviceDetails = [
  {
    id: "branding",
    tag: "Service 01",
    title: "Branding & Création",
    description:
      "Votre identité visuelle est la première impression que vous laissez. Nous la construisons pour inspirer, rassurer et convertir — avec précision et un sens aigu de l'esthétique.",
    deliverables: [
      "Identité visuelle complète",
      "Logo & déclinaisons",
      "Kit réseaux sociaux",
      "Brand guidelines",
      "Branding événementiel",
      "Direction artistique",
    ],
  },
  {
    id: "web",
    tag: "Service 02",
    title: "Web & Digital",
    description:
      "Des sites web qui ne se contentent pas d'exister — ils performent. Chaque pixel est pensé pour guider, convaincre et convertir vos visiteurs en clients.",
    deliverables: [
      "Sites vitrine & corporate",
      "Landing pages haute conversion",
      "Applications web & SaaS",
      "UI/UX design & prototypes",
      "Optimisation mobile & SEO",
      "Animations & interactions",
    ],
  },
  {
    id: "ia",
    tag: "Service 03",
    title: "IA & Automation",
    description:
      "L'intelligence artificielle devient un avantage concurrentiel. Nous déployons des solutions IA sur mesure qui automatisent et amplifient vos opérations.",
    deliverables: [
      "Assistants IA custom",
      "Chatbots WhatsApp",
      "Automatisation business",
      "Dashboards intelligents",
      "Intégrations API IA",
      "Formation & accompagnement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* =========================
            HERO
        ========================= */}
        <section className="bg-k-bg px-6 pt-[140px] pb-20 md:px-12 lg:px-20">

          <div className="container-k">
            <FadeUp>

              <SectionTag>Nos Services</SectionTag>

              <h1
                className="
                  mt-5
                  font-syne
                  font-extrabold
                  tracking-[-0.05em]
                  leading-[0.95]
                  text-[clamp(52px,8vw,100px)]
                "
              >
                Solutions<br />
                <span className="text-gradient">premium</span><br />
                sur mesure
              </h1>

              <p className="mt-6 max-w-[540px] text-lg leading-[1.8] text-white/60">
                Trois pôles d&apos;expertise complémentaires pour construire,
                lancer et scaler votre présence digitale avec impact.
              </p>

            </FadeUp>
          </div>
        </section>

        {/* =========================
            SERVICES
        ========================= */}
        <section className="bg-k-bg2 px-6 pb-32 md:px-12 lg:px-20">

          <div className="container-k flex flex-col gap-6 pt-6">

            {serviceDetails.map((s, i) => (
              <FadeUp key={s.id} delay={i * 0.1}>

                <div
                  id={s.id}
                  className="
                    grid
                    items-center
                    gap-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-10
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-violet-400/30
                    md:grid-cols-2
                    md:p-14
                  "
                >

                  {/* LEFT */}
                  <div>
                    <SectionTag>{s.tag}</SectionTag>

                    <h2 className="mt-4 mb-5 font-syne text-4xl font-extrabold leading-[1.1] tracking-tight">
                      {s.title}
                    </h2>

                    <p className="mb-8 text-white/60 leading-[1.8]">
                      {s.description}
                    </p>

                    <Button href="/contact" variant="primary">
                      Demander un devis
                    </Button>
                  </div>

                  {/* RIGHT */}
                  <div className="grid grid-cols-2 gap-3">

                    {s.deliverables.map((d) => (
                      <div
                        key={d}
                        className="
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.02]
                          p-4
                          transition
                          hover:border-violet-400/30
                        "
                      >
                        <p className="mb-1 text-[11px] uppercase tracking-widest text-white/40">
                          Livrable
                        </p>

                        <p className="text-sm text-white">
                          {d}
                        </p>
                      </div>
                    ))}

                  </div>

                </div>

              </FadeUp>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
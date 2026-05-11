import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp, Button } from "@/components/ui/index";

export const metadata: Metadata = { title: "Services" };

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
      "L'intelligence artificielle n'est plus une option — c'est un avantage concurrentiel. Nous déployons des solutions IA sur mesure qui automatisent et amplifient vos opérations.",
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
      <main>
        {/* Hero */}
        <section
          className="px-6 pt-[140px] pb-20 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg)" }}
        >
          <div className="container-k">
            <FadeUp>
              <SectionTag>Nos Services</SectionTag>
              <h1
                className="font-syne font-extrabold tracking-tight leading-[1.0] mt-5"
                style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
              >
                Solutions<br />
                <span className="text-gradient">premium</span>
                <br />sur mesure
              </h1>
              <p
                className="mt-6 text-lg font-light leading-[1.75] max-w-[540px]"
                style={{ color: "var(--color-k-text2)" }}
              >
                Trois pôles d&apos;expertise complémentaires pour construire,
                lancer et scaler votre présence digitale avec l&apos;impact
                qu&apos;elle mérite.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Service blocks */}
        <section
          className="px-6 pb-32 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg2)" }}
        >
          <div className="container-k flex flex-col gap-6 pt-6">
            {serviceDetails.map((s, i) => (
              <FadeUp key={s.id} delay={i * 0.1}>
                <div
                  id={s.id}
                  className="rounded-2xl border p-10 md:p-14 grid md:grid-cols-2 gap-14 items-center"
                  style={{
                    background: "var(--color-k-bg3)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div>
                    <SectionTag>{s.tag}</SectionTag>
                    <h2 className="font-syne font-extrabold text-4xl leading-[1.1] tracking-tight mt-4 mb-5">
                      {s.title}
                    </h2>
                    <p
                      className="text-base font-light leading-[1.8] mb-8"
                      style={{ color: "var(--color-k-text2)" }}
                    >
                      {s.description}
                    </p>
                    <Button href="/contact" variant="primary">
                      Demander un devis
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {s.deliverables.map((d) => (
                      <div
                        key={d}
                        className="p-4 rounded-xl border"
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          borderColor: "rgba(255,255,255,0.07)",
                        }}
                      >
                        <p
                          className="text-[11px] uppercase tracking-widest mb-1"
                          style={{ color: "var(--color-k-text3)" }}
                        >
                          Livrable
                        </p>
                        <p className="text-sm font-medium">{d}</p>
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
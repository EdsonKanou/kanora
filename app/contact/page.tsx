"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp } from "@/components/ui/index";

const contactItems = [
  { icon: "✉", label: "Email", value: "hello@kanora.studio" },
  { icon: "💬", label: "WhatsApp", value: "+33 6 XX XX XX XX" },
  { icon: "📍", label: "Présence", value: "Paris · Yaoundé · Global" },
  { icon: "⏱", label: "Réponse", value: "Sous 24h ouvrées" },
];

export default function ContactPage() {
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
              <SectionTag>Contact</SectionTag>
              <h1
                className="font-syne font-extrabold tracking-tight leading-[1.0] mt-5"
                style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
              >
                Parlons de<br />
                <span className="text-gradient">votre projet.</span>
              </h1>
              <p
                className="mt-6 text-lg font-light leading-[1.75] max-w-[520px]"
                style={{ color: "var(--color-k-text2)" }}
              >
                Vous avez une vision. Nous avons l&apos;expertise pour la
                concrétiser. Décrivez votre projet et nous vous répondons sous
                24h.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Form + info */}
        <section
          className="px-6 pb-32 md:px-12 lg:px-20"
          style={{ background: "var(--color-k-bg2)" }}
        >
          <div className="container-k grid md:grid-cols-2 gap-16 items-start">
            {/* Left — info */}
            <FadeUp>
              <h2
                className="font-syne font-extrabold leading-[1.1] tracking-tight mb-5"
                style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
              >
                Construisons<br />quelque chose<br />
                <span className="text-gradient">d&apos;exceptionnel.</span>
              </h2>
              <p
                className="text-base font-light leading-[1.75] mb-10"
                style={{ color: "var(--color-k-text2)" }}
              >
                Que vous ayez un brief complet ou simplement une idée, nous
                sommes là pour vous accompagner à chaque étape.
              </p>
              <div className="flex flex-col gap-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 hover:translate-x-1.5"
                    style={{
                      background: "var(--color-k-bg3)",
                      borderColor: "rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(124,111,255,0.25)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.07)")
                    }
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: "rgba(124,111,255,0.1)",
                        color: "var(--color-k-accent)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest mb-0.5"
                        style={{ color: "var(--color-k-text3)" }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Right — form */}
            <FadeUp delay={0.15}>
              <div
                className="rounded-2xl border p-10"
                style={{
                  background: "var(--color-k-bg3)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message envoyé ! Nous vous répondons sous 24h. ✓");
                  }}
                  className="flex flex-col gap-6"
                >
                  <FormField label="Votre nom" type="text" placeholder="Prénom Nom" required />
                  <FormField label="Email professionnel" type="email" placeholder="vous@entreprise.com" required />
                  <FormField label="Type de projet" type="text" placeholder="Branding / Web / IA / Autre" />
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: "var(--color-k-text2)" }}
                    >
                      Décrivez votre projet
                    </label>
                    <textarea
                      placeholder="Partagez votre vision, vos objectifs, votre budget estimé..."
                      rows={5}
                      className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none resize-none transition-all duration-300 focus:outline-none"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "var(--color-k-text)",
                        lineHeight: 1.7,
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-k-accent)";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(124,111,255,0.12)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-medium text-base tracking-wide transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #7C6FFF, #8B5CF6)",
                      boxShadow: "0 8px 32px rgba(124,111,255,0.3)",
                    }}
                  >
                    Envoyer le message →
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--color-k-text3)" }}
                  >
                    Réponse garantie sous 24h ouvrées · 100% confidentiel
                  </p>
                </form>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FormField({
  label,
  type,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-xs uppercase tracking-widest mb-2"
        style={{ color: "var(--color-k-text2)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl px-4 py-3.5 text-sm font-light outline-none transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "var(--color-k-text)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--color-k-accent)";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,111,255,0.12)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
          e.currentTarget.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
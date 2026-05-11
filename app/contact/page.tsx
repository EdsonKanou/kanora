"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SectionTag, FadeUp } from "@/components/ui/index";

const contactItems = [
  { icon: "✉", label: "Email", value: "edsonkanou1@gmail.com" },
  { icon: "💬", label: "WhatsApp", value: "+33 6 XX XX XX XX" },
  { icon: "📍", label: "Présence", value: "Paris · Yaoundé · Global" },
  { icon: "⏱", label: "Réponse", value: "Sous 24h ouvrées" },
];

export default function ContactPage() {
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
              <SectionTag>Contact</SectionTag>

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
                Parlons de<br />
                <span className="text-gradient">votre projet.</span>
              </h1>

              <p className="mt-6 max-w-[520px] text-lg leading-[1.8] text-white/60">
                Vous avez une vision. Nous avons l&apos;expertise pour la concrétiser.
                Décrivez votre projet et nous vous répondons sous 24h.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* =========================
            FORM + INFO
        ========================= */}
        <section className="bg-k-bg2 px-6 pb-32 md:px-12 lg:px-20">

          <div className="container-k grid gap-16 md:grid-cols-2">

            {/* =========================
                LEFT INFO
            ========================= */}
            <FadeUp>
              <h2 className="font-syne text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1]">
                Construisons<br />
                quelque chose<br />
                <span className="text-gradient">d&apos;exceptionnel.</span>
              </h2>

              <p className="mt-6 mb-10 text-white/60 leading-[1.8]">
                Que vous ayez un brief complet ou simplement une idée,
                nous vous accompagnons de A à Z.
              </p>

              <div className="flex flex-col gap-4">

                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-x-1
                      hover:border-violet-400/30
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-500/10
                        text-violet-300
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">
                        {item.label}
                      </p>
                      <p className="text-sm text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </FadeUp>

            {/* =========================
                FORM
            ========================= */}
            <FadeUp delay={0.15}>
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                "
              >

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message envoyé ✓ Nous vous répondons sous 24h.");
                  }}
                  className="flex flex-col gap-6"
                >

                  <FormField
                    label="Votre nom"
                    type="text"
                    placeholder="Prénom Nom"
                    required
                  />

                  <FormField
                    label="Email professionnel"
                    type="email"
                    placeholder="vous@entreprise.com"
                    required
                  />

                  <FormField
                    label="Type de projet"
                    type="text"
                    placeholder="Branding / Web / IA"
                  />

                  {/* TEXTAREA */}
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                      Décrivez votre projet
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Parlez-nous de votre vision..."
                      className="
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-3
                        text-sm
                        text-white
                        outline-none
                        backdrop-blur-xl
                        transition
                        focus:border-violet-400
                        focus:shadow-[0_0_0_3px_rgba(124,111,255,0.12)]
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="
                      w-full
                      rounded-xl
                      bg-gradient-to-r
                      from-violet-500
                      to-cyan-400
                      py-4
                      text-base
                      font-medium
                      text-white
                      shadow-lg
                      transition
                      hover:brightness-110
                      hover:-translate-y-0.5
                    "
                  >
                    Envoyer le message →
                  </button>

                  <p className="text-center text-xs text-white/40">
                    Réponse sous 24h · 100% confidentiel
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

/* =========================
   FORM FIELD COMPONENT
========================= */

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
      <label className="mb-2 block text-xs uppercase tracking-widest text-white/40">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          px-4
          py-3
          text-sm
          text-white
          outline-none
          backdrop-blur-xl
          transition
          focus:border-violet-400
          focus:shadow-[0_0_0_3px_rgba(124,111,255,0.12)]
        "
      />
    </div>
  );
}
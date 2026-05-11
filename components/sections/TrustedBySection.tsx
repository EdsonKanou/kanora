"use client";

import { motion } from "framer-motion";
import { TRUSTED_BY } from "@/data/content";
import { FadeUp } from "@/components/ui/index";

export default function TrustedBySection() {
  // Doubler la liste pour le défilement infini
  const doubled = [...TRUSTED_BY, ...TRUSTED_BY];

  return (
    <section
      className="py-16 overflow-hidden border-y"
      style={{
        background: "var(--k-bg2)",
        borderColor: "var(--k-border)",
      }}
    >
      <div className="container-k mb-10">
        <FadeUp>
          <p
            className="text-center text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--k-text3)" }}
          >
            Ils nous font confiance
          </p>
        </FadeUp>
      </div>

      {/* Bande défilante */}
      <div className="relative">
        {/* Masques flous sur les bords */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--k-bg2), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--k-bg2), transparent)",
          }}
        />

        {/* Piste animée */}
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {doubled.map((brand, i) => (
            <LogoItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function LogoItem({ brand }: { brand: typeof TRUSTED_BY[0] }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center px-8 py-4 rounded-xl border transition-all duration-300 cursor-default"
      style={{
        borderColor: "var(--k-border)",
        background: "var(--k-bg3)",
        minWidth: 160,
        height: 72,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,111,255,0.3)";
        (e.currentTarget as HTMLElement).style.background = "var(--k-bg4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--k-border)";
        (e.currentTarget as HTMLElement).style.background = "var(--k-bg3)";
      }}
    >
      {brand.logo ? (
        // Quand tu as un vrai logo SVG ou PNG :
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-8 max-w-[120px] object-contain"
          style={{ filter: "var(--k-logo-filter, grayscale(1) brightness(1.5))" }}
        />
      ) : (
        /* Placeholder textuel jusqu'à avoir les vrais logos */
        <div className="text-center">
          <p
            className="font-syne font-bold text-sm tracking-wide"
            style={{ color: "var(--k-text2)" }}
          >
            {brand.name}
          </p>
          {brand.sector && (
            <p className="text-[10px] tracking-widest mt-1" style={{ color: "var(--k-text3)" }}>
              {brand.sector}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
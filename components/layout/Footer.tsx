import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Branding & Création", href: "/services#branding" },
    { label: "Web & Digital",       href: "/services#web" },
    { label: "IA & Automation",     href: "/services#ia" },
  ],
  Studio: [
    { label: "À propos",   href: "/about" },
    { label: "Portfolio",  href: "/portfolio" },
    { label: "Contact",    href: "/contact" },
  ],
  Contact: [
    { label: "edsonkanou1@gmail.com",  href: "mailto:edsonkanou1@gmail.com" },
    { label: "Paris · Yaoundé",      href: "/contact" },
    { label: "WhatsApp",             href: "https://wa.me/33624478680" },
  ],
};

const socials = [
  { label: "Ig", href: "#", title: "Instagram" },
  { label: "Li", href: "#", title: "LinkedIn" },
  { label: "Tw", href: "#", title: "Twitter / X" },
  { label: "Be", href: "#", title: "Behance" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 pt-16 pb-10 md:px-12 lg:px-20"
      style={{
        background: "var(--k-bg)",
        borderColor: "var(--k-border)",
      }}
    >
      <div className="container-k">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-syne font-extrabold text-2xl tracking-[0.1em] text-gradient-white block mb-4"
            >
              KANORA
            </Link>
            <p
              className="text-sm leading-relaxed font-light max-w-[240px]"
              style={{ color: "var(--k-text2)" }}
            >
              Studio Digital & IA premium. Nous construisons des expériences
              digitales qui marquent les esprits.
            </p>
          </div>

          {/* Link columns — key = title + label pour garantir l'unicité */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-syne font-bold text-xs tracking-[0.1em] uppercase mb-5"
                style={{ color: "var(--k-text2)" }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={`${title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm font-light transition-colors duration-200 hover:text-[var(--k-text)]"
                      style={{ color: "var(--k-text2)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "var(--k-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--k-text3)" }}>
            © 2025 KANORA Studio. Tous droits réservés.
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                title={s.title}
                className="w-9 h-9 flex items-center justify-center rounded-lg border text-xs font-medium transition-all duration-300 hover:border-[var(--k-accent)] hover:text-[var(--k-accent)]"
                style={{
                  borderColor: "var(--k-border2)",
                  color: "var(--k-text2)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
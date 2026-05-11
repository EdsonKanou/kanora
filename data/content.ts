// ============================================================
// KANORA — Données centralisées (modifier ici = tout se met à jour)
// ============================================================

export const NAV_LINKS = [
  { label: "Accueil",   href: "/" },
  { label: "Services",  href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "À propos",  href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export const SERVICES = [
  {
    id: "branding",
    icon: "✦",
    title: "Branding & Création",
    description:
      "Nous créons des identités visuelles qui inspirent confiance, transmettent vos valeurs et vous distinguent dans un marché saturé.",
    tags: ["Identité visuelle", "Logo design", "Direction artistique", "Brand kits"],
    href: "/services#branding",
  },
  {
    id: "web",
    icon: "◈",
    title: "Web & Digital",
    description:
      "Sites web premium, landing pages à fort taux de conversion et expériences UI/UX pensées pour captiver et convertir.",
    tags: ["Sites premium", "Landing pages", "UI/UX design", "Mobile-first"],
    href: "/services#web",
  },
  {
    id: "ia",
    icon: "⬡",
    title: "IA & Automation",
    description:
      "Assistants intelligents, automatisation des workflows et dashboards IA qui transforment vos opérations en avantage compétitif.",
    tags: ["Assistants IA", "Chatbots", "Automatisation", "Dashboards"],
    href: "/services#ia",
  },
];

export const STATS = [
  { value: 50, suffix: "+", label: "Projets réalisés" },
  { value: 10, suffix: "+", label: "Solutions IA" },
  { value: 98, suffix: "%", label: "Satisfaction client" },
  { value: 7, suffix: "+", label: "Pays servis" },
];

export const PROJECTS = [
  {
    id: "nova-fintech",

    category: "Branding + Web + IA",

    name: "Nova Fintech",

    subtitle:
      "Identité complète & Plateforme digitale",

    description:
      "Refonte totale de l'identité visuelle, développement du site marketing et assistant IA. +180% de trafic organique en 3 mois.",

    image: "/projects/nova.webp",

    tags: [
      "Branding",
      "Next.js",
      "Framer Motion",
      "GPT-4",
    ],

    featured: true,
  },

  {
    id: "maison-verde",

    category: "Web & Expérience",

    name: "Vision CARGO",

    subtitle:
      "Envois de colis chine-cameroun · chine",

    description:
      "Site immersif avec réservation en ligne. Réservations ×3 en 6 semaines.",

    image: "/projects/Vision3.jpg",

    tags: [
      "Web Design",
      "Animation",
      "Booking",
    ],

    featured: false,
  },

  {
    id: "analytics-ai",

    category: "IA & Automation",

    name: "Analytics AI",

    subtitle:
      "Dashboard business intelligent",

    description:
      "Tableau de bord IA temps réel pour KPIs commerciaux. Gain de temps de 60%.",

    image: "/projects/Maillot.jpg",

    tags: [
      "React",
      "IA",
      "Data Viz",
    ],

    featured: false,
  },

  {
    id: "afritech-summit",

    category: "Identité événementielle",

    name: "CamerTech Europe",

    subtitle:
      "Conférence tech panafricaine",

    description:
      "Identité visuelle complète pour conférence tech, 2000+ participants.",

    image: "/projects/Camer1.jpg",

    tags: [
      "Event Branding",
      "Motion",
      "Print",
    ],

    featured: false,
  },
];

export const PROCESS_STEPS = [
  { num: "01", title: "Découverte",     desc: "Audit, analyse du marché, définition des objectifs." },
  { num: "02", title: "Stratégie",      desc: "Positionnement, architecture, moodboard et alignement." },
  { num: "03", title: "Design",         desc: "Maquettes premium, prototypes et validations itératives." },
  { num: "04", title: "Développement",  desc: "Intégration pixel-perfect, animations et optimisation." },
  { num: "05", title: "Lancement",      desc: "Déploiement, tests finaux et suivi post-lancement." },
];

export const TESTIMONIALS = [
  {
    quote: "KANORA a transformé notre image de marque. Le site web a doublé nos demandes en moins d'un mois. Une équipe visionnaire.",
    name: "Edson k.",
    role: "CEO, Nova Fintech · Yaoundé",
    initials: "AM",
    photo: "/photos/edson.jpg", // → "/photos/aminata.jpg" quand tu as la vraie photo (dans /public/)
  },
  {
    quote: "L'assistant IA développé par KANORA a réduit notre temps de traitement client de 60%. Un investissement qui s'amortit en quelques semaines.",
    name: "Kofi D.",
    role: "Directeur Ops, TechFlow · Dakar",
    initials: "KD",
    photo: "", // → "/photos/kofi.jpg"
  },
  {
    quote: "Professionnalisme total, esthétique irréprochable et délais respectés. La référence pour une présence digitale premium.",
    name: "Sophie L.",
    role: "Fondatrice, Maison Verde · Paris",
    initials: "SL",
    photo: "/photos/pdg.jpg", // → "/photos/sophie.jpg"
  },
];

export const WHY_POINTS = [
  { icon: "◐", title: "Approche moderne & stratégique",   desc: "Chaque projet commence par une réflexion profonde sur vos objectifs et votre marché." },
  { icon: "★", title: "Exécution premium, sans compromis", desc: "Qualité studio international sur chaque livrable — design, code, copywriting." },
  { icon: "⬡", title: "Innovation portée par l'IA",       desc: "Nous intégrons les technologies IA les plus avancées pour créer des avantages durables." },
  { icon: "◈", title: "Standards internationaux",          desc: "Notre benchmark : Apple, Stripe, Linear. Votre marque mérite le même niveau." },
  { icon: "→", title: "Livraison rapide & itérative",      desc: "Processus agile, premières versions livrées en 7 à 14 jours selon le projet." },
];

// ============================================================
// TÉMOIGNAGES — ajouter le chemin de la photo dans /public/
// photo: "/photos/aminata.jpg"  ← décommenter et renseigner
// ============================================================
// Note: remplace les exports TESTIMONIALS existants par ceux-ci
// avec le champ photo optionnel

export const TESTIMONIALS_WITH_PHOTOS = [
  {
    quote:
      "KANORA a transformé notre image de marque. Le site web a doublé nos demandes en moins d'un mois. Une équipe visionnaire.",
    name: "edson K.",
    role: "CEO, Nova Fintech · Yaoundé",
    initials: "AM",
    photo: "/photos/edson.jpg", // Mettre "/photos/aminata.jpg" quand tu as la photo
  },
  {
    quote:
      "L'assistant IA développé par KANORA a réduit notre temps de traitement client de 60%. Un investissement qui s'amortit en quelques semaines.",
    name: "Kofi D.",
    role: "Directeur Ops, TechFlow · Dakar",
    initials: "KD",
    photo: "", // Mettre "/photos/kofi.jpg"
  },
  {
    quote:
      "Professionnalisme total, esthétique irréprochable et délais respectés. La référence pour une présence digitale premium.",
    name: "Sophie L.",
    role: "Fondatrice, Maison Verde · Paris",
    initials: "SL",
    photo: "", // Mettre "/photos/sophie.jpg"
  },
];

// ============================================================
// LOGOS CLIENTS — section "Ils nous font confiance"
//
// Pour ajouter un logo :
//   1. Mets le fichier SVG/PNG dans /public/logos/
//   2. Renseigne logo: "/logos/nom-du-client.svg"
//
// Sans logo : laisse logo: "" → affichage textuel automatique
// ============================================================
export const TRUSTED_BY = [
  { name: "As INTERNATIONAL",    sector: "Fintech",      logo: "/logos/AS.jpg" },
  { name: "AfriTech Summit", sector: "Événement",    logo: "/logos/Camertech.jpg" },
  { name: "Maison Verde",    sector: "Gastronomie",  logo: "/logos/Vision.jpg" },
  { name: "TechFlow",        sector: "SaaS",         logo: "" },
  { name: "LaunchKit",       sector: "Startup",      logo: "" },
  { name: "Analytics AI",    sector: "Intelligence", logo: "" },
  // Ajoute tes vrais clients ici
];
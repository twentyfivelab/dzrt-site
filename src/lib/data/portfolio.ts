import type { PortfolioProject } from "@/lib/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "atelier-lumiere",
    nom: "Atelier Lumière",
    secteur: "Architecture d'intérieur",
    description:
      "Un site vitrine pour un studio d'architecture d'intérieur, pensé comme une vraie galerie pour mettre chaque réalisation en valeur.",
    probleme:
      "Le studio envoyait son book par e-mail, n'apparaissait pas sur Google et son site ne reflétait pas la qualité de son travail.",
    solution:
      "Un site vitrine sur mesure avec un portfolio immersif par projet, une identité de marque complète et un référencement local optimisé.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO local"],
    resultats: [
      { label: "Trafic organique", value: "+140 % en 4 mois" },
      { label: "Demandes de devis", value: "×3 par mois" },
      { label: "Position Google", value: "Top 3 sur \"architecte intérieur\" + ville" },
    ],
    trend: { label: "Trafic organique", points: [100, 112, 128, 155, 195, 240] },
    temoignage: {
      auteur: "Camille Vasseur",
      role: "Fondatrice de l'atelier",
      citation:
        "Notre book ne montrait pas la qualité de notre travail. Le nouveau site nous ressemble enfin, et nos clients nous font confiance dès la première visite.",
      note: 5,
    },
    accent: "lilac",
    year: 2025,
  },
  {
    slug: "chez-marcelline",
    nom: "Chez Marcelline",
    secteur: "Restauration",
    description:
      "Un site one page pour donner envie de réserver en quelques secondes : menu, ambiance et réservation en un seul geste.",
    probleme:
      "Pas de site internet, une fiche Google Business Profile incomplète et une dépendance totale aux plateformes de réservation.",
    solution:
      "Un site one page avec le menu mis en avant, la réservation intégrée et une fiche Google Business Profile entièrement optimisée.",
    technologies: ["Next.js", "Tailwind CSS", "Google Business Profile"],
    resultats: [
      { label: "Réservations en ligne", value: "+65 % en 3 mois" },
      { label: "Vues sur la fiche Google", value: "+210 %" },
      { label: "Avis clients", value: "+48 nouveaux avis" },
    ],
    trend: { label: "Réservations en ligne", points: [100, 110, 128, 145, 165] },
    temoignage: {
      auteur: "Camille Dubreuil",
      role: "Gérante",
      citation:
        "Avant, on comptait sur le bouche-à-oreille. En trois mois, notre fiche Google a explosé et les réservations en ligne sont devenues notre premier canal.",
      note: 5,
    },
    accent: "peach",
    year: 2025,
  },
  {
    slug: "cabinet-dr-armand",
    nom: "Cabinet Dr. Armand",
    secteur: "Cabinet médical",
    description:
      "Un site vitrine rassurant pour un cabinet médical pluridisciplinaire, avec une prise de rendez-vous simple et des informations claires.",
    probleme:
      "Le site était vieillissant, mal adapté au mobile, et les patients appelaient pour des informations déjà disponibles ailleurs.",
    solution:
      "Une refonte complète avec une page par praticien, une accessibilité renforcée et un module de prise de rendez-vous en ligne.",
    technologies: ["Next.js", "Tailwind CSS", "Accessibilité RGAA"],
    resultats: [
      { label: "Rendez-vous en ligne", value: "+80 %" },
      { label: "Appels au standard", value: "-30 % (infos en ligne)" },
      { label: "Score de performance", value: "98/100 sur mobile" },
    ],
    trend: { label: "Rendez-vous en ligne", points: [100, 115, 135, 155, 180] },
    temoignage: {
      auteur: "Dr. Sophie Armand",
      role: "Médecin généraliste",
      citation:
        "Nos patients trouvent enfin toutes les informations en ligne. Les appels pour des questions simples ont nettement diminué, un vrai gain de temps pour toute l'équipe.",
      note: 5,
    },
    accent: "lavender",
    year: 2024,
  },
  {
    slug: "menuiserie-lefort",
    nom: "Menuiserie Lefort",
    secteur: "Menuiserie",
    description:
      "Un site vitrine pour un artisan menuisier, avec une galerie de réalisations et un formulaire de devis qui qualifie chaque demande.",
    probleme:
      "Un savoir-faire reconnu localement, mais invisible sur Google face à des enseignes nationales mieux référencées.",
    solution:
      "Une galerie de chantiers, un contenu optimisé pour le référencement local et un formulaire de devis détaillé.",
    technologies: ["Next.js", "Tailwind CSS", "SEO local"],
    resultats: [
      { label: "Demandes de devis qualifiées", value: "+120 % en 6 mois" },
      { label: "Visibilité Google Maps", value: "Top 3 local" },
      { label: "Temps de chargement", value: "< 1,2 s" },
    ],
    trend: { label: "Demandes de devis", points: [100, 108, 122, 145, 175, 205, 220] },
    temoignage: {
      auteur: "Julien Lefort",
      role: "Artisan menuisier",
      citation:
        "On a vingt ans de métier mais on restait invisibles sur Google. Depuis le nouveau site, les demandes de devis ont doublé et elles sont bien mieux qualifiées.",
      note: 5,
    },
    accent: "apricot",
    year: 2024,
  },
  {
    slug: "coach-elise-moreau",
    nom: "Élise Moreau Coaching",
    secteur: "Coaching professionnel",
    description:
      "Un site one page évolutif pour affirmer un positionnement clair et automatiser la prise de rendez-vous.",
    probleme:
      "Une activité qui reposait sur le bouche-à-oreille et les réseaux sociaux, sans espace pour convertir les visiteurs en clients.",
    solution:
      "Un positionnement affirmé, une présentation claire des offres et une prise de rendez-vous automatisée par IA.",
    technologies: ["Next.js", "Tailwind CSS", "Automatisation IA"],
    resultats: [
      { label: "Rendez-vous automatisés", value: "+90 %" },
      { label: "Temps administratif économisé", value: "5h / semaine" },
      { label: "Taux de conversion visiteurs", value: "+35 %" },
    ],
    trend: { label: "Rendez-vous automatisés", points: [100, 120, 145, 165, 190] },
    temoignage: {
      auteur: "Élise Moreau",
      role: "Coach professionnelle indépendante",
      citation:
        "Je ne pensais pas qu'un site changerait autant mon quotidien. Mes rendez-vous se prennent tout seuls, je passe enfin plus de temps avec mes clients qu'avec mon agenda.",
      note: 5,
    },
    accent: "rose",
    year: 2025,
  },
  {
    slug: "boutique-mira",
    nom: "Boutique Mira",
    secteur: "Mode & accessoires",
    description:
      "Une boutique e-commerce complète, du catalogue jusqu'au paiement, avec une identité de marque pastel entièrement sur mesure.",
    probleme:
      "Une marque vendue uniquement sur les réseaux sociaux et des marketplaces, sans maîtrise de son image ni de sa marge.",
    solution:
      "Une boutique en ligne sur mesure, un branding complet et un tunnel d'achat optimisé pour réduire les abandons de panier.",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "Branding"],
    resultats: [
      { label: "Chiffre d'affaires en ligne", value: "+75 % en 6 mois" },
      { label: "Taux d'abandon de panier", value: "-22 %" },
      { label: "Panier moyen", value: "+18 %" },
    ],
    trend: { label: "Chiffre d'affaires en ligne", points: [100, 110, 125, 142, 158, 168, 175] },
    temoignage: {
      auteur: "Nora Kassimi",
      role: "Fondatrice",
      citation:
        "Je vendais seulement sur les réseaux et les marketplaces prenaient une partie de ma marge. Aujourd'hui j'ai ma propre boutique, mon identité est cohérente partout et mon chiffre d'affaires a bondi.",
      note: 5,
    },
    accent: "lilac",
    year: 2025,
  },
];

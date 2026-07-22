import type { PortfolioProject } from "@/lib/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "atelier-lumiere",
    nom: "Atelier Lumière",
    secteur: "Architecture d'intérieur",
    probleme: [
      "Book envoyé par e-mail, sans vitrine en ligne",
      "Absence totale sur Google",
      "Site ne reflétant pas la qualité du travail",
    ],
    solution: [
      "Site vitrine haut de gamme avec portfolio immersif",
      "Identité renforcée pour gagner en crédibilité",
      "Référencement local optimisé",
      "Génération accrue de demandes de devis",
    ],
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
    year: 2026,
  },
  {
    slug: "chez-marcelline",
    nom: "Chez Marcelline",
    secteur: "Restauration",
    probleme: [
      "Aucun site internet",
      "Fiche Google Business Profile incomplète",
      "Dépendance totale aux plateformes de réservation",
    ],
    solution: [
      "Site one page avec menu mis en avant",
      "Réservation en ligne intégrée",
      "Fiche Google Business Profile optimisée",
    ],
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
    probleme: [
      "Site vieillissant, mal adapté au mobile",
      "Standard téléphonique surchargé de questions simples",
      "Manque de clarté dans les informations pratiques",
    ],
    solution: [
      "Refonte complète du site",
      "Une page dédiée par praticien",
      "Accessibilité renforcée (RGAA)",
      "Prise de rendez-vous en ligne",
    ],
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
    probleme: [
      "Savoir-faire reconnu localement mais invisible sur Google",
      "Concurrence d'enseignes nationales mieux référencées",
      "Peu de demandes de devis qualifiées",
    ],
    solution: [
      "Galerie de chantiers mise en valeur",
      "Contenu optimisé pour le référencement local",
      "Formulaire de devis détaillé et qualifiant",
    ],
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
    probleme: [
      "Activité reposant sur le bouche-à-oreille et les réseaux sociaux",
      "Aucun espace pour convertir les visiteurs en clients",
      "Prise de rendez-vous chronophage",
    ],
    solution: [
      "Positionnement de marque affirmé",
      "Présentation claire des offres",
      "Prise de rendez-vous automatisée par IA",
    ],
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
    probleme: [
      "Vente uniquement via réseaux sociaux et marketplaces",
      "Aucune maîtrise de l'image de marque",
      "Marge réduite par les commissions des plateformes",
    ],
    solution: [
      "Boutique e-commerce sur mesure",
      "Branding complet et cohérent",
      "Tunnel d'achat optimisé pour réduire les abandons de panier",
    ],
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

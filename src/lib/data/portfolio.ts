import type { PortfolioProject } from "@/lib/types";

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "atelier-lumiere",
    nom: "Atelier Lumière",
    secteur: "Architecture d'intérieur",
    description:
      "Refonte complète de l'image en ligne d'un studio d'architecture d'intérieur haut de gamme, avec un site vitrine mettant en scène ses réalisations comme une véritable galerie.",
    probleme:
      "Un book de projets envoyé par e-mail, aucune présence Google, et une image qui ne reflétait pas le niveau de prestation réel du studio.",
    solution:
      "Site vitrine sur mesure, portfolio immersif par projet, branding complet (logo, palette, typographies) et optimisation SEO locale.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO local"],
    resultats: [
      { label: "Trafic organique", value: "+140 % en 4 mois" },
      { label: "Demandes de devis", value: "×3 par mois" },
      { label: "Position Google", value: "Top 3 sur \"architecte intérieur\" + ville" },
    ],
    accent: "lilac",
    year: 2025,
  },
  {
    slug: "chez-marcelline",
    nom: "Chez Marcelline",
    secteur: "Restauration",
    description:
      "Site one page pour un restaurant de quartier, pensé pour donner envie de réserver en moins de 10 secondes : menu, ambiance, avis et réservation en un seul geste.",
    probleme:
      "Aucun site internet, une fiche Google Business Profile incomplète, et une dépendance totale aux plateformes de réservation tierces.",
    solution:
      "Site one page avec menu mis en avant, intégration de réservation, optimisation complète de la fiche Google Business Profile.",
    technologies: ["Next.js", "Tailwind CSS", "Google Business Profile"],
    resultats: [
      { label: "Réservations en ligne", value: "+65 % en 3 mois" },
      { label: "Vues sur la fiche Google", value: "+210 %" },
      { label: "Avis clients", value: "+48 nouveaux avis" },
    ],
    accent: "peach",
    year: 2025,
  },
  {
    slug: "cabinet-dr-armand",
    nom: "Cabinet Dr. Armand",
    secteur: "Santé — Cabinet médical",
    description:
      "Site vitrine rassurant et accessible pour un cabinet médical pluridisciplinaire, avec prise de rendez-vous simplifiée et informations pratiques mises en avant.",
    probleme:
      "Un site vieillissant, non responsive, et des patients qui appelaient uniquement pour des informations déjà disponibles ailleurs.",
    solution:
      "Refonte complète du site, structure claire par praticien et spécialité, accessibilité renforcée, intégration d'un module de prise de rendez-vous.",
    technologies: ["Next.js", "Tailwind CSS", "Accessibilité RGAA"],
    resultats: [
      { label: "Appels au standard", value: "-30 % (infos en ligne)" },
      { label: "Prises de rendez-vous en ligne", value: "+80 %" },
      { label: "Score de performance", value: "98/100 sur mobile" },
    ],
    accent: "lavender",
    year: 2024,
  },
  {
    slug: "menuiserie-lefort",
    nom: "Menuiserie Lefort",
    secteur: "Artisanat — Menuiserie",
    description:
      "Site vitrine pour un artisan menuisier, avec galerie de réalisations sur mesure et formulaire de devis pensé pour qualifier chaque demande.",
    probleme:
      "Un artisan reconnu localement mais invisible sur Google face à des enseignes nationales mieux référencées.",
    solution:
      "Site vitrine avec galerie de chantiers, contenu optimisé pour le SEO local, formulaire de devis détaillé pour préqualifier les demandes.",
    technologies: ["Next.js", "Tailwind CSS", "SEO local"],
    resultats: [
      { label: "Demandes de devis qualifiées", value: "+120 % en 6 mois" },
      { label: "Visibilité Google Maps", value: "Top 3 local" },
      { label: "Temps de chargement", value: "< 1,2 s" },
    ],
    accent: "apricot",
    year: 2024,
  },
  {
    slug: "coach-elise-moreau",
    nom: "Élise Moreau Coaching",
    secteur: "Coaching professionnel",
    description:
      "Site one page évolutif pour une coach professionnelle indépendante, avec positionnement clair, offres détaillées et prise de rendez-vous automatisée.",
    probleme:
      "Une activité qui reposait uniquement sur le bouche-à-oreille et les réseaux sociaux, sans espace propre pour convertir les prospects.",
    solution:
      "Site one page au positionnement affirmé, présentation des offres et automatisation de la prise de rendez-vous par IA.",
    technologies: ["Next.js", "Tailwind CSS", "Automatisation IA"],
    resultats: [
      { label: "Rendez-vous pris automatiquement", value: "+90 %" },
      { label: "Temps administratif économisé", value: "5h / semaine" },
      { label: "Taux de conversion visiteurs", value: "+35 %" },
    ],
    accent: "rose",
    year: 2025,
  },
  {
    slug: "boutique-mira",
    nom: "Boutique Mira",
    secteur: "Mode & accessoires",
    description:
      "Boutique e-commerce complète pour une marque d'accessoires, du catalogue produit jusqu'au paiement, avec une identité de marque pastel entièrement sur mesure.",
    probleme:
      "Une marque vendue uniquement via les réseaux sociaux et des marketplaces, sans maîtrise de son image ni de sa marge.",
    solution:
      "Boutique e-commerce sur mesure, branding complet, tunnel d'achat optimisé et structure prête pour les campagnes publicitaires.",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "Branding"],
    resultats: [
      { label: "Chiffre d'affaires en ligne", value: "+75 % en 6 mois" },
      { label: "Taux d'abandon de panier", value: "-22 %" },
      { label: "Panier moyen", value: "+18 %" },
    ],
    accent: "lilac",
    year: 2025,
  },
];

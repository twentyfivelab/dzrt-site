import {
  LayoutTemplate,
  Globe,
  Crown,
  ShoppingCart,
  RefreshCw,
  LineChart,
  Palette,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "site-one-page",
    title: "Site One Page",
    eyebrow: "Lancement rapide",
    shortDescription:
      "Une page unique et efficace pour présenter votre activité et convertir dès les premières secondes.",
    pourQui: [
      "Indépendants et professions libérales qui démarrent leur activité",
      "Restaurateurs, artisans et commerces de proximité",
      "Lancements de produit ou événements ponctuels",
    ],
    avantages: [
      "Mise en ligne rapide pour exister sur Google sans attendre",
      "Navigation simple, pensée d'abord pour le mobile",
      "Un message clair et un seul appel à l'action",
      "Une base solide, évolutive vers un site vitrine plus tard",
    ],
    delaiIndicatif: "1 à 2 semaines",
    tarifIndicatif: "À partir de 890 €, tarif indicatif, devis personnalisé",
    icon: LayoutTemplate,
  },
  {
    slug: "site-vitrine",
    title: "Site Vitrine",
    eyebrow: "Votre référence en ligne",
    shortDescription:
      "Un site complet qui installe votre crédibilité et donne à chaque visiteur une bonne raison de vous choisir.",
    pourQui: [
      "TPE, PME et cabinets qui veulent une image professionnelle aboutie",
      "Entreprises avec plusieurs offres ou implantations à présenter",
      "Structures qui veulent investir sérieusement dans leur référencement",
    ],
    avantages: [
      "Une architecture sur mesure : accueil, services, à propos, réalisations, contact",
      "Un référencement pensé dès la conception, pas ajouté après coup",
      "Un formulaire de contact connecté à vos outils",
      "Un design unique, aligné avec votre identité de marque",
    ],
    delaiIndicatif: "3 à 5 semaines",
    tarifIndicatif: "À partir de 1 890 €, tarif indicatif, devis personnalisé",
    icon: Globe,
  },
  {
    slug: "site-premium",
    title: "Site Premium",
    eyebrow: "Pour sortir du lot",
    shortDescription:
      "Un site plus riche, avec un contenu rédigé sur mesure et des animations soignées, pour les entreprises qui veulent marquer les esprits.",
    pourQui: [
      "Entreprises qui veulent une présence en ligne au niveau de leur ambition",
      "Marques qui veulent se différencier visuellement de leurs concurrents",
      "Structures avec plusieurs offres, équipes ou marchés à mettre en scène",
    ],
    avantages: [
      "Un contenu rédigé par un copywriter, pensé pour convaincre",
      "Des animations et micro-interactions sur mesure",
      "Une architecture étendue, jusqu'à dix pages personnalisées",
      "Un accompagnement rapproché tout au long du projet",
    ],
    delaiIndicatif: "4 à 6 semaines",
    tarifIndicatif: "À partir de 2 890 €, tarif indicatif, devis personnalisé",
    icon: Crown,
  },
  {
    slug: "site-e-commerce",
    title: "Site E-commerce",
    eyebrow: "Vendre en ligne",
    shortDescription:
      "Une boutique en ligne rapide et sécurisée, pensée pour convertir du premier clic jusqu'au paiement.",
    pourQui: [
      "Marques et commerces qui veulent vendre leurs produits en ligne",
      "Boutiques physiques qui veulent développer un second canal de vente",
      "Créateurs et artisans qui veulent professionnaliser leurs ventes",
    ],
    avantages: [
      "Catalogue produits, panier et paiement sécurisé clés en main",
      "Un tunnel d'achat optimisé pour réduire les abandons de panier",
      "Une gestion simple des stocks, commandes et livraisons",
      "Une structure prête pour le référencement produit et la publicité",
    ],
    delaiIndicatif: "5 à 8 semaines",
    tarifIndicatif: "À partir de 3 490 €, tarif indicatif, devis personnalisé",
    icon: ShoppingCart,
  },
  {
    slug: "refonte",
    title: "Refonte de site",
    eyebrow: "Votre site mérite mieux",
    shortDescription:
      "Un audit complet de votre site actuel, suivi d'une refonte moderne qui garde ce qui marche et corrige ce qui freine vos visiteurs.",
    pourQui: [
      "Entreprises avec un site vieillissant, lent ou mal adapté au mobile",
      "Structures qui changent d'image ou de positionnement",
      "Sites qui ne génèrent plus assez de contacts ou de ventes",
    ],
    avantages: [
      "Un audit gratuit avant tout engagement : design, technique, référencement",
      "La reprise de vos contenus utiles, sans repartir de zéro inutilement",
      "Un gain immédiat en vitesse, en clarté et en image",
      "Un référencement préservé, et le plus souvent amélioré",
    ],
    delaiIndicatif: "2 à 6 semaines selon l'ampleur",
    tarifIndicatif: "Sur devis, après un audit gratuit",
    icon: RefreshCw,
  },
  {
    slug: "suivi-optimisation",
    title: "Suivi & Optimisation",
    eyebrow: "Après la mise en ligne",
    shortDescription:
      "Un accompagnement mensuel pour que votre site reste rapide, sécurisé et toujours plus visible sur Google.",
    pourQui: [
      "Tous les sites livrés par DZRT., pour préserver leur performance dans la durée",
      "Entreprises qui préfèrent déléguer la technique et se concentrer sur leur activité",
      "Structures qui veulent progresser en continu sur Google et Google Business Profile",
    ],
    avantages: [
      "Une maintenance technique et des sauvegardes régulières",
      "Une optimisation continue du référencement naturel",
      "Un suivi de votre fiche Google Business Profile",
      "Des corrections, des améliorations et des automatisations par IA",
    ],
    inclusions: [
      "Maintenance et mises à jour de sécurité",
      "Sauvegardes automatiques régulières",
      "Optimisation SEO continue (contenu, structure, vitesse)",
      "Suivi et optimisation Google Business Profile",
      "Corrections et améliorations d'ergonomie",
      "Surveillance des performances et des Core Web Vitals",
      "Automatisations IA (réponses, relances, reporting)",
    ],
    delaiIndicatif: "Sans engagement de durée",
    tarifIndicatif: "À partir de 89 €/mois, tarif indicatif, devis personnalisé",
    icon: LineChart,
  },
  {
    slug: "branding",
    title: "Branding & Identité visuelle",
    eyebrow: "Une marque, pas juste un site",
    shortDescription:
      "Une identité visuelle complète et cohérente : logo, palette, typographies et univers graphique, pensés pour durer.",
    pourQui: [
      "Nouvelles marques qui veulent démarrer avec une identité forte",
      "Entreprises qui veulent moderniser leur image",
      "Toute structure qui veut une cohérence parfaite entre son site et sa communication",
    ],
    avantages: [
      "Un logo minimaliste et mémorable, décliné sur tous vos supports",
      "Une palette de couleurs et des typographies sur mesure",
      "Un univers graphique cohérent : icônes, boutons, cartes, illustrations",
      "Une expérience utilisateur fidèle à votre identité",
    ],
    delaiIndicatif: "Intégré à chaque projet, ou en prestation indépendante",
    tarifIndicatif: "À partir de 690 €, tarif indicatif, devis personnalisé",
    icon: Palette,
  },
];

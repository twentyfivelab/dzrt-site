import {
  LayoutTemplate,
  Globe,
  ShoppingCart,
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
      "Une page unique, percutante et parfaitement structurée pour présenter votre activité et convertir dès le premier scroll.",
    pourQui: [
      "Indépendants et professions libérales qui démarrent leur activité",
      "Restaurateurs, artisans et commerces de proximité",
      "Événements, lancements de produit ou pages de présentation ponctuelles",
    ],
    avantages: [
      "Mise en ligne rapide, idéale pour exister sur Google sans attendre",
      "Navigation fluide par ancres, pensée pour le mobile en priorité",
      "Un message clair, une offre lisible, un appel à l'action unique",
      "Base solide et évolutive vers un site vitrine complet plus tard",
    ],
    delaiIndicatif: "1 à 2 semaines",
    tarifIndicatif: "À partir de 890 € — tarif indicatif, devis personnalisé",
    icon: LayoutTemplate,
  },
  {
    slug: "site-vitrine",
    title: "Site Vitrine",
    eyebrow: "Votre référence en ligne",
    shortDescription:
      "Un site multi-pages complet qui installe durablement votre crédibilité et donne à chaque visiteur une raison de vous choisir.",
    pourQui: [
      "TPE, PME et cabinets qui veulent une image professionnelle aboutie",
      "Entreprises avec plusieurs offres, équipes ou implantations à présenter",
      "Structures qui veulent investir sérieusement dans leur référencement",
    ],
    avantages: [
      "Architecture sur mesure : accueil, services, à propos, réalisations, contact",
      "SEO technique intégré dès la conception, pas ajouté après coup",
      "Formulaire de contact et prise de rendez-vous connectés à vos outils",
      "Design unique, aligné avec votre identité de marque",
    ],
    delaiIndicatif: "3 à 5 semaines",
    tarifIndicatif: "À partir de 1 890 € — tarif indicatif, devis personnalisé",
    icon: Globe,
  },
  {
    slug: "site-e-commerce",
    title: "Site E-commerce",
    eyebrow: "Vendre en ligne",
    shortDescription:
      "Une boutique en ligne rapide, sécurisée et pensée pour la conversion, du premier clic jusqu'au paiement.",
    pourQui: [
      "Marques et commerces qui veulent vendre leurs produits en ligne",
      "Boutiques physiques qui souhaitent développer un second canal de vente",
      "Créateurs et artisans qui veulent professionnaliser leurs ventes",
    ],
    avantages: [
      "Catalogue produits, panier et paiement sécurisé clés en main",
      "Tunnel d'achat optimisé pour réduire les abandons de panier",
      "Gestion des stocks, commandes et livraisons simplifiée au quotidien",
      "Structure prête pour le référencement produit et les campagnes publicitaires",
    ],
    delaiIndicatif: "5 à 8 semaines",
    tarifIndicatif: "À partir de 3 490 € — tarif indicatif, devis personnalisé",
    icon: ShoppingCart,
  },
  {
    slug: "suivi-optimisation",
    title: "Suivi & Optimisation",
    eyebrow: "Après la mise en ligne",
    shortDescription:
      "Un accompagnement mensuel pour que votre site reste rapide, sécurisé, à jour et toujours plus visible sur Google.",
    pourQui: [
      "Tous les sites livrés par DZRT., pour préserver leur performance dans la durée",
      "Entreprises qui veulent déléguer la technique pour se concentrer sur leur activité",
      "Structures qui veulent progresser en continu sur Google et Google Business Profile",
    ],
    avantages: [
      "Maintenance technique, mises à jour et sauvegardes régulières",
      "Optimisation continue du référencement naturel (SEO)",
      "Suivi et optimisation de votre fiche Google Business Profile",
      "Corrections, améliorations de performance et automatisations IA",
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
    delaiIndicatif: "Engagement mensuel, sans engagement de durée",
    tarifIndicatif: "À partir de 89 €/mois — tarif indicatif, devis personnalisé",
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
      "Entreprises existantes qui veulent moderniser leur image",
      "Toute structure qui veut une cohérence parfaite entre son site et sa communication",
    ],
    avantages: [
      "Logo minimaliste et mémorable, décliné pour tous vos supports",
      "Palette de couleurs et typographies sur mesure",
      "Univers graphique cohérent : icônes, boutons, cartes, illustrations",
      "Une expérience utilisateur alignée avec l'identité de la marque",
    ],
    delaiIndicatif: "Intégré à chaque projet, ou en prestation indépendante",
    tarifIndicatif: "À partir de 690 € — tarif indicatif, devis personnalisé",
    icon: Palette,
  },
];

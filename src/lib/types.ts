import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  pourQui: string[];
  avantages: string[];
  delaiIndicatif: string;
  tarifIndicatif: string;
  inclusions?: string[];
  icon: LucideIcon;
}

export interface PortfolioResult {
  label: string;
  value: string;
}

export interface PortfolioProject {
  slug: string;
  nom: string;
  secteur: string;
  description: string;
  probleme: string;
  solution: string;
  technologies: string[];
  resultats: PortfolioResult[];
  accent: "rose" | "peach" | "lilac" | "lavender" | "apricot";
  year: number;
}

export interface Testimonial {
  id: string;
  nom: string;
  role: string;
  secteur: string;
  entreprise: string;
  citation: string;
  note: number;
}

export type FaqCategory =
  | "tarifs"
  | "delais"
  | "process"
  | "technique"
  | "apres-livraison";

export interface FaqEntry {
  id: string;
  question: string;
  reponse: string;
  category: FaqCategory;
  featured?: boolean;
}

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
  tarifNote?: string;
  inclusions?: string[];
  icon: LucideIcon;
}

export interface PortfolioResult {
  label: string;
  value: string;
}

export interface PortfolioTrend {
  label: string;
  points: number[];
}

export interface PortfolioTestimonial {
  auteur: string;
  role: string;
  citation: string;
  note: number;
}

export interface PortfolioProject {
  slug: string;
  nom: string;
  secteur: string;
  probleme: string[];
  solution: string[];
  technologies: string[];
  resultats: PortfolioResult[];
  trend: PortfolioTrend;
  temoignage: PortfolioTestimonial;
  accent: "rose" | "peach" | "lilac" | "lavender" | "apricot";
  year: number;
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

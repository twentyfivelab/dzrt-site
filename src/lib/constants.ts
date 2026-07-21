export const SITE_URL = "https://dzrt.fr";
export const SITE_NAME = "DZRT.";
export const SITE_TAGLINE = "Studio digital dédié aux sites internet, au branding et à la croissance en ligne.";
export const SITE_DESCRIPTION =
  "DZRT. crée des sites internet et des identités de marque qui inspirent confiance, pour les entreprises et indépendants qui veulent se différencier en ligne.";

export const CONTACT_EMAIL = "hello@dzrt.fr";
export const CONTACT_PHONE = "[À COMPLÉTER : numéro de téléphone]";
export const CONTACT_PHONE_DISPLAY = "[À COMPLÉTER : ex. 01 23 45 67 89]";

export const WHATSAPP_NUMBER_DISPLAY = "+33 6 75 81 01 84";
export const WHATSAPP_LINK = "https://wa.me/33675810184";

export const SOCIAL_LINKS = {
  instagram: "[À COMPLÉTER : URL Instagram]",
  linkedin: "[À COMPLÉTER : URL LinkedIn]",
  twitterX: "[À COMPLÉTER : URL X]",
} as const;

// Informations légales — à compléter avant mise en production.
export const COMPANY_LEGAL_NAME = "[À COMPLÉTER : raison sociale]";
export const LEGAL_FORM = "[À COMPLÉTER : forme juridique, ex. SASU]";
export const SHARE_CAPITAL = "[À COMPLÉTER : capital social]";
export const SIRET = "[À COMPLÉTER : numéro SIRET]";
export const RCS = "[À COMPLÉTER : Ville d'immatriculation + numéro RCS]";
export const VAT_NUMBER = "[À COMPLÉTER : numéro de TVA intracommunautaire]";
export const REGISTERED_ADDRESS = "[À COMPLÉTER : adresse du siège social]";
export const PUBLICATION_DIRECTOR = "[À COMPLÉTER : nom du directeur de publication]";
export const HOST_NAME = "[À COMPLÉTER : hébergeur, ex. Vercel Inc.]";
export const HOST_ADDRESS = "[À COMPLÉTER : adresse de l'hébergeur]";

export const DEVIS_RESPONSE_DELAY = "24 à 48h ouvrées";

// Google Analytics 4 — surchargeable via NEXT_PUBLIC_GA_MEASUREMENT_ID si besoin (staging, etc.).
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-RNJEFXGPWE";

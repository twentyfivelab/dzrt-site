import { z } from "zod";

export const projetOptions = [
  { value: "site-one-page", label: "Site One Page" },
  { value: "site-vitrine", label: "Site Vitrine" },
  { value: "site-e-commerce", label: "Site E-commerce" },
  { value: "branding", label: "Branding / identité visuelle" },
  { value: "autre", label: "Autre projet" },
] as const;

export const budgetOptions = [
  { value: "moins-1000", label: "Moins de 1 000 €" },
  { value: "1000-3000", label: "1 000 € – 3 000 €" },
  { value: "3000-8000", label: "3 000 € – 8 000 €" },
  { value: "plus-8000", label: "Plus de 8 000 €" },
  { value: "non-defini", label: "Pas encore défini" },
] as const;

const nomField = z
  .string({ error: "Merci d'indiquer votre nom." })
  .trim()
  .min(2, "Merci d'indiquer votre nom.");

const emailField = z.email("Merci d'indiquer une adresse e-mail valide.");

const telephoneField = z.string().trim().optional().or(z.literal(""));

export const devisSchema = z.object({
  nom: nomField,
  entreprise: z.string().trim().optional().or(z.literal("")),
  telephone: telephoneField,
  email: emailField,
  projet: z.enum(projetOptions.map((option) => option.value) as [string, ...string[]], {
    error: "Merci de préciser le type de projet.",
  }),
  budget: z.enum(budgetOptions.map((option) => option.value) as [string, ...string[]], {
    error: "Merci d'indiquer un budget indicatif.",
  }),
  message: z
    .string({ error: "Merci de préciser votre besoin (10 caractères minimum)." })
    .trim()
    .min(10, "Merci de préciser votre besoin (10 caractères minimum)."),
});

export type DevisFormValues = z.infer<typeof devisSchema>;

export const contactSchema = z.object({
  nom: nomField,
  email: emailField,
  telephone: telephoneField,
  message: z
    .string({ error: "Merci de préciser votre message (10 caractères minimum)." })
    .trim()
    .min(10, "Merci de préciser votre message (10 caractères minimum)."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

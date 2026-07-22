import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import {
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_DISPLAY,
} from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Une question, un projet en tête ? Contactez l'équipe DZRT. par e-mail, WhatsApp ou via le formulaire de contact.",
  path: "/contact",
});

const socialItems = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", monogram: "IG" },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", monogram: "in" },
  { href: SOCIAL_LINKS.twitterX, label: "X (Twitter)", monogram: "X" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Discutons de votre projet"
        description="Une question, un projet en tête, ou simplement envie d'échanger ? Nous vous répondons rapidement."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-[2rem] border border-ink-900/5 bg-white/80 p-8 shadow-card backdrop-blur-sm sm:p-10 dark:border-white/8 dark:bg-white/4">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
            <div className="rounded-[2rem] border border-ink-900/5 bg-white/70 p-8 backdrop-blur-sm dark:border-white/8 dark:bg-white/4">
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                Coordonnées
              </h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-ink-700 hover:text-lilac-600 dark:text-ink-100 dark:hover:text-lilac-300"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--grad-hero)]">
                      <Mail className="h-4 w-4 text-ink-900" aria-hidden="true" />
                    </span>
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-ink-700 hover:text-lilac-600 dark:text-ink-100 dark:hover:text-lilac-300"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--grad-hero)]">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    {WHATSAPP_NUMBER_DISPLAY}
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex gap-3 border-t border-ink-900/10 pt-6 dark:border-white/8">
                {socialItems.map(({ href, label, monogram }) => {
                  const isPlaceholder = href.startsWith("[À COMPLÉTER");
                  return (
                    <a
                      key={label}
                      href={isPlaceholder ? "#" : href}
                      target={isPlaceholder ? undefined : "_blank"}
                      rel={isPlaceholder ? undefined : "noopener noreferrer"}
                      aria-label={label}
                      aria-disabled={isPlaceholder}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-xs font-semibold text-ink-700 transition-colors hover:border-lilac-300 hover:bg-lilac-50 hover:text-lilac-600 dark:border-white/12 dark:text-ink-100 dark:hover:border-lilac-400/40 dark:hover:bg-lilac-400/10 dark:hover:text-lilac-300"
                    >
                      {monogram}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Mail, MessageCircle, Clock3 } from "lucide-react";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DevisForm } from "@/components/forms/DevisForm";
import { CONTACT_EMAIL, DEVIS_RESPONSE_DELAY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demander un devis",
  description:
    "Décrivez votre projet en quelques minutes : nous vous répondons sous 24 à 48h avec des recommandations concrètes et un devis personnalisé.",
  path: "/devis",
});

const steps = [
  {
    icon: MessageCircle,
    title: "Vous décrivez votre projet",
    description: "Quelques minutes suffisent pour nous donner une vision claire de vos besoins.",
  },
  {
    icon: Clock3,
    title: `Nous revenons vers vous sous ${DEVIS_RESPONSE_DELAY}`,
    description: "Avec des recommandations concrètes et un devis personnalisé, sans jargon.",
  },
  {
    icon: Mail,
    title: "Nous échangeons et affinons ensemble",
    description: "Le projet démarre dès que la formule et le périmètre vous conviennent.",
  },
];

export default function DevisPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Devis", href: "/devis" }]} />
      <PageHero
        eyebrow="Devis gratuit"
        title="Parlons de votre projet"
        description="Remplissez ce formulaire en quelques minutes : plus les informations sont précises, plus notre réponse le sera aussi."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-[2rem] border border-ink-900/5 bg-white/80 p-8 shadow-card backdrop-blur-sm sm:p-10 dark:border-white/8 dark:bg-white/4">
              <DevisForm />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="rounded-[2rem] border border-ink-900/5 bg-white/70 p-8 backdrop-blur-sm sm:p-10 dark:border-white/8 dark:bg-white/4">
              <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                Comment ça se passe ensuite ?
              </h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[image:var(--grad-hero)] text-sm font-semibold text-ink-900">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-ink-900 dark:text-ink-50">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-ink-900/10 pt-6 dark:border-white/8">
                <p className="text-sm text-ink-500 dark:text-ink-300">
                  Vous préférez nous écrire directement ?
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 inline-flex items-center gap-2 font-medium text-ink-900 hover:text-lilac-600 dark:text-ink-50 dark:hover:text-lilac-300"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

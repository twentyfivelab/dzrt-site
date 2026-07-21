import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { FaqList } from "@/components/sections/faq/FaqList";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqEntries } from "@/lib/data/faq";
import type { FaqCategory } from "@/lib/types";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Tarifs, délais, déroulement d'un projet, aspects techniques et suivi après livraison : toutes les réponses à vos questions sur nos prestations.",
  path: "/faq",
});

const categoryLabels: Record<FaqCategory, string> = {
  tarifs: "Tarifs & paiement",
  delais: "Délais",
  process: "Déroulement du projet",
  technique: "Aspects techniques",
  "apres-livraison": "Après la livraison",
};

const categoryOrder: FaqCategory[] = [
  "tarifs",
  "delais",
  "process",
  "technique",
  "apres-livraison",
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.reponse,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      <PageHero
        eyebrow="FAQ"
        title="Toutes les réponses avant de vous lancer"
        description="Des questions sur nos tarifs, nos délais ou notre façon de travailler ? Nous répondons ici aux questions les plus fréquentes, en toute transparence."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-4xl space-y-14">
          {categoryOrder.map((category) => {
            const entries = faqEntries.filter((entry) => entry.category === category);
            if (entries.length === 0) return null;
            return (
              <Reveal key={category}>
                <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-ink-50">
                  {categoryLabels[category]}
                </h2>
                <div className="mt-4 rounded-3xl border border-ink-900/5 bg-white/80 px-8 shadow-card backdrop-blur-sm dark:border-white/8 dark:bg-white/4">
                  <FaqList entries={entries} />
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <CtaBanner
        title="Une question qui ne trouve pas de réponse ici ?"
        description="Écrivez-nous directement, nous vous répondons sous 24 à 48h, sans jargon technique."
      />
    </>
  );
}

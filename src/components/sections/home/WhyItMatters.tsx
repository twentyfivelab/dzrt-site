import { Globe, Gem, Search, MapPin, BrainCircuit, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Globe,
    title: "Un site internet, plus une option",
    description:
      "Neuf clients sur dix consultent internet avant de contacter une entreprise. Sans site, vous laissez cette décision entière entre les mains de vos concurrents.",
  },
  {
    icon: Gem,
    title: "Votre image de marque installe la confiance",
    description:
      "Un visiteur juge votre sérieux en quelques secondes. Une identité visuelle cohérente transforme cette première impression en décision de vous faire confiance.",
  },
  {
    icon: Search,
    title: "Être visible sur Google, c'est exister",
    description:
      "Un site non référencé est un site invisible. Un bon positionnement Google amène des clients qualifiés, jour après jour, sans dépendre de la publicité.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile, votre vitrine locale",
    description:
      "Une fiche bien tenue montre vos avis, vos horaires et vos photos au moment où un client décide de passer à l'action.",
  },
  {
    icon: BrainCircuit,
    title: "L'intelligence artificielle, un avantage concret",
    description:
      "Bien utilisée, l'IA répond plus vite à vos clients, améliore vos contenus et vous fait gagner un temps précieux au quotidien.",
  },
  {
    icon: Workflow,
    title: "Automatiser pour se concentrer sur l'essentiel",
    description:
      "Automatiser les tâches répétitives, comme les rendez-vous ou les relances, vous libère du temps pour vous concentrer sur votre métier.",
  },
];

export function WhyItMatters() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pourquoi investir maintenant"
          title="Ce qui fait la différence entre être en ligne et être visible"
          description="Six leviers concrets pour transformer votre présence en ligne en moteur de croissance."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.08}>
              <div className="h-full rounded-3xl border border-ink-900/5 bg-white/70 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm dark:border-white/8 dark:bg-white/4 dark:hover:border-white/15">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--grad-hero)]">
                  <reason.icon className="h-6 w-6 text-ink-900" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                  {reason.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-ink-300">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

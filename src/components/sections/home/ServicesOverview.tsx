import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

const homeSlugs = ["site-one-page", "site-vitrine", "site-e-commerce"];
const highlightedServices = homeSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function ServicesOverview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[image:var(--grad-section)]" aria-hidden="true" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Sites internet"
            title="Un accompagnement complet, du premier pixel à la croissance durable"
            description="Chaque projet est différent. Voici comment nous construisons la solution la plus adaptée à votre activité."
          />
          <Button href="/sites-internet" variant="ghost" className="hidden shrink-0 sm:inline-flex">
            Voir toutes nos prestations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlightedServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="h-full">
              <Link
                href={`/sites-internet#${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink-900/5 bg-white/80 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-md dark:border-white/8 dark:bg-white/4 dark:hover:border-white/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[image:var(--grad-hero)]">
                  <service.icon className="h-6 w-6 text-ink-900" aria-hidden="true" />
                </div>
                <span className="mt-6 text-xs font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
                  {service.eyebrow}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink-500 dark:text-ink-300">
                  {service.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-ink-50">
                  En savoir plus
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Button href="/sites-internet" variant="ghost" className="mt-10 sm:hidden">
          Voir toutes nos prestations
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { TestimonialCard } from "@/components/sections/temoignages/TestimonialCard";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/testimonials";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Témoignages",
  description:
    "Restaurateurs, artisans, coachs, professionnels de santé, photographes et boutiques : découvrez ce que nos clients pensent de leur collaboration avec DZRT.",
  path: "/temoignages",
});

export default function TemoignagesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Témoignages", href: "/temoignages" }]} />
      <PageHero
        eyebrow="Témoignages"
        title="La confiance de nos clients, notre meilleure référence"
        description="Restaurateurs, artisans, coachs, professionnels de santé, photographes ou créateurs de marque : voici ce qu'ils retiennent de leur collaboration avec DZRT."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.id} delay={(index % 3) * 0.08} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        title="Envie de vivre la même expérience ?"
        description="Discutons de votre projet et voyons comment nous pouvons vous aider à obtenir des résultats similaires."
      />
    </>
  );
}

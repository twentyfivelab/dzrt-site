import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TestimonialCard } from "@/components/sections/temoignages/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function SocialProofTeaser() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ils nous font confiance"
          title="Des résultats concrets, racontés par ceux qui les vivent"
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.08} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/temoignages" variant="ghost">
            Voir tous les témoignages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

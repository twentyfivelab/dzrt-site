import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FaqList } from "@/components/sections/faq/FaqList";
import { featuredFaqEntries } from "@/lib/data/faq";

export function FaqTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[image:var(--grad-section)]" aria-hidden="true" />
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Les réponses aux questions que l'on nous pose le plus souvent"
          align="center"
          className="mx-auto"
        />
        <Reveal className="mt-12 rounded-3xl border border-ink-900/5 bg-white/80 px-8 shadow-card backdrop-blur-sm dark:border-white/8 dark:bg-white/4">
          <FaqList entries={featuredFaqEntries} />
        </Reveal>
        <div className="mt-10 flex justify-center">
          <Button href="/faq" variant="ghost">
            Voir toute la FAQ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { portfolioProjects } from "@/lib/data/portfolio";

const accentTone = {
  rose: "rose",
  peach: "peach",
  lilac: "lilac",
  lavender: "lavender",
  apricot: "apricot",
} as const;

export function SocialProofTeaser() {
  const featured = portfolioProjects.slice(0, 3);

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
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08} className="h-full">
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <Badge tone={accentTone[project.accent]}>{project.secteur}</Badge>
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: project.temoignage.note }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-peach-400 text-peach-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 font-display text-xl font-semibold text-ink-900 dark:text-ink-50">
                  {project.nom}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold text-gradient">
                  {project.resultats[0]?.value}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-300">
                  {project.resultats[0]?.label}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-100">
                  &laquo;&nbsp;{project.temoignage.citation}&nbsp;&raquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-ink-900 dark:text-ink-50">
                  {project.temoignage.auteur}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/realisations" variant="ghost">
            Voir toutes nos réalisations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

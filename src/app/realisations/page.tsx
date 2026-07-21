import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { PortfolioGrid } from "@/components/sections/realisations/PortfolioGrid";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Réalisations",
  description:
    "Découvrez une sélection de projets menés par DZRT. : sites vitrines, e-commerce et one page, avec leurs résultats concrets en visibilité, conversion et chiffre d'affaires.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations", href: "/realisations" }]} />
      <PageHero
        eyebrow="Réalisations"
        title="Des projets pensés pour produire des résultats mesurables"
        description="Chaque projet répond à un objectif business précis. Voici quelques exemples de collaborations et les résultats obtenus."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
      <CtaBanner
        title="Votre projet pourrait être le prochain."
        description="Parlons de vos objectifs et voyons comment leur donner la forme d'un site qui convertit vraiment."
      />
    </>
  );
}

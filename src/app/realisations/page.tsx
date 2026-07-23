import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { PortfolioGrid } from "@/components/sections/realisations/PortfolioGrid";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, buildWebPageJsonLd } from "@/lib/metadata";

const title = "Réalisations";
const description =
  "Sites vitrines, e-commerce et one page : découvrez nos projets, leurs résultats chiffrés en visibilité, conversion et chiffre d'affaires, et les témoignages de nos clients.";
const path = "/realisations";

export const metadata: Metadata = buildMetadata({ title, description, path });

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={buildWebPageJsonLd({ title, description, path })} />
      <Breadcrumbs items={[{ label: "Réalisations", href: "/realisations" }]} />
      <PageHero
        eyebrow="Réalisations"
        title="Des projets pensés pour des résultats mesurables"
        description="Chaque projet répond à un objectif précis. Voici quelques collaborations, leurs résultats chiffrés et l'avis des clients qui les ont vécues."
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

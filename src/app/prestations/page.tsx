import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { ServiceDetailCard } from "@/components/sections/prestations/ServiceDetailCard";
import { BrandingSection } from "@/components/sections/prestations/BrandingSection";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Nos Prestations",
  description:
    "Site One Page, Site Vitrine, Site E-commerce, Suivi & Optimisation et Branding : découvrez nos prestations, pour qui elles sont faites, leurs délais et leurs tarifs indicatifs.",
  path: "/prestations",
});

const detailServices = services.filter((service) => service.slug !== "branding");

const servicesJsonLd = services.map((service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  name: service.title,
  description: service.shortDescription,
  areaServed: "FR",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
}));

export default function PrestationsPage() {
  return (
    <>
      {servicesJsonLd.map((entry) => (
        <JsonLd key={entry.name} data={entry} />
      ))}
      <Breadcrumbs items={[{ label: "Prestations", href: "/prestations" }]} />
      <PageHero
        eyebrow="Nos prestations"
        title="Des solutions claires, pour chaque étape de votre croissance"
        description="Que vous démarriez votre activité ou que vous vouliez structurer votre présence en ligne, chaque prestation est pensée pour un objectif précis — sans complexité inutile."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="space-y-8">
          {detailServices.map((service) => (
            <ServiceDetailCard key={service.slug} service={service} />
          ))}
        </Container>
      </section>
      <BrandingSection />
      <CtaBanner
        title="Une question sur la prestation la plus adaptée à votre projet ?"
        description="Décrivez-nous votre activité et vos objectifs : nous vous recommandons la formule la plus pertinente, sans survente."
      />
    </>
  );
}

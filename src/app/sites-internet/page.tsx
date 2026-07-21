import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { ServiceDetailCard } from "@/components/sections/sites-internet/ServiceDetailCard";
import { BrandingSection } from "@/components/sections/sites-internet/BrandingSection";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/lib/data/services";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Nos offres",
  description:
    "Site One Page, Vitrine, Premium, E-commerce, refonte, maintenance et branding : toutes nos offres pour construire et faire grandir votre présence en ligne, avec délais et tarifs indicatifs.",
  path: "/sites-internet",
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

export default function SitesInternetPage() {
  return (
    <>
      {servicesJsonLd.map((entry) => (
        <JsonLd key={entry.name} data={entry} />
      ))}
      <Breadcrumbs items={[{ label: "Nos offres", href: "/sites-internet" }]} />
      <PageHero
        eyebrow="Nos offres"
        title="La bonne solution pour chaque étape de votre croissance"
        description="Un premier site, une refonte complète, une boutique en ligne ou un accompagnement mensuel : chaque offre a un objectif clair et un résultat concret pour votre activité."
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
        title="Une question sur la formule la plus adaptée à votre projet ?"
        description="Décrivez-nous votre activité et vos objectifs. Nous vous recommandons la formule la plus pertinente, sans survente."
      />
    </>
  );
}

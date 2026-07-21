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
  title: "Sites Internet",
  description:
    "Site One Page, Vitrine, Premium, E-commerce, refonte, maintenance et branding : toutes nos prestations de création de site internet, avec délais et tarifs indicatifs.",
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
      <Breadcrumbs items={[{ label: "Sites Internet", href: "/sites-internet" }]} />
      <PageHero
        eyebrow="Sites internet"
        title="Un site adapté à chaque étape de votre croissance"
        description="Que vous démarriez votre activité ou vouliez faire évoluer votre présence en ligne, chaque prestation répond à un objectif précis, du premier site à la refonte."
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

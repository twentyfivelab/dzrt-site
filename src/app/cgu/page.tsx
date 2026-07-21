import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { LegalSection } from "@/components/sections/shared/LegalSection";
import { Container } from "@/components/ui/Container";
import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Conditions Générales d'Utilisation",
  description:
    "Conditions générales d'utilisation du site DZRT. : accès au site, propriété intellectuelle, responsabilité et droit applicable.",
  path: "/cgu",
  noIndex: true,
});

export default function CguPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "CGU", href: "/cgu" }]} />
      <PageHero
        eyebrow="Conditions d'utilisation"
        title="Conditions Générales d'Utilisation"
        description={`Les présentes CGU régissent l'utilisation du site ${SITE_NAME} (${SITE_URL}). En naviguant sur ce site, vous acceptez sans réserve les conditions décrites ci-dessous.`}
      />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl space-y-10">
          <LegalSection title="Objet">
            <p>
              Les présentes conditions générales d&apos;utilisation (CGU) ont pour objet de
              définir les modalités de mise à disposition du site {SITE_NAME} et les
              conditions d&apos;utilisation du service par l&apos;utilisateur.
            </p>
          </LegalSection>

          <LegalSection title="Accès au site">
            <p>
              Le site {SITE_NAME} est accessible gratuitement à tout utilisateur disposant
              d&apos;un accès à Internet. Tous les frais nécessaires pour accéder au service
              (matériel informatique, connexion Internet, etc.) sont à la charge de
              l&apos;utilisateur. {COMPANY_LEGAL_NAME} met tout en œuvre pour assurer un accès
              de qualité au site, sans toutefois être tenue à une obligation de résultat, et
              se réserve le droit de suspendre l&apos;accès pour des raisons de maintenance
              sans préavis.
            </p>
          </LegalSection>

          <LegalSection title="Formulaires de contact et de devis">
            <p>
              Les formulaires disponibles sur le site (demande de devis, contact) permettent à
              l&apos;utilisateur de transmettre une demande d&apos;information ou de devis.
              Les informations transmises doivent être exactes et sincères. {COMPANY_LEGAL_NAME}{" "}
              s&apos;engage à répondre à ces demandes dans un délai raisonnable, sans que cela
              constitue un engagement contractuel avant l&apos;acceptation formelle d&apos;un
              devis par les deux parties.
            </p>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              Le contenu du site {SITE_NAME} (textes, images, logo, identité visuelle, mise en
              page) est protégé par le droit de la propriété intellectuelle. Toute reproduction
              ou utilisation non autorisée de ces éléments engage la responsabilité de
              l&apos;utilisateur.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              {COMPANY_LEGAL_NAME} ne saurait être tenue responsable en cas de force majeure ou
              d&apos;évènement indépendant de sa volonté, causant une dégradation ou une
              interruption du site. {COMPANY_LEGAL_NAME} décline toute responsabilité quant à
              l&apos;utilisation qui pourrait être faite des informations et contenus présents
              sur le site.
            </p>
          </LegalSection>

          <LegalSection title="Modification des CGU">
            <p>
              {COMPANY_LEGAL_NAME} se réserve le droit de modifier à tout moment les présentes
              CGU, notamment pour s&apos;adapter aux évolutions du site par la mise à
              disposition de nouvelles fonctionnalités ou par l&apos;amélioration ou la
              modification de celles existantes. Ces modifications s&apos;appliquent dès leur
              mise en ligne.
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>
              Les présentes CGU sont soumises au droit français. Pour toute question relative
              à leur interprétation ou leur application, vous pouvez nous contacter à
              l&apos;adresse <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

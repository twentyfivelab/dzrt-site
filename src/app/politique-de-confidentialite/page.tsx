import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { LegalSection } from "@/components/sections/shared/LegalSection";
import { Container } from "@/components/ui/Container";
import { COMPANY_LEGAL_NAME, CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site DZRT. : données collectées, finalités, durée de conservation et droits des utilisateurs conformément au RGPD.",
  path: "/politique-de-confidentialite",
  noIndex: true,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
        ]}
      />
      <PageHero
        eyebrow="Vos données"
        title="Politique de confidentialité"
        description="La protection de vos données personnelles est une priorité. Cette page détaille les données que nous collectons, pourquoi, et les droits dont vous disposez."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl space-y-10">
          <LegalSection title="Responsable du traitement">
            <p>
              Le responsable du traitement des données collectées sur le site {SITE_NAME} est{" "}
              {COMPANY_LEGAL_NAME}. Pour toute question relative à vos données personnelles,
              vous pouvez nous contacter à l&apos;adresse{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </LegalSection>

          <LegalSection title="Données collectées">
            <p>
              Nous collectons uniquement les données que vous nous transmettez volontairement
              via nos formulaires (devis, contact), à savoir : nom, nom de l&apos;entreprise,
              adresse e-mail, numéro de téléphone et le contenu de votre message.
            </p>
            <p>
              Aucune donnée bancaire ou sensible n&apos;est collectée via ces formulaires.
            </p>
          </LegalSection>

          <LegalSection title="Finalité du traitement">
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul>
              <li>répondre à vos demandes de devis ou de contact ;</li>
              <li>assurer le suivi commercial de votre demande ;</li>
              <li>vous transmettre, si vous en faites la demande, des informations relatives à nos prestations.</li>
            </ul>
          </LegalSection>

          <LegalSection title="Durée de conservation">
            <p>
              Vos données sont conservées pendant une durée de trois (3) ans à compter de
              notre dernier contact, sauf obligation légale contraire ou demande de votre part
              de suppression anticipée.
            </p>
          </LegalSection>

          <LegalSection title="Destinataires des données">
            <p>
              Les données collectées sont destinées exclusivement à {COMPANY_LEGAL_NAME} et,
              le cas échéant, à nos sous-traitants techniques (hébergement, envoi
              d&apos;e-mails) strictement nécessaires au fonctionnement du site et de nos
              outils de communication. Ces données ne sont jamais vendues ni cédées à des
              tiers à des fins commerciales.
            </p>
          </LegalSection>

          <LegalSection title="Cookies">
            <p>
              Le site {SITE_NAME} n&apos;utilise pas de cookies de suivi publicitaire ou de
              mesure d&apos;audience tierce. Seuls des cookies strictement nécessaires au
              fonctionnement technique du site peuvent être déposés.
            </p>
          </LegalSection>

          <LegalSection title="Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
              loi Informatique et Libertés, vous disposez des droits suivants sur vos données
              personnelles :
            </p>
            <ul>
              <li>droit d&apos;accès et de rectification ;</li>
              <li>droit à l&apos;effacement (« droit à l&apos;oubli ») ;</li>
              <li>droit à la limitation du traitement ;</li>
              <li>droit à la portabilité de vos données ;</li>
              <li>droit d&apos;opposition au traitement.</li>
            </ul>
            <p>
              Pour exercer l&apos;un de ces droits, contactez-nous à l&apos;adresse{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Vous disposez également
              du droit d&apos;introduire une réclamation auprès de la Commission Nationale de
              l&apos;Informatique et des Libertés (CNIL).
            </p>
          </LegalSection>

          <LegalSection title="Sécurité">
            <p>
              Nous mettons en œuvre les mesures techniques et organisationnelles appropriées
              pour protéger vos données contre toute perte, accès non autorisé, divulgation ou
              altération.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

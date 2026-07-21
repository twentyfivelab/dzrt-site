import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Breadcrumbs } from "@/components/sections/shared/Breadcrumbs";
import { LegalSection } from "@/components/sections/shared/LegalSection";
import { Container } from "@/components/ui/Container";
import {
  COMPANY_LEGAL_NAME,
  CONTACT_EMAIL,
  HOST_ADDRESS,
  HOST_NAME,
  LEGAL_FORM,
  PUBLICATION_DIRECTOR,
  REGISTERED_ADDRESS,
  RCS,
  SHARE_CAPITAL,
  SIRET,
  SITE_NAME,
  SITE_URL,
  VAT_NUMBER,
} from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site DZRT. : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
  path: "/mentions-legales",
  noIndex: true,
});

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description={`Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique, il est précisé aux utilisateurs du site ${SITE_NAME} l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.`}
      />
      <section className="pb-24 sm:pb-32">
        <Container className="max-w-3xl space-y-10">
          <LegalSection title="Éditeur du site">
            <p>Le site {SITE_NAME} ({SITE_URL}) est édité par :</p>
            <ul>
              <li>Raison sociale : <strong>{COMPANY_LEGAL_NAME}</strong></li>
              <li>Forme juridique : <strong>{LEGAL_FORM}</strong></li>
              <li>Capital social : <strong>{SHARE_CAPITAL}</strong></li>
              <li>Siège social : <strong>{REGISTERED_ADDRESS}</strong></li>
              <li>SIRET : <strong>{SIRET}</strong></li>
              <li>RCS : <strong>{RCS}</strong></li>
              <li>Numéro de TVA intracommunautaire : <strong>{VAT_NUMBER}</strong></li>
              <li>
                Adresse e-mail :{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li>Directeur de la publication : <strong>{PUBLICATION_DIRECTOR}</strong></li>
            </ul>
          </LegalSection>

          <LegalSection title="Hébergement">
            <p>Le site {SITE_NAME} est hébergé par :</p>
            <ul>
              <li>Hébergeur : <strong>{HOST_NAME}</strong></li>
              <li>Adresse : <strong>{HOST_ADDRESS}</strong></li>
            </ul>
          </LegalSection>

          <LegalSection title="Propriété intellectuelle">
            <p>
              L&apos;ensemble des éléments constituant ce site (textes, graphismes, logiciels,
              photographies, images, vidéos, sons, plans, logos, marques, créations et œuvres
              protégeables diverses, bases de données, etc.) ainsi que le site lui-même,
              relèvent des législations françaises et internationales sur le droit
              d&apos;auteur et la propriété intellectuelle.
            </p>
            <p>
              Ces éléments sont la propriété exclusive de {COMPANY_LEGAL_NAME}. Toute
              reproduction, représentation, diffusion ou rediffusion, en tout ou partie, du
              contenu de ce site, par quelque procédé que ce soit, sans autorisation expresse
              et préalable, est strictement interdite et constituerait une contrefaçon
              sanctionnée par les articles L.335-2 et suivants du Code de la propriété
              intellectuelle.
            </p>
          </LegalSection>

          <LegalSection title="Responsabilité">
            <p>
              {COMPANY_LEGAL_NAME} s&apos;efforce d&apos;assurer au mieux de ses possibilités
              l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont
              elle se réserve le droit de corriger le contenu à tout moment et sans préavis.
              Toutefois, {COMPANY_LEGAL_NAME} ne peut garantir l&apos;exactitude, la précision
              ou l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              {COMPANY_LEGAL_NAME} ne pourra être tenue responsable des dommages directs et
              indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site,
              résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux
              spécifications techniques requises, soit de l&apos;apparition d&apos;un bug ou
              d&apos;une incompatibilité.
            </p>
          </LegalSection>

          <LegalSection title="Liens hypertextes">
            <p>
              Le site {SITE_NAME} peut contenir des liens hypertextes vers d&apos;autres sites
              présents sur le réseau Internet. Les liens vers ces autres ressources vous font
              quitter le site {SITE_NAME}. Il est possible de créer un lien vers la page
              d&apos;accueil du présent site sans autorisation expresse de l&apos;éditeur, à
              condition que ce lien n&apos;engendre pas une utilisation à des fins commerciales
              ou publicitaires ni de propos ou d&apos;images pouvant être jugés contraires aux
              bonnes mœurs.
            </p>
          </LegalSection>

          <LegalSection title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de
              litige et à défaut de résolution amiable, les tribunaux français seront seuls
              compétents.
            </p>
          </LegalSection>
        </Container>
      </section>
    </>
  );
}

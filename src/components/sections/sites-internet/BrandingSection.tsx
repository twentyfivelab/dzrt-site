import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandMoodboard } from "@/components/ui/illustrations/BrandMoodboard";

const deliverables = [
  "Un logo minimaliste et mémorable, décliné pour tous vos supports",
  "Une palette de couleurs pensée pour votre secteur et votre personnalité",
  "Des typographies premium, cohérentes entre le web et vos supports imprimés",
  "Un univers graphique complet : icônes, boutons, cartes, illustrations",
  "Une expérience utilisateur alignée du premier au dernier pixel avec votre identité",
];

export function BrandingSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
            Branding
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl dark:text-ink-50">
            Chaque projet naît avec sa propre identité visuelle
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            Nous ne posons jamais un gabarit générique sur votre site. Logo,
            palette, typographies et univers graphique sont conçus sur mesure
            pour votre marque, puis appliqués avec la même rigueur à chaque
            page, chaque bouton et chaque carte, pour une cohérence parfaite
            du premier au dernier clic.
          </p>
          <ul className="mt-8 space-y-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-ink-700 dark:text-ink-100"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-rose-400 dark:text-rose-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <MagneticButton className="mt-8 inline-block">
            <Button href="/devis">Construire mon identité de marque</Button>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-ink-900/5 bg-white/80 py-8 shadow-glow-md backdrop-blur-sm dark:border-white/8 dark:bg-white/4">
            <p className="px-8 text-xs font-semibold tracking-wider text-ink-500 uppercase sm:px-10 dark:text-ink-300">
              Notre terrain de jeu créatif
            </p>
            <div className="mt-6">
              <BrandMoodboard />
            </div>
            <p className="mt-6 px-8 text-sm leading-relaxed text-ink-500 sm:px-10 dark:text-ink-300">
              Un aperçu de ce que nous savons créer, bien avant de parler de
              votre projet. Aucun style prédéfini : chaque identité que nous
              livrons est unique.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

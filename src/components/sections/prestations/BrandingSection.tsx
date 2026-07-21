import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const deliverables = [
  "Un logo minimaliste et mémorable, décliné pour tous vos supports",
  "Une palette de couleurs pensée pour votre secteur et votre personnalité",
  "Des typographies premium, cohérentes entre le web et vos supports imprimés",
  "Un univers graphique complet : icônes, boutons, cartes, illustrations",
  "Une expérience utilisateur alignée du premier au dernier pixel avec votre identité",
];

const swatches = [
  "bg-rose-300",
  "bg-peach-300",
  "bg-apricot-300",
  "bg-lilac-300",
  "bg-lavender-300",
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
            page, chaque bouton, chaque carte — pour une cohérence parfaite du
            premier au dernier clic.
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
          <div className="rounded-[2rem] border border-ink-900/5 bg-white/80 p-8 shadow-glow-md backdrop-blur-sm sm:p-10 dark:border-white/8 dark:bg-white/4">
            <p className="text-xs font-semibold tracking-wider text-ink-500 uppercase dark:text-ink-300">
              Palette
            </p>
            <div className="mt-4 flex gap-3">
              {swatches.map((swatch) => (
                <span
                  key={swatch}
                  className={`h-10 w-10 rounded-full ${swatch} ring-1 ring-ink-900/5 dark:ring-white/10`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-10 text-xs font-semibold tracking-wider text-ink-500 uppercase dark:text-ink-300">
              Typographies
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-display text-4xl font-semibold text-ink-900 dark:text-ink-50">
                  Aa
                </p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  Titres — Bricolage Grotesque
                </p>
              </div>
              <div>
                <p className="font-sans text-4xl font-semibold text-ink-900 dark:text-ink-50">
                  Aa
                </p>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">Texte courant — Inter</p>
              </div>
            </div>

            <p className="mt-10 text-xs font-semibold tracking-wider text-ink-500 uppercase dark:text-ink-300">
              Wordmark
            </p>
            <p className="mt-4 font-display text-3xl font-semibold text-ink-900 dark:text-ink-50">
              DZRT<span className="text-rose-500 dark:text-rose-400">.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

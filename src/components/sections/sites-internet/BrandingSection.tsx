import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { GradientBackground } from "@/components/ui/GradientBackground";

const deliverables = [
  "Un logo minimaliste et mémorable, décliné pour tous vos supports",
  "Une palette de couleurs pensée pour votre secteur et votre personnalité",
  "Des typographies premium, cohérentes entre le web et vos supports imprimés",
  "Un univers graphique complet : icônes, boutons, cartes, illustrations",
  "Une expérience utilisateur alignée du premier au dernier pixel avec votre identité",
];

export function BrandingSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GradientBackground variant="subtle" />
      <div
        className="absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl dark:opacity-20"
        style={{ backgroundImage: "var(--grad-glow-rose)" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
            Branding
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl dark:text-ink-50">
            Chaque projet naît avec sa propre identité visuelle
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            Nous ne posons jamais un gabarit générique sur votre site. Logo,
            palette, typographies et univers graphique sont conçus sur mesure
            pour votre marque, puis appliqués avec la même rigueur à chaque
            page, chaque bouton et chaque carte, pour une cohérence parfaite
            du premier au dernier clic.
          </p>
          <ul className="mx-auto mt-10 max-w-xl space-y-4 text-left">
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
          <MagneticButton className="mt-10 inline-block">
            <Button href="/devis">Construire mon identité de marque</Button>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

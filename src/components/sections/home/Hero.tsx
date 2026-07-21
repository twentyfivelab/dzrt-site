import { Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandOrnament } from "@/components/ui/illustrations/BrandOrnament";
import { BrowserMockupIllustration } from "@/components/ui/illustrations/BrowserMockupIllustration";

const trustPoints = [
  "Sites livrés en 1 à 8 semaines",
  "Branding sur mesure inclus",
  "Accompagnement après la mise en ligne",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <GradientBackground variant="hero" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink-700 backdrop-blur-sm dark:border-white/12 dark:bg-white/6 dark:text-ink-100">
              <Sparkles className="h-4 w-4 text-rose-500 dark:text-rose-400" aria-hidden="true" />
              Studio digital — sites internet &amp; identités de marque
            </span>
            <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink-900 sm:text-6xl dark:text-ink-50">
              Votre image mérite <span className="text-gradient">mieux</span>{" "}
              qu&apos;un site internet ordinaire.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-500 sm:text-xl lg:mx-0 dark:text-ink-300">
              DZRT. conçoit des sites, des identités de marque et des stratégies de
              visibilité qui donnent envie de vous faire confiance — et de passer à
              l&apos;action.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <MagneticButton>
                <Button href="/devis" size="lg">
                  Demander un devis
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/realisations" size="lg" variant="secondary">
                  Découvrir nos réalisations
                </Button>
              </MagneticButton>
            </div>
            <ul className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-ink-500 sm:flex-row sm:gap-8 lg:justify-start dark:text-ink-300">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-rose-400 dark:bg-rose-400"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto hidden w-full max-w-lg lg:block">
            <BrandOrnament className="absolute -top-16 -right-10 h-40 w-40 text-ink-900 dark:text-white" />
            <div className="animate-float">
              <BrowserMockupIllustration className="w-full drop-shadow-2xl" />
            </div>
            <div className="absolute -bottom-8 -left-10 flex items-center gap-3 rounded-2xl border border-ink-900/8 bg-white/90 px-5 py-4 shadow-glow-md backdrop-blur-sm dark:border-white/10 dark:bg-obsidian-elevated/90">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-400/15 dark:text-rose-300">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg leading-none font-semibold text-ink-900 dark:text-ink-50">
                  +140 %
                </p>
                <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">
                  de trafic organique en 4 mois
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

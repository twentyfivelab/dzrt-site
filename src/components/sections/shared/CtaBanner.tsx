import { Container } from "@/components/ui/Container";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  eyebrow = "Prêt à démarrer ?",
  title,
  description,
  primaryLabel = "Demander un devis",
  primaryHref = "/devis",
  secondaryLabel = "Nous contacter",
  secondaryHref = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <GradientBackground variant="hero" />
      <Container>
        <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] border border-ink-900/5 bg-white/80 px-8 py-16 text-center shadow-glow-lg backdrop-blur-sm sm:px-16 dark:border-white/10 dark:bg-obsidian-elevated/70">
          <span className="text-xs font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl dark:text-ink-50">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={secondaryHref} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

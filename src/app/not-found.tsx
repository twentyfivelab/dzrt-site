import type { Metadata } from "next";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { BrandOrnament } from "@/components/ui/illustrations/BrandOrnament";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <GradientBackground variant="subtle" />
      <Container className="text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <BrandOrnament className="absolute inset-0 h-24 w-24 text-ink-900 dark:text-white" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[image:var(--grad-hero)]">
            <Compass className="h-8 w-8 text-ink-900" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-8 font-display text-sm font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
          Erreur 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl dark:text-ink-50">
          Cette page s&apos;est égarée en chemin.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300">
          La page que vous cherchez n&apos;existe pas ou plus. Revenez à l&apos;accueil ou
          contactez-nous si vous pensez qu&apos;il s&apos;agit d&apos;une erreur.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg">
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" size="lg" variant="secondary">
            Nous contacter
          </Button>
        </div>
      </Container>
    </section>
  );
}

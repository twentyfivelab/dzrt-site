import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
      <GradientBackground variant="subtle" />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-5 inline-block rounded-full bg-lilac-100 px-4 py-1.5 text-xs font-semibold tracking-wider text-lilac-700 uppercase dark:bg-lilac-400/15 dark:text-lilac-300">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-balance text-ink-900 sm:text-5xl dark:text-ink-50">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            {description}
          </p>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

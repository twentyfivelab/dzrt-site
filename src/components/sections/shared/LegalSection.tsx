import type { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-ink-900/5 pt-8 first:border-t-0 first:pt-0 dark:border-white/8">
      <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-ink-50">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-500 [&_a]:text-ink-900 [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_strong]:font-semibold [&_strong]:text-ink-700 dark:text-ink-300 dark:[&_a]:text-ink-50 dark:[&_strong]:text-ink-100">
        {children}
      </div>
    </section>
  );
}

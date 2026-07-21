import { Check, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/types";

export function ServiceDetailCard({ service }: { service: Service }) {
  return (
    <Reveal>
      <div
        id={service.slug}
        className="scroll-mt-28 rounded-[2rem] border border-ink-900/5 bg-white/80 p-8 shadow-card backdrop-blur-sm sm:p-12 dark:border-white/8 dark:bg-white/4"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--grad-hero)]">
              <service.icon className="h-7 w-7 text-ink-900" aria-hidden="true" />
            </div>
            <span className="mt-6 block text-xs font-semibold tracking-wider text-lilac-600 uppercase dark:text-lilac-300">
              {service.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl dark:text-ink-50">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
              {service.shortDescription}
            </p>
            <dl className="mt-6 space-y-4">
              <div className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-100">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 dark:text-ink-300"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-medium whitespace-nowrap">Délai indicatif</dt>
                  <dd className="text-ink-500 dark:text-ink-300">{service.delaiIndicatif}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-100">
                <Tag
                  className="mt-0.5 h-4 w-4 shrink-0 text-ink-400 dark:text-ink-300"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-medium whitespace-nowrap">Tarif indicatif</dt>
                  <dd className="text-ink-500 dark:text-ink-300">{service.tarifIndicatif}</dd>
                </div>
              </div>
            </dl>
            <Button href="/devis" className="mt-8">
              Demander un devis
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-3">
            <div>
              <h3 className="font-display text-sm font-semibold tracking-wide text-ink-900 uppercase dark:text-ink-50">
                Pour qui ?
              </h3>
              <ul className="mt-4 space-y-3">
                {service.pourQui.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-rose-400 dark:text-rose-400"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold tracking-wide text-ink-900 uppercase dark:text-ink-50">
                {service.inclusions ? "Ce qui est inclus" : "Avantages"}
              </h3>
              <ul className="mt-4 space-y-3">
                {(service.inclusions ?? service.avantages).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-lilac-500 dark:text-lilac-300"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-center gap-1" aria-label={`Note : ${testimonial.note} sur 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.note
                ? "h-4 w-4 fill-peach-400 text-peach-400"
                : "h-4 w-4 text-ink-300 dark:text-white/15"
            }
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-5 flex-1 text-base leading-relaxed text-ink-700 dark:text-ink-100">
        &laquo;&nbsp;{testimonial.citation}&nbsp;&raquo;
      </p>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-900/5 pt-6 dark:border-white/8">
        <div>
          <p className="font-display font-semibold text-ink-900 dark:text-ink-50">
            {testimonial.nom}
          </p>
          <p className="text-sm text-ink-500 dark:text-ink-300">
            {testimonial.role} — {testimonial.entreprise}
          </p>
        </div>
        <Badge tone="lilac">{testimonial.secteur}</Badge>
      </div>
    </Card>
  );
}

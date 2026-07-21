import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MiniTrendChart } from "@/components/ui/illustrations/MiniTrendChart";
import type { PortfolioProject } from "@/lib/types";

const accentGradients: Record<PortfolioProject["accent"], string> = {
  rose: "from-rose-200 via-rose-100 to-peach-100",
  peach: "from-peach-200 via-peach-100 to-apricot-100",
  lilac: "from-lilac-200 via-lilac-100 to-lavender-100",
  lavender: "from-lavender-200 via-lavender-100 to-lilac-100",
  apricot: "from-apricot-200 via-apricot-100 to-peach-100",
};

const accentTone: Record<PortfolioProject["accent"], "rose" | "peach" | "lilac" | "lavender" | "apricot"> = {
  rose: "rose",
  peach: "peach",
  lilac: "lilac",
  lavender: "lavender",
  apricot: "apricot",
};

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div
        className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br p-8 ${accentGradients[project.accent]}`}
      >
        <p className="text-center font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
          {project.nom}
        </p>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between gap-3">
          <Badge tone={accentTone[project.accent]}>{project.secteur}</Badge>
          <span className="text-sm text-ink-500 dark:text-ink-300">{project.year}</span>
        </div>

        <div className="mt-4">
          <p className="text-xs font-semibold tracking-wide text-lilac-600 uppercase dark:text-lilac-300">
            Notre solution
          </p>
          <p className="mt-1.5 text-base leading-relaxed text-ink-700 dark:text-ink-100">
            {project.solution}
          </p>
        </div>

        <p className="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-300">
          {project.description}
        </p>

        <div className="mt-5 rounded-2xl bg-ink-900/[0.03] p-4 dark:bg-white/4">
          <p className="text-xs font-semibold tracking-wide text-ink-500 uppercase dark:text-ink-300">
            Le défi
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-700 dark:text-ink-100">
            {project.probleme}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-900/10 px-3 py-1 text-xs font-medium text-ink-700 dark:border-white/12 dark:text-ink-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-ink-900/5 pt-6 sm:grid-cols-3 dark:border-white/8">
          {project.resultats.map((resultat) => (
            <div key={resultat.label}>
              <dt className="text-xs text-ink-500 dark:text-ink-300">{resultat.label}</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-ink-50">
                {resultat.value}
              </dd>
            </div>
          ))}
        </dl>

        <MiniTrendChart project={project} className="mt-5" />

        <div className="mt-6 border-t border-ink-900/5 pt-6 dark:border-white/8">
          <div
            className="flex items-center gap-1"
            aria-label={`Note du témoignage : ${project.temoignage.note} sur 5`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={
                  i < project.temoignage.note
                    ? "h-3.5 w-3.5 fill-peach-400 text-peach-400"
                    : "h-3.5 w-3.5 text-ink-300 dark:text-white/15"
                }
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-700 dark:text-ink-100">
            &laquo;&nbsp;{project.temoignage.citation}&nbsp;&raquo;
          </p>
          <p className="mt-3 text-sm font-semibold text-ink-900 dark:text-ink-50">
            {project.temoignage.auteur}
            <span className="ml-1.5 font-normal text-ink-500 dark:text-ink-300">
              {project.temoignage.role}
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

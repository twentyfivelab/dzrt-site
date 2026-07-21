import { useId } from "react";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/lib/types";

const accentHex: Record<PortfolioProject["accent"], string> = {
  rose: "#ec5c82",
  peach: "#f2793e",
  lilac: "#8a63d9",
  lavender: "#7e70d9",
  apricot: "#e2823f",
};

const WIDTH = 240;
const HEIGHT = 56;
const PADDING = 6;

function buildPath(points: number[]) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const span = max - min || 1;
  const step = (WIDTH - PADDING * 2) / (points.length - 1);

  return points.map((point, index) => {
    const x = PADDING + step * index;
    const y = HEIGHT - PADDING - ((point - min) / span) * (HEIGHT - PADDING * 2);
    return { x, y };
  });
}

/**
 * Stat-tile sparkline: a single-series, non-interactive trend indicator that
 * accompanies an already-labelled result (label + value are read from the
 * project data, not re-derived from the chart). No axes, no legend needed
 * for a single series, no hover layer, matching the "bare stat tile" case.
 */
export function MiniTrendChart({
  project,
  className,
}: {
  project: PortfolioProject;
  className?: string;
}) {
  const uid = useId();
  const color = accentHex[project.accent];
  const coords = buildPath(project.trend.points);
  const linePath = coords.map((c, i) => `${i === 0 ? "M" : "L"}${c.x},${c.y}`).join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1].x},${HEIGHT} L${coords[0].x},${HEIGHT} Z`;
  const last = coords[coords.length - 1];

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-14 w-full max-w-[15rem]"
        role="img"
        aria-label={`${project.trend.label} : ${project.resultats[0]?.value ?? "progression positive"}`}
      >
        <defs>
          <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill={`url(#${uid}-area)`} />
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={last.x}
          cy={last.y}
          r="4.5"
          fill={color}
          strokeWidth="2"
          className="stroke-ivory dark:stroke-obsidian-elevated"
        />
      </svg>
    </div>
  );
}

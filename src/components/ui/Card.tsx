import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-ink-900/5 bg-white/80 p-8 shadow-card backdrop-blur-sm transition-all duration-300 dark:border-white/8 dark:bg-white/4",
        hover && "hover:-translate-y-1 hover:shadow-glow-md dark:hover:border-white/15 dark:hover:bg-white/6",
        className,
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const toneStyles = {
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300",
  peach: "bg-peach-100 text-peach-700 dark:bg-peach-400/15 dark:text-peach-300",
  lilac: "bg-lilac-100 text-lilac-700 dark:bg-lilac-400/15 dark:text-lilac-300",
  lavender: "bg-lavender-100 text-lavender-700 dark:bg-lavender-400/15 dark:text-lavender-300",
  apricot: "bg-apricot-100 text-apricot-700 dark:bg-apricot-400/15 dark:text-apricot-300",
} as const;

export function Badge({
  children,
  tone = "lilac",
  className,
}: {
  children: ReactNode;
  tone?: keyof typeof toneStyles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

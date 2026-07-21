import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-ink-50",
        className,
      )}
      aria-label="DZRT. — retour à l'accueil"
    >
      DZRT
      <span className="ml-0.5 text-rose-500 transition-colors duration-300 group-hover:text-lilac-500 dark:text-rose-400 dark:group-hover:text-lilac-300">
        .
      </span>
    </Link>
  );
}

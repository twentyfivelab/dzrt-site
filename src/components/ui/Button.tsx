import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants = {
  primary:
    "bg-[image:var(--grad-cta)] text-ink-900 shadow-glow-md hover:-translate-y-0.5 hover:shadow-glow-lg active:translate-y-0 dark:shadow-[0_18px_50px_-12px_rgb(236_92_130_/_0.45)]",
  secondary:
    "border border-ink-900/15 bg-white/70 text-ink-900 hover:border-ink-900/30 hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-ink-50 dark:hover:border-white/30 dark:hover:bg-white/10",
  ghost:
    "text-ink-700 hover:text-ink-900 hover:bg-ink-900/5 dark:text-ink-300 dark:hover:text-ink-50 dark:hover:bg-white/8",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & {
  href?: string;
} & Omit<
    ComponentPropsWithoutRef<"a"> & ComponentPropsWithoutRef<"button">,
    "href" | "className" | "children"
  >;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

import { cn } from "@/lib/utils";

type Variant = "hero" | "section" | "subtle";

const variantConfig: Record<Variant, { blobs: string[]; opacity: string }> = {
  hero: {
    blobs: ["var(--grad-glow-rose)", "var(--grad-glow-lilac)", "var(--grad-glow-peach)"],
    opacity: "opacity-80 dark:opacity-40",
  },
  section: {
    blobs: ["var(--grad-glow-lavender)", "var(--grad-glow-peach)"],
    opacity: "opacity-50 dark:opacity-25",
  },
  subtle: {
    blobs: ["var(--grad-glow-rose)"],
    opacity: "opacity-30 dark:opacity-15",
  },
};

const positions = [
  "-top-40 -left-32 animate-blob-drift",
  "top-1/4 -right-24 animate-blob-drift-slow",
  "bottom-0 left-1/3 animate-blob-drift",
];

export function GradientBackground({
  variant = "section",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const config = variantConfig[variant];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      {config.blobs.map((blob, i) => (
        <div
          key={blob + i}
          className={cn(
            "absolute h-[34rem] w-[34rem] rounded-full blur-3xl",
            config.opacity,
            positions[i % positions.length],
          )}
          style={{ backgroundImage: blob }}
        />
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";
import { useMounted } from "@/lib/hooks/useMounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const mounted = useMounted();
  const [override, setOverride] = useState<boolean | null>(null);

  // Before mount, this always evaluates to false without touching the DOM
  // (mounted is false during SSR and during the hydration-matching render),
  // so the very first client render matches the server-rendered HTML
  // exactly. Once mounted flips to true, it reads the real class set by the
  // no-FOUC theme script. A manual toggle overrides it directly.
  const isDark = override ?? (mounted && document.documentElement.classList.contains("dark"));

  const toggle = () => {
    const next = !isDark;
    setOverride(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/5 dark:text-ink-100 dark:hover:bg-white/8",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute h-5 w-5 transition-all duration-300",
          isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

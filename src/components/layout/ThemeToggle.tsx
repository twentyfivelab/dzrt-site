"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";
import { cn } from "@/lib/utils";

function readInitialIsDark() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(readInitialIsDark);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      suppressHydrationWarning
      className={cn(
        "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/5 dark:text-ink-100 dark:hover:bg-white/8",
        className,
      )}
    >
      <Sun
        suppressHydrationWarning
        className={cn(
          "absolute h-5 w-5 transition-all duration-300",
          isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
        aria-hidden="true"
      />
      <Moon
        suppressHydrationWarning
        className={cn(
          "absolute h-5 w-5 transition-all duration-300",
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data/nav";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Nav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("items-center gap-1", className)} aria-label="Navigation principale">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-ink-900/5 dark:hover:bg-white/8",
              isActive
                ? "text-ink-900 dark:text-ink-50"
                : "text-ink-700 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50",
            )}
          >
            {link.label}
            {isActive && (
              <span
                className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-[image:var(--grad-cta)]"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
      <WhatsAppButton className="ml-1" />
    </nav>
  );
}

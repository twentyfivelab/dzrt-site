import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
>(({ className, hasError, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "w-full appearance-none rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-ink-900 transition-colors focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 focus:outline-none dark:border-white/12 dark:bg-white/5 dark:text-ink-50 dark:focus:border-lilac-400 dark:focus:ring-lilac-400/25",
        hasError &&
          "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:border-rose-400/70 dark:focus:border-rose-400 dark:focus:ring-rose-400/25",
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown
      className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink-400 dark:text-ink-300"
      aria-hidden="true"
    />
  </div>
));
Select.displayName = "Select";

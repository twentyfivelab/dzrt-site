import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }
>(({ className, hasError, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full resize-none rounded-2xl border border-ink-900/10 bg-white px-4 py-3 text-ink-900 transition-colors placeholder:text-ink-400 focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 focus:outline-none dark:border-white/12 dark:bg-white/5 dark:text-ink-50 dark:placeholder:text-ink-400 dark:focus:border-lilac-400 dark:focus:ring-lilac-400/25",
      hasError &&
        "border-rose-400 focus:border-rose-500 focus:ring-rose-200 dark:border-rose-400/70 dark:focus:border-rose-400 dark:focus:ring-rose-400/25",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

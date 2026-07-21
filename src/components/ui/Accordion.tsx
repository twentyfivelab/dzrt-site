"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: ReactNode;
}

export function Accordion({
  items,
  className,
}: {
  items: AccordionItemData[];
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("divide-y divide-ink-900/8 dark:divide-white/8", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-trigger-${item.id}`}
                className="group flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span
                  className={cn(
                    "font-display text-lg font-medium transition-colors duration-200",
                    isOpen
                      ? "text-lilac-700 dark:text-lilac-300"
                      : "text-ink-900 group-hover:text-lilac-600 dark:text-ink-50 dark:group-hover:text-lilac-300",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200",
                    isOpen
                      ? "bg-lilac-100 dark:bg-lilac-400/15"
                      : "bg-ink-900/5 group-hover:bg-lilac-100 dark:bg-white/6 dark:group-hover:bg-lilac-400/15",
                  )}
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-ink-500 transition-transform duration-300 dark:text-ink-300",
                      isOpen && "rotate-180 text-lilac-600 dark:text-lilac-300",
                    )}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pr-10 pb-6 text-base leading-relaxed text-ink-500 dark:text-ink-300">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

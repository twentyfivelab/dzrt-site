import { Accordion } from "@/components/ui/Accordion";
import type { FaqEntry } from "@/lib/types";

export function FaqList({ entries }: { entries: FaqEntry[] }) {
  return (
    <Accordion
      items={entries.map((entry) => ({
        id: entry.id,
        question: entry.question,
        answer: entry.reponse,
      }))}
    />
  );
}

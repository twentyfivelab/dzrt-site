import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      title="Nous contacter sur WhatsApp"
      className={cn(
        "group flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-ink-900/5 dark:hover:bg-white/8",
        className,
      )}
    >
      <WhatsAppIcon className="h-[1.7rem] w-[1.7rem] transition-transform duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(247,126,156,0.5)]" />
    </a>
  );
}

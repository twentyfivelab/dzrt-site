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
        "group flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-ink-900/5 dark:text-ink-100 dark:hover:bg-white/8",
        className,
      )}
    >
      <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 ease-out group-hover:scale-110" />
    </a>
  );
}

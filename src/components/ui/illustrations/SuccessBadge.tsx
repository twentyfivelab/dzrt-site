import { useId } from "react";
import { cn } from "@/lib/utils";

/** Original SVG illustration for form success states — a gradient badge with a checkmark. */
export function SuccessBadge({ className }: { className?: string }) {
  const uid = useId();

  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" className={cn(className)}>
      <defs>
        <linearGradient id={`${uid}-badge`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec5c82" />
          <stop offset="55%" stopColor="#f2793e" />
          <stop offset="100%" stopColor="#8a63d9" />
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="34" fill={`url(#${uid}-badge)`} />
      <circle cx="48" cy="48" r="42" stroke={`url(#${uid}-badge)`} strokeOpacity="0.25" strokeWidth="2" />
      <path
        d="M35 48.5 L44 57.5 L63 38.5"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="83" cy="24" r="3" fill="#ffb37e" />
      <circle cx="10" cy="62" r="4" fill="#d8ccff" />
      <circle cx="16" cy="18" r="2.5" fill="#f77e9c" />
    </svg>
  );
}

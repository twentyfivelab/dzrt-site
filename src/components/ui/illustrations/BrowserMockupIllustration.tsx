import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Original SVG line-art illustration: a stylised browser window showing an
 * abstract website layout in the brand's pastel palette. Purely decorative.
 */
export function BrowserMockupIllustration({ className }: { className?: string }) {
  const uid = useId();

  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <linearGradient id={`${uid}-hero`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffc7d6" />
          <stop offset="45%" stopColor="#ffd2ad" />
          <stop offset="100%" stopColor="#d8ccff" />
        </linearGradient>
        <linearGradient id={`${uid}-cta`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ec5c82" />
          <stop offset="100%" stopColor="#f2793e" />
        </linearGradient>
        <filter id={`${uid}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#211a24" floodOpacity="0.16" />
        </filter>
      </defs>

      <g filter={`url(#${uid}-shadow)`}>
        <rect x="16" y="16" width="448" height="328" rx="24" fill="white" fillOpacity="0.9" />
        <rect x="16" y="16" width="448" height="328" rx="24" stroke="#211a24" strokeOpacity="0.06" />
      </g>

      {/* Browser chrome */}
      <rect x="16" y="16" width="448" height="44" rx="24" fill="white" />
      <circle cx="42" cy="38" r="5" fill="#ffb37e" />
      <circle cx="60" cy="38" r="5" fill="#ffc7d6" />
      <circle cx="78" cy="38" r="5" fill="#d2cfff" />
      <rect x="130" y="30" width="220" height="16" rx="8" fill="#211a24" fillOpacity="0.05" />

      {/* Page content */}
      <rect x="40" y="84" width="130" height="14" rx="7" fill="#211a24" fillOpacity="0.1" />
      <rect x="40" y="106" width="220" height="24" rx="8" fill="#211a24" fillOpacity="0.16" />
      <rect x="40" y="142" width="240" height="10" rx="5" fill="#211a24" fillOpacity="0.08" />
      <rect x="40" y="158" width="180" height="10" rx="5" fill="#211a24" fillOpacity="0.08" />
      <rect x="40" y="182" width="112" height="30" rx="15" fill={`url(#${uid}-cta)`} />
      <rect x="164" y="182" width="96" height="30" rx="15" fill="white" stroke="#211a24" strokeOpacity="0.1" />

      <rect x="304" y="84" width="144" height="168" rx="20" fill={`url(#${uid}-hero)`} />
      <circle cx="376" cy="150" r="26" fill="white" fillOpacity="0.55" />
      <rect x="324" y="196" width="104" height="10" rx="5" fill="white" fillOpacity="0.7" />
      <rect x="324" y="214" width="72" height="10" rx="5" fill="white" fillOpacity="0.5" />

      <rect x="40" y="240" width="110" height="72" rx="16" fill="#211a24" fillOpacity="0.04" />
      <rect x="164" y="240" width="110" height="72" rx="16" fill="#211a24" fillOpacity="0.04" />
      <rect x="56" y="256" width="78" height="8" rx="4" fill="#211a24" fillOpacity="0.12" />
      <rect x="56" y="272" width="56" height="8" rx="4" fill="#211a24" fillOpacity="0.08" />
      <rect x="180" y="256" width="78" height="8" rx="4" fill="#211a24" fillOpacity="0.12" />
      <rect x="180" y="272" width="56" height="8" rx="4" fill="#211a24" fillOpacity="0.08" />
    </svg>
  );
}

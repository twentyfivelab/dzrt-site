import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Original abstract SVG ornament — concentric ring, orbiting dot and a
 * scatter of accent marks in the brand palette. Purely decorative.
 */
export function BrandOrnament({ className }: { className?: string }) {
  const uid = useId();

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <defs>
        <linearGradient id={`${uid}-ring`} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f77e9c" />
          <stop offset="50%" stopColor="#ffb37e" />
          <stop offset="100%" stopColor="#a586f2" />
        </linearGradient>
        <linearGradient id={`${uid}-dot`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec5c82" />
          <stop offset="100%" stopColor="#8a63d9" />
        </linearGradient>
      </defs>

      <circle
        cx="100"
        cy="100"
        r="72"
        stroke={`url(#${uid}-ring)`}
        strokeWidth="1.5"
        strokeOpacity="0.35"
        strokeDasharray="4 10"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="44" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />

      <circle cx="172" cy="100" r="7" fill={`url(#${uid}-dot)`} />
      <circle cx="42" cy="146" r="4" fill="#ffb37e" fillOpacity="0.8" />
      <circle cx="60" cy="34" r="3" fill="#a586f2" fillOpacity="0.7" />
      <circle cx="150" cy="42" r="5" fill="#f77e9c" fillOpacity="0.6" />
    </svg>
  );
}

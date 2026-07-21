import { useId } from "react";
import { cn } from "@/lib/utils";

const TILE = "h-48 w-40 shrink-0 overflow-hidden rounded-2xl shadow-card";

function PaletteWarmTile() {
  const colors = ["#c1502e", "#d9a441", "#e8c8a0", "#4a2e21"];
  return (
    <div className={cn(TILE, "flex flex-col")}>
      {colors.map((color) => (
        <span key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

function PaletteCoolTile() {
  const colors = ["#14141a", "#1b2a4a", "#1f6f54", "#cfd3d8"];
  return (
    <div className={cn(TILE, "flex flex-col")}>
      {colors.map((color) => (
        <span key={color} className="flex-1" style={{ backgroundColor: color }} />
      ))}
    </div>
  );
}

function TypographyEditorialTile() {
  return (
    <div className={cn(TILE, "flex flex-col items-center justify-center gap-2 bg-[#f5f1ea] px-4")}>
      <p className="font-sans text-5xl font-light tracking-wide text-[#2b2620] italic">aa</p>
      <p className="text-[0.65rem] tracking-[0.2em] text-[#8a8071] uppercase">Éditorial</p>
    </div>
  );
}

function TypographyBoldTile() {
  return (
    <div className={cn(TILE, "flex flex-col items-center justify-center gap-2 bg-[#14141a] px-4")}>
      <p className="font-display text-5xl font-black tracking-tighter text-white uppercase">AA</p>
      <p className="text-[0.65rem] tracking-[0.2em] text-white/50 uppercase">Affirmé</p>
    </div>
  );
}

function LogomarkOrbitTile() {
  const uid = useId();
  return (
    <div className={cn(TILE, "flex items-center justify-center bg-[#efe6ff]")}>
      <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden="true">
        <defs>
          <linearGradient id={`${uid}-lm1`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6a47b3" />
            <stop offset="100%" stopColor="#8a63d9" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="34" fill="none" stroke={`url(#${uid}-lm1)`} strokeWidth="3" />
        <circle cx="40" cy="12" r="7" fill={`url(#${uid}-lm1)`} />
      </svg>
    </div>
  );
}

function LogomarkGeometricTile() {
  return (
    <div className={cn(TILE, "flex items-center justify-center bg-[#f0ede6]")}>
      <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden="true">
        <polygon points="40,8 72,64 8,64" fill="none" stroke="#211a24" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="40" cy="46" r="10" fill="#211a24" />
      </svg>
    </div>
  );
}

function BusinessCardTile() {
  return (
    <div className={cn(TILE, "flex items-center justify-center bg-[#e9e4da] p-5")}>
      <div className="w-full -rotate-3 rounded-lg bg-white p-4 shadow-lg">
        <span className="block h-6 w-6 rounded-full bg-gradient-to-br from-rose-400 to-lilac-400" />
        <span className="mt-3 block h-2 w-3/4 rounded-full bg-[#211a24]/70" />
        <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-[#211a24]/30" />
      </div>
    </div>
  );
}

function InterfaceTile() {
  return (
    <div className={cn(TILE, "flex flex-col bg-[#101820] p-3")}>
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
      <span className="mt-3 block h-14 w-full rounded-md bg-gradient-to-br from-emerald-400/70 to-cyan-500/60" />
      <span className="mt-3 block h-2 w-3/4 rounded-full bg-white/30" />
      <span className="mt-1.5 block h-2 w-1/2 rounded-full bg-white/15" />
      <span className="mt-auto block h-7 w-2/3 rounded-full bg-emerald-400/80" />
    </div>
  );
}

function PackagingTile() {
  return (
    <div className={cn(TILE, "flex items-center justify-center bg-[#e4e8de] p-6")}>
      <div className="relative flex h-full w-full items-center justify-center rounded-md bg-[#3c5240]">
        <span className="absolute inset-x-4 top-0 h-px bg-[#e4e8de]/30" />
        <span className="h-14 w-10 rounded-sm bg-[#e8dfc8]" />
      </div>
    </div>
  );
}

const tiles = [
  PaletteWarmTile,
  TypographyEditorialTile,
  LogomarkOrbitTile,
  BusinessCardTile,
  PaletteCoolTile,
  InterfaceTile,
  LogomarkGeometricTile,
  PackagingTile,
  TypographyBoldTile,
];

/**
 * Auto-scrolling strip of abstract style samples, purely illustrative of
 * range (palettes, type, marks, mockups). Never DZRT's own brand tokens,
 * on purpose: the point is versatility, not another look at this site's
 * own identity. Decorative only, so it's hidden from assistive tech.
 */
export function BrandMoodboard({ className }: { className?: string }) {
  const track = [...tiles, ...tiles];

  return (
    <div
      className={cn(
        "group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {track.map((Tile, index) => (
          <Tile key={index} />
        ))}
      </div>
    </div>
  );
}

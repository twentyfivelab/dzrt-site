/**
 * Editorial moodboard: a fictional brand ("Maison Arlo") staged like a page
 * torn from a branding studio's portfolio, deliberately distinct from DZRT's
 * own palette and typography so it reads as "one example among countless
 * possibilities," never as a template. Fixed dark backdrop regardless of the
 * site's light/dark toggle, since this is meant to feel like a studio wall,
 * not a UI surface. Purely illustrative, hence the single role="img" label.
 */
export function BrandMoodboard({ className }: { className?: string }) {
  return (
    <div
      className={className}
      role="img"
      aria-label="Planche d'inspiration illustrant une identité de marque fictive : mockup principal, monogramme, détail typographique et palette de couleurs, pour montrer la diversité des univers que nous créons sur mesure."
    >
      <div className="relative isolate h-80 overflow-hidden sm:h-96">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(160deg, #1c1720 0%, #120f16 55%, #1a1420 100%)",
          }}
        />
        <div
          className="absolute -top-16 -left-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
          style={{ backgroundImage: "var(--grad-glow-rose)" }}
        />
        <div
          className="absolute -right-12 -bottom-8 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ backgroundImage: "var(--grad-glow-lilac)" }}
        />

        {/* Main mockup: a fictional artisan brand's identity poster */}
        <div
          className="absolute top-[9%] left-[6%] flex h-[60%] w-[58%] -rotate-2 flex-col justify-center gap-3 rounded-2xl p-5 shadow-[0_25px_55px_-18px_rgba(0,0,0,0.6)] ring-1 ring-white/10 sm:p-7"
          style={{
            backgroundImage: "linear-gradient(135deg, #33473d 0%, #c9a366 100%)",
          }}
        >
          <span className="text-[0.55rem] font-semibold tracking-[0.3em] text-white/60 uppercase sm:text-[0.6rem]">
            Atelier de céramique
          </span>
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Maison Arlo
            </p>
            <span className="mt-2 block h-px w-10 bg-white/40" />
          </div>
        </div>

        {/* Secondary monogram, overlapping the main card for depth */}
        <div className="absolute right-[8%] bottom-[11%] flex h-[32%] w-[28%] rotate-3 items-center justify-center rounded-2xl bg-white/10 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/15 backdrop-blur-md">
          <svg viewBox="0 0 48 48" className="h-8 w-8 text-white/85 sm:h-10 sm:w-10">
            <circle cx="21" cy="24" r="13" stroke="currentColor" strokeWidth="1.4" fill="none" />
            <circle cx="30" cy="24" r="13" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        </div>

        {/* Premium typography detail, cropped like an editorial specimen */}
        <div
          className="absolute bottom-[8%] left-[3%] flex h-[26%] w-[34%] rotate-2 items-center justify-center overflow-hidden rounded-2xl shadow-[0_18px_45px_-18px_rgba(0,0,0,0.5)] ring-1 ring-white/15 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(239, 230, 216, 0.92)" }}
        >
          <span className="font-display text-6xl leading-none font-light text-[#2b2620] italic sm:text-7xl">
            A
          </span>
        </div>

        {/* Subtle, muted palette, tucked away rather than showcased */}
        <div className="absolute top-[8%] right-[7%] flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1.5 ring-1 ring-white/10 backdrop-blur-sm">
          {["#b98a86", "#7c8a72", "#c17b4f", "#2d3142"].map((hex) => (
            <span key={hex} className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: hex }} />
          ))}
        </div>
      </div>
    </div>
  );
}

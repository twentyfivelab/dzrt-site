import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, legalLinks } from "@/lib/data/nav";
import { CONTACT_EMAIL, SITE_TAGLINE, SOCIAL_LINKS } from "@/lib/constants";

const socialItems = [
  { href: SOCIAL_LINKS.instagram, label: "Instagram", monogram: "IG" },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", monogram: "in" },
  { href: SOCIAL_LINKS.twitterX, label: "X (Twitter)", monogram: "X" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-offwhite dark:border-white/8 dark:bg-obsidian-soft">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              {SITE_TAGLINE}
            </p>
            <div className="mt-6 flex gap-3">
              {socialItems.map(({ href, label, monogram }) => {
                const isPlaceholder = href.startsWith("[À COMPLÉTER");
                return (
                  <a
                    key={label}
                    href={isPlaceholder ? "#" : href}
                    target={isPlaceholder ? undefined : "_blank"}
                    rel={isPlaceholder ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    aria-disabled={isPlaceholder}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 text-xs font-semibold text-ink-700 transition-colors hover:border-lilac-300 hover:bg-lilac-50 hover:text-lilac-600 dark:border-white/12 dark:text-ink-100 dark:hover:border-lilac-400/40 dark:hover:bg-lilac-400/10 dark:hover:text-lilac-300"
                  >
                    {monogram}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink-900 uppercase dark:text-ink-50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wide text-ink-900 uppercase dark:text-ink-50">
              Informations
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-900/5 pt-8 text-sm text-ink-400 dark:border-white/8 dark:text-ink-400">
          © {new Date().getFullYear()} DZRT. Tous droits réservés.
          <span className="mt-1 block text-xs text-ink-400/80 dark:text-ink-400/70">
            Nous accompagnons les entreprises en France et en Suisse.
          </span>
        </div>
      </Container>
    </footer>
  );
}

import { Logo } from "@/components/layout/Logo";
import { Nav } from "@/components/layout/Nav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-ivory/80 backdrop-blur-lg dark:border-white/8 dark:bg-obsidian/75">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />
        <Nav className="hidden lg:flex" />
        <div className="hidden items-center gap-2 lg:flex">
          <WhatsAppButton />
          <ThemeToggle />
          <Button href="/devis" size="sm">
            Demander un devis
          </Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}

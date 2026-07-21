import { Reveal } from "@/components/ui/Reveal";
import { PortfolioCard } from "@/components/sections/realisations/PortfolioCard";
import { portfolioProjects } from "@/lib/data/portfolio";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {portfolioProjects.map((project, index) => (
        <Reveal key={project.slug} delay={(index % 3) * 0.08} className="h-full">
          <PortfolioCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}

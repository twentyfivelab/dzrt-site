import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { WhyItMatters } from "@/components/sections/home/WhyItMatters";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { SocialProofTeaser } from "@/components/sections/home/SocialProofTeaser";
import { FaqTeaser } from "@/components/sections/home/FaqTeaser";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "DZRT. — Studio digital : sites internet, branding & visibilité",
  description:
    "DZRT. conçoit des sites internet, des identités de marque et des stratégies de visibilité en ligne pour les entreprises qui veulent inspirer confiance dès le premier regard.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <ServicesOverview />
      <SocialProofTeaser />
      <FaqTeaser />
      <FinalCta />
    </>
  );
}

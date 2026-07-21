import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { WhyItMatters } from "@/components/sections/home/WhyItMatters";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { SocialProofTeaser } from "@/components/sections/home/SocialProofTeaser";
import { FaqTeaser } from "@/components/sections/home/FaqTeaser";
import { FinalCta } from "@/components/sections/home/FinalCta";
import { buildMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} · Studio digital : sites internet et branding`,
  description: SITE_DESCRIPTION,
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

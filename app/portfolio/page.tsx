import type { Metadata } from "next";

import PortfolioCTA from "@/components/sections/PortfolioCTA";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import PortfolioHero from "@/components/sections/PortfolioHero";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Portfolio",
  description:
    "Explore selected web development, Technical SEO, AI Search Visibility, and website optimization projects completed by LeadFlowProTeam.",
  path: "/portfolio",
  keywords: [
    "Web Development Portfolio",
    "Technical SEO Projects",
    "AI Search Visibility",
    "Next.js Portfolio",
    "Website Optimization",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />

      <PortfolioGrid />

      <PortfolioCTA />
    </>
  );
}
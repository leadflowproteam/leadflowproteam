import type { Metadata } from "next";

import IndustriesCTA from "@/components/sections/IndustriesCTA";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import IndustriesHero from "@/components/sections/IndustriesHero";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Industries We Serve",
  description:
    "LeadFlowProTeam helps service businesses with modern website development, Technical SEO, AI Search Visibility, Landing Pages, and Website Audits.",
  path: "/industries",
  keywords: [
    "Industries We Serve",
    "Service Business Websites",
    "Technical SEO",
    "AI Search Visibility",
    "Website Development",
    "Landing Page Development",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />

      <IndustriesGrid />

      <IndustriesCTA />
    </>
  );
}
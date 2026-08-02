import type { Metadata } from "next";

import CaseStudiesCTA from "@/components/sections/CaseStudiesCTA";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Case Studies",
  description:
    "Explore real-world case studies showcasing how LeadFlowProTeam delivers high-performance websites, Technical SEO improvements, AI Search Visibility, and measurable business growth.",
  path: "/case-studies",
  keywords: [
    "Case Studies",
    "Technical SEO Case Study",
    "Web Development Projects",
    "AI Search Visibility",
    "Lead Generation",
    "Business Growth",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />

      <CaseStudiesGrid />

      <CaseStudiesCTA />
    </>
  );
}
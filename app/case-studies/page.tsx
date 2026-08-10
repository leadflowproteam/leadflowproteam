import type { Metadata } from "next";

import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import CaseStudiesGrid from "@/components/sections/CaseStudiesGrid";
import CaseStudiesCTA from "@/components/sections/CaseStudiesCTA";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Case Studies",
  description:
    "Explore LeadFlowProTeam case studies showcasing high-performance web development, Technical SEO improvements, AI Search Visibility, and measurable business outcomes.",
  path: "/case-studies",
  keywords: [
    "LeadFlowProTeam Case Studies",
    "Technical SEO Case Study",
    "Web Development Case Studies",
    "AI Search Visibility Case Study",
    "Website Performance Case Study",
    "Business Growth Case Studies",
  ],
});

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <CaseStudiesHero />

      <CaseStudiesGrid />

      <CaseStudiesCTA />
    </main>
  );
}
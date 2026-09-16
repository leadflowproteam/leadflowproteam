import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import AiSearchHero from "@/components/sections/AiSearchHero";
import AiSearchBenefits from "@/components/sections/AiSearchBenefits";
import AiSearchFeatures from "@/components/sections/AiSearchFeatures";
import AiSearchProcess from "@/components/sections/AiSearchProcess";
import AiSearchChecklist from "@/components/sections/AiSearchChecklist";
import AiSearchPortfolio from "@/components/sections/AiSearchPortfolio";
import AiSearchTestimonials from "@/components/sections/AiSearchTestimonials";
import AiSearchFAQ from "@/components/sections/AiSearchFAQ";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "AI Search Visibility Services",
  description:
    "See how search and AI systems represent your business, identify visibility and information gaps, and turn those findings into practical improvements through audit, implementation, re-testing, and ongoing optimization.",
  path: "/services/ai-search-visibility",
  keywords: [
    "AI Search Visibility",
    "AI Search Visibility Services",
    "AI Visibility Optimization",
    "AI Visibility Audit",
    "Search Visibility",
    "AI Search Audit",
    "Business Information Optimization",
  ],
});

export default function AiSearchVisibilityPage() {
  return (
    <main className="bg-white">
      <AiSearchHero />

      <AiSearchBenefits />

      <AiSearchFeatures />

      <AiSearchChecklist />

      <AiSearchProcess />

      <AiSearchPortfolio />

      <AiSearchTestimonials />

      <AiSearchFAQ />

      <CTA />
    </main>
  );
}

import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";

import AiSearchHero from "@/components/sections/AiSearchHero";
import AiSearchFeatures from "@/components/sections/AiSearchFeatures";
import AiSearchBenefits from "@/components/sections/AiSearchBenefits";
import AiSearchProcess from "@/components/sections/AiSearchProcess";
import AiSearchChecklist from "@/components/sections/AiSearchChecklist";
import AiSearchPortfolio from "@/components/sections/AiSearchPortfolio";
import AiSearchTestimonials from "@/components/sections/AiSearchTestimonials";
import AiSearchFAQ from "@/components/sections/AiSearchFAQ";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "AI Search Visibility",
  description:
    "Prepare your website for AI-powered search with structured content, schema markup, and AI Search Visibility optimization.",
  path: "/services/ai-search-visibility",
  keywords: [
    "AI Search",
    "AEO",
    "Generative Engine Optimization",
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
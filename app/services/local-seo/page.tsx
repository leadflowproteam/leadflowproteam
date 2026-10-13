import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import LocalSeoBenefits from "@/components/sections/LocalSeoBenefits";
import LocalSeoChecklist from "@/components/sections/LocalSeoChecklist";
import LocalSeoFeatures from "@/components/sections/LocalSeoFeatures";
import LocalSeoHero from "@/components/sections/LocalSeoHero";
import LocalSeoProcess from "@/components/sections/LocalSeoProcess";
import ServicePageSchema from "@/components/seo/ServicePageSchema";

import { generateSeo } from "@/lib/seo";
import { getFAQsByCategory } from "@/lib/faq-engine";

export const metadata: Metadata = generateSeo({
  title: "Local SEO Services",
  description:
    "Local SEO implementation for commercial businesses that need more accurate, consistent, complete, and discoverable business information across local search and supporting digital sources.",
  path: "/services/local-seo",
  keywords: [
    "Local SEO Services",
    "Local SEO",
    "Local Search Optimization",
    "Google Business Profile",
    "Local Business SEO",
    "Business Information Consistency",
    "Local Visibility",
    "Local Search Visibility",
  ],
});

export default function LocalSeoPage() {
  const localSeoFaqs = getFAQsByCategory("local-seo");

  return (
    <main className="bg-white">
      <ServicePageSchema slug="local-seo" />

      <LocalSeoHero />

      <LocalSeoBenefits />

      <LocalSeoFeatures />

      <LocalSeoChecklist />

      <LocalSeoProcess />

      <FAQ
        badge="Local SEO FAQ"
        title="Questions About Local Search Optimization"
        description="Clear answers about local information, consistency, discovery, implementation, and realistic outcomes."
        items={localSeoFaqs}
      />

      <CTA />
    </main>
  );
}
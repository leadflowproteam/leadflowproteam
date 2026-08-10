import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import TechnicalSeoHero from "@/components/sections/TechnicalSeoHero";
import TechnicalSeoFeatures from "@/components/sections/TechnicalSeoFeatures";
import TechnicalSeoChecklist from "@/components/sections/TechnicalSeoChecklist";
import TechnicalSeoProcess from "@/components/sections/TechnicalSeoProcess";
import TechnicalSeoFaq from "@/components/sections/TechnicalSeoFaq";
import TechnicalSeoPortfolio from "@/components/sections/TechnicalSeoPortfolio";
import TechnicalSeoTestimonials from "@/components/sections/TechnicalSeoTestimonials";
import TechnicalSeoBenefits from "@/components/sections/TechnicalSeoBenefits";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Technical SEO Services",
  description:
    "Technical SEO services that improve crawlability, indexing, Core Web Vitals, structured data, and search performance.",
  path: "/services/technical-seo",
  keywords: [
    "Technical SEO",
    "Core Web Vitals",
    "Schema Markup",
  ],
});

export default function TechnicalSeoPage() {
  return (
    <main className="bg-white">
      <TechnicalSeoHero />

      <TechnicalSeoBenefits />

      <TechnicalSeoFeatures />

      <TechnicalSeoChecklist />

      <TechnicalSeoProcess />

      <TechnicalSeoPortfolio />

      <TechnicalSeoTestimonials />

      <TechnicalSeoFaq />

      <CTA />
    </main>
  );
}
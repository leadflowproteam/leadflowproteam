import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import LocalSeoBenefits from "@/components/sections/LocalSeoBenefits";
import LocalSeoChecklist from "@/components/sections/LocalSeoChecklist";
import LocalSeoFeatures from "@/components/sections/LocalSeoFeatures";
import LocalSeoHero from "@/components/sections/LocalSeoHero";
import LocalSeoProcess from "@/components/sections/LocalSeoProcess";

import { generateSeo } from "@/lib/seo";

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

const faqs = [
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO improves the signals and business information that help a local or service-area business become easier to discover and understand in location-based search experiences. This can include business information, local profiles, categories, services, hours, website signals, reviews, structured data, and consistency across relevant sources.",
  },
  {
    question: "How does Local SEO support AI Search Visibility?",
    answer:
      "AI systems often rely on publicly available business information and supporting sources. Improving the accuracy, consistency, completeness, and clarity of local information can therefore strengthen the information foundation used to understand a business, while AI visibility itself still needs to be tested rather than assumed.",
  },
  {
    question: "Do you guarantee Google Maps or local search rankings?",
    answer:
      "No. Local rankings depend on multiple factors including relevance, prominence, competition, location, query context, and other signals outside a single project. We focus on identifying and improving genuine local-search weaknesses rather than guaranteeing a position.",
  },
  {
    question: "Can you fix inconsistent business information?",
    answer:
      "Yes. We can compare important business information across the website, local profiles, and relevant public sources, identify material inconsistencies, and scope the corrective work.",
  },
  {
    question: "Do you manage Google Business Profiles?",
    answer:
      "The scope can include review and improvement recommendations for Google Business Profile information and related local signals. Any ongoing profile-management work depends on the agreed project scope and available access.",
  },
  {
    question: "Can Local SEO be part of an AI Search Visibility Audit?",
    answer:
      "Yes. Local Search and Data Consistency is one of the supporting layers of our broader visibility methodology. An audit can identify genuine local information gaps that can then become clearly scoped implementation work.",
  },
  {
    question: "Who is the best fit for your Local SEO service?",
    answer:
      "Our primary commercial focus is businesses with a genuine growth objective that are prepared to invest in professional digital improvement. Local SEO is particularly useful for businesses where location, service area, or local customer discovery is commercially important.",
  },
];

export default function LocalSeoPage() {
  return (
    <main className="bg-white">
      <LocalSeoHero />

      <LocalSeoBenefits />

      <LocalSeoFeatures />

      <LocalSeoChecklist />

      <LocalSeoProcess />

      <FAQ
        badge="Local SEO FAQ"
        title="Questions About Local Search Optimization"
        description="Clear answers about local information, consistency, discovery, implementation, and realistic outcomes."
        items={faqs}
      />

      <CTA />
    </main>
  );
}

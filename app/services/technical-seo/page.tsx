import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import TechnicalSeoHero from "@/components/sections/TechnicalSeoHero";
import TechnicalSeoBenefits from "@/components/sections/TechnicalSeoBenefits";
import TechnicalSeoFeatures from "@/components/sections/TechnicalSeoFeatures";
import TechnicalSeoChecklist from "@/components/sections/TechnicalSeoChecklist";
import TechnicalSeoProcess from "@/components/sections/TechnicalSeoProcess";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Technical SEO Services",
  description:
    "Technical SEO implementation for commercial businesses that need stronger crawlability, indexability, site architecture, structured data, performance, and search foundations.",
  path: "/services/technical-seo",
  keywords: [
    "Technical SEO Services",
    "Technical SEO",
    "Technical Website SEO",
    "Crawlability",
    "Indexability",
    "Core Web Vitals",
    "Structured Data",
    "Schema Markup",
    "Internal Linking",
    "XML Sitemap",
    "Canonical URLs",
  ],
});

const faqs = [
  {
    question: "What is Technical SEO?",
    answer:
      "Technical SEO focuses on the technical foundations that help search engines access, crawl, interpret, and index a website. It can include crawlability, indexability, site architecture, metadata, internal linking, structured data, performance, mobile usability, canonical URLs, redirects, and related technical issues.",
  },
  {
    question: "How does Technical SEO fit into LeadFlowProTeam's AI Search Visibility service?",
    answer:
      "Technical SEO is a supporting implementation layer within our broader AI Search Visibility approach. When an audit identifies technical problems that limit access, interpretation, discoverability, or information quality, those issues can become a clearly scoped implementation project.",
  },
  {
    question: "Do you guarantee higher rankings?",
    answer:
      "No. Technical SEO can improve a website's technical foundations, but search rankings depend on many factors outside a single implementation project. We focus on identifying and resolving real technical issues rather than promising guaranteed rankings or traffic.",
  },
  {
    question: "Can you fix technical issues on an existing website?",
    answer:
      "Yes. We can assess an existing website and address appropriate technical issues such as broken links, redirects, canonical conflicts, sitemap problems, indexing barriers, metadata issues, structured-data implementation, performance problems, and information-architecture weaknesses.",
  },
  {
    question: "Do you also build websites?",
    answer:
      "Yes. Website development is a separate implementation service. Where a website's architecture makes technical improvement inefficient or impractical, a rebuild or targeted development project may be recommended based on the actual findings.",
  },
  {
    question: "What does a Technical SEO project produce?",
    answer:
      "The deliverables depend on scope but can include a technical assessment, prioritized issue list, implementation work, validation of important fixes, technical documentation, and recommendations for future monitoring.",
  },
];

export default function TechnicalSeoPage() {
  return (
    <main className="bg-white">
      <TechnicalSeoHero />

      <TechnicalSeoBenefits />

      <TechnicalSeoFeatures />

      <TechnicalSeoChecklist />

      <TechnicalSeoProcess />

      <FAQ
        badge="Technical SEO FAQ"
        title="Questions About Technical SEO"
        description="Clear answers about what Technical SEO fixes, how it supports AI Search Visibility, and what businesses can realistically expect."
        items={faqs}
      />

      <CTA />
    </main>
  );
}

import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FreeAuditFaq";
import FreeAuditBenefits from "@/components/sections/FreeAuditBenefits";
import FreeAuditForm from "@/components/sections/FreeAuditForm";
import FreeAuditHero from "@/components/sections/FreeAuditHero";

export const metadata: Metadata = generateSeo({
  title: "AI Search Visibility Audit",
  description:
    "Request an AI Search Visibility Audit to understand how your business is represented across search, local information sources, and AI answer experiences. Identify gaps and practical opportunities for improvement.",
  path: "/free-audit",
  keywords: [
    "AI Search Visibility Audit",
    "AI Visibility Audit",
    "AI Search Optimization Audit",
    "Search Visibility Audit",
    "Local Search Audit",
    "Website Audit",
  ],
});

export default function FreeAuditPage() {
  return (
    <main className="bg-white">
      <FreeAuditHero />
      <FreeAuditBenefits />
      <FreeAuditForm />
      <FAQ />
      <CTA />
    </main>
  );
}
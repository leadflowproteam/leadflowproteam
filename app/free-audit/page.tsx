import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FreeAuditFaq";
import FreeAuditBenefits from "@/components/sections/FreeAuditBenefits";
import FreeAuditForm from "@/components/sections/FreeAuditForm";
import FreeAuditHero from "@/components/sections/FreeAuditHero";

export const metadata: Metadata = generateSeo({
  title: "Free AI Search Visibility Audit - AEO, GEO & AIO Assessment",
  description:
    "Request a free AI Search Visibility Audit to understand how your business is represented across search, local information sources, and AI answer experiences. Includes Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and AI optimization assessment.",
  path: "/free-audit",
  keywords: [
    "Free AI Search Visibility Audit",
    "AEO Audit",
    "Answer Engine Optimization Audit",
    "GEO Audit",
    "Generative Engine Optimization Audit",
    "AIO Assessment",
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
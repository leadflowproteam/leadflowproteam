import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import FreeAuditHero from "@/components/sections/FreeAuditHero";
import FreeAuditBenefits from "@/components/sections/FreeAuditBenefits";
import FreeAuditForm from "@/components/sections/FreeAuditForm";
import FreeAuditFaq from "@/components/sections/FreeAuditFaq";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = generateSeo({
  title: "Free Website Audit",
  description:
    "Request a free website audit from LeadFlowProTeam and receive actionable recommendations for technical SEO, performance, user experience, and AI Search Visibility.",
  path: "/free-audit",
  keywords: [
    "Free Website Audit",
    "Free SEO Audit",
    "Technical SEO Audit",
    "Website Performance Audit",
    "AI Search Visibility Audit",
    "Free Website Review",
  ],
});

export default function FreeAuditPage() {
  return (
    <main className="bg-white">
      <FreeAuditHero />

      <FreeAuditBenefits />

      <FreeAuditForm />

      <FreeAuditFaq />

      <CTA />
    </main>
  );
}
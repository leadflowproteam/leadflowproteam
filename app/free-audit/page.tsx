import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import CTA from "@/components/sections/CTA";
import FreeAuditHero from "@/components/sections/FreeAuditHero";
import FreeAuditBenefits from "@/components/sections/FreeAuditBenefits";
import FreeAuditForm from "@/components/sections/FreeAuditForm";
import FreeAuditFaq from "@/components/sections/FreeAuditFaq";

export const metadata: Metadata = generateSeo({
  title: "Free Website Audit",
  description:
    "Request a free website audit and receive actionable recommendations for SEO, performance, user experience, and AI Search Visibility.",
  path: "/free-audit",
  keywords: [
    "Free Website Audit",
    "SEO Audit",
    "Website Review",
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
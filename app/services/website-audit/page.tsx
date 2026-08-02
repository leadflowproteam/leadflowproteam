import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import WebsiteAuditHero from "@/components/sections/WebsiteAuditHero";
import WebsiteAuditFeatures from "@/components/sections/WebsiteAuditFeatures";
import WebsiteAuditChecklist from "@/components/sections/WebsiteAuditChecklist";
import WebsiteAuditProcess from "@/components/sections/WebsiteAuditProcess";
import WebsiteAuditFaq from "@/components/sections/WebsiteAuditFaq";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Website Audit Services",
  description:
    "Comprehensive website audits covering SEO, performance, accessibility, security, and user experience improvements.",
  path: "/services/website-audit",
  keywords: [
    "Website Audit",
    "SEO Audit",
    "Performance Audit",
  ],
});

export default function WebsiteAuditPage() {
  return (
    <main className="bg-white">
      <WebsiteAuditHero />

      <WebsiteAuditFeatures />

      <WebsiteAuditChecklist />

      <WebsiteAuditProcess />

      <WebsiteAuditFaq />

      <CTA />
    </main>
  );
}
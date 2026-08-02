import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import PrivacyHero from "@/components/sections/PrivacyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata: Metadata = generateSeo({
  title: "Privacy Policy",
  description:
    "Learn how LeadFlowProTeam collects, uses, protects, and manages your personal information.",
  path: "/privacy-policy",
  keywords: [
    "Privacy Policy",
    "LeadFlowProTeam Privacy",
    "Data Protection",
    "Website Privacy",
  ],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <PrivacyHero />

      <PrivacyContent />
    </main>
  );
}
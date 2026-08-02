import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import TermsHero from "@/components/sections/TermsHero";
import TermsContent from "@/components/sections/TermsContent";

export const metadata: Metadata = generateSeo({
  title: "Terms of Service",
  description:
    "Read the Terms of Service governing the use of LeadFlowProTeam's website and professional services.",
  path: "/terms",
  keywords: [
    "Terms of Service",
    "Website Terms",
    "LeadFlowProTeam Terms",
    "Service Agreement",
  ],
});

export default function TermsPage() {
  return (
    <main className="bg-white">
      <TermsHero />

      <TermsContent />
    </main>
  );
}
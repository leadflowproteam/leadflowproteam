import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import SitemapHero from "@/components/sections/SitemapHero";
import SitemapContent from "@/components/sections/SitemapContent";

export const metadata: Metadata = generateSeo({
  title: "HTML Sitemap",
  description:
    "Browse all important pages on the LeadFlowProTeam website from one place.",
  path: "/sitemap",
  keywords: [
    "HTML Sitemap",
    "Website Sitemap",
    "LeadFlowProTeam Sitemap",
  ],
});

export default function SitemapPage() {
  return (
    <main className="bg-white">
      <SitemapHero />

      <SitemapContent />
    </main>
  );
}
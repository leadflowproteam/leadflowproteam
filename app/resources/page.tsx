import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import ResourcesHero from "@/components/sections/ResourcesHero";
import ResourcesGrid from "@/components/sections/ResourcesGrid";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Resources",
  description:
    "Explore expert resources, guides, and practical insights on Web Development, Technical SEO, AI Search Visibility, Website Performance, and Lead Generation.",
  path: "/resources",
  keywords: [
    "Technical SEO Guide",
    "AI Search Visibility",
    "Next.js Resources",
    "Website Performance",
    "Lead Generation",
    "Business Growth",
  ],
});

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />

      <ResourcesGrid />

      <CTA />
    </>
  );
}
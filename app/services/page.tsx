import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

import WebDevelopmentFeatures from "@/components/sections/WebDevelopmentFeatures";
import WebDevelopmentProcess from "@/components/sections/WebDevelopmentProcess";
import WebDevelopmentTechStack from "@/components/sections/WebDevelopmentTechStack";

import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = generateSeo({
  title: "Professional Web Development & Technical SEO Services",
  description:
    "Explore LeadFlowProTeam's professional services including Web Development, Technical SEO, AI Search Visibility, Landing Page Development, and Website Audits.",
  path: "/services",
  keywords: [
    "Web Development Services",
    "Technical SEO Services",
    "AI Search Visibility",
    "Landing Page Development",
    "Website Audit",
  ],
});

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <PageHero
        badge="Web Development"
        title="High-Performance Websites That Drive Business Growth"
        description="We build fast, modern, SEO-friendly and AI-ready websites that help service businesses generate more leads and grow online."
        primaryButtonText="Book Free Audit"
        secondaryButtonText="Contact Our Team"
        tags={[
          "Next.js",
          "Technical SEO",
          "AI Search Ready",
          "Core Web Vitals",
          "Lead Generation",
        ]}
      />

      <Services />

      <WebDevelopmentFeatures />

      <WebDevelopmentTechStack />

      <WhyChooseUs />

      <WebDevelopmentProcess />

      <FAQ />

      <CTA />
    </main>
  );
}
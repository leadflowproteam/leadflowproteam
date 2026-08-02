import type { Metadata } from "next";

import { generateSeo } from "@/lib/seo";

import Journey from "@/components/sections/Journey";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import Mission from "@/components/sections/Mission";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CoreValues from "@/components/sections/CoreValues";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = generateSeo({
  title: "About LeadFlowProTeam",
  description:
    "Learn about LeadFlowProTeam, our mission, values, and how we build AI-ready websites for service businesses.",
  path: "/about",
  keywords: [
    "About LeadFlowProTeam",
    "Next.js Agency",
    "Technical SEO Agency",
  ],
});

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutStory />
      <Mission />
      <Journey />
      <WhyChooseUs />
      <CoreValues />
      <CTA />
    </main>
  );
}
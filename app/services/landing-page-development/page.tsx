import type { Metadata } from "next";

import CTA from "@/components/sections/CTA";
import LandingPageFaq from "@/components/sections/LandingPageFaq";
import LandingPageFeatures from "@/components/sections/LandingPageFeatures";
import LandingPageHero from "@/components/sections/LandingPageHero";
import LandingPageProcess from "@/components/sections/LandingPageProcess";
import LandingPageTestimonials from "@/components/sections/LandingPageTestimonials";
import LandingPageChecklist from "@/components/sections/LandingPageChecklist";
import LandingPagePortfolio from "@/components/sections/LandingPagePortfolio";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "Landing Page Development",
  description:
    "Conversion-focused landing page development built for speed, SEO, AI Search Visibility, and lead generation.",
  path: "/services/landing-page-development",
  keywords: [
    "Landing Page",
    "Lead Generation",
    "Conversion Optimization",
  ],
});

export default function LandingPageDevelopmentPage() {
  return (
    <main className="bg-white">
      <LandingPageHero />

<LandingPageFeatures />

<LandingPageChecklist />

<LandingPageProcess />

<LandingPagePortfolio />

<LandingPageTestimonials />

<LandingPageFaq />

<CTA />
    </main>
  );
}
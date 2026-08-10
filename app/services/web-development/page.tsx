import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";

import WebDevelopmentHero from "@/components/sections/WebDevelopmentHero";
import WebDevelopmentFeatures from "@/components/sections/WebDevelopmentFeatures";
import WebDevelopmentChecklist from "@/components/sections/WebDevelopmentChecklist";
import WebDevelopmentProcess from "@/components/sections/WebDevelopmentProcess";
import WebDevelopmentTechStack from "@/components/sections/WebDevelopmentTechStack";
import WebDevelopmentPortfolio from "@/components/sections/WebDevelopmentPortfolio";
import WebDevelopmentTestimonials from "@/components/sections/WebDevelopmentTestimonials";
import WebDevelopmentFAQ from "@/components/sections/WebDevelopmentFAQ";
import CTA from "@/components/sections/CTA";

import { siteGraph } from "@/lib/jsonld/site-graph";
import { webpageJsonLd } from "@/lib/jsonld/webpage";

import {
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";

import { generateSeo } from "@/lib/seo";

const PAGE_URL =
  "https://leadflowproteam.com/services/web-development";

export const metadata: Metadata = generateSeo({
  title: "Web Development Services",
  description:
    "Modern Next.js website development for service businesses with high performance, Technical SEO, and AI Search Visibility.",
  path: "/services/web-development",
  keywords: [
    "Next.js Development",
    "Business Website",
    "Web Development Agency",
  ],
});

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={siteGraph(
          serviceSchema({
            name: "Web Development",
            description:
              "High-performance Next.js websites built for service businesses with Technical SEO, AI Search Optimization, and Core Web Vitals optimization.",
            url: PAGE_URL,
            entitySlug: "web-development",
          }),

          breadcrumbSchema([
            {
              name: "Home",
              url: "https://leadflowproteam.com",
            },
            {
              name: "Services",
              url: "https://leadflowproteam.com/services",
            },
            {
              name: "Web Development",
              url: PAGE_URL,
            },
          ]),

          webpageJsonLd({
            title: "Web Development Services",
            description:
              "Modern Next.js website development for service businesses with high performance, Technical SEO, and AI Search Visibility.",
            url: PAGE_URL,
          }),
        )}
      />

      <main className="bg-white">
        <WebDevelopmentHero />

        <WebDevelopmentFeatures />

        <WebDevelopmentChecklist />

        <WebDevelopmentProcess />

        <WebDevelopmentTechStack />

        <WebDevelopmentPortfolio />

        <WebDevelopmentTestimonials />

        <WebDevelopmentFAQ />

        <CTA />
      </main>
    </>
  );
}
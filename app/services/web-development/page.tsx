import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import WebDevelopmentFeatures from "@/components/sections/WebDevelopmentFeatures";
import WebDevelopmentProcess from "@/components/sections/WebDevelopmentProcess";
import WebDevelopmentTechStack from "@/components/sections/WebDevelopmentTechStack";
import WebDevelopmentHero from "@/components/sections/WebDevelopmentHero";
import WebDevelopmentChecklist from "@/components/sections/WebDevelopmentChecklist";
import WebDevelopmentPortfolio from "@/components/sections/WebDevelopmentPortfolio";
import WebDevelopmentTestimonials from "@/components/sections/WebDevelopmentTestimonials";
import WebDevelopmentFAQ from "@/components/sections/WebDevelopmentFAQ";
import { siteGraph } from "@/lib/jsonld/site-graph";
import PageHero from "@/components/ui/PageHero";
import { webpageJsonLd } from "@/lib/jsonld/webpage";
import { generateSeo } from "@/lib/seo";

import {
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";

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
      url:
        "https://leadflowproteam.com/services/web-development",
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
        url:
          "https://leadflowproteam.com/services/web-development",
      },
    ]),

    webpageJsonLd({
      title: "Web Development Services",
      description:
        "Modern Next.js website development for service businesses with high performance, Technical SEO, and AI Search Visibility.",
      url:
        "https://leadflowproteam.com/services/web-development",
    })
  )}
/> 


<main className="bg-white">
 
  <WebDevelopmentHero />

<WebDevelopmentFeatures />

<WebDevelopmentTechStack />

<WebDevelopmentProcess />

<WebDevelopmentChecklist />

<WebDevelopmentPortfolio />

<WebDevelopmentTestimonials />

<WebDevelopmentFAQ />

<CTA />
</main>
    </>
  );
}
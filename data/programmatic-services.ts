export type ProgrammaticService = {
  slug: string;
  name: string;
  shortDescription: string;
};

export const programmaticServices: readonly ProgrammaticService[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription:
      "Modern Next.js websites built for performance, SEO, and lead generation.",
  },

  {
    slug: "technical-seo",
    name: "Technical SEO",
    shortDescription:
      "Technical optimization for crawling, indexing, Core Web Vitals, and search visibility.",
  },

  {
    slug: "website-audit",
    name: "Website Audit",
    shortDescription:
      "Comprehensive audits covering performance, SEO, UX, and AI readiness.",
  },

  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    shortDescription:
      "High-converting landing pages designed for paid ads and organic traffic.",
  },

  {
    slug: "ai-search-visibility",
    name: "AI Search Optimization",
    shortDescription:
      "Prepare websites for ChatGPT, Gemini, Claude, Google AI Overviews, and AI-powered search.",
  },
] as const;
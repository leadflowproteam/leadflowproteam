export type Topic = {
  slug: string;
  title: string;
  description: string;
  pillar: boolean;
};

export const topics: readonly Topic[] = [
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Technical SEO strategies for indexing, crawling, Core Web Vitals, schema, and website performance.",
    pillar: true,
  },

  {
    slug: "ai-search-visibility",
    title: "AI Search Visibility",
    description:
      "Preparing websites for AI-powered search engines using AEO, GEO, Entity SEO, and structured data.",
    pillar: true,
  },

  {
    slug: "nextjs-development",
    title: "Next.js Development",
    description:
      "Modern business websites built with Next.js, TypeScript, Tailwind CSS, and performance best practices.",
    pillar: true,
  },

  {
    slug: "website-audit",
    title: "Website Audit",
    description:
      "Website audits covering SEO, UX, performance, accessibility, and conversion optimization.",
    pillar: true,
  },

  {
    slug: "landing-page-optimization",
    title: "Landing Page Optimization",
    description:
      "Landing pages designed to increase enquiries, leads, and conversions.",
    pillar: true,
  },
] as const;
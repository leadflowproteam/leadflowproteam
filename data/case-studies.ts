export type CaseStudy = {
  slug: string;

  title: string;

  description: string;

  industry: string;

  challenge: string;

  solution: string;

  results: readonly string[];

  technologies: readonly string[];

  relatedServices: readonly string[];

  relatedResources: readonly string[];

  keywords: readonly string[];

  featured: boolean;

  publishedAt: string;

  author: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "local-service-business-growth",

    title: "Growing a Local Service Business with Modern Web Development",

    description:
      "How a modern Next.js website and Technical SEO created a stronger foundation for long-term business growth.",

    industry: "home-services",

    challenge:
      "The client had an outdated website with slow performance, weak SEO, and poor lead generation.",

    solution:
      "We rebuilt the website using Next.js, improved Technical SEO, optimized Core Web Vitals, and implemented AI Search Visibility best practices.",

    results: [
      "Fast-loading website",
      "Improved SEO foundation",
      "Better user experience",
      "Higher conversion potential",
    ],

    technologies: [
      "nextjs",
      "tailwind-css",
      "technical-seo",
      "core-web-vitals",
    ],

    relatedServices: [
      "web-development",
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    keywords: [
      "Next.js Website",
      "Technical SEO",
      "Home Services",
    ],

    featured: true,

    publishedAt: "2026-07-22",

    author: "LeadFlowProTeam",
  },

  {
    slug: "technical-seo-performance",

    title: "Technical SEO Optimization for Better Search Performance",

    description:
      "Improving crawlability, indexing, and structured data for sustainable organic visibility.",

    industry: "professional-services",

    challenge:
      "The website suffered from indexing issues, slow loading times, and missing structured data.",

    solution:
      "We fixed crawlability, added Schema Markup, improved metadata, and optimized the overall site architecture.",

    results: [
      "Cleaner site structure",
      "Improved crawl efficiency",
      "SEO-ready architecture",
      "Enhanced search visibility",
    ],

    technologies: [
      "technical-seo",
      "schema-markup",
      "core-web-vitals",
    ],

    relatedServices: [
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    keywords: [
      "Technical SEO",
      "Schema Markup",
      "Website Audit",
    ],

    featured: true,

    publishedAt: "2026-07-22",

    author: "LeadFlowProTeam",
  },

  {
    slug: "ai-search-visibility-strategy",

    title: "Preparing a Business Website for AI Search",

    description:
      "Helping businesses improve discoverability across AI-powered search experiences.",

    industry: "professional-services",

    challenge:
      "The business wanted to improve visibility in modern AI-powered search experiences.",

    solution:
      "We focused on semantic content, structured data, entity optimization, and Technical SEO improvements.",

    results: [
      "AI-ready content structure",
      "Future-focused SEO strategy",
      "Improved content organization",
      "Scalable website architecture",
    ],

    technologies: [
      "ai-search-optimization",
      "schema-markup",
      "technical-seo",
    ],

    relatedServices: [
      "ai-search-visibility",
      "technical-seo",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
    ],

    keywords: [
      "AI Search",
      "Entity SEO",
      "AEO",
    ],

    featured: true,

    publishedAt: "2026-07-22",

    author: "LeadFlowProTeam",
  },
] as const;
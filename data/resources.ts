export type Resource = {
  slug: string;

  title: string;

  description: string;

  seoTitle: string;

  seoDescription: string;

  category: string;

  primaryTopic: string;

  secondaryTopics: readonly string[];

  tags: readonly string[];

  relatedServices: readonly string[];

  relatedPortfolio: readonly string[];

  entityKeywords: readonly string[];

  searchIntent:
    | "informational"
    | "commercial"
    | "transactional";

  funnelStage:
    | "TOFU"
    | "MOFU"
    | "BOFU";

  featured: boolean;

  readingTime: string;

  publishedAt: string;

  updatedAt: string;

  author: string;

  coverImage: string;

  canonicalUrl: string;
};

export const resources: readonly Resource[] = [
  {
    slug: "technical-seo-checklist",

    title:
      "Technical SEO Checklist for Service Businesses",

    description:
      "Learn the essential Technical SEO improvements every service business website should implement to improve search visibility and website performance.",

    seoTitle:
      "Technical SEO Checklist for Service Businesses | LeadFlowProTeam",

    seoDescription:
      "A practical Technical SEO checklist covering Core Web Vitals, crawlability, structured data, XML sitemaps, robots.txt, and website performance.",

    category: "Technical SEO",

    primaryTopic: "technical-seo",

    secondaryTopics: [
      "core-web-vitals",
      "schema-markup",
      "robots-txt",
      "xml-sitemap",
    ],

    tags: [
      "Technical SEO",
      "Core Web Vitals",
      "Schema",
      "SEO Checklist",
    ],

    relatedServices: [
      "technical-seo",
      "website-audit",
    ],

    relatedPortfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    entityKeywords: [
      "Technical SEO",
      "Core Web Vitals",
      "Schema Markup",
      "Website Crawlability",
    ],

    searchIntent: "informational",

    funnelStage: "TOFU",

    featured: true,

    readingTime: "6 min read",

    publishedAt: "2026-07-22",

    updatedAt: "2026-07-22",

    author: "LeadFlowProTeam",

    coverImage: "/images/resources/technical-seo-checklist.webp",

    canonicalUrl:
      "https://leadflowproteam.com/resources/technical-seo-checklist",
  },

  {
    slug: "ai-search-visibility-guide",

    title:
      "Preparing Your Website for AI Search Visibility",

    description:
      "Understand how AI-powered search is changing SEO and what your business should do today to stay ahead.",

    seoTitle:
      "AI Search Visibility Guide | LeadFlowProTeam",

    seoDescription:
      "Learn how to prepare your website for AI Overviews, ChatGPT, Gemini, Claude, Entity SEO, and Semantic Search.",

    category: "AI Search Visibility",

    primaryTopic: "ai-search-visibility",

    secondaryTopics: [
      "entity-seo",
      "geo",
      "aeo",
      "knowledge-graph",
    ],

    tags: [
      "AI SEO",
      "Entity SEO",
      "Semantic SEO",
      "Knowledge Graph",
    ],

    relatedServices: [
      "ai-search-visibility",
      "technical-seo",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    entityKeywords: [
      "Entity SEO",
      "AI Search",
      "Knowledge Graph",
      "Structured Data",
    ],

    searchIntent: "informational",

    funnelStage: "MOFU",

    featured: true,

    readingTime: "7 min read",

    publishedAt: "2026-07-22",

    updatedAt: "2026-07-22",

    author: "LeadFlowProTeam",

    coverImage: "/images/resources/ai-search-visibility.webp",

    canonicalUrl:
      "https://leadflowproteam.com/resources/ai-search-visibility-guide",
  },

  {
    slug: "nextjs-business-websites",

    title:
      "Why Modern Next.js Websites Perform Better",

    description:
      "Discover why businesses choose Next.js websites for better speed, security, SEO, and user experience.",

    seoTitle:
      "Why Next.js Business Websites Perform Better | LeadFlowProTeam",

    seoDescription:
      "Discover why Next.js delivers faster websites, stronger SEO, improved Core Web Vitals, and better business performance.",

    category: "Web Development",

    primaryTopic: "nextjs-development",

    secondaryTopics: [
      "performance",
      "technical-seo",
      "core-web-vitals",
    ],

    tags: [
      "Next.js",
      "React",
      "Performance",
      "Business Website",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    entityKeywords: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Performance",
    ],

    searchIntent: "commercial",

    funnelStage: "BOFU",

    featured: true,

    readingTime: "5 min read",

    publishedAt: "2026-07-22",

    updatedAt: "2026-07-22",

    author: "LeadFlowProTeam",

    coverImage:
      "/images/resources/nextjs-business-websites.webp",

    canonicalUrl:
      "https://leadflowproteam.com/resources/nextjs-business-websites",
  },
] as const;
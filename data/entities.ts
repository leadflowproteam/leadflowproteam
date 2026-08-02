export type Entity = {
  slug: string;

  name: string;

  type:
    | "Service"
    | "Technology"
    | "Concept"
    | "Platform"
    | "Metric";

  description: string;

  url: string;

  aliases: readonly string[];

  relatedEntities: readonly string[];

  featured: boolean;
};

export const entities: readonly Entity[] = [
  // ==========================
  // Services
  // ==========================

  {
    slug: "web-development",

    name: "Web Development",

    type: "Service",

    description:
      "Modern business website development using Next.js, React, TypeScript, and Tailwind CSS.",

    url: "/services/web-development",

    aliases: [
      "Website Development",
      "Business Website",
      "Next.js Development",
    ],

    relatedEntities: [
      "nextjs",
      "react",
      "typescript",
      "tailwind-css",
      "technical-seo",
    ],

    featured: true,
  },

  {
    slug: "technical-seo",

    name: "Technical SEO",

    type: "Service",

    description:
      "Technical optimization that improves crawling, indexing, structured data, Core Web Vitals, and search visibility.",

    url: "/services/technical-seo",

    aliases: [
      "SEO",
      "Technical Search Engine Optimization",
    ],

    relatedEntities: [
      "schema-org",
      "core-web-vitals",
      "robots-txt",
      "xml-sitemap",
      "google-search-console",
    ],

    featured: true,
  },

  {
    slug: "website-audit",

    name: "Website Audit",

    type: "Service",

    description:
      "Comprehensive website performance, SEO, accessibility, and technical audit.",

    url: "/services/website-audit",

    aliases: [
      "SEO Audit",
      "Website Analysis",
    ],

    relatedEntities: [
      "technical-seo",
      "core-web-vitals",
      "google-search-console",
    ],

    featured: true,
  },

  {
    slug: "ai-search-visibility",

    name: "AI Search Visibility",

    type: "Service",

    description:
      "Optimization for AI-powered search systems including ChatGPT, Gemini, Claude, and AI Overviews.",

    url: "/services/ai-search-visibility",

    aliases: [
      "AI SEO",
      "AEO",
      "Generative Engine Optimization",
    ],

    relatedEntities: [
      "entity-seo",
      "semantic-seo",
      "knowledge-graph",
      "schema-org",
    ],

    featured: true,
  },

  {
    slug: "landing-page-development",

    name: "Landing Page Development",

    type: "Service",

    description:
      "Conversion-focused landing pages designed for lead generation.",

    url: "/services/landing-page-development",

    aliases: [
      "Landing Page",
      "Lead Generation Page",
    ],

    relatedEntities: [
      "web-development",
      "nextjs",
      "technical-seo",
    ],

    featured: true,
  },

  // ==========================
  // Technologies
  // ==========================

  {
    slug: "nextjs",

    name: "Next.js",

    type: "Technology",

    description:
      "React framework for building fast production-ready websites.",

    url: "/resources/nextjs-business-websites",

    aliases: ["Next JS"],

    relatedEntities: [
      "react",
      "typescript",
      "tailwind-css",
    ],

    featured: true,
  },

  {
    slug: "react",

    name: "React",

    type: "Technology",

    description:
      "JavaScript library for building user interfaces.",

    url: "/resources/nextjs-business-websites",

    aliases: [],

    relatedEntities: [
      "nextjs",
      "typescript",
    ],

    featured: true,
  },

  {
    slug: "typescript",

    name: "TypeScript",

    type: "Technology",

    description:
      "Typed JavaScript for scalable web applications.",

    url: "/resources/nextjs-business-websites",

    aliases: ["TS"],

    relatedEntities: [
      "nextjs",
      "react",
    ],

    featured: true,
  },

  {
    slug: "tailwind-css",

    name: "Tailwind CSS",

    type: "Technology",

    description:
      "Utility-first CSS framework for modern UI development.",

    url: "/resources/nextjs-business-websites",

    aliases: ["Tailwind"],

    relatedEntities: [
      "nextjs",
      "react",
    ],

    featured: true,
  },

  {
    slug: "vercel",

    name: "Vercel",

    type: "Platform",

    description:
      "Deployment platform optimized for Next.js.",

    url: "/resources/nextjs-business-websites",

    aliases: [],

    relatedEntities: [
      "nextjs",
    ],

    featured: true,
  },

  // ==========================
  // SEO Concepts
  // ==========================

  {
    slug: "entity-seo",

    name: "Entity SEO",

    type: "Concept",

    description:
      "SEO strategy focused on entities, relationships, and semantic understanding.",

    url: "/resources/ai-search-visibility-guide",

    aliases: [],

    relatedEntities: [
      "semantic-seo",
      "knowledge-graph",
      "schema-org",
    ],

    featured: true,
  },

  {
    slug: "semantic-seo",

    name: "Semantic SEO",

    type: "Concept",

    description:
      "Content optimization based on meaning and relationships instead of keywords alone.",

    url: "/resources/ai-search-visibility-guide",

    aliases: [],

    relatedEntities: [
      "entity-seo",
      "knowledge-graph",
    ],

    featured: true,
  },

  {
    slug: "knowledge-graph",

    name: "Knowledge Graph",

    type: "Concept",

    description:
      "Structured entity relationships used by modern search engines and AI systems.",

    url: "/resources/ai-search-visibility-guide",

    aliases: [],

    relatedEntities: [
      "entity-seo",
      "schema-org",
    ],

    featured: true,
  },

  {
    slug: "schema-org",

    name: "Schema.org",

    type: "Concept",

    description:
      "Structured data vocabulary used by search engines.",

    url: "/resources/technical-seo-checklist",

    aliases: [
      "Schema",
      "Structured Data",
    ],

    relatedEntities: [
      "technical-seo",
      "knowledge-graph",
    ],

    featured: true,
  },

  {
    slug: "core-web-vitals",

    name: "Core Web Vitals",

    type: "Metric",

    description:
      "Google performance metrics for page experience.",

    url: "/resources/technical-seo-checklist",

    aliases: [],

    relatedEntities: [
      "technical-seo",
      "nextjs",
    ],

    featured: true,
  },

  {
    slug: "robots-txt",

    name: "Robots.txt",

    type: "Concept",

    description:
      "Instructions that guide search engine crawlers.",

    url: "/resources/technical-seo-checklist",

    aliases: [],

    relatedEntities: [
      "technical-seo",
      "xml-sitemap",
    ],

    featured: false,
  },

  {
    slug: "xml-sitemap",

    name: "XML Sitemap",

    type: "Concept",

    description:
      "File that helps search engines discover website pages.",

    url: "/resources/technical-seo-checklist",

    aliases: [],

    relatedEntities: [
      "technical-seo",
      "robots-txt",
    ],

    featured: false,
  },

  {
    slug: "google-search-console",

    name: "Google Search Console",

    type: "Platform",

    description:
      "Google platform for monitoring search performance and indexing.",

    url: "/resources/technical-seo-checklist",

    aliases: ["GSC"],

    relatedEntities: [
      "technical-seo",
      "website-audit",
    ],

    featured: true,
  },
] as const;
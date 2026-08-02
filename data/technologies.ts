export type Technology = {
  slug: string;

  title: string;

  category: string;

  description: string;

  officialUrl: string;

  keywords: readonly string[];

  benefits: readonly string[];

  relatedServices: readonly string[];

  relatedResources: readonly string[];

  entityId: string;
};

export const technologies: readonly Technology[] = [
  {
    slug: "nextjs",

    title: "Next.js",

    category: "Framework",

    description:
      "A modern React framework for building fast, scalable, SEO-friendly websites with server-side rendering and static generation.",

    officialUrl: "https://nextjs.org",

    keywords: [
      "Next.js",
      "React Framework",
      "SSR",
      "Static Site Generation",
    ],

    benefits: [
      "Excellent SEO",
      "Fast page loads",
      "Scalable architecture",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    entityId: "nextjs",
  },

  {
    slug: "react",

    title: "React",

    category: "Library",

    description:
      "A JavaScript library for building modern user interfaces and interactive web applications.",

    officialUrl: "https://react.dev",

    keywords: [
      "React",
      "JavaScript",
      "Frontend Development",
    ],

    benefits: [
      "Reusable components",
      "Fast UI rendering",
      "Large ecosystem",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    entityId: "react",
  },

  {
    slug: "typescript",

    title: "TypeScript",

    category: "Programming Language",

    description:
      "A strongly typed programming language that improves code quality, scalability, and maintainability.",

    officialUrl: "https://www.typescriptlang.org",

    keywords: [
      "TypeScript",
      "Typed JavaScript",
      "Scalable Development",
    ],

    benefits: [
      "Fewer bugs",
      "Better maintainability",
      "Improved developer experience",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    entityId: "typescript",
  },

  {
    slug: "tailwind-css",

    title: "Tailwind CSS",

    category: "CSS Framework",

    description:
      "A utility-first CSS framework for building modern, responsive user interfaces efficiently.",

    officialUrl: "https://tailwindcss.com",

    keywords: [
      "Tailwind CSS",
      "Responsive Design",
      "Utility CSS",
    ],

    benefits: [
      "Rapid UI development",
      "Consistent design",
      "Smaller CSS bundles",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    entityId: "tailwind-css",
  },

  {
    slug: "technical-seo",

    title: "Technical SEO",

    category: "SEO",

    description:
      "Technical improvements that help search engines crawl, index, and rank websites effectively.",

    officialUrl: "https://developers.google.com/search",

    keywords: [
      "Technical SEO",
      "Website Optimization",
      "Search Engine Optimization",
    ],

    benefits: [
      "Better indexing",
      "Improved rankings",
      "Healthier websites",
    ],

    relatedServices: [
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    entityId: "technical-seo",
  },

  {
    slug: "schema-markup",

    title: "Schema Markup",

    category: "Structured Data",

    description:
      "Structured data that helps search engines better understand website content and entities.",

    officialUrl: "https://schema.org",

    keywords: [
      "Schema.org",
      "Structured Data",
      "JSON-LD",
    ],

    benefits: [
      "Rich Results",
      "Entity understanding",
      "Improved visibility",
    ],

    relatedServices: [
      "technical-seo",
      "ai-search-visibility",
    ],

    relatedResources: [
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    entityId: "schema-org",
  },

  {
    slug: "core-web-vitals",

    title: "Core Web Vitals",

    category: "Performance",

    description:
      "Google's key performance metrics for measuring website loading speed, responsiveness, and visual stability.",

    officialUrl: "https://web.dev",

    keywords: [
      "Core Web Vitals",
      "Website Speed",
      "Performance",
    ],

    benefits: [
      "Better UX",
      "Higher rankings",
      "Improved conversions",
    ],

    relatedServices: [
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    entityId: "core-web-vitals",
  },

  {
    slug: "ai-search-optimization",

    title: "AI Search Optimization",

    category: "AI SEO",

    description:
      "Optimization strategies that improve visibility across AI-powered search experiences and answer engines.",

    officialUrl: "https://developers.google.com/search",

    keywords: [
      "AI Search",
      "AEO",
      "Entity SEO",
      "GEO",
    ],

    benefits: [
      "Future-ready visibility",
      "Better entity recognition",
      "AI discoverability",
    ],

    relatedServices: [
      "ai-search-visibility",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
    ],

    entityId: "ai-search-optimization",
  },

  {
    slug: "vercel",

    title: "Vercel",

    category: "Hosting",

    description:
      "A cloud platform optimized for deploying Next.js applications with excellent performance and scalability.",

    officialUrl: "https://vercel.com",

    keywords: [
      "Vercel",
      "Hosting",
      "Deployment",
    ],

    benefits: [
      "Global CDN",
      "Fast deployment",
      "Excellent uptime",
    ],

    relatedServices: [
      "web-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    entityId: "vercel",
  },
] as const;
import {
  Globe,
  Search,
  ClipboardCheck,
  Bot,
  LayoutTemplate,
} from "lucide-react";

export type ServiceRole =
  | "primary"
  | "audit"
  | "supporting"
  | "implementation";

export type Service = {
  slug: string;
  href: string;
  title: string;
  icon: typeof Globe;

  role: ServiceRole;

  shortDescription: string;
  description: string;

  keywords: readonly string[];
  industries: readonly string[];
  technologies: readonly string[];

  relatedResources: readonly string[];
  relatedPortfolio: readonly string[];

  featured: boolean;
  order: number;
};

export const services: readonly Service[] = [
  // ===========================================================================
  // 01 — PRIMARY SERVICE
  // ===========================================================================
  {
    slug: "ai-search-visibility",
    href: "/services/ai-search-visibility",
    title: "AI Search Visibility",
    icon: Bot,

    role: "primary",

    shortDescription:
      "Understand and improve how your business is represented across search, local sources, and AI answer systems.",

    description:
      "Our primary service helps commercial businesses understand how search and AI systems currently represent them, identify missing, inconsistent, outdated, or weak information, and improve the digital foundations that influence discovery, trust, and customer action.",

    keywords: [
      "AI Search Visibility",
      "AI Visibility Optimization",
      "AI Search Optimization",
      "AI Visibility Audit",
      "Search Visibility",
      "AI Search",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Structured Data",
      "Schema.org",
      "Entity Information",
      "Semantic Content",
      "Technical SEO",
      "Local Search",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 1,
  },

  // ===========================================================================
  // 02 — AUDIT ENTRY PRODUCT
  // ===========================================================================
  {
    slug: "ai-search-visibility-audit",
    href: "/services/ai-search-visibility-audit",
    title: "AI Search Visibility Audit",
    icon: ClipboardCheck,

    role: "audit",

    shortDescription:
      "A structured audit showing how AI and search systems currently see your business and where important gaps exist.",

    description:
      "We investigate business identity, website foundations, local information, AI visibility, customer queries, reputation signals, competitors, and commercial opportunities to produce an evidence-based visibility assessment and prioritized action plan.",

    keywords: [
      "AI Search Visibility Audit",
      "AI Visibility Audit",
      "AI Search Audit",
      "AI SEO Audit",
      "Business Visibility Audit",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Website Analysis",
      "Structured Data",
      "Local Search",
      "AI Query Testing",
      "Competitive Research",
      "Evidence Collection",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 2,
  },

  // ===========================================================================
  // 03 — FRAMEWORK / METHODOLOGY
  // ===========================================================================
  {
    slug: "ai-visibility-framework",
    href: "/services/ai-visibility-framework",
    title: "AI Visibility Framework",
    icon: Bot,

    role: "primary",

    shortDescription:
      "A structured framework for improving business information, discoverability, trust, and AI visibility.",

    description:
      "Our framework connects business identity, website and technical foundations, local search information, AI visibility testing, customer queries, reputation, competitive intelligence, and opportunity prioritization into one repeatable process.",

    keywords: [
      "AI Visibility Framework",
      "AI Search Framework",
      "AI Visibility Strategy",
      "AI Search Strategy",
      "AI Search Optimization Framework",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Schema.org",
      "Structured Data",
      "Semantic Search",
      "Entity Information",
      "Technical SEO",
      "Customer Query Testing",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 3,
  },

  // ===========================================================================
  // 04 — TECHNICAL SEO SUPPORTING SERVICE
  // ===========================================================================
  {
    slug: "technical-seo",
    href: "/services/technical-seo",
    title: "Technical SEO",
    icon: Search,

    role: "supporting",

    shortDescription:
      "Technical SEO that strengthens crawlability, indexability, performance, structured data, and search foundations.",

    description:
      "We improve the technical foundations that help search engines and AI-driven discovery systems access, understand, and interpret a business website.",

    keywords: [
      "Technical SEO",
      "Technical SEO Services",
      "Core Web Vitals",
      "Structured Data",
      "Schema Markup",
      "Crawlability",
      "Indexability",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Schema.org",
      "Metadata",
      "Robots.txt",
      "XML Sitemap",
      "Canonical URLs",
      "Core Web Vitals",
    ],

    relatedResources: [
      "technical-seo-checklist",
      "ai-search-visibility-guide",
    ],

    relatedPortfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    featured: true,
    order: 4,
  },

  // ===========================================================================
  // 05 — LOCAL SEARCH SUPPORTING SERVICE
  // ===========================================================================
  {
    slug: "local-seo",
    href: "/services/local-seo",
    title: "Local SEO",
    icon: Search,

    role: "supporting",

    shortDescription:
      "Improve the accuracy, consistency, completeness, and discoverability of your local business information.",

    description:
      "We strengthen local search foundations by improving business information consistency, service and location signals, website-to-profile relationships, and other public information that can influence local discovery.",

    keywords: [
      "Local SEO",
      "Local Search",
      "Local Business SEO",
      "Google Business Profile",
      "Local Visibility",
      "Local Search Optimization",
    ],

    industries: [
      "hotels-hospitality",
      "home-services",
      "professional-services",
      "local-business",
    ],

    technologies: [
      "Google Business Profile",
      "Local Business Schema",
      "Structured Data",
      "Business Information",
      "Location Signals",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 5,
  },

  // ===========================================================================
  // 06 — WEBSITE AUDIT SUPPORTING SERVICE
  // ===========================================================================
  {
    slug: "website-audit",
    href: "/services/website-audit",
    title: "Website Audit",
    icon: ClipboardCheck,

    role: "supporting",

    shortDescription:
      "A structured assessment of your website's technical health, information quality, performance, UX, and search foundations.",

    description:
      "We assess the website foundations that support search visibility, AI understanding, trust, and customer action, then turn important issues into a prioritized improvement roadmap.",

    keywords: [
      "Website Audit",
      "Website Audit Services",
      "Technical Website Audit",
      "SEO Audit",
      "Performance Audit",
      "Website Health Audit",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Google Lighthouse",
      "PageSpeed Insights",
      "Google Search Console",
      "Schema.org",
      "Core Web Vitals",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 6,
  },

  // ===========================================================================
  // 07 — WEB DEVELOPMENT IMPLEMENTATION
  // ===========================================================================
  {
    slug: "web-development",
    href: "/services/web-development",
    title: "Web Development",
    icon: Globe,

    role: "implementation",

    shortDescription:
      "High-performance Next.js websites built to support visibility, trust, conversion, and long-term growth.",

    description:
      "We build modern Next.js websites that provide strong technical foundations for search visibility, AI-readable information, performance, user experience, and conversion.",

    keywords: [
      "Next.js Development",
      "Business Website",
      "React Development",
      "Website Development",
      "High Performance Website",
      "SEO Friendly Website",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    relatedResources: [
      "nextjs-business-websites",
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
      "clipping-path-agent",
    ],

    featured: true,
    order: 7,
  },

  // ===========================================================================
  // 08 — LANDING PAGE IMPLEMENTATION
  // ===========================================================================
  {
    slug: "landing-page-development",
    href: "/services/landing-page-development",
    title: "Landing Page Development",
    icon: LayoutTemplate,

    role: "implementation",

    shortDescription:
      "Conversion-focused landing pages designed to turn qualified traffic into meaningful business opportunities.",

    description:
      "We design and develop fast, focused landing pages for campaigns, high-intent searches, local services, and other commercial growth initiatives.",

    keywords: [
      "Landing Page Development",
      "Conversion Optimization",
      "Landing Page Design",
      "Marketing Landing Page",
      "Service Landing Page",
      "Campaign Landing Page",
    ],

    industries: [
      "hotels-hospitality",
      "professional-services",
      "home-services",
      "local-business",
    ],

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Analytics",
      "Conversion Optimization",
    ],

    relatedResources: [
      "nextjs-business-websites",
      "ai-search-visibility-guide",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 8,
  },
] as const;

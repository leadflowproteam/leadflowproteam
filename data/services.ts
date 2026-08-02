import {
  Globe,
  Search,
  ClipboardCheck,
  Bot,
  LayoutTemplate,
} from "lucide-react";

export type Service = {
  slug: string;
  href: string;
  title: string;
  icon: typeof Globe;
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
  {
    slug: "web-development",
    href: "/services/web-development",
    title: "Web Development",
    icon: Globe,

    shortDescription:
      "Fast, modern business websites built with Next.js.",

    description:
      "We build high-performance Next.js websites optimized for speed, Technical SEO, AI Search Visibility, Core Web Vitals, and long-term business growth.",

    keywords: [
      "Next.js Development",
      "Business Website",
      "React Development",
      "Responsive Website",
      "Website Performance",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
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
    order: 1,
  },

  {
    slug: "technical-seo",
    href: "/services/technical-seo",
    title: "Technical SEO",
    icon: Search,

    shortDescription:
      "Technical SEO that improves crawlability and search performance.",

    description:
      "We optimize website architecture, metadata, structured data, Core Web Vitals, indexing, crawlability, and search performance.",

    keywords: [
      "Technical SEO",
      "Core Web Vitals",
      "Schema",
      "Structured Data",
      "SEO Audit",
    ],

    industries: [
      "home-services",
      "healthcare",
      "legal",
      "professional-services",
    ],

    technologies: [
      "Schema.org",
      "Metadata",
      "Robots.txt",
      "XML Sitemap",
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
    order: 2,
  },

  {
    slug: "website-audit",
    href: "/services/website-audit",
    title: "Website Audit",
    icon: ClipboardCheck,

    shortDescription:
      "Comprehensive website audits for SEO, speed, UX, and technical health.",

    description:
      "We analyze your website's SEO, performance, Core Web Vitals, AI readiness, accessibility, and user experience, then provide a prioritized improvement roadmap.",

    keywords: [
      "Website Audit",
      "SEO Audit",
      "Performance Audit",
      "Core Web Vitals",
    ],

    industries: [
      "home-services",
      "professional-services",
      "local-business",
    ],

    technologies: [
      "Google Lighthouse",
      "PageSpeed Insights",
      "Google Search Console",
      "Schema",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 3,
  },

  {
    slug: "ai-search-visibility",
    href: "/services/ai-search-visibility",
    title: "AI Search Visibility",
    icon: Bot,

    shortDescription:
      "Optimize your website for AI-powered search engines.",

    description:
      "Prepare your business website for ChatGPT, Gemini, Claude, Google AI Overviews, Entity SEO, Semantic SEO, and future AI search platforms.",

    keywords: [
      "AI SEO",
      "Entity SEO",
      "Semantic SEO",
      "AEO",
      "AI Search",
    ],

    industries: [
      "professional-services",
      "healthcare",
      "legal",
      "local-business",
    ],

    technologies: [
      "Schema.org",
      "Entity SEO",
      "Semantic SEO",
      "Knowledge Graph",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 4,
  },

  {
    slug: "landing-page-development",
    href: "/services/landing-page-development",
    title: "Landing Page Development",
    icon: LayoutTemplate,

    shortDescription:
      "High-converting landing pages built for lead generation.",

    description:
      "We design and develop fast, conversion-focused landing pages for paid ads, local SEO, and service-based businesses.",

    keywords: [
      "Landing Page",
      "Lead Generation",
      "Conversion Optimization",
      "Marketing Website",
    ],

    industries: [
      "home-services",
      "professional-services",
      "local-business",
    ],

    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Analytics",
      "Conversion Optimization",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    relatedPortfolio: [
      "photoclippservice",
    ],

    featured: true,
    order: 5,
  },
] as const;
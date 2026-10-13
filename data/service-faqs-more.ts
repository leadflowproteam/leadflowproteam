import type { FAQ } from "@/data/faqs";

export const serviceFaqsMore: readonly FAQ[] = [
  // --- LANDING PAGE DEVELOPMENT ---
  {
    id: "lp-what",
    category: "landing-page-development",
    question: "What is landing page development?",
    answer:
      "Landing page development builds fast, focused single pages designed to convert qualified traffic into business opportunities. Each page matches a specific campaign, search intent, or service offer.",
  },
  {
    id: "lp-seo",
    category: "landing-page-development",
    question: "Are landing pages good for SEO?",
    answer:
      "Yes, when built correctly. High-intent landing pages target specific commercial queries, load fast, provide clear structured information, and convert — useful for both paid campaigns and organic search.",
  },
  {
    id: "lp-vs-website",
    category: "landing-page-development",
    question: "How is a landing page different from a full website?",
    answer:
      "A landing page has one goal: conversion of a specific audience. A full website carries the business's complete information architecture. Most clients need both — the website for authority and the landing page for campaigns.",
  },
  {
    id: "lp-tech",
    category: "landing-page-development",
    question: "What technology do you build landing pages with?",
    answer:
      "We build landing pages with Next.js, React, and Tailwind CSS — the same proven stack we use for full websites — so every page inherits strong Core Web Vitals, clean markup, and structured data support.",
  },

  // --- LOCAL SEO ---
  {
    id: "local-what",
    category: "local-seo",
    question: "What is Local SEO?",
    answer:
      "Local SEO improves the signals and business information that help a local or service-area business become easier to discover and understand in location-based search experiences. This can include business information, local profiles, categories, services, hours, website signals, reviews, structured data, and consistency across relevant sources.",
  },
  {
    id: "local-ai",
    category: "local-seo",
    question: "How does Local SEO support AI Search Visibility?",
    answer:
      "AI systems often rely on publicly available business information and supporting sources. Improving the accuracy, consistency, completeness, and clarity of local information strengthens the information foundation used to understand a business, while AI visibility itself still needs to be tested rather than assumed.",
  },
  {
    id: "local-guarantee",
    category: "local-seo",
    question: "Do you guarantee Google Maps or local search rankings?",
    answer:
      "No. Local rankings depend on multiple factors including relevance, prominence, competition, location, query context, and other signals outside a single project. We focus on identifying and improving genuine local-search weaknesses rather than guaranteeing a position.",
  },
  {
    id: "local-fix",
    category: "local-seo",
    question: "Can you fix inconsistent business information?",
    answer:
      "Yes. We can compare important business information across the website, local profiles, and relevant public sources, identify material inconsistencies, and scope the corrective work.",
  },
  {
    id: "local-gbp",
    category: "local-seo",
    question: "Do you manage Google Business Profiles?",
    answer:
      "The scope can include review and improvement recommendations for Google Business Profile information and related local signals. Any ongoing profile-management work depends on the agreed project scope and available access.",
  },
  {
    id: "local-audit",
    category: "local-seo",
    question: "Can Local SEO be part of an AI Search Visibility Audit?",
    answer:
      "Yes. Local Search and Data Consistency is one of the supporting layers of our broader visibility methodology. An audit can identify genuine local information gaps that can then become clearly scoped implementation work.",
  },
  {
    id: "local-fit",
    category: "local-seo",
    question: "Who is the best fit for your Local SEO service?",
    answer:
      "Our primary commercial focus is businesses with a genuine growth objective that are prepared to invest in professional digital improvement. Local SEO is particularly useful for businesses where location, service area, or local customer discovery is commercially important.",
  },

  // --- TECHNICAL SEO ---
  {
    id: "tseo-what",
    category: "technical-seo",
    question: "What is Technical SEO?",
    answer:
      "Technical SEO improves the parts of a website that determine how easily search engines and AI systems can access, understand, and interpret it — crawlability, indexing, structured data, metadata, site architecture, internal linking, XML sitemaps, robots directives, and Core Web Vitals.",
  },
  {
    id: "tseo-ai",
    category: "technical-seo",
    question: "Does Technical SEO affect AI search systems?",
    answer:
      "Yes. AI systems that cite web sources benefit from the same foundations search engines use: clean crawlable structure, clear structured data, fast loading, and unambiguous page relationships. A technically strong site is easier for both search engines and AI systems to interpret correctly.",
  },
  {
    id: "tseo-cwv",
    category: "technical-seo",
    question: "How do you improve Core Web Vitals?",
    answer:
      "We improve Core Web Vitals through performance-focused development: optimized images, efficient code delivery, minimal blocking resources, stable layout, and fast interactive response — measured against real user data in tools like PageSpeed Insights and Search Console.",
  },
  {
    id: "tseo-schema",
    category: "technical-seo",
    question: "What structured data do you implement?",
    answer:
      "We implement Schema.org JSON-LD matched to each page type: Organization, ProfessionalService, WebSite, Service, Article, FAQPage, BreadcrumbList, and WebPage — cross-linked with consistent entity identifiers so machines can connect related information across the site.",
  },
  {
    id: "tseo-included",
    category: "technical-seo",
    question: "Is Technical SEO included in website projects?",
    answer:
      "Yes. Every website we build ships with technical foundations in place — metadata, schema markup, sitemap, robots configuration, canonical URLs, and performance optimization. Standalone Technical SEO engagements focus on improving an existing website.",
  },

  // --- WEB DEVELOPMENT ---
  {
    id: "wd-what",
    category: "web-development",
    question: "What kind of websites do you build?",
    answer:
      "We build high-performance business websites with Next.js — for service companies that need speed, search visibility, AI-readiness, and conversion. Every website ships with Technical SEO foundations, structured data, and clean architecture built in.",
  },
  {
    id: "wd-redesign",
    category: "web-development",
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can redesign, optimize, and modernize existing websites to improve performance, search visibility, and user experience — whether the current site is on WordPress, an older framework, or static HTML.",
  },
  {
    id: "wd-nextjs",
    category: "web-development",
    question: "Why do you use Next.js for business websites?",
    answer:
      "Next.js delivers fast server-rendered pages, excellent Core Web Vitals, strong security, and first-class SEO support. Combined with TypeScript and Tailwind CSS, it produces scalable, maintainable websites that perform well in search and AI-driven discovery.",
  },
  {
    id: "wd-seo",
    category: "web-development",
    question: "Is SEO included in your website development?",
    answer:
      "Yes. SEO is not an add-on — metadata, schema markup, sitemap, robots directives, semantic headings, internal linking, and performance optimization are part of the standard build for every website we deliver.",
  },
  {
    id: "wd-support",
    category: "web-development",
    question: "Do you provide support after the website launches?",
    answer:
      "Yes. We offer continuous maintenance, optimization, and long-term technical support after project completion, so the website keeps performing as the business and search systems evolve.",
  },

  // --- WEBSITE AUDIT ---
  {
    id: "wa-what",
    category: "website-audit",
    question: "What is a website audit?",
    answer:
      "A website audit is a structured assessment of your website's technical health, information quality, performance, user experience, and search foundations — turning important issues into a prioritized improvement roadmap.",
  },
  {
    id: "wa-free",
    category: "website-audit",
    question: "Is the website audit really free?",
    answer:
      "Yes. The free website audit covers the essentials — technical health, performance, search visibility, and quick-win opportunities. Deeper diagnostic work (AI visibility, competitive, or implementation planning) is scoped as a paid engagement.",
  },
  {
    id: "wa-vs-ai",
    category: "website-audit",
    question: "How is a website audit different from an AI Search Visibility Audit?",
    answer:
      "A website audit examines the website itself — its code, speed, structure, and content. An AI Search Visibility Audit examines the wider information ecosystem: how the business is represented across search, local sources, and AI answer systems. Many clients start with one and expand to the other.",
  },
  {
    id: "wa-output",
    category: "website-audit",
    question: "What do I receive after the audit?",
    answer:
      "You receive a prioritized report: findings, what each issue means, quick wins, and a recommended roadmap — written so a business owner can act on it, with or without our implementation help.",
  },
  {
    id: "wa-fix",
    category: "website-audit",
    question: "Can you fix the issues found in the audit?",
    answer:
      "Yes. Depending on the findings, implementation can include website engineering, technical SEO, structured data, content updates, performance improvements, and conversion-focused changes.",
  },
] as const;

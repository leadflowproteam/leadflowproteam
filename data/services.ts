export const services = [
  {
    title: "Web Design & Development",
    description:
      "Fast, responsive, and scalable business websites built with modern technologies.",
    icon: "🌐",
    href: "/services/web-development",
  },

  {
    title: "Technical SEO",
    description:
      "Improve crawlability, Core Web Vitals, indexing, and search performance.",
    icon: "🚀",
    href: "/services/technical-seo",
  },

  {
    title: "AI Search Optimization",
    description:
      "Prepare your website for AI-powered search, LLMs, GEO, and AEO.",
    icon: "🤖",
    href: "/services/ai-search-optimization",
  },

  {
    title: "Landing Page Development",
    description:
      "Conversion-focused landing pages designed to generate more qualified leads.",
    icon: "📄",
    href: "/services/landing-pages",
  },

  {
    title: "Website Audit",
    description:
      "Comprehensive website audits covering performance, SEO, accessibility, and UX.",
    icon: "🔍",
    href: "/services/website-audit",
  },

  {
    title: "Performance Optimization",
    description:
      "Speed optimization, image optimization, caching, and Core Web Vitals improvements.",
    icon: "⚡",
    href: "/services/performance",
  },
] as const;

export type Service = (typeof services)[number];
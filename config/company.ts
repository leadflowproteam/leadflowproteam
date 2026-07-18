export const company = {
  name: "LeadFlowProTeam",

  shortName: "LFPT",

  slogan: "Build Faster. Rank Smarter. Grow Better.",

  description:
    "LeadFlowProTeam helps advertising-driven eCommerce businesses increase sales through high-performance Next.js websites, technical SEO, AI search visibility, and conversion-focused development.",

  url: "https://leadflowproteam.com",

  logo: "/logo.svg",

  email: "info@leadflowproteam.com",

  phone: "",

  founded: "2026",

  location: {
    country: "Bangladesh",
    serving: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],
  },

  contact: {
    email: "info@leadflowproteam.com",
    phone: "",
  },

  social: {
    facebook: "#",
    linkedin: "#",
    github: "#",
    x: "#",
    youtube: "#",
  },

  services: [
    "High-Performance eCommerce Websites",
    "Landing Page Development",
    "Technical SEO",
    "AI Search Optimization",
    "Performance Optimization",
  ],

  keywords: [
    "Next.js Agency",
    "eCommerce Website Development",
    "Technical SEO",
    "AI Search Optimization",
    "LLM SEO",
    "Conversion Optimization",
    "Landing Page Development",
    "Website Performance Optimization",
  ],
} as const;

export type Company = typeof company;
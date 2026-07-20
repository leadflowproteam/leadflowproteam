export const company = {
  // ---------------------------------------------------------------------------
  // Company Identity
  // ---------------------------------------------------------------------------
  name: "LeadFlowProTeam",

  shortName: "LFPT",

  legalName: "LeadFlowProTeam",

  slogan: "Build Faster. Rank Smarter. Grow Better.",

  description:
    "LeadFlowProTeam engineers AI-ready websites for service-based businesses with modern Next.js development, Technical SEO, AI Search Visibility, and performance optimization.",

  url: "https://leadflowproteam.com",

  logo: "/logo.svg",

  favicon: "/favicon.ico",

  founded: 2026,

  timezone: "Asia/Dhaka",

  language: "en-US",

  locale: "en_US",

  organizationType: "ProfessionalService",

  // ---------------------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------------------
  contact: {
    email: "info@leadflowproteam.com",
    supportEmail: "support@leadflowproteam.com",
    salesEmail: "sales@leadflowproteam.com",

    phone: "",

    whatsapp: "",

    address: {
      country: "Bangladesh",
    },
  },

  // ---------------------------------------------------------------------------
  // Markets
  // ---------------------------------------------------------------------------
  markets: {
    primary: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],

    headquarters: "Bangladesh",
  },

  // ---------------------------------------------------------------------------
  // Target Clients
  // ---------------------------------------------------------------------------
  targetClients: [
    "Service-Based Businesses",
    "Local Businesses",
    "Small Businesses",
    "Growing Companies",
  ],

  // ---------------------------------------------------------------------------
  // Industries
  // ---------------------------------------------------------------------------
  industries: [
    "Plumbing",
    "HVAC",
    "Electrical",
    "Roofing",
    "Cleaning",
    "Landscaping",
  ],

  // ---------------------------------------------------------------------------
  // Core Services
  // ---------------------------------------------------------------------------
  services: [
    "AI-Ready Website Development",
    "Technical SEO",
    "AI Search Visibility",
    "Website Audit",
    "Landing Page Development",
    "Website Performance Optimization",
  ],

  // ---------------------------------------------------------------------------
  // Technologies
  // ---------------------------------------------------------------------------
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
  ],

  // ---------------------------------------------------------------------------
  // SEO Keywords
  // ---------------------------------------------------------------------------
  keywords: [
    "AI Ready Website Development",
    "Next.js Agency",
    "Technical SEO",
    "AI Search Visibility",
    "Website Audit",
    "Core Web Vitals",
    "Schema Markup",
    "Performance Optimization",
    "Service Business Website",
    "Local Business Website",
    "Website Development",
  ],

  // ---------------------------------------------------------------------------
  // Social
  // ---------------------------------------------------------------------------
  social: {
    facebook: "https://facebook.com/leadflowproteam",

    linkedin: "https://linkedin.com/company/leadflowproteam",

    github: "https://github.com/leadflowproteam",

    x: "https://x.com/leadflowproteam",

    youtube: "https://youtube.com/@leadflowproteam",
  },
} as const;

export type Company = typeof company;
export const company = {
  // ---------------------------------------------------------------------------
  // Company Identity
  // ---------------------------------------------------------------------------
  name: "LeadFlowProTeam",

  shortName: "LFPT",

  legalName: "LeadFlowProTeam",

  slogan: "See How AI Sees Your Business. Fix the Gaps. Grow.",

  description:
    "LeadFlowProTeam helps investment-ready commercial businesses improve how they are discovered, understood, and represented across search, local information sources, and AI answer systems through evidence-based AI Search Visibility audits, practical implementation, and ongoing optimization.",

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
    "Investment-Ready Commercial Businesses",
    "Established Service Businesses",
    "Growth-Oriented Local Businesses",
    "Marketing-Investment-Ready Companies",
    "Businesses With a Clear Customer Acquisition Objective",
  ],

  // ---------------------------------------------------------------------------
  // Initial Commercial Focus
  // ---------------------------------------------------------------------------
  initialFocus: {
    market: "United States",
    geography: "Texas",
    niche: "Hotels & Hospitality",
    buyerProfile:
      "Commercial businesses that are prepared to invest in professional marketing, digital infrastructure, search visibility, AI Search Visibility, website improvement, conversion, and ongoing optimization.",
  },

  // ---------------------------------------------------------------------------
  // Industries
  // ---------------------------------------------------------------------------
  industries: [
    "Hotels & Hospitality",
    "Home Services",
    "Plumbing",
    "HVAC",
    "Electrical",
    "Roofing",
    "Cleaning",
    "Landscaping",
    "Professional Services",
  ],

  // ---------------------------------------------------------------------------
  // Core Services
  // ---------------------------------------------------------------------------
  services: [
    "AI Search Visibility",
    "AI Search Visibility Audit",
    "Technical SEO",
    "Local SEO",
    "Website Audit",
    "Website Development",
    "Landing Page Development",
    "Ongoing Visibility Optimization",
  ],

  // ---------------------------------------------------------------------------
  // Commercial Model
  // ---------------------------------------------------------------------------
  commercialModel: [
    "Audit",
    "Findings",
    "Fixes & Implementation",
    "Re-testing",
    "Ongoing Monitoring & Optimization",
  ],

  // ---------------------------------------------------------------------------
  // Technologies
  // ---------------------------------------------------------------------------
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Structured Data",
    "Schema.org",
    "Vercel",
  ],

  // ---------------------------------------------------------------------------
  // SEO / Search Topics
  // ---------------------------------------------------------------------------
  keywords: [
    "AI Search Visibility",
    "AI Search Visibility Audit",
    "AI Visibility Audit",
    "Search Visibility",
    "Technical SEO",
    "Local SEO",
    "Website Audit",
    "Structured Data",
    "Entity SEO",
    "AI Search Optimization",
    "Next.js Website Development",
    "Conversion Optimization",
    "Website Performance",
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
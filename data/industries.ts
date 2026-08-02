export type Industry = {
  slug: string;

  title: string;

  shortTitle: string;

  description: string;

  entityId: string;

  primaryTopic: string;

  searchIntent: "commercial" | "informational";

  recommendedServices: readonly string[];

  relatedResources: readonly string[];

  keywords: readonly string[];

  painPoints: readonly string[];

  benefits: readonly string[];

  cta: string;
};

export const industries: readonly Industry[] = [
  {
    slug: "home-services",

    title: "Home Service Businesses",

    shortTitle: "Home Services",

    description:
      "High-performance websites and Technical SEO for plumbers, electricians, HVAC companies, roofers, and other local service businesses.",

    entityId: "home-services",

    primaryTopic: "home-service-marketing",

    searchIntent: "commercial",

    recommendedServices: [
      "technical-seo",
      "web-development",
      "landing-page-development",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    keywords: [
      "Home Service Website",
      "Contractor Website",
      "HVAC Website",
      "Plumber Website",
    ],

    painPoints: [
      "Low search visibility",
      "Slow website",
      "Poor lead generation",
    ],

    benefits: [
      "More qualified leads",
      "Higher Google visibility",
      "Better conversion rates",
    ],

    cta: "Grow Your Home Service Business",
  },

  {
    slug: "healthcare",

    title: "Healthcare Providers",

    shortTitle: "Healthcare",

    description:
      "Modern websites for clinics, dental practices, medical specialists, and healthcare organizations.",

    entityId: "healthcare",

    primaryTopic: "healthcare-websites",

    searchIntent: "commercial",

    recommendedServices: [
      "web-development",
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    keywords: [
      "Healthcare Website",
      "Medical Website",
      "Dental Clinic Website",
    ],

    painPoints: [
      "Outdated website",
      "Poor mobile experience",
      "Low visibility",
    ],

    benefits: [
      "Build trust",
      "Increase appointments",
      "Improve visibility",
    ],

    cta: "Modernize Your Healthcare Website",
  },

  {
    slug: "legal",

    title: "Law Firms",

    shortTitle: "Legal",

    description:
      "Professional websites engineered for trust, authority, and client acquisition.",

    entityId: "law-firms",

    primaryTopic: "law-firm-marketing",

    searchIntent: "commercial",

    recommendedServices: [
      "technical-seo",
      "ai-search-visibility",
      "landing-page-development",
    ],

    relatedResources: [
      "ai-search-visibility-guide",
    ],

    keywords: [
      "Law Firm Website",
      "Attorney SEO",
      "Legal Website",
    ],

    painPoints: [
      "Competitive market",
      "Low online authority",
      "Few enquiries",
    ],

    benefits: [
      "More consultations",
      "Better visibility",
      "Professional branding",
    ],

    cta: "Grow Your Law Firm",
  },

  {
    slug: "real-estate",

    title: "Real Estate Agencies",

    shortTitle: "Real Estate",

    description:
      "Fast, modern websites for brokers, agencies, and real estate professionals.",

    entityId: "real-estate",

    primaryTopic: "real-estate-websites",

    searchIntent: "commercial",

    recommendedServices: [
      "web-development",
      "technical-seo",
      "landing-page-development",
    ],

    relatedResources: [
      "nextjs-business-websites",
    ],

    keywords: [
      "Real Estate Website",
      "Property Website",
      "Realtor Website",
    ],

    painPoints: [
      "Slow listings",
      "Low conversions",
      "Poor user experience",
    ],

    benefits: [
      "More enquiries",
      "Better performance",
      "Professional image",
    ],

    cta: "Build Your Real Estate Website",
  },

  {
    slug: "professional-services",

    title: "Professional Service Businesses",

    shortTitle: "Professional Services",

    description:
      "Helping agencies, consultants, accountants, and other professional firms grow online.",

    entityId: "professional-services",

    primaryTopic: "professional-service-marketing",

    searchIntent: "commercial",

    recommendedServices: [
      "web-development",
      "technical-seo",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
      "nextjs-business-websites",
    ],

    keywords: [
      "Professional Service Website",
      "Consulting Website",
      "Business Website",
    ],

    painPoints: [
      "Weak online presence",
      "Low trust",
      "Poor lead quality",
    ],

    benefits: [
      "Increase credibility",
      "Generate leads",
      "Improve search rankings",
    ],

    cta: "Strengthen Your Online Presence",
  },

  {
    slug: "local-business",

    title: "Local Businesses",

    shortTitle: "Local Business",

    description:
      "Helping local businesses attract more customers with modern websites and Technical SEO.",

    entityId: "local-business",

    primaryTopic: "local-business-marketing",

    searchIntent: "commercial",

    recommendedServices: [
      "technical-seo",
      "web-development",
      "website-audit",
    ],

    relatedResources: [
      "technical-seo-checklist",
    ],

    keywords: [
      "Local Business Website",
      "Local SEO",
      "Small Business Website",
    ],

    painPoints: [
      "Low local visibility",
      "Poor website performance",
      "Limited enquiries",
    ],

    benefits: [
      "More local customers",
      "Higher visibility",
      "Better user experience",
    ],

    cta: "Grow Your Local Business",
  },
] as const;
export const company = {
  basicInfo: {
    name: "LeadFlowProTeam",
    legalName: "LeadFlowProTeam",
    slogan: "Build Faster. Rank Smarter. Grow Better.",
    founded: 2026,
    website: "https://leadflowproteam.com",
  },

  contact: {
    businessEmail: "hello@leadflowproteam.com",
    supportEmail: "support@leadflowproteam.com",
    salesEmail: "sales@leadflowproteam.com",
    phone: "",
    location: "Remote",
    country: "Bangladesh",
    timezone: "Asia/Dhaka",
  },

  markets: {
    primary: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],
    secondary: [],
  },

  services: [
    "Website Development",
    "Landing Page Development",
    "Technical SEO",
    "Local SEO",
    "AI Search Optimization",
    "Website Audit",
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
  ],
} as const;

export type Company = typeof company;
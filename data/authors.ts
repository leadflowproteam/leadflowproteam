export type Author = {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  image: string;
  sameAs: readonly string[];
  expertise: readonly string[];
};

export const authors: readonly Author[] = [
  {
    slug: "leadflowproteam",
    name: "LeadFlowProTeam Editorial Team",
    jobTitle: "Technical SEO & Next.js Specialists",
    bio: "LeadFlowProTeam publishes practical resources about Technical SEO, AI Search Optimization, Next.js development, website performance, structured data, and lead generation for service businesses.",
    image: "/images/authors/editorial-team.webp",
    sameAs: [
      "https://leadflowproteam.com/about",
      "https://facebook.com/leadflowproteam",
      "https://linkedin.com/company/leadflowproteam",
      "https://github.com/leadflowproteam",
      "https://x.com/leadflowproteam",
      "https://youtube.com/@leadflowproteam",
    ],
    expertise: [
      "Technical SEO",
      "AI Search Optimization",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Next.js",
      "Website Development",
      "Core Web Vitals",
      "Structured Data",
      "Schema.org JSON-LD",
    ],
  },
] as const;

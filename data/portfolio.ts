export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  industry: string;

  description: string;

  client: string;

  liveUrl: string;

  featured: boolean;

  year: string;

  challenge: string;

  solution: string;

  technologies: readonly string[];

  services: readonly string[];

  results: readonly string[];
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: "photoclippservice",

    title: "Photo Clipp Service",

    category: "Modern Website",

    industry: "Photo Editing",

    client: "Photo Clipp Service",

    liveUrl: "https://photoclippservice.com",

    featured: true,

    year: "2026",

    description:
      "A modern high-performance website built with Next.js, TypeScript and Tailwind CSS for speed, Technical SEO and AI Search Visibility.",

    challenge:
      "Create a future-proof website focused on performance, scalability and modern search visibility.",

    solution:
      "Built a modern Next.js architecture with Technical SEO, structured data, semantic content and optimized performance.",

    services: [
      "Website Development",
      "Technical SEO",
      "AI Search Visibility",
      "Performance Optimization",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    results: [
      "Modern Architecture",
      "Fast Loading",
      "SEO Ready",
      "AI Search Ready",
    ],
  },

  {
    slug: "clipping-path-agent",

    title: "Clipping Path Agent",

    category: "SEO Growth Project",

    industry: "Photo Editing",

    client: "Clipping Path Agent",

    liveUrl: "https://clippingpathagent.com",

    featured: true,

    year: "2022 - Present",

    description:
      "Long-term SEO optimization and website growth project for an established clipping path company.",

    challenge:
      "Improve search visibility while working within an existing WordPress website architecture.",

    solution:
      "Implemented Technical SEO improvements, metadata optimization, structured data, internal linking and ongoing website optimization.",

    services: [
      "Technical SEO",
      "SEO Management",
      "Website Optimization",
      "Search Visibility",
    ],

    technologies: [
      "WordPress",
      "Technical SEO",
      "Schema",
      "Google Search Console",
    ],

    results: [
      "Long-Term SEO Partnership",
      "Improved Search Visibility",
      "Continuous Website Growth",
      "SEO Foundation",
    ],
  },
] as const;
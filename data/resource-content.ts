export type ResourceContent = {
  slug: string;

  introduction: string;

  sections: readonly {
    heading: string;
    content: string;
  }[];

  conclusion: string;

  faqs: readonly {
    question: string;
    answer: string;
  }[];
};

export const resourceContents: readonly ResourceContent[] = [
  {
    slug: "technical-seo-checklist",

    introduction:
      "Technical SEO forms the foundation of every successful business website. Without proper indexing, structured data, Core Web Vitals, and crawlability, even the best content may struggle to rank.",

    sections: [
      {
        heading: "Improve Crawlability",

        content:
          "Ensure search engines can access every important page through proper internal linking, XML sitemaps, robots.txt configuration, and clean URL structures.",
      },

      {
        heading: "Optimize Core Web Vitals",

        content:
          "Fast loading pages, stable layouts, optimized images, and responsive design improve both search visibility and user experience.",
      },

      {
        heading: "Implement Structured Data",

        content:
          "Schema.org markup helps Google, ChatGPT, Gemini, and Claude better understand your website's entities and services.",
      },
    ],

    conclusion:
      "Technical SEO is not a one-time task. Continuous monitoring, audits, and improvements help maintain strong visibility in both traditional search engines and AI-powered search experiences.",

    faqs: [
      {
        question: "Why is Technical SEO important?",

        answer:
          "Technical SEO improves crawlability, indexing, website performance, and overall search visibility.",
      },

      {
        question: "How often should Technical SEO audits be performed?",

        answer:
          "Most business websites benefit from a complete technical audit every three to six months.",
      },
    ],
  },
] as const;
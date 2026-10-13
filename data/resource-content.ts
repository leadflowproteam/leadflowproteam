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

  {
    slug: "ai-search-visibility-guide",

    introduction:
      "Search is changing. Alongside traditional search engines, customers now receive answers from AI systems such as ChatGPT, Gemini, Claude, Perplexity, and Copilot. Whether a business appears in those answers depends on how clearly its information is published, structured, and connected across the web. This guide explains how AI answer systems discover and represent businesses, what makes them omit or misrepresent a business, and what practical steps improve AI Search Visibility.",

    sections: [
      {
        heading: "How AI Answer Systems Discover Businesses",

        content:
          "AI answer engines do not crawl the web exactly like traditional search engines. They combine search indexes, third-party sources, and their own retrieval systems to answer questions directly. A business that only optimizes for classic rankings may still be invisible to these systems. The key inputs are clear business facts, consistent public information, machine-readable structured data, and a topical footprint that matches the questions customers actually ask.",
      },

      {
        heading: "Why Structured Data and Entity SEO Matter",

        content:
          "AI systems work with entities, not just keywords. Structured data (Schema.org JSON-LD) tells machines what your business is, what services it offers, where it operates, and how those services relate to each other. When business information is consistent between the website, local profiles, and public sources, AI systems gain confidence in representing that business correctly. Inconsistencies, missing facts, and vague descriptions are the most common reasons a business is misrepresented or omitted in AI answers.",
      },

      {
        heading: "Testing Your AI Visibility",

        content:
          "Ask real customer questions across ChatGPT, Gemini, Perplexity, and Copilot: Can the system name your business? Does it describe your services correctly? Does it know your locations and service areas? Recording what is missing, wrong, or outdated gives you a concrete, prioritized list of improvements instead of guesswork.",
      },
    ],

    conclusion:
      "AI Search Visibility is not a gimmick or a ranking trick. It is the practice of publishing clear, consistent, machine-readable business information and then verifying how AI systems represent it. Businesses that invest in strong foundations now will be easier to discover, understand, and recommend as AI-driven search becomes mainstream.",

    faqs: [
      {
        question: "Can you guarantee my business appears in AI answers?",

        answer:
          "No. AI answers change based on query, location, context, and sources. What can be improved is the quality, consistency, and machine-readability of the information those systems rely on.",
      },

      {
        question: "Is AI Search Visibility the same as traditional SEO?",

        answer:
          "They overlap significantly, but AI visibility also depends on entity clarity, structured data, source consistency, and how customers phrase their questions.",
      },
    ],
  },
] as const;

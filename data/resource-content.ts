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

  {
    slug: "nextjs-business-websites",

    introduction:
      "Businesses evaluating a new website compare speed, security, SEO capability, and long-term maintainability. Next.js has become the leading framework for business websites because it directly addresses each of these priorities. This guide explains why Next.js performs better than older approaches and what that means for a commercial website.",

    sections: [
      {
        heading: "Faster Page Loads and Better Core Web Vitals",

        content:
          "Next.js renders pages as static HTML where possible and hydrates them on the client. Customers receive fully formed pages from a global edge network instead of waiting for a client-side app to download, parse, and render. The practical result is faster Largest Contentful Paint, stable layouts, and better Core Web Vitals — signals that both Google and AI retrieval systems value.",
      },

      {
        heading: "Server Rendering Improves Crawlability",

        content:
          "Because pages are fully rendered in HTML, search engines and AI crawlers receive complete content on the first request. There is no dependency on JavaScript execution to reveal headings, internal links, or structured data. This is one of the most important architectural advantages Next.js has for modern search visibility.",
      },

      {
        heading: "Built-in Metadata and Structured Data Support",

        content:
          "The Next.js App Router provides first-class metadata APIs, automatic sitemap and robots.txt generation, and native JSON-LD support. A well-built Next.js site manages titles, canonical URLs, Open Graph data, and Schema.org markup from a single source of truth, keeping every page consistent as the site grows.",
      },

      {
        heading: "Lower Maintenance and Better Security",

        content:
          "Next.js sites are primarily static output with serverless functions only where needed. There is less infrastructure to patch, fewer moving parts to break, and no database attached to the public website unless genuinely required. Security headers and caching are straightforward to configure at the platform level.",
      },
    ],

    conclusion:
      "For a commercial business website, Next.js offers a rare combination: marketing-grade speed, strong technical SEO foundations, machine-readable structure for AI systems, and lower long-term maintenance. That is why it is the default choice for modern business websites.",

    faqs: [
      {
        question: "Is Next.js better than WordPress for business websites?",

        answer:
          "For performance, security, and technical SEO foundations, a well-built Next.js site generally outperforms plugin-based approaches. WordPress remains viable for teams already invested in it, but carries more maintenance overhead.",
      },

      {
        question: "Does Next.js require JavaScript to rank in search engines?",

        answer:
          "No. Next.js pre-renders pages as complete HTML, so search engines and AI crawlers receive full content without executing JavaScript.",
      },
    ],
  },
] as const;

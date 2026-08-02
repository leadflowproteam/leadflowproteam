import FAQ from "@/components/sections/FAQ";

export default function TechnicalSeoFAQ() {
  return (
    <FAQ
      badge="Frequently Asked Questions"
      title="Technical SEO Questions Answered by Experts"
      description="Get clear answers about Technical SEO, website performance, indexing, Core Web Vitals, structured data, AI Search Visibility, and how our optimization process supports long-term organic growth."

      items={[
        {
         question: "What is Technical SEO and why does it matter?",
          answer:
            "Technical SEO is the process of optimizing your website's technical foundation so search engines can efficiently crawl, understand, index, and rank your content. It focuses on performance, website architecture, structured data, Core Web Vitals, mobile usability, security, and other backend factors that directly influence search visibility.",
        },
        {
          question: "How can Technical SEO help my business grow?",
          answer:
            "Technical SEO helps your business grow by improving website performance, crawlability, indexing, user experience, and search visibility. A technically optimized website attracts more qualified organic traffic, supports higher rankings, and creates a stronger foundation for long-term lead generation.",
        },
        {
          question: "What is included in your Technical SEO service?",
          answer:
            "Our service includes Technical SEO audits, Core Web Vitals optimization, crawlability improvements, indexing analysis, XML sitemap optimization, robots.txt validation, schema markup implementation, structured data validation, canonical URL optimization, redirect management, internal linking improvements, mobile optimization, HTTPS verification, and ongoing technical monitoring.",
        },
        {
          question: "Can Technical SEO improve my Google rankings?",
          answer:
            "Yes—but Technical SEO is only one part of SEO. It improves your website's technical foundation so Google can crawl, index, and evaluate your pages more efficiently. Rankings also depend on content quality, competition, authority, and backlinks, but without a strong technical foundation, even great content may struggle to perform.",
        },
        {
          question: "Do you optimize websites for AI-powered search engines?",
          answer:
            "Yes. We optimize websites for modern AI-powered search experiences including Google AI Overviews, ChatGPT, Claude, Gemini, and other semantic search systems by improving structured data, entity optimization, content architecture, and overall technical quality.",
        },
        {
          question: "Can you optimize the Technical SEO of my existing website?",
          answer:
            "Absolutely. We can optimize the Technical SEO of existing websites built with Next.js, WordPress, Shopify, or other modern platforms without rebuilding the entire site. We identify technical issues, prioritize fixes, and implement improvements that strengthen website performance and search visibility.",
        },
        {
          question: "How long does a typical Technical SEO project take?",
          answer:
            "Project timelines depend on the size and complexity of your website. Smaller websites can often be optimized within a few business days, while larger websites with extensive technical issues may require additional implementation and testing time.",
        },
        {
          question: "Will I receive a detailed Technical SEO audit report?",
          answer:
            "Yes. Every Technical SEO project includes a detailed report outlining discovered issues, their impact, priority level, completed improvements, and recommended next steps for continuous optimization and long-term growth.",
        },
        {
          question: "Do you provide ongoing Technical SEO support after implementation?",
          answer:
            "Yes. We offer ongoing Technical SEO maintenance, performance monitoring, Core Web Vitals reviews, technical health checks, structured data updates, and continuous optimization to keep your website aligned with Google's evolving best practices.",
        },
      ]}
    />
  );
}
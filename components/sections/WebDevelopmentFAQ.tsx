import FAQ from "@/components/sections/FAQ";

export default function WebDevelopmentFAQ() {
  return (
    <FAQ
      badge="Web Development FAQ"
      title="Frequently Asked Questions"
      description="Find answers to the most common questions about our custom Next.js web development services, Technical SEO, AI Search Visibility, and long-term website growth."
      items={[
        {
          question: "Why do you build websites with Next.js instead of WordPress?",
          answer:
            "Next.js delivers significantly better performance, stronger security, cleaner code architecture, faster loading speeds, improved Core Web Vitals, and superior Technical SEO. It is the ideal solution for businesses that need a modern, scalable, and future-ready website.",
        },
        {
          question: "Will my website be fully responsive?",
          answer:
            "Yes. Every website is designed using a mobile-first approach and tested across desktops, laptops, tablets, and smartphones to ensure a consistent user experience.",
        },
        {
          question: "Do you include Technical SEO during development?",
          answer:
            "Absolutely. Every project includes Technical SEO fundamentals such as semantic HTML, optimized metadata, schema markup, XML sitemap, robots.txt, internal linking, clean URLs, accessibility improvements, and crawl-friendly architecture.",
        },
        {
          question: "Can my website rank higher in Google Search?",
          answer:
            "Yes. While rankings depend on competition and ongoing SEO efforts, every website is built on a strong Technical SEO foundation that supports long-term search visibility and organic growth.",
        },
        {
          question: "Is my website optimized for AI Search?",
          answer:
            "Yes. We optimize websites for AI-powered search experiences including Google AI Overviews, ChatGPT, Claude, Gemini, and other semantic search platforms using structured content and entity optimization best practices.",
        },
        {
          question: "Can you redesign my existing website?",
          answer:
            "Yes. We can modernize your current website, improve page speed, enhance user experience, strengthen Technical SEO, and preserve valuable content wherever possible.",
        },
        {
          question: "Do you provide support after launch?",
          answer:
            "Yes. We offer ongoing website maintenance, performance optimization, Technical SEO improvements, security updates, and future feature enhancements as your business grows.",
        },
        {
          question: "How long does a typical website project take?",
          answer:
            "Project timelines vary depending on the number of pages, features, and content requirements. Most professional service-business websites are completed within a few weeks after project requirements are finalized.",
        },
      ]}
    />
  );
}
import FAQ from "@/components/sections/FAQ";

const landingPageFaqs = [
  {
    question: "What is a high-converting landing page?",
    answer:
      "A high-converting landing page is a focused webpage designed to guide visitors toward a single goal—such as requesting a quote, booking a consultation, or generating qualified leads. It combines persuasive messaging, clear calls-to-action, fast performance, and user-focused design to maximize conversions.",
  },
  {
    question: "Why choose Next.js instead of WordPress for landing pages?",
    answer:
      "Next.js delivers superior performance, stronger Core Web Vitals, enhanced security, excellent Technical SEO, and better scalability. It also provides a modern foundation for AI Search Optimization and long-term business growth.",
  },
  {
    question: "Will my landing page be optimized for SEO?",
    answer:
      "Yes. Every landing page includes Technical SEO best practices such as semantic HTML, optimized metadata, clean URL structures, schema markup support, mobile responsiveness, and performance optimization.",
  },
  {
    question: "Is AI Search Optimization included?",
    answer:
      "Absolutely. We structure your landing page using entity-focused content, logical information architecture, schema markup, and AI-friendly formatting to improve visibility across modern AI-powered search platforms.",
  },
  {
    question: "Can you build landing pages for Google Ads and Local SEO campaigns?",
    answer:
      "Yes. We create campaign-specific landing pages that support Google Ads, Local SEO, social media campaigns, and lead generation strategies while maintaining excellent speed and conversion performance.",
  },
  {
    question: "How long does a landing page project usually take?",
    answer:
      "Most landing pages are completed within a few business days, depending on the project scope, content availability, and revision requirements.",
  },
  {
    question: "Can you redesign my existing landing page?",
    answer:
      "Yes. We can modernize your current landing page by improving design, performance, Technical SEO, AI Search Visibility, user experience, and conversion optimization without losing your existing brand identity.",
  },
  {
    question: "Do you provide ongoing optimization after launch?",
    answer:
      "Yes. We can continue monitoring your landing page, analyze visitor behavior, improve conversion rates, optimize Core Web Vitals, and recommend ongoing enhancements to maximize long-term business growth.",
  },
];

export default function LandingPageFaq() {
  return (
    <FAQ
      badge="Landing Page FAQ"
      title="Frequently Asked Questions About Landing Page Development"
      description="Find answers to the most common questions about our custom Landing Page Development service, Technical SEO, AI Search Optimization, and conversion-focused strategy."
      items={landingPageFaqs}
    />
  );
}
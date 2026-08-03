import PageHero from "@/components/ui/PageHero";

export default function TechnicalSeoHero() {
  return (
    <PageHero
      badge="Technical SEO Services"

      title="Technical SEO Services That Build a Faster, Smarter & AI-Ready Website"

      description="Our Technical SEO services strengthen your website's foundation by improving crawlability, indexing, Core Web Vitals, structured data, site architecture, semantic signals, and overall search performance. We optimize your website for Google Search, Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity, and the next generation of AI-powered search experiences."

      primaryButtonText="Get Your Free Technical SEO Audit"
      primaryButtonHref="/free-audit"

      secondaryButtonText="Book a Technical SEO Strategy Call"
      secondaryButtonHref="/contact"

      tags={[
        "Technical SEO",
        "Core Web Vitals",
        "Website Performance",
        "Crawlability",
        "Indexing",
        "Structured Data",
        "Schema Markup",
        "Site Architecture",
        "Semantic SEO",
        "Entity SEO",
        "AI Search Visibility",
        "Google Search Console",
      ]}
    />
  );
}
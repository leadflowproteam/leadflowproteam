import PageHero from "@/components/ui/PageHero";

export default function AiSearchHero() {
  return (
    <PageHero
      badge="AI Search Visibility Services"
      title="Help Your Business Get Found by AI Search — Not Just Google"
      description="AI Search Visibility helps your business appear in AI-powered search experiences like ChatGPT, Google AI Overviews, Gemini, Claude, and future AI search platforms. We optimize your website with structured data, Entity SEO, semantic content architecture, and technical best practices so AI systems can better understand, trust, and recommend your business."
      primaryButtonText="Get Free AI Search Audit"
      primaryButtonHref="/free-audit"
      secondaryButtonText="Book Discovery Call"
      secondaryButtonHref="/contact"
      tags={[
        "AI Search Visibility",
        "Entity SEO",
        "AI Search Optimization",
        "Structured Data",
        "Schema Markup",
        "Semantic SEO",
        "Google AI Overviews",
        "ChatGPT",
        "Gemini",
        "Claude",
      ]}
    />
  );
}
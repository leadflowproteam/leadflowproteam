import PageHero from "@/components/ui/PageHero";

export default function FreeAuditHero() {
  return (
    <PageHero
      badge="AI Search Visibility Audit"
      title="See How AI Sees Your Business."
      description="Start with a focused visibility assessment of your business information, website, local presence, search visibility, and relevant AI answer experiences. Find the gaps, understand the opportunities, and know what to improve next."
      primaryButtonText="Request Your Audit"
      primaryButtonHref="#audit-form"
      secondaryButtonText="Explore AI Search Visibility"
      secondaryButtonHref="/services/ai-search-visibility"
      tags={[
        "Business & Identity",
        "Website & Technical",
        "Local Search & Data",
        "AI Visibility",
        "Customer Queries",
        "Competitive Insights",
      ]}
    />
  );
}
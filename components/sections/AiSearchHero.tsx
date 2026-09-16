import PageHero from "@/components/ui/PageHero";

export default function AiSearchHero() {
  return (
    <PageHero
      badge="Primary Service • AI Search Visibility"
      title="See How AI Sees Your Business. Find the Gaps. Improve What Matters."
      description="We investigate how your business is represented across search, local information sources, and AI answer systems. We identify missing, inconsistent, outdated, weak, or misleading information and turn the findings into a practical improvement plan."
      primaryButtonText="Request an AI Visibility Audit"
      primaryButtonHref="/free-audit"
      secondaryButtonText="Discuss Your Growth Goals"
      secondaryButtonHref="/contact"
      tags={[
        "AI Search Visibility",
        "AI Visibility Audit",
        "Business Information",
        "Technical SEO",
        "Local Search",
        "Structured Data",
        "Entity Information",
        "Customer Query Testing",
      ]}
    />
  );
}

import PageHero from "@/components/ui/PageHero";

export default function PortfolioHero() {
  return (
    <PageHero
      badge="Portfolio"
      title="Explore Our Web Development, SEO & AI Search Projects"
      description="Discover how LeadFlowProTeam builds fast, search-optimized, and conversion-focused websites that help service businesses grow online."
      primaryButtonText="Start Your Project"
      primaryButtonHref="/contact"
      secondaryButtonText="Get Free Audit"
      secondaryButtonHref="/free-audit"
      tags={[
        "Web Development",
        "Technical SEO",
        "AI Search Visibility",
        "Landing Pages",
        "Performance",
        "Lead Generation",
      ]}
    />
  );
}
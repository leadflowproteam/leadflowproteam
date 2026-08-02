import PageHero from "@/components/ui/PageHero";

export default function CaseStudiesHero() {
  return (
    <PageHero
      badge="Case Studies"
      title="Real Strategies. Measurable Results."
      description="Explore how LeadFlowProTeam helps service businesses improve website performance, Technical SEO, AI Search Visibility, and lead generation through modern web solutions."
      primaryButtonText="Start Your Project"
      primaryButtonHref="/contact"
      secondaryButtonText="Get Free Audit"
      secondaryButtonHref="/free-audit"
      tags={[
        "Case Studies",
        "Business Growth",
        "Technical SEO",
        "AI Search Visibility",
        "Next.js",
        "Performance Optimization",
      ]}
    />
  );
}
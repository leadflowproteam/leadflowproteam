import PageHero from "@/components/ui/PageHero";

export default function FreeAuditHero() {
  return (
    <PageHero
      badge="Free Website Audit"
      title="Get Your Free Website Audit"
      description="Discover hidden SEO issues, performance bottlenecks, AI Search opportunities, Core Web Vitals problems, and actionable recommendations to improve your website's rankings, speed, and lead generation."
      primaryButtonText="Request Free Audit"
      primaryButtonHref="#audit-form"
      secondaryButtonText="Contact Us"
      secondaryButtonHref="/contact"
      tags={[
        "Technical SEO",
        "Performance Audit",
        "Core Web Vitals",
        "AI Search Ready",
        "Website Health",
        "Action Plan",
      ]}
    />
  );
}
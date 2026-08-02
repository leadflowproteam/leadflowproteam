import PageHero from "@/components/ui/PageHero";

export default function WebsiteAuditHero() {
  return (
    <PageHero
      badge="Professional Website Audit Services"

      title="Discover What’s Holding Your Website Back — Before Your Customers Do"

      description="Our comprehensive Website Audit uncovers hidden SEO issues, Core Web Vitals problems, technical errors, accessibility gaps, structured data opportunities, Local SEO weaknesses, and AI Search Visibility limitations. Receive a prioritized action plan to improve rankings, user experience, conversions, and long-term business growth."

      primaryButtonText="Request Your Free Website Audit"
      primaryButtonHref="/free-audit"

      secondaryButtonText="Talk With an SEO Specialist"
      secondaryButtonHref="/contact"

      tags={[
        "Website Audit",
        "Technical SEO Audit",
        "Core Web Vitals",
        "Performance Optimization",
        "Local SEO Audit",
        "Accessibility Review",
        "Schema Markup",
        "Entity SEO",
        "AI Search Visibility",
        "Website Health Report",
        "Conversion Optimization",
        "Growth Roadmap",
      ]}
    />
  );
}
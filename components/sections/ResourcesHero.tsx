import PageHero from "@/components/ui/PageHero";

export default function ResourcesHero() {
  return (
    <PageHero
      badge="Resources"
      title="Expert Insights on Web Development, Technical SEO & AI Search"
      description="Explore practical guides, tutorials, and expert insights designed to help service businesses improve their websites, increase search visibility, and generate more qualified leads."
      primaryButtonText="Get Free Website Audit"
      primaryButtonHref="/free-audit"
      secondaryButtonText="Contact Us"
      secondaryButtonHref="/contact"
      tags={[
        "Technical SEO",
        "AI Search Visibility",
        "Next.js",
        "Website Performance",
        "Lead Generation",
        "Business Growth",
      ]}
    />
  );
}
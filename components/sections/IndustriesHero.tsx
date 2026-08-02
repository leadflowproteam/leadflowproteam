import PageHero from "@/components/ui/PageHero";

export default function IndustriesHero() {
  return (
    <PageHero
      badge="Industries"
      title="Helping Service Businesses Grow with Modern Web Solutions"
      description="We build high-performance websites, improve Technical SEO, and increase AI Search Visibility for service-based businesses across the United States, Canada, the United Kingdom, and Australia."
      primaryButtonText="Start Your Project"
      primaryButtonHref="/contact"
      secondaryButtonText="Get Free Audit"
      secondaryButtonHref="/free-audit"
      tags={[
        "Home Services",
        "Healthcare",
        "Legal",
        "Real Estate",
        "Professional Services",
        "Local Businesses",
      ]}
    />
  );
}
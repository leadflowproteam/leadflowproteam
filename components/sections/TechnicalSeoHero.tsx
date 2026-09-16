import PageHero from "@/components/ui/PageHero";

export default function TechnicalSeoHero() {
  return (
    <PageHero
      badge="Supporting Implementation Service • Technical SEO"
      title="Strengthen the Technical Foundation Behind Your Search Visibility"
      description="We fix technical issues that can make a website harder to crawl, index, understand, maintain, or use. Our work supports stronger search foundations and complements AI Search Visibility initiatives."
      primaryButtonText="Discuss a Technical SEO Project"
      primaryButtonHref="/contact"
      secondaryButtonText="Start With an Audit"
      secondaryButtonHref="/free-audit"
      tags={[
        "Technical SEO",
        "Crawlability",
        "Indexability",
        "Core Web Vitals",
        "Structured Data",
        "Schema Markup",
        "Internal Linking",
        "XML Sitemap",
        "Canonical URLs",
        "Redirects",
        "Website Architecture",
      ]}
    />
  );
}
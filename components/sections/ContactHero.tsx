import PageHero from "@/components/ui/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      badge="Contact LeadFlowProTeam"
      title="Let's Build Something That Grows Your Business"
      description="Whether you need a high-performance website, Technical SEO, AI Search Visibility, or a complete digital strategy, we're ready to help. Tell us about your project and we'll get back to you within one business day."
      primaryButtonText="Send Your Message"
      primaryButtonHref="#contact-form"
      secondaryButtonText="Get Free Website Audit"
      secondaryButtonHref="/free-audit"
      tags={[
        "Web Development",
        "Technical SEO",
        "AI Search Visibility",
        "Website Audit",
        "Landing Pages",
        "Business Growth",
      ]}
    />
  );
}
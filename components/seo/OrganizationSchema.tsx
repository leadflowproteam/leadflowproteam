export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": "https://leadflowproteam.com/#organization",

    name: "LeadFlowProTeam",

    url: "https://leadflowproteam.com",

    logo: "https://leadflowproteam.com/logo.png",

    description:
      "LeadFlowProTeam helps businesses grow with Web Development, Technical SEO, AI Search Visibility, Website Audits, and Landing Page Development.",

    foundingDate: "2026",

    areaServed: [
      "United States",
      "Canada",
      "United Kingdom",
      "Australia",
    ],

    knowsAbout: [
      "Web Development",
      "Technical SEO",
      "AI Search Visibility",
      "Entity SEO",
      "Semantic SEO",
      "Website Audit",
      "Landing Page Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
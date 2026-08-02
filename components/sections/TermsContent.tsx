import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the LeadFlowProTeam website, you agree to these Terms of Service and all applicable laws and regulations.",
    ],
  },
  {
    title: "2. Our Services",
    content: [
      "LeadFlowProTeam provides website development, Technical SEO, AI Search Visibility, Landing Page Development, and Website Audit services.",
      "Project scope, pricing, and delivery timelines are agreed upon before work begins.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    content: [
      "Clients are responsible for providing accurate information, required content, and timely feedback to ensure successful project delivery.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "Unless otherwise agreed, clients retain ownership of their content while LeadFlowProTeam retains ownership of its proprietary tools, templates, and development processes.",
    ],
  },
  {
    title: "5. Payments",
    content: [
      "Payment terms are defined within each project agreement. Work may begin after the agreed initial payment has been received.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "LeadFlowProTeam is not liable for indirect, incidental, or consequential damages arising from the use of our website or services.",
    ],
  },
  {
    title: "7. Changes to These Terms",
    content: [
      "We may update these Terms of Service at any time. Updated versions will be published on this page.",
    ],
  },
  {
    title: "8. Contact",
    content: [
      "If you have any questions regarding these Terms of Service, please contact us through our Contact page.",
    ],
  },
];

export default function TermsContent() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl space-y-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="leading-8 text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
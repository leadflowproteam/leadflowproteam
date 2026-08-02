import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We may collect personal information that you voluntarily provide when contacting us, requesting a free website audit, or using our services.",
      "This may include your name, email address, company name, phone number, website URL, and any information you choose to share.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your information to respond to inquiries, provide our services, improve our website, communicate with you, and deliver requested resources or updates.",
      "We never sell your personal information to third parties.",
    ],
  },
  {
    title: "3. Cookies & Analytics",
    content: [
      "Our website may use cookies and analytics tools to understand website usage and improve user experience.",
      "You can disable cookies through your browser settings if you prefer.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or misuse.",
      "While we strive to protect your data, no internet transmission is completely secure.",
    ],
  },
  {
    title: "5. Third-Party Services",
    content: [
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those external websites.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Depending on your location, you may have the right to access, update, correct, or request deletion of your personal information.",
      "To exercise these rights, please contact us using the information provided on our Contact page.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be published on this page with the latest revision date.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact LeadFlowProTeam through our Contact page.",
    ],
  },
];

export default function PrivacyContent() {
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
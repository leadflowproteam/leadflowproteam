import {
  Clock3,
  Globe2,
  Mail,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description:
      "info@leadflowproteam.com\nWe'll respond within one business day.",
  },
  {
    icon: Globe2,
    title: "Markets We Serve",
    description:
      "United States, Canada, United Kingdom, and Australia.",
  },
  {
    icon: Clock3,
    title: "Response Time",
    description:
      "Most inquiries receive a reply within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Why Work With Us",
    description:
      "Professional communication, transparent workflow, modern technology, and long-term support.",
  },
];

export default function ContactInfo() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Get In Touch"
        title="We're Ready to Help Your Business Grow"
        description="Whether you're planning a new website, improving SEO, or increasing AI Search Visibility, we'd love to hear about your project."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="group h-full"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title>
                  {item.title}
                </Card.Title>

                <Card.Description className="whitespace-pre-line grow">
                  {item.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

import {
  Bot,
  Building2,
  Database,
  FileSearch,
  MapPin,
  Network,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Building2,
    title: "Business & Identity",
    description:
      "Review business name, category, location or service area, services, contact information, hours, positioning, and other core facts that should remain consistent.",
  },
  {
    icon: FileSearch,
    title: "Website & Technical Foundation",
    description:
      "Assess crawlability, metadata, headings, internal linking, information architecture, structured data, performance, conversion paths, and content completeness.",
  },
  {
    icon: MapPin,
    title: "Local Search & Data Consistency",
    description:
      "Compare important public business information across the website, local search sources, and relevant listings to identify meaningful inconsistencies.",
  },
  {
    icon: Bot,
    title: "AI Search Visibility",
    description:
      "Test relevant business, service, and location queries and document whether the business is mentioned, omitted, misunderstood, or represented with important factual differences.",
  },
  {
    icon: Network,
    title: "Customer Query Testing",
    description:
      "Use a repeatable question set covering service, location, pricing guidance, comparisons, booking, availability, and other high-intent customer questions.",
  },
  {
    icon: Database,
    title: "Evidence & Opportunity Mapping",
    description:
      "Connect findings to sources, evidence, severity, business impact, competitive impact, fixability, priority, and recommended next action.",
  },
];

export default function AiSearchFeatures() {
  return (
    <Section className="bg-slate-50 py-20 sm:py-24">
      <SectionHeading
        badge="What We Investigate"
        title="A Layered View of Business Visibility"
        description="Our methodology looks at the business as an information system rather than treating AI visibility as a single technical setting."
      />

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} className="group h-full">
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <Card.Title>{feature.title}</Card.Title>

                <Card.Description className="grow">
                  {feature.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

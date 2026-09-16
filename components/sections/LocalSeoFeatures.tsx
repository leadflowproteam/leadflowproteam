import {
  ClipboardCheck,
  Database,
  Globe2,
  MapPinned,
  MessageSquare,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Database,
    title: "Business Information Consistency",
    description:
      "Compare important business facts across the website and relevant public sources, including name, address, phone, services, hours, and positioning.",
  },
  {
    icon: MapPinned,
    title: "Local Profile Review",
    description:
      "Review relevant local business profiles and determine whether important categories, services, locations, and other public information are complete and coherent.",
  },
  {
    icon: Globe2,
    title: "Website-to-Local Alignment",
    description:
      "Strengthen the relationship between the website and local sources so important business information is represented consistently.",
  },
  {
    icon: Star,
    title: "Reviews & Reputation",
    description:
      "Assess review presence, freshness, ratings, third-party mentions, and other publicly visible reputation signals where relevant.",
  },
  {
    icon: MessageSquare,
    title: "Location & Service Queries",
    description:
      "Test location-specific and service-specific customer questions to identify gaps in the information customers can discover.",
  },
  {
    icon: ClipboardCheck,
    title: "Validation & Documentation",
    description:
      "Document meaningful findings, corrections, sources, and re-check recommendations so local improvements can be maintained over time.",
  },
];

export default function LocalSeoFeatures() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Local SEO Capabilities"
        title="What We Can Review and Improve"
        description="The exact scope is based on the business, market, service area, and findings from the engagement."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Card key={feature.title} className="group h-full">
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-950 group-hover:text-white">
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

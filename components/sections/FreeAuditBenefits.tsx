import {
  BarChart3,
  Bot,
  Building2,
  FileSearch,
  Globe2,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const auditAreas = [
  {
    icon: Building2,
    number: "01",
    title: "Business & Identity",
    description:
      "Review core business information such as name, category, services, location, contact details, hours, and positioning.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Website & Technical",
    description:
      "Review important website foundations including crawlability, metadata, headings, structure, performance, and conversion paths.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Local Search & Data",
    description:
      "Check relevant local and business information for accuracy, completeness, consistency, and freshness.",
  },
  {
    icon: Bot,
    number: "04",
    title: "AI Search Visibility",
    description:
      "Test relevant AI answer/search experiences to observe whether the business is mentioned, omitted, or misrepresented.",
  },
  {
    icon: MessageSquare,
    number: "05",
    title: "Customer Query Testing",
    description:
      "Examine realistic questions customers may ask about services, locations, pricing, comparisons, and other important needs.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Reputation & Trust",
    description:
      "Review reviews, ratings, public mentions, social presence where relevant, and other trust signals.",
  },
  {
    icon: BarChart3,
    number: "07",
    title: "Competitive Context",
    description:
      "Compare relevant competitors to identify stronger information coverage, visibility signals, and realistic opportunities.",
  },
  {
    icon: FileSearch,
    number: "08",
    title: "Opportunities & Actions",
    description:
      "Turn the findings into practical priorities based on business impact, competitive impact, effort, and next-step needs.",
  },
];

export default function FreeAuditBenefits() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="What We Review"
        title="A Visibility Audit, Not Just a Website Score"
        description="The assessment looks at the wider information ecosystem around your business. The objective is to understand what exists, what customers and AI systems may encounter, where the gaps are, and what should be improved."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {auditAreas.map((area) => {
          const Icon = area.icon;

          return (
            <Card
              key={area.number}
              className="group h-full border-gray-200"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm font-extrabold text-gray-200">
                    {area.number}
                  </span>
                </div>

                <Card.Title className="mt-5">
                  {area.title}
                </Card.Title>

                <Card.Description className="mt-3 grow">
                  {area.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-center sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Evidence First
        </p>

        <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          We Separate Facts, Observations, and Recommendations.
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          AI answers can change and third-party information can conflict.
          Important findings should therefore be validated against available
          evidence rather than treated as automatically correct.
        </p>
      </div>
    </Section>
  );
}
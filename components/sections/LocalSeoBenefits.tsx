import {
  Building2,
  CheckCircle2,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Building2,
    title: "Keep Business Information Consistent",
    description:
      "Reduce important differences in business name, services, hours, location, contact information, and positioning across the website and relevant public sources.",
  },
  {
    icon: MapPin,
    title: "Strengthen Local Discovery",
    description:
      "Improve the local signals that help search systems connect a business with the locations and service areas it genuinely serves.",
  },
  {
    icon: SearchCheck,
    title: "Improve Service & Category Clarity",
    description:
      "Make the relationship between the business, its categories, services, locations, and customer needs easier to understand.",
  },
  {
    icon: Star,
    title: "Review Reputation Signals",
    description:
      "Evaluate review presence, freshness, consistency, and other reputation signals that may affect trust and local decision-making.",
  },
  {
    icon: ShieldCheck,
    title: "Support AI Visibility Foundations",
    description:
      "Stronger, clearer public business information can provide a better foundation for testing how AI systems understand and represent a local business.",
  },
  {
    icon: CheckCircle2,
    title: "Create a Maintainable Local Foundation",
    description:
      "Document what was checked and what changed so important local information can be reviewed again as the business evolves.",
  },
];

export default function LocalSeoBenefits() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Why Local SEO Matters"
        title="Local Visibility Depends on More Than a Business Name and a Map Pin"
        description="Customers and search systems may encounter business information across many sources. A strong local foundation keeps the important details accurate, connected, and useful."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card key={benefit.title} className="group h-full">
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <Card.Title>{benefit.title}</Card.Title>

                <Card.Description className="grow">
                  {benefit.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
        <h3 className="text-2xl font-bold tracking-tight text-slate-950">
          Local SEO Is an Information-Quality Problem as Well as a Ranking Problem
        </h3>

        <p className="mt-4 max-w-4xl leading-7 text-slate-600">
          Improving local search should begin with accurate business
          information. We focus first on what is true, what is inconsistent,
          what customers need to know, and which improvements have meaningful
          commercial value.
        </p>
      </div>
    </Section>
  );
}

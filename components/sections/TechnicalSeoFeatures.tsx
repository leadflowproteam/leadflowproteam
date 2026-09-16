import {
  Code2,
  FileCheck2,
  Gauge,
  Link2,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: SearchCheck,
    title: "Crawlability & Indexation",
    description:
      "Review robots directives, crawl paths, indexability, XML sitemaps, important URLs, and technical barriers that can affect discovery and indexing.",
  },
  {
    icon: FileCheck2,
    title: "Metadata & Canonicals",
    description:
      "Improve titles, descriptions, canonical URLs, heading structure, and other page-level signals where the audit shows a genuine need.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description:
      "Strengthen relationships between important pages and reduce unnecessary dead ends, weak paths, and orphaned content.",
  },
  {
    icon: Code2,
    title: "Structured Data",
    description:
      "Implement or correct relevant Schema.org structured data so important entities, services, and page relationships can be represented more clearly.",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description:
      "Identify practical performance improvements around assets, rendering, loading, responsiveness, and visual stability.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Reliability",
    description:
      "Review redirects, broken URLs, HTTPS, error handling, duplicate-page risks, and other technical issues that affect site reliability.",
  },
];

export default function TechnicalSeoFeatures() {
  return (
    <Section className="bg-white">
      <SectionHeading
        badge="Technical SEO Capabilities"
        title="Technical Improvements We Can Implement"
        description="The exact implementation scope depends on the website and the findings. These are the main technical areas we support."
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

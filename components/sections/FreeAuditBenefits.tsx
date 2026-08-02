import {
  Search,
  Gauge,
  Activity,
  Bot,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Search,
    title: "Technical SEO Review",
    description:
      "We examine crawlability, indexing, metadata, internal linking, XML sitemaps, robots.txt, and other essential SEO elements.",
  },
  {
    icon: Gauge,
    title: "Performance Analysis",
    description:
      "Identify speed bottlenecks, Core Web Vitals issues, render-blocking resources, and performance improvements.",
  },
  {
    icon: Activity,
    title: "Core Web Vitals",
    description:
      "Evaluate LCP, CLS, and INP to improve page experience and search performance.",
  },
  {
    icon: Bot,
    title: "AI Search Readiness",
    description:
      "Assess structured data, entity optimization, and AI Search Visibility for modern search platforms.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Discover missed SEO opportunities, conversion improvements, and content recommendations.",
  },
  {
    icon: ClipboardList,
    title: "Prioritized Action Plan",
    description:
      "Receive a practical roadmap showing exactly what should be fixed first for maximum impact.",
  },
];

export default function FreeAuditBenefits() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="What's Included"
        title="What You'll Receive in Your Free Website Audit"
        description="Our audit goes beyond automated reports by identifying the issues that matter most for search visibility, website performance, and business growth."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="group h-full"
            >
              <Card.Body className="flex h-full flex-col">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title>
                  {benefit.title}
                </Card.Title>

                <Card.Description className="grow">
                  {benefit.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
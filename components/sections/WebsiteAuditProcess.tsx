import {
  ClipboardCheck,
  FileSearch,
  Gauge,
  Bot,
  ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardCheck,
    step: "Step 01",
    title: "Business Discovery & Website Assessment",
    description:
      "We first understand your business goals, target audience, competitors, current search visibility, website architecture, and growth objectives before starting the audit.",
  },
  {
    icon: FileSearch,
    step: "Step 02",
    title: "Comprehensive Technical Website Audit",
    description:
      "Our specialists inspect Technical SEO, crawling, indexing, XML sitemap, robots.txt, canonical tags, redirects, structured URLs, duplicate content, internal linking, and overall website health.",
  },
  {
    icon: Gauge,
    step: "Step 03",
    title: "Performance, UX & Core Web Vitals",
    description:
      "We analyze loading speed, Core Web Vitals, mobile responsiveness, accessibility, navigation, page experience, and user behavior to identify performance bottlenecks.",
  },
  {
    icon: Bot,
    step: "Step 04",
    title: "AI Search Visibility Evaluation",
    description:
      "We review entity optimization, structured data, semantic content, schema markup, topical authority, and Answer Engine Optimization (AEO) readiness for ChatGPT, Gemini, Claude, and Google AI.",
  },
  {
    icon: ShieldCheck,
    step: "Step 05",
    title: "Prioritized Audit Report & Growth Roadmap",
    description:
      "Receive a professional audit report with issue severity, recommended fixes, implementation priorities, quick wins, and a strategic roadmap for SEO, AI Search Visibility, and long-term business growth.",
  },
];

export default function WebsiteAuditProcess() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Our Website Audit Process"
        title="A Structured Audit Process That Eliminates Guesswork"
        description="Every audit follows a structured framework designed to uncover technical weaknesses, SEO barriers, performance bottlenecks, AI Search opportunities, and high-impact improvements that support measurable business growth."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="group h-full border border-gray-200 bg-white text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <Card.Body className="flex h-full flex-col items-center p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <span className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  {step.step}
                </span>

                <Card.Title className="text-xl leading-tight">
                  {step.title}
                </Card.Title>

                <Card.Description className="mt-4 grow leading-8 text-gray-600">
                  {step.description}
                </Card.Description>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
import {
  ArrowUpRight,
  Bot,
  Gauge,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Search,
    title: "Identify Hidden SEO Problems",
    description:
      "Discover indexing, crawlability, metadata, duplicate content, broken links, and technical issues that limit your search visibility.",
  },
  {
    icon: Gauge,
    title: "Improve Website Performance",
    description:
      "Increase loading speed, optimize Core Web Vitals, reduce unnecessary resources, and deliver a faster experience for every visitor.",
  },
  {
    icon: Bot,
    title: "Become AI Search Ready",
    description:
      "Understand how well your website performs for AI Search platforms including ChatGPT, Gemini, Claude, Google AI Overviews, and other answer engines.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthen Website Security",
    description:
      "Detect HTTPS issues, SSL configuration problems, security risks, and technical weaknesses before they impact your business.",
  },
  {
    icon: TrendingUp,
    title: "Increase Leads & Conversions",
    description:
      "Reveal user experience issues, weak calls-to-action, and conversion bottlenecks that prevent visitors from becoming customers.",
  },
  {
    icon: ArrowUpRight,
    title: "Prioritize the Right Improvements",
    description:
      "Receive a practical action plan with prioritized recommendations so you know exactly what to fix first for maximum business impact.",
  },
];

export default function WebsiteAuditBenefits() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Why Businesses Choose Website Audits"
        title="How a Website Audit Protects Your Rankings, Performance & Revenue"
        description="A professional website audit reveals the technical, SEO, performance, accessibility, and conversion issues preventing your website from reaching its full potential. By fixing these problems early, you create a stronger foundation for sustainable organic growth, higher conversions, and better AI Search Visibility."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Card
              key={benefit.title}
              className="group h-full border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <Card.Body className="flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <Card.Title className="leading-tight">
                  {benefit.title}
                </Card.Title>

                <Card.Description className="mt-4 grow leading-8">
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
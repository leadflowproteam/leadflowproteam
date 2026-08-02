import {
  FileSearch,
  Gauge,
  Link2,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Gauge,
    title: "Core Web Vitals Optimization",
    description:
      "Improve loading speed, responsiveness, and visual stability to achieve exceptional Core Web Vitals scores, stronger user engagement, and higher search performance.",
  },
  {
    icon: Search,
    title: "Advanced Crawlability & Indexing",
    description:
      "Optimize your website so search engines can efficiently crawl, understand, and index your most valuable pages without technical obstacles.",
  },
  {
    icon: ShieldCheck,
    title: "Schema Markup & AI Search Readiness",
    description:
      "Implement structured data, entity optimization, and semantic architecture that improves visibility across Google Search, AI Overviews, ChatGPT, Gemini, Claude, and other AI-powered search platforms.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Performance",
    description:
      "Deliver a fast, responsive, and seamless mobile experience that satisfies both users and Google's mobile-first indexing requirements.",
  },
  {
    icon: FileSearch,
    title: "Comprehensive Technical SEO Audit",
    description:
      "Identify hidden SEO issues including crawl errors, duplicate content, indexing problems, broken links, redirect chains, and performance bottlenecks before they affect rankings.",
  },
  {
    icon: Link2,
    title: "Scalable Site Architecture",
    description:
      "Strengthen website hierarchy, internal linking, topical authority, and navigation to improve search visibility, user experience, and future content expansion.",
  },
];

export default function TechnicalSeoFeatures() {
  return (
  <Section className="bg-white py-16 sm:py-20 lg:py-24">
    <SectionHeading
      badge="Technical SEO Features"
      title="Everything Your Website Needs to Perform at Its Best"
      description="Our Technical SEO services strengthen your website's technical foundation to improve search visibility, AI Search Optimization, user experience, and long-term business growth."
    />

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <Card
            key={feature.title}
            className="group h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
          >
            <Card.Body className="flex h-full flex-col">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>

              <Card.Title className="text-2xl">
                {feature.title}
              </Card.Title>

              <Card.Description className="grow">
                {feature.description}
              </Card.Description>
            </Card.Body>
          </Card>
        );
      })}
    </div>

    <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 p-10">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">
          Technical SEO Is the Foundation of Everything Else
        </h3>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          A beautiful website is not enough if search engines cannot properly
          crawl, index, and understand it. Our Technical SEO approach ensures
          that performance, site architecture, structured data, and AI Search
          Readiness work together to create a stronger foundation for rankings,
          visibility, and long-term digital growth.
        </p>
      </div>
    </div>
  </Section>
  );
}

import {
  Brain,
  Database,
  FileSearch,
  LineChart,
  Network,
  SearchCheck,
} from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: FileSearch,
    title: "01. AI Search Audit",
    description:
      "We perform a comprehensive audit of your website's AI readiness, Technical SEO, structured data, content architecture, entity signals, and discoverability across modern AI-powered search platforms.",
  },
  {
    icon: Network,
    title: "02. Entity Research & Semantic Mapping",
    description:
      "We identify your core business entities, topical relationships, semantic keywords, and knowledge graph opportunities to strengthen AI understanding and contextual relevance.",
  },
  {
    icon: Database,
    title: "03. Structured Data Implementation",
    description:
      "We implement Schema.org markup, Organization, LocalBusiness, Service, FAQ, Breadcrumb, Article, and other structured data that help AI systems accurately interpret your website.",
  },
  {
    icon: Brain,
    title: "04. AI Content Optimization",
    description:
      "Your content is restructured using semantic headings, entity-rich language, conversational formatting, internal linking, and topical authority principles to improve AI-generated recommendations.",
  },
  {
    icon: SearchCheck,
    title: "05. GEO & AI Search Optimization",
    description:
      "We optimize your website for Generative Engine Optimization (GEO), Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity, and emerging AI search technologies.",
  },
  {
    icon: LineChart,
    title: "06. Monitoring & Continuous Improvement",
    description:
      "After implementation, we monitor visibility, strengthen entity authority, refine structured data, and continuously improve your AI Search performance for long-term growth.",
  },
];

export default function AiSearchProcess() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28">
      <SectionHeading
        badge="Our Process"
        title="A Proven AI Search Visibility Workflow"
        description="Our structured process combines Technical SEO, Entity SEO, structured data, semantic content, and AI optimization to help your business become more discoverable across the next generation of search."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="text-2xl font-bold leading-tight text-gray-900">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Summary */}

      <div className="mt-24 rounded-[36px] border border-blue-100 bg-blue-50 p-10">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Built for Today's Search. Prepared for Tomorrow's AI.
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            AI Search Visibility is more than adding structured data. It
            requires a complete strategy that combines Technical SEO, Entity
            SEO, semantic content architecture, Generative Engine Optimization
            (GEO), and continuous monitoring to maximize visibility across both
            traditional search engines and AI-powered assistants.
          </p>
        </div>
      </div>
    </Section>
  );
}
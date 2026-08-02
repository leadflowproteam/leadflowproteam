import {
  Bot,
  BrainCircuit,
  Database,
  LineChart,
  SearchCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: SearchCheck,
    title: "AI Search Visibility & Technical Discovery",
    description:
      "We perform a comprehensive audit of your website to evaluate AI readiness, technical SEO, entity consistency, structured data, semantic signals, crawlability, and overall discoverability across AI-powered search platforms.",
  },
  {
    icon: BrainCircuit,
    title: "Entity Architecture & Semantic Framework",
    description:
      "We strengthen your topical authority by organizing entities, semantic relationships, contextual relevance, and content structure that help Large Language Models accurately understand your business.",
  },
  {
    icon: Database,
    title: "Technical Foundation & Structured Intelligence",
    description:
      "Our team implements schema markup, metadata optimization, internal linking, crawl optimization, Core Web Vitals improvements, and technical enhancements that support both traditional and AI search engines.",
  },
  {
    icon: Bot,
    title: "AI Answer Optimization & Knowledge Graph Signals",
    description:
      "We optimize your content for conversational search, Answer Engine Optimization (AEO), AI summaries, featured responses, and machine-generated recommendations across modern AI assistants.",
  },
  {
    icon: LineChart,
    title: "Continuous Optimization & AI Search Growth",
    description:
      "After deployment, we continuously monitor technical health, AI visibility, search performance, and evolving optimization opportunities to ensure sustainable long-term growth.",
  },
];
export default function AiSearchVisibilityProcess() {
  return (
    <Section className="bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Our AI Visibility Framework"
        title="A Proven Process Designed for the Future of Search"
        description="Our AI Search Visibility methodology combines Technical SEO, Entity SEO, structured data, semantic optimization, and AI Search Optimization into one scalable framework that improves discoverability across both search engines and AI assistants."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Rather than relying on isolated SEO tactics, we follow a structured
          optimization workflow that improves how intelligent systems discover,
          interpret, trust, and recommend your business over time.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <Card
              key={step.title}
              className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
            >
              <Card.Body className="flex h-full flex-col items-center p-8 text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 text-cyan-700 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>

                <span className="mb-4 rounded-full bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Step {index + 1}
                </span>

                <Card.Title className="text-xl leading-tight">
                  {step.title}
                </Card.Title>

                <Card.Description className="mt-5 grow leading-8 text-slate-600">
                  {step.description}
                </Card.Description>
                              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
           Built for Today's Search.
           Prepared for Tomorrow's AI.
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Most businesses still optimize only for traditional search engines.
            Our methodology prepares your website for both today's search
            algorithms and tomorrow's AI-powered discovery systems by combining
            semantic optimization, entity authority, structured data, technical
            excellence, and machine-readable content.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                AI Understanding
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Improve how AI models interpret your business, services,
                expertise, and relationships using structured, semantic
                information.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Search Authority
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build a flexible optimization framework capable of adapting as
                Google Search, AI assistants, and conversational search continue
                to evolve.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Future-Proof Visibility
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Strengthen your digital authority through consistent entity
                signals, technical quality, and trustworthy content that AI
                platforms are more likely to recommend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
import Link from "next/link";

import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileSearch,
  Globe,
  MessageSquareQuote,
  Network,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const checklistGroups = [
  {
    title: "AI Search Foundation",
    items: [
      {
        icon: SearchCheck,
        title: "AI Search Visibility Audit",
        description:
          "Evaluate your website's discoverability across AI-powered search platforms, technical health, entity consistency, and semantic readiness.",
      },
      {
        icon: Database,
        title: "Entity SEO Optimization",
        description:
          "Strengthen entity relationships, topical relevance, and semantic signals that improve how AI systems interpret your business.",
      },
      {
        icon: Network,
        title: "Structured Data & Schema",
        description:
          "Implement structured data that enables search engines and AI assistants to better understand your organization, services, and expertise.",
      },
      {
        icon: FileSearch,
        title: "Technical SEO Foundation",
        description:
          "Improve crawlability, indexing, metadata, XML sitemaps, canonical URLs, and internal linking for stronger AI discoverability.",
      },
    ],
  },
  {
    title: "Semantic Intelligence",
    items: [
      {
        icon: BrainCircuit,
        title: "Semantic Content Optimization",
        description:
          "Organize content around topics, intent, and context to improve semantic understanding and topical authority.",
      },
      {
        icon: Globe,
        title: "Knowledge Graph Signals",
        description:
          "Strengthen digital authority through consistent business entities, trusted citations, and authoritative references.",
      },
      {
        icon: MessageSquareQuote,
        title: "Answer Engine Optimization",
        description:
          "Optimize content for AI-generated answers, featured responses, conversational search, and recommendation engines.",
      },
      {
        icon: Workflow,
        title: "Topic Cluster Architecture",
        description:
          "Build scalable topic clusters and contextual internal linking that improve both human navigation and AI comprehension.",
      },
    ],
  },
  {
    title: "Authority & Trust Signals",
    items: [
      {
        icon: Bot,
        title: "LLM Visibility Optimization",
        description:
          "Increase visibility inside Large Language Models by creating machine-readable, entity-rich, AI-friendly content.",
      },
      {
        icon: Sparkles,
        title: "AI-Friendly User Experience",
        description:
          "Improve readability, accessibility, page hierarchy, and information clarity for both users and intelligent systems.",
      },
      {
        icon: ShieldCheck,
        title: "Trust & Authority Signals",
        description:
          "Strengthen E-E-A-T through transparent business information, author credibility, expertise, and trust signals.",
      },
      {
        icon: CheckCircle2,
        title: "Future AI Adaptability",
        description:
          "Create a scalable AI Search optimization framework that remains adaptable as Google Search, AI assistants, and Large Language Models continue to evolve.",
      },
    ],
  },
];

export default function AiSearchVisibilityChecklist() {
  return (
    <Section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <SectionHeading
        badge="Complete AI Visibility Framework"
        title="Everything Included in Our AI Search Visibility Framework"
        description="Our AI Search Visibility Framework combines Technical SEO, Entity SEO, Semantic SEO, Structured Data, Knowledge Graph Optimization, and Answer Engine Optimization (AEO) to help your business become discoverable across Google Search, Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity, and future AI-powered search platforms."
      />

      <div className="mx-auto mt-6 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Every optimization is designed to improve how search engines and AI
          assistants discover, interpret, trust, and recommend your business.
          Our framework combines Technical SEO, Entity SEO, Semantic SEO,
          Structured Data, and Answer Engine Optimization (AEO) into one
          future-ready strategy for long-term organic growth.
        </p>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-3">
        {checklistGroups.map((group) => (
          <div
            key={group.title}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
          >
            <div className="border-b border-slate-200 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-7">
              <h3 className="text-2xl font-bold text-slate-900">
                {group.title}
              </h3>
            </div>

            <div className="space-y-6 p-8">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Complete Framework for AI Search Success
          </h3>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AI Search Visibility is no longer limited to keywords or traditional
            rankings. Success depends on how effectively your website
            communicates meaning, expertise, trust, and relationships to
            intelligent systems. Our framework aligns Technical SEO, Entity SEO,
            Structured Data, Semantic Content, and Answer Engine Optimization
            into one scalable strategy.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Machine Understanding
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Help AI assistants accurately understand your business,
                expertise, services, and topical authority using structured,
                machine-readable information.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Entity Authority
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Build stronger trust signals through entity consistency,
                semantic relationships, structured data, and authoritative
                content that supports long-term discoverability.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-slate-900">
                Future Search Readiness
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Prepare your website for the evolving future of search where AI
                assistants and intelligent recommendation systems increasingly
                influence customer decisions.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-audit">
              <Button size="lg">
                Get Free AI Visibility Audit
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg">
                Book Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
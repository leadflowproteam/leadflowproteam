import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  FileSearch,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "AI Visibility Framework",
  description:
    "Explore the LeadFlowProTeam AI Visibility Framework: a structured methodology connecting business identity, website foundations, local search, AI testing, customer queries, reputation, competition, and commercial opportunity.",
  path: "/services/ai-visibility-framework",
  keywords: [
    "AI Visibility Framework",
    "AI Search Framework",
    "AI Search Visibility Framework",
    "AI Visibility Strategy",
    "AI Search Strategy",
    "AI Visibility Methodology",
    "AI Search Optimization Framework",
  ],
});

const frameworkLayers = [
  {
    number: "01",
    icon: Building2,
    title: "Business & Identity Foundation",
    description:
      "Establish the verified business facts that customers and search systems need to understand.",
    checks: [
      "Business name and category",
      "Location or service area",
      "Core services and offerings",
      "Hours and availability",
      "Contact and booking pathways",
      "Business description and positioning",
    ],
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Website & Technical Foundation",
    description:
      "Assess whether the website provides a strong, accessible, understandable, and conversion-ready information foundation.",
    checks: [
      "Crawlability and indexation",
      "Metadata and headings",
      "Internal linking",
      "Information architecture",
      "Structured data and schema",
      "Performance and mobile usability",
    ],
  },
  {
    number: "03",
    icon: MapPin,
    title: "Local Search & Data Consistency",
    description:
      "Compare important public business information across the website and relevant local sources.",
    checks: [
      "Business information consistency",
      "Categories and services",
      "Local profiles and listings",
      "Hours and location details",
      "Website-to-profile consistency",
      "Freshness of public information",
    ],
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Search Visibility",
    description:
      "Test how relevant AI answer and search experiences currently represent the business.",
    checks: [
      "Business-name queries",
      "Service-specific queries",
      "Location-specific discovery",
      "Important factual details",
      "Mentions, omissions, and misrepresentation",
      "Available sources and citations",
    ],
  },
  {
    number: "05",
    icon: MessageSquare,
    title: "Customer Query Testing",
    description:
      "Model the questions real customers may ask and compare expected answers with what public systems can actually discover.",
    checks: [
      "Best-provider questions",
      "Service questions",
      "Pricing guidance questions",
      "Location questions",
      "Comparison questions",
      "Booking and availability questions",
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Reputation & Trust Signals",
    description:
      "Review the external signals that can influence how a business is understood and trusted.",
    checks: [
      "Reviews and ratings",
      "Review freshness",
      "Third-party mentions",
      "Social presence where relevant",
      "Brand identity consistency",
      "Trust and authority signals",
    ],
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Competitive Intelligence",
    description:
      "Compare relevant competitors to understand where stronger information, visibility, trust, or market positioning already exists.",
    checks: [
      "Competitor AI visibility",
      "Website information depth",
      "Local profile completeness",
      "Reviews and reputation",
      "Competitor advantages",
      "Realistic market opportunities",
    ],
  },
  {
    number: "08",
    icon: Target,
    title: "Opportunity & Commercial Assessment",
    description:
      "Turn findings into a prioritized commercial action plan instead of a long list of disconnected problems.",
    checks: [
      "Gap severity",
      "Business and customer impact",
      "Competitive impact",
      "Fixability and effort",
      "Priority",
      "Recommended service or next action",
    ],
  },
];

const operatingPrinciples = [
  {
    title: "Evidence Before Claims",
    text: "Important conclusions should connect to source information, observations, screenshots, or other appropriate evidence.",
  },
  {
    title: "Facts Are Not AI Guesses",
    text: "An AI-generated answer is treated as an observation to investigate, not as an automatically verified business fact.",
  },
  {
    title: "Human QA Matters",
    text: "Important findings, competitor conclusions, recommendations, and client-facing decisions require human review.",
  },
  {
    title: "Fix What Actually Matters",
    text: "We prioritize genuine gaps according to business impact, competitive impact, fixability, and commercial relevance.",
  },
];

const commercialFlow = [
  {
    title: "Audit",
    text: "Establish the current visibility and information baseline.",
  },
  {
    title: "Findings",
    text: "Document gaps, inconsistencies, observations, and evidence.",
  },
  {
    title: "Prioritization",
    text: "Determine which issues deserve attention first.",
  },
  {
    title: "Implementation",
    text: "Apply genuine website, SEO, local, content, schema, or visibility improvements.",
  },
  {
    title: "Re-Test",
    text: "Review important changes against the original findings.",
  },
  {
    title: "Monitoring",
    text: "Repeat the assessment where ongoing optimization makes business sense.",
  },
];

const faqs = [
  {
    question: "Is the AI Visibility Framework a software product?",
    answer:
      "No. The framework is the methodology behind our AI Search Visibility work. It provides a structured way to investigate business information, website foundations, local signals, AI visibility, customer queries, reputation, competitors, and commercial opportunities.",
  },
  {
    question: "How is the framework different from a traditional SEO audit?",
    answer:
      "Traditional SEO remains important, but the framework goes beyond technical search factors. It also examines how a real business is represented across AI answer experiences, local information sources, customer-oriented queries, reputation signals, and competitor contexts.",
  },
  {
    question: "Does the framework guarantee AI rankings or recommendations?",
    answer:
      "No. AI answers can vary by query, location, context, sources, and time. We do not guarantee rankings, mentions, citations, recommendations, or traffic. The framework is designed around evidence, information quality, consistency, discoverability, and practical improvement.",
  },
  {
    question: "Can the framework be used for an existing website?",
    answer:
      "Yes. An existing website can be assessed within the framework and improved where genuine technical, content, structured-data, local, information, or conversion gaps are found.",
  },
  {
    question: "What happens after the framework identifies a gap?",
    answer:
      "The gap is evaluated for severity, business impact, competitive impact, fixability, and priority. Where implementation is appropriate, it can become a clearly scoped paid service rather than an artificially created problem.",
  },
  {
    question: "Who is the framework designed for?",
    answer:
      "Our primary focus is commercial businesses with genuine growth objectives that are prepared to invest in professional digital improvement. The methodology can be adapted to different business types after the initial niche validation phase.",
  },
];

export default function AiVisibilityFrameworkPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.12),transparent_35%)]"
        />

        <Container>
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
              LeadFlowProTeam Methodology
            </span>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The AI Visibility Framework
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              A structured methodology for understanding how a business is
              discovered, represented, trusted, and understood across search,
              local information sources, and AI answer systems.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services/ai-search-visibility-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Explore the Audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Discuss Your Business
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Framework overview */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge="How We Think About Visibility"
            title="AI Visibility Is Not One Setting"
            description="A business is represented through many connected sources and signals. The framework brings those pieces together so the audit can identify where the real gaps are and what deserves investment."
          />

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Discover",
                text: "What information about the business can customers and systems actually find?",
              },
              {
                title: "Understand",
                text: "Can the business, services, locations, and important facts be interpreted consistently?",
              },
              {
                title: "Act",
                text: "Which genuine improvements are worth implementing based on business and competitive value?",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8"
              >
                <h2 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Eight layers */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="Eight-Layer Framework"
            title="One Methodology. Eight Connected Visibility Layers."
            description="Each layer answers a different question, while the full framework shows how the pieces interact."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {frameworkLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-950 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="text-2xl font-black text-slate-100">
                      {layer.number}
                    </span>
                  </div>

                  <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                    {layer.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {layer.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <ul className="space-y-2.5">
                      {layer.checks.map((check) => (
                        <li
                          key={check}
                          className="flex items-start gap-2.5 text-sm leading-5 text-slate-700"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-slate-900"
                            aria-hidden="true"
                          />

                          <span>{check}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge="Operating Principles"
            title="The Framework Is Designed to Protect the Quality of the Findings"
            description="AI visibility work can easily become speculative. Our process is designed to keep conclusions useful, evidence-aware, commercially relevant, and reviewable."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  {principle.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Commercial flow */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="From Methodology to Service"
            title="The Framework Creates a Clear Commercial Path"
            description="The methodology is not the product by itself. It gives the paid audit and implementation work a repeatable structure."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {commercialFlow.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
              >
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                  Step {index + 1}
                </span>

                <h2 className="mt-3 text-xl font-bold text-slate-950">
                  {step.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-[32px] bg-slate-950 p-8 text-center sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
              Commercial Model
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Audit → Findings → Implementation → Re-Test → Monitoring
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              The framework helps us identify what should be investigated,
              what should be fixed, and what can reasonably become an ongoing
              optimization need.
            </p>

            <Link
              href="/services/ai-search-visibility-audit"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start With the Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA to implementation */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-center sm:p-10">
            <Wrench className="mx-auto h-8 w-8 text-slate-900" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">
              A Framework Only Matters When It Leads to Better Decisions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              When the evidence shows a meaningful gap, the next step may be
              technical SEO, local information cleanup, structured data,
              website improvements, content work, conversion improvements, or
              broader AI Search Visibility optimization.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Implementation Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ
        badge="AI Visibility Framework FAQ"
        title="Questions About the Methodology"
        description="A clear explanation of what the framework does, what it does not promise, and how it connects to paid audit and implementation services."
        items={faqs}
      />
    </main>
  );
}

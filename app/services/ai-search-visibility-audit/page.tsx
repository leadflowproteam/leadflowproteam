import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  MapPin,
  SearchCheck,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQ from "@/components/sections/FAQ";

import { generateSeo } from "@/lib/seo";

export const metadata: Metadata = generateSeo({
  title: "AI Search Visibility Audit",
  description:
    "A structured, evidence-based AI Search Visibility Audit for commercial businesses ready to invest in understanding how search and AI systems represent their business and what should be improved.",
  path: "/services/ai-search-visibility-audit",
  keywords: [
    "AI Search Visibility Audit",
    "AI Visibility Audit",
    "AI Search Audit",
    "AI Visibility Assessment",
    "Search Visibility Audit",
    "AI Search Optimization Audit",
    "Business Information Audit",
  ],
});

const auditLayers = [
  {
    icon: Target,
    number: "01",
    title: "Business & Identity",
    description:
      "Review the core facts customers and search systems need to understand: business name, category, location, services, hours, contact pathways, positioning, and other important public information.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Website & Technical Foundation",
    description:
      "Review crawlability, indexation, metadata, headings, internal links, information architecture, structured data, performance, mobile usability, trust information, and conversion paths.",
  },
  {
    icon: MapPin,
    number: "03",
    title: "Local Search & Data Consistency",
    description:
      "Compare important business information across the website, local search sources, and relevant public listings to identify material inconsistencies or missing information.",
  },
  {
    icon: Bot,
    number: "04",
    title: "AI Search Visibility",
    description:
      "Test relevant business, service, and location queries across applicable AI answer and search experiences and document important observations.",
  },
  {
    icon: SearchCheck,
    number: "05",
    title: "Customer Query Testing",
    description:
      "Evaluate high-intent questions around services, locations, pricing guidance, comparisons, availability, booking, and other customer decision points.",
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Competition & Opportunity",
    description:
      "Compare relevant competitors and prioritize gaps by severity, business impact, competitive impact, fixability, and potential commercial value.",
  },
];

const deliverables = [
  "Executive audit summary",
  "Business and identity findings",
  "Website and technical findings",
  "Local search and data consistency findings",
  "AI visibility observations",
  "Customer-query test findings",
  "Competitor comparison",
  "Evidence and source references",
  "Prioritized gap list",
  "Opportunity assessment",
  "Recommended implementation actions",
  "Re-testing and monitoring recommendations",
];

const engagementLevels = [
  {
    title: "Essential Audit",
    label: "Core Visibility Assessment",
    description:
      "A focused assessment for businesses that need a clear baseline of their business information, website foundation, local presence, initial AI visibility, and highest-priority gaps.",
    includes: [
      "Core business and identity review",
      "Website foundation review",
      "Initial local information review",
      "Initial AI visibility testing",
      "Key gaps and priorities",
      "Practical next-step recommendations",
    ],
  },
  {
    title: "Growth Audit",
    label: "Commercial Visibility Assessment",
    description:
      "A deeper engagement for businesses that want customer-query testing, stronger competitive context, broader information consistency analysis, and a prioritized growth action plan.",
    includes: [
      "Everything in Essential",
      "Deeper customer-query testing",
      "Competitor comparison",
      "Expanded local consistency review",
      "Content and information gaps",
      "Prioritized commercial action plan",
    ],
  },
  {
    title: "Strategic Audit",
    label: "Comprehensive Visibility Assessment",
    description:
      "A comprehensive assessment for businesses that need multi-area evidence, deeper competitive intelligence, technical review, opportunity scoring, implementation planning, and a monitoring strategy.",
    includes: [
      "Everything in Growth",
      "Expanded AI/search testing",
      "Deeper technical and website review",
      "Extensive evidence collection",
      "Opportunity scoring",
      "Implementation roadmap",
      "Monitoring strategy",
    ],
  },
];

const faqs = [
  {
    question: "Is the AI Search Visibility Audit a paid service?",
    answer:
      "Yes. The full AI Search Visibility Audit is positioned as a professional diagnostic service. The scope, depth, evidence requirements, business complexity, and engagement level determine the appropriate commercial scope and fee. Our website may also offer a separate free initial qualification or screening process.",
  },
  {
    question: "Why should a business pay for an AI visibility audit?",
    answer:
      "The value is in structured investigation and interpretation. Instead of relying on isolated AI answers or generic SEO tools, the audit connects business information, website foundations, local signals, AI testing, customer queries, competitors, evidence, and prioritized actions into one decision-ready assessment.",
  },
  {
    question: "Will the audit guarantee that AI systems recommend my business?",
    answer:
      "No. AI answers can vary by query, location, context, sources, and time. We do not guarantee AI rankings, mentions, citations, recommendations, or traffic. We focus on measurable information quality, coverage, consistency, discoverability, evidence, and practical improvements.",
  },
  {
    question: "Can the audit be purchased without implementation?",
    answer:
      "Yes. The audit is designed to provide standalone value. A business may use the findings internally, work with another provider, or engage LeadFlowProTeam for selected implementation work.",
  },
  {
    question: "What implementation work can follow an audit?",
    answer:
      "Depending on the findings, implementation may include website improvements, technical SEO, structured data, business-information updates, local search work, content and information architecture, conversion improvements, AI visibility optimization, and related digital improvements.",
  },
  {
    question: "How do you handle evidence?",
    answer:
      "Important findings should be connected to source information or preserved evidence where practical. We distinguish verified business facts, observed search or AI results, and recommendations, and we do not publish confidential client information without appropriate approval.",
  },
  {
    question: "Who is the best fit?",
    answer:
      "Our primary commercial focus is established or growth-oriented businesses that have a genuine business objective and are prepared to invest in professional digital improvement. The strongest fit is an organization that treats marketing, visibility, website quality, and customer acquisition as business priorities.",
  },
];

export default function AiSearchVisibilityAuditPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 sm:py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_35%)]"
        />

        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Paid Diagnostic Service • AI Search Visibility Audit
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              See How Search and AI Systems See Your Business
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              Get a structured, evidence-based assessment of how your business
              is represented across search, local information sources, and AI
              answer systems—and a prioritized plan for what should be improved.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                Discuss Your Audit Scope
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Start With an Initial Review
              </Link>
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-slate-900" />

                <div>
                  <p className="font-semibold text-slate-950">
                    Built for commercial decision-making
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    This is not a generic automated SEO score. The audit is
                    designed to help a business decide what is wrong, what
                    matters commercially, what can be fixed, and what should
                    happen next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge="The Problem"
            title="Your Business May Be More Visible in Search Than It Is in the Answers Customers Actually See"
            description="A website can be technically functional while important business information remains incomplete, inconsistent, outdated, poorly connected, or difficult for modern search and answer systems to discover."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                title: "What Is Missing?",
                text: "Important services, location details, business facts, customer information, or supporting signals may not be sufficiently represented.",
              },
              {
                title: "What Is Inconsistent?",
                text: "Different public sources may present different information about services, hours, location, positioning, or other key business facts.",
              },
              {
                title: "What Should Change?",
                text: "Not every issue deserves the same investment. The audit helps connect findings to business impact, competitive importance, and fixability.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Audit Layers */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="Audit Framework"
            title="A Multi-Layer Assessment Instead of a Single Score"
            description="The audit connects multiple visibility layers so business decisions are based on the relationship between information, search, AI answers, customers, competitors, and implementation opportunities."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {auditLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-950 transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>

                    <span className="text-3xl font-black text-slate-100">
                      {layer.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                    {layer.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {layer.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Deliverables */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="Deliverables"
            title="What the Audit Gives You"
            description="The objective is not simply to produce a score. It is to provide enough structured information and evidence to support a practical business decision."
          />

          <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 shrink-0 text-slate-900"
                    aria-hidden="true"
                  />

                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <ClipboardCheck className="mt-1 h-6 w-6 shrink-0 text-slate-900" />

            <div>
              <p className="font-semibold text-slate-950">
                Evidence is part of the product.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Findings should be traceable to the source, observation, or
                evidence that supports them. Verified facts, observed results,
                and recommendations are kept distinct.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="Audit Levels"
            title="Choose the Depth That Matches Your Business Need"
            description="The audit architecture has three levels. Exact scope and commercial pricing can be determined after understanding the business, market, geography, and depth of investigation required."
          />

          <div className="grid gap-7 lg:grid-cols-3">
            {engagementLevels.map((tier, index) => (
              <article
                key={tier.title}
                className={`flex h-full flex-col rounded-3xl border bg-white p-7 shadow-sm sm:p-8 ${
                  index === 1
                    ? "border-slate-400 ring-1 ring-slate-200"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-600">
                    Level {index + 1}
                  </span>

                  {index === 1 && (
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                      Growth
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  {tier.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {tier.label}
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  {tier.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                    Includes
                  </p>

                  <ul className="mt-4 space-y-3">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-slate-900"
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
                  >
                    Discuss this level
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Commercial Journey */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            badge="What Happens Next"
            title="The Audit Is the Beginning of the Commercial Improvement Process"
            description="A useful audit should help you make a decision—not leave you with a spreadsheet full of problems and no practical path forward."
          />

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: FileSearch,
                title: "Audit",
                text: "Establish the current visibility baseline.",
              },
              {
                icon: BarChart3,
                title: "Prioritize",
                text: "Identify what matters most commercially.",
              },
              {
                icon: Wrench,
                title: "Implement",
                text: "Fix genuine gaps through clearly scoped work.",
              },
              {
                icon: SearchCheck,
                title: "Re-Test",
                text: "Review important changes and future monitoring needs.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 text-center"
                >
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                    <Icon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-950 p-8 text-center sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">
              Commercial Principle
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Pay for clarity. Invest in the fixes that actually matter.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              The audit should reveal real opportunities—not manufacture
              problems. Where implementation is justified, the next scope can
              be based directly on the evidence.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Discuss a Paid Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ
        badge="AI Search Visibility Audit FAQ"
        title="Questions Before Commissioning an Audit"
        description="Clear answers about the audit, commercial scope, evidence, implementation, and realistic outcomes."
        items={faqs}
      />

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
              <Bot className="h-4 w-4" />
              AI Search Visibility
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to See Where Your Business Stands?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Start with an initial conversation about your business, market,
              and visibility goals. We can then determine the appropriate audit
              scope and next step.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Discuss Your Audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Start With Initial Qualification
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

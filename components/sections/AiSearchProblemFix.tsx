import {
  AlertTriangle,
  CheckCircle2,
  Code2,
  Database,
  FileSearch,
  Globe,
  Link2,
  Network,
  ShieldAlert,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";

const problems = [
  {
    icon: FileSearch,
    problem: {
      label: "Problem Found",
      title: "No Schema Markup or Structured Data",
      detail:
        "Without structured data, AI systems are forced to guess what your business does, who you serve, and what you offer. This leads to misrepresentation, omission from AI-generated answers, and lost opportunities to appear in rich search results.",
    },
    fix: {
      label: "Our Fix",
      title: "Complete Schema Implementation",
      detail:
        "We implement a full structured data layer — Organization, Service, FAQ, LocalBusiness, BreadcrumbList, and more — giving AI systems accurate, machine-readable signals about every aspect of your business.",
    },
  },
  {
    icon: Network,
    problem: {
      label: "Problem Found",
      title: "No Entity Presence or Knowledge Graph Signals",
      detail:
        "When your business has no entity footprint, AI systems have nothing to anchor their understanding of your brand. You become a nameless set of web pages rather than a recognized, trusted business — and you lose recommendations to competitors who have established entity authority.",
    },
    fix: {
      label: "Our Fix",
      title: "Entity SEO & Knowledge Graph Connectivity",
      detail:
        "We map your core business entities, connect your brand to authoritative external sources, and implement structured signals that strengthen your knowledge graph presence — making you a recognized, trusted entity across AI platforms.",
    },
  },
  {
    icon: Zap,
    problem: {
      label: "Problem Found",
      title: "Slow Page Speed & Failed Core Web Vitals",
      detail:
        "Pages loading above 2.5 seconds fail Google's Core Web Vitals thresholds — directly impacting both your search rankings and AI readiness scores. Slow sites create poor user experiences and signal low quality to AI search systems evaluating your authority.",
    },
    fix: {
      label: "Our Fix",
      title: "Performance Audit & Speed Optimization",
      detail:
        "We conduct a full performance audit covering LCP, CLS, INP, image optimization, script loading, and server response times — then implement targeted fixes to bring your site into compliance with Core Web Vitals and AI performance standards.",
    },
  },
  {
    icon: Globe,
    problem: {
      label: "Problem Found",
      title: "Content Not Structured for AI Answer Engines",
      detail:
        "Most websites are written for human readers, not AI extraction. Without GEO-optimized content structure — clear headings, question-answer formatting, semantic entity language — your pages are skipped by Google AI Overviews, ChatGPT, and Perplexity when generating answers.",
    },
    fix: {
      label: "Our Fix",
      title: "GEO Content Architecture & Restructuring",
      detail:
        "We audit and restructure your content using GEO (Generative Engine Optimization) principles — converting pages into AI-extractable formats with semantic headings, entity-rich language, conversational Q&A sections, and proper topical hierarchy.",
    },
  },
  {
    icon: Database,
    problem: {
      label: "Problem Found",
      title: "Inconsistent Business Data Across Sources",
      detail:
        "When your business name, services, location, or contact details differ between your website, structured data, and external sources, AI systems receive conflicting signals. This causes them to distrust your data — leading to incorrect representation or exclusion from recommendations.",
    },
    fix: {
      label: "Our Fix",
      title: "Business Data Consistency & NAP Audit",
      detail:
        "We audit every layer of your business data — structured data, website content, and key external sources — identifying and resolving every inconsistency so AI systems receive one clean, authoritative, and consistent representation of your business.",
    },
  },
  {
    icon: Code2,
    problem: {
      label: "Problem Found",
      title: "Technical SEO Issues Undermining Visibility",
      detail:
        "Broken canonicals, duplicate content, missing meta tags, crawl errors, and improper robots.txt configurations silently block search engines and AI systems from correctly indexing and understanding your site — even if the content itself is strong.",
    },
    fix: {
      label: "Our Fix",
      title: "Full Technical SEO Audit & Remediation",
      detail:
        "We run a comprehensive technical audit covering crawlability, indexation health, canonical structure, metadata completeness, redirect chains, and robots configuration — then deliver and implement a complete remediation plan to eliminate every technical barrier.",
    },
  },
  {
    icon: Link2,
    problem: {
      label: "Problem Found",
      title: "Siloed Pages with No Topical Hierarchy",
      detail:
        "When pages are disconnected and not internally linked around topical clusters, AI systems cannot assess the depth of your expertise. You appear as a shallow website with isolated content rather than an authoritative resource — which reduces your chances of being cited in AI-generated answers.",
    },
    fix: {
      label: "Our Fix",
      title: "Internal Linking & Topical Authority Architecture",
      detail:
        "We design and implement a strategic internal linking framework organized around topical clusters — establishing clear relationships between your service pages, supporting content, and entity pages so AI systems recognize your depth of authority across your core subjects.",
    },
  },
  {
    icon: ShieldAlert,
    problem: {
      label: "Problem Found",
      title: "Your Business Is Absent from AI-Generated Answers",
      detail:
        "When prospective customers ask ChatGPT, Google AI Overviews, Gemini, or Perplexity about services like yours, your business is not mentioned. Your competitors — with better AI visibility signals — are recommended in your place, costing you qualified leads every day.",
    },
    fix: {
      label: "Our Fix",
      title: "AI Citation & Recommendation Optimization",
      detail:
        "We identify the specific signals that cause AI tools to overlook your business and implement a targeted strategy — combining GEO content, structured data, entity authority, and citation-building — to increase the frequency and accuracy with which AI systems surface and recommend your business.",
    },
  },
];


export default function AiSearchProblemFix() {
  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
            Audit & Fixing
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Problems We Find. Fixes We Deliver.
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Every AI Search Visibility Audit uncovers real, specific problems
            that are holding your business back. Here are the most common issues
            we find — and exactly how we fix them.
          </p>
        </div>

        {/* Problem → Fix Cards */}
        <div className="mt-16 grid gap-6 lg:gap-8">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.problem.title}
                className="group grid gap-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:grid-cols-2"
              >
                {/* Problem Side */}
                <div className="relative border-b border-gray-200 bg-red-50 p-7 md:border-b-0 md:border-r">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-xl bg-red-100 p-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                      {item.problem.label}
                    </p>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-xl bg-white p-3 shadow-sm ring-1 ring-red-100">
                      <Icon className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.problem.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.problem.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fix Side */}
                <div className="bg-white p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-xl bg-green-100 p-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                      {item.fix.label}
                    </p>
                  </div>

                  <div className="mt-5 flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-xl bg-green-50 p-3 ring-1 ring-green-100">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.fix.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.fix.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-[36px] bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 px-8 py-12 text-center text-white shadow-2xl sm:px-12">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
            Start With the Audit
          </p>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">
            Not sure which problems your website has?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Our AI Search Visibility Audit identifies every problem above — and
            more — with a prioritized fixing proposal specific to your website.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/free-audit"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Request a Free AI Visibility Audit
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400 px-7 py-3.5 font-bold text-white transition hover:border-white hover:text-white"
            >
              Talk With Our Team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import {
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  MinusCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";

type Severity = "critical" | "warning" | "good";

const auditCategories = [
  {
    category: "Schema & Structured Data",
    findings: [
      {
        item: "Organization schema",
        severity: "critical" as Severity,
        note: "Missing — AI cannot identify your business entity",
      },
      {
        item: "Service schema",
        severity: "critical" as Severity,
        note: "Missing — Services not machine-readable",
      },
      {
        item: "FAQ schema",
        severity: "warning" as Severity,
        note: "Partially present — missing on key pages",
      },
      {
        item: "Breadcrumb schema",
        severity: "good" as Severity,
        note: "Implemented correctly",
      },
    ],
  },
  {
    category: "AI & GEO Readiness",
    findings: [
      {
        item: "Google AI Overviews presence",
        severity: "critical" as Severity,
        note: "Not appearing — content not GEO-optimized",
      },
      {
        item: "ChatGPT / Gemini mentions",
        severity: "critical" as Severity,
        note: "Competitors referenced; your business is not",
      },
      {
        item: "Conversational content format",
        severity: "warning" as Severity,
        note: "Needs restructuring for AI extraction",
      },
      {
        item: "Entity signals",
        severity: "warning" as Severity,
        note: "Weak — no knowledge graph connections found",
      },
    ],
  },
  {
    category: "Technical SEO",
    findings: [
      {
        item: "Core Web Vitals (LCP)",
        severity: "critical" as Severity,
        note: "5.2s — Fails threshold (target <2.5s)",
      },
      {
        item: "Canonical tags",
        severity: "warning" as Severity,
        note: "Missing on 6 pages",
      },
      {
        item: "Meta descriptions",
        severity: "warning" as Severity,
        note: "Duplicate or missing on 11 pages",
      },
      {
        item: "Crawlability",
        severity: "good" as Severity,
        note: "All key pages indexed correctly",
      },
    ],
  },
  {
    category: "Content & Internal Linking",
    findings: [
      {
        item: "Topical authority depth",
        severity: "warning" as Severity,
        note: "Thin content on 4 service pages",
      },
      {
        item: "Internal linking structure",
        severity: "critical" as Severity,
        note: "Siloed — pages not linked contextually",
      },
      {
        item: "Heading hierarchy (H1–H3)",
        severity: "good" as Severity,
        note: "Correctly structured",
      },
      {
        item: "Semantic keyword coverage",
        severity: "warning" as Severity,
        note: "Key entity terms missing from content",
      },
    ],
  },
];

const severityConfig: Record<
  Severity,
  { label: string; color: string; icon: React.FC<{ className?: string }> }
> = {
  critical: {
    label: "Critical",
    color: "text-red-600 bg-red-50 border-red-200",
    icon: AlertCircle,
  },
  warning: {
    label: "Needs Fix",
    color: "text-amber-600 bg-amber-50 border-amber-200",
    icon: MinusCircle,
  },
  good: {
    label: "Good",
    color: "text-green-600 bg-green-50 border-green-200",
    icon: CheckCircle2,
  },
};

const overallScore = {
  score: 34,
  label: "Needs Significant Work",
  color: "text-red-600",
  bg: "bg-red-600",
  description:
    "This website has critical gaps in structured data, GEO readiness, and technical SEO that are preventing AI systems from understanding and recommending this business.",
};

const fixingProposals = [
  {
    priority: "01",
    action: "Implement full Organization, Service & FAQ schema markup",
    impact: "High",
  },
  {
    priority: "02",
    action: "Restructure top pages for GEO and AI Overview eligibility",
    impact: "High",
  },
  {
    priority: "03",
    action: "Fix Core Web Vitals — reduce LCP from 5.2s to under 2.5s",
    impact: "High",
  },
  {
    priority: "04",
    action: "Build entity signals and connect to knowledge graph sources",
    impact: "High",
  },
  {
    priority: "05",
    action: "Fix internal linking — create topical authority clusters",
    impact: "Medium",
  },
  {
    priority: "06",
    action: "Add missing canonical tags and meta descriptions",
    impact: "Medium",
  },
];

export default function AiSearchAuditPreview() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-400">
            Sample Audit Report
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            This Is What Your Audit Looks Like
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Every audit delivers a structured report like the one below —
            showing exactly what was found, how severe each issue is, and what
            we propose to fix first.
          </p>
        </div>

        {/* Audit Report Mockup */}
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 shadow-2xl">
          {/* Report Header */}
          <div className="border-b border-slate-800 px-8 py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  AI Search Visibility Audit Report
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  YourBusiness.com — Audit Sample
                </h3>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-red-900/50 bg-red-950/50 px-5 py-3">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-black text-red-400">
                    {overallScore.score}
                  </span>
                  <span className="text-xs text-slate-500">/ 100</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-red-400">
                    {overallScore.label}
                  </p>
                  <p className="mt-1 max-w-[200px] text-xs leading-4 text-slate-500">
                    {overallScore.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Score bar */}
            <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-400 transition-all duration-700"
                style={{ width: `${overallScore.score}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-slate-600">
              <span>0 — Critical</span>
              <span>50 — Needs Work</span>
              <span>100 — Optimized</span>
            </div>
          </div>

          {/* Audit Categories */}
          <div className="divide-y divide-slate-800">
            {auditCategories.map((cat) => (
              <div key={cat.category} className="px-8 py-6">
                <p className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-400">
                  {cat.category}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {cat.findings.map((finding) => {
                    const cfg = severityConfig[finding.severity];
                    const SevIcon = cfg.icon;

                    return (
                      <div
                        key={finding.item}
                        className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800/50 p-3"
                      >
                        <SevIcon className={`mt-0.5 h-4 w-4 shrink-0 ${cfg.color.split(" ")[0]}`} />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {finding.item}
                            </span>
                            <span
                              className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase ${cfg.color}`}
                            >
                              {cfg.label}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs leading-4 text-slate-500">
                            {finding.note}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Fixing Proposals */}
          <div className="border-t border-slate-800 bg-slate-900/80 px-8 py-7">
            <p className="mb-5 text-sm font-bold uppercase tracking-wide text-blue-400">
              Prioritized Fixing Proposals
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {fixingProposals.map((proposal) => (
                <div
                  key={proposal.priority}
                  className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-800 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                    {proposal.priority}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-5 text-slate-200">
                      {proposal.action}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-blue-400">
                      Impact: {proposal.impact}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Report Footer CTA */}
          <div className="border-t border-slate-800 bg-blue-600/10 px-8 py-6 text-center">
            <p className="text-sm text-slate-400">
              Your actual audit report will be specific to your website, your
              industry, and your competitors.
            </p>
            <a
              href="/free-audit"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-500"
            >
              Get Your Real Audit Report
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

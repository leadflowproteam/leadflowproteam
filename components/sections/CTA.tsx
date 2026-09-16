import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileSearch,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const auditPoints = [
  "Understand how your business is currently represented",
  "Identify important gaps and inconsistencies",
  "See where relevant competitors are stronger",
  "Get practical priorities for what to improve next",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.24),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]"
      />

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Bot className="h-6 w-6 text-blue-300" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                AI Search Visibility Audit
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              See How AI Sees Your Business.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Before investing more in content, SEO, website changes, or
              digital growth, understand what your business information looks
              like today and where the most meaningful opportunities may be.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Your AI Visibility Audit
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services/ai-search-visibility"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore AI Search Visibility
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-400">
              No guaranteed AI rankings or mentions. Our focus is evidence,
              clarity, and practical improvement opportunities.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <FileSearch className="h-6 w-6 text-blue-300" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-300">
                    What the Audit Helps You See
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    A Clearer Visibility Picture
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {auditPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                    <p className="text-sm leading-6 text-slate-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                <p className="text-sm leading-6 text-slate-300">
                  Findings are intended to support better decisions—not to
                  promise outcomes that no agency can directly control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
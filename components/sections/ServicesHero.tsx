import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            AI Search Visibility &amp; Digital Growth Services
          </span>

          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Professional Digital Services
            <br />
            for Businesses Ready to Invest in Growth
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            We help commercial businesses understand how search and AI systems
            currently represent them, identify important visibility gaps, and
            improve the digital foundations that influence discovery, trust,
            and customer action.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Start With an AI Visibility Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Discuss Your Growth Goals
            </Link>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <p className="text-sm leading-6 text-slate-600">
              <span className="font-semibold text-slate-900">
                Best fit:
              </span>{" "}
              commercial organizations with a genuine growth objective that
              are prepared to invest in professional website, search,
              visibility, conversion, and ongoing digital improvement.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-600">
            <span className="rounded-full bg-slate-100 px-4 py-2">
              AI Search Visibility
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2">
              Technical SEO
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2">
              Local SEO
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2">
              Website Audit
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2">
              Next.js Development
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2">
              Conversion Optimization
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

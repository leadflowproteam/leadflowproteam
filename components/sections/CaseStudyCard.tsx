import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

export interface CaseStudyCardProps {
  slug: string;
  client: string;
  industry: string;
  industryColor?: "blue" | "violet" | "emerald" | "amber" | "rose";
  headline: string;
  summary: string;
  results: {
    label: string;
    before: string;
    after: string;
  }[];
  services: string[];
}

const industryColorMap = {
  blue:    { badge: "bg-blue-50 text-blue-700 border-blue-200",    icon: "bg-blue-600" },
  violet:  { badge: "bg-violet-50 text-violet-700 border-violet-200", icon: "bg-violet-600" },
  emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "bg-emerald-600" },
  amber:   { badge: "bg-amber-50 text-amber-700 border-amber-200", icon: "bg-amber-600" },
  rose:    { badge: "bg-rose-50 text-rose-700 border-rose-200",    icon: "bg-rose-600" },
};

export default function CaseStudyCard({
  slug,
  client,
  industry,
  industryColor = "blue",
  headline,
  summary,
  results,
  services,
}: CaseStudyCardProps) {
  const colors = industryColorMap[industryColor];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${colors.icon}`} />

      <div className="flex flex-1 flex-col p-7">
        {/* Industry badge + client */}
        <div className="flex items-start justify-between gap-3">
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${colors.badge}`}>
            {industry}
          </span>
          <span className="text-xs font-semibold text-gray-400">{client}</span>
        </div>

        {/* Headline */}
        <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
          {headline}
        </h3>

        {/* Summary */}
        <p className="mt-3 text-sm leading-6 text-gray-600">{summary}</p>

        {/* Results Grid */}
        {results.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-3">
            {results.slice(0, 3).map((r) => (
              <div key={r.label} className="rounded-xl bg-gray-50 p-3 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                  {r.label}
                </p>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="text-xs text-gray-400 line-through">{r.before}</span>
                  <TrendingUp className="h-3 w-3 text-blue-600" />
                  <span className="text-sm font-bold text-blue-700">{r.after}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services used */}
        {services.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
              >
                {service}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-gray-100">
          <Link
            href={`/case-studies/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-800 hover:gap-3"
          >
            Read Case Study
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

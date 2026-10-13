import Link from "next/link";

import Container from "@/components/ui/Container";

import { getComparison, getComparisonsForService } from "@/lib/citation-engine";
import { getComparisonAnswer } from "@/lib/articles";

type Props = {
  serviceSlug?: string;
  comparisonSlug?: string;
};

export default function ComparisonBlock({
  serviceSlug,
  comparisonSlug,
}: Props) {
  const comparison = comparisonSlug
    ? getComparison(comparisonSlug)
    : getComparisonsForService(serviceSlug ?? "")[0];

  if (!comparison) {
    return null;
  }

  const answer = getComparisonAnswer(comparison.slug) ?? comparison.summary;

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            {comparison.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            {comparison.question}
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm leading-7 text-slate-700">{answer}</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-bold text-slate-950">
                {comparison.left.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {comparison.left.description}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-lg font-bold text-slate-950">
                {comparison.right.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {comparison.right.description}
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-700">
            <span className="font-bold text-slate-950">Bottom line: </span>
            {comparison.verdict}
          </p>

          <p className="mt-6 text-xs text-slate-500">
            Related topics:{" "}
            {comparison.relatedEntities.map((entitySlug, index) => (
              <span key={entitySlug}>
                {index > 0 ? ", " : ""}
                <Link
                  href={`/entities/${entitySlug}`}
                  className="font-semibold text-blue-600 hover:underline"
                >
                  {entitySlug.replace(/-/g, " ")}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </Container>
    </section>
  );
}

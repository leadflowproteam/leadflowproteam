import Link from "next/link";

import { glossary } from "@/data/glossary";

type Props = {
  relatedEntities: readonly string[];
};

export default function RelatedGlossary({
  relatedEntities,
}: Props) {
  const items = glossary.filter((item) =>
    item.relatedEntities.some((entity) =>
      relatedEntities.includes(entity),
    ),
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <h2 className="text-3xl font-bold">
        Related Concepts
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.slug}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300"
          >
            <h3 className="text-lg font-bold text-gray-900">
              {item.term}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {item.definition}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.relatedEntities.map((entitySlug) => (
                <Link
                  key={entitySlug}
                  href={`/entities/${entitySlug}`}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  {entitySlug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

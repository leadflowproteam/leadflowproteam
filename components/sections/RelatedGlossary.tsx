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
          <Link
            key={item.slug}
            href={`/glossary/${item.slug}`}
            className="rounded-xl border p-6 transition hover:border-blue-500"
          >
            <h3 className="font-semibold">
              {item.term}
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              {item.definition}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
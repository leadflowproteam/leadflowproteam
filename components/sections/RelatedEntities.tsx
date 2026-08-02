import Link from "next/link";

import { getRelatedEntities } from "@/lib/entity-engine";

type Props = {
  slug: string;
};

export default function RelatedEntities({
  slug,
}: Props) {
  const entities = getRelatedEntities(slug);

  if (entities.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <h2 className="text-3xl font-bold">
        Related Entities
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entities.map((entity) => (
          <Link
            key={entity.slug}
            href={`/entities/${entity.slug}`}
            className="rounded-xl border p-6 transition hover:border-blue-600"
          >
            <h3 className="font-semibold">
              {entity.name}
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              {entity.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
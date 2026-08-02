import Link from "next/link";

import { getEntity } from "@/lib/knowledge-graph";

type Props = {
  entitySlugs: readonly string[];
};

export default function RelatedEntities({
  entitySlugs,
}: Props) {
  const entities = entitySlugs
    .map((slug) => getEntity(slug))
    .filter(Boolean);

  if (entities.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Related Entities
      </h2>

      <div className="flex flex-wrap gap-3">
        {entities.map((entity) => (
          <Link
            key={entity!.slug}
            href={entity!.url}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-blue-600 hover:text-blue-600"
          >
            {entity!.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
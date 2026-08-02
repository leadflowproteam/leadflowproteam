import EntityCard from "./EntityCard";

import type { Entity } from "@/data/entities";

type RelatedEntitiesProps = {
  title?: string;
  entities: readonly Entity[];
};

export default function RelatedEntities({
  title = "Related Entities",
  entities,
}: RelatedEntitiesProps) {
  if (entities.length === 0) {
    return null;
  }

  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {entities.map((entity) => (
          <EntityCard
            key={entity.slug}
            entity={entity}
          />
        ))}
      </div>
    </section>
  );
}
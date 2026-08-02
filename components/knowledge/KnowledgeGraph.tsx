import RelatedEntities from "./RelatedEntities";

import type { Entity } from "@/data/entities";

type KnowledgeGraphProps = {
  title?: string;
  entities: readonly Entity[];
};

export default function KnowledgeGraph({
  title = "Knowledge Graph",
  entities,
}: KnowledgeGraphProps) {
  if (entities.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-slate-600 leading-7">
          Explore related concepts, technologies, services, and SEO entities
          that strengthen topical authority and semantic relationships across
          the website.
        </p>
      </div>

      <RelatedEntities
        title="Connected Entities"
        entities={entities}
      />
    </section>
  );
}
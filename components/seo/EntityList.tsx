import EntityLink from "@/components/seo/EntityLink";

type EntityListProps = {
  entities: readonly string[];
  title?: string;
};

export default function EntityList({
  entities,
  title = "Related Entities",
}: EntityListProps) {
  if (entities.length === 0) {
    return null;
  }

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {entities.map((entity) => (
          <EntityLink
            key={entity}
            entity={entity}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm"
          />
        ))}
      </div>
    </section>
  );
}
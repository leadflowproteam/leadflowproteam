import { entities } from "@/data/entities";

export function getEntity(slug: string) {
  return entities.find((entity) => entity.slug === slug);
}

export function getRelatedEntities(slug: string) {
  const entity = getEntity(slug);

  if (!entity) {
    return [];
  }

  return entities.filter((item) =>
    entity.relatedEntities.includes(item.slug),
  );
}

export function getEntityNames() {
  return entities.map((item) => item.name);
}

export function hasEntity(slug: string) {
  return entities.some(
    (item) => item.slug === slug,
  );
}
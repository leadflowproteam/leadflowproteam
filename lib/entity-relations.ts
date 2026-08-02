import { entities } from "@/data/entities";

export function getRelatedEntityObjects(slug: string) {
  const entity = entities.find((item) => item.slug === slug);

  if (!entity) {
    return [];
  }

  return entity.relatedEntities
    .map((relatedSlug) =>
      entities.find((item) => item.slug === relatedSlug),
    )
    .filter(Boolean);
}

export function getEntityChildren(slug: string) {
  return entities.filter((item) =>
    item.relatedEntities.includes(slug),
  );
}

export function getFeaturedEntities() {
  return entities.filter((item) => item.featured);
}

export function getEntitiesByType(
  type: (typeof entities)[number]["type"],
) {
  return entities.filter(
    (item) => item.type === type,
  );
}

export function entityExists(slug: string) {
  return entities.some(
    (item) => item.slug === slug,
  );
}
import { entities } from "@/data/entities";

export function getAllEntities() {
  return entities;
}

export function getFeaturedEntities() {
  return entities.filter((entity) => entity.featured);
}

export function getEntityBySlug(slug: string) {
  return entities.find((entity) => entity.slug === slug);
}

export function getEntityByName(name: string) {
  return entities.find(
    (entity) =>
      entity.name.toLowerCase() === name.toLowerCase(),
  );
}

export function getEntitiesByType(
  type:
    | "Service"
    | "Technology"
    | "Concept"
    | "Platform"
    | "Metric",
) {
  return entities.filter(
    (entity) => entity.type === type,
  );
}

export function getRelatedEntities(slug: string) {
  const entity = getEntityBySlug(slug);

  if (!entity) {
    return [];
  }

  return entity.relatedEntities
    .map((relatedSlug) =>
      getEntityBySlug(relatedSlug),
    )
    .filter(Boolean);
}

export function searchEntities(keyword: string) {
  const query = keyword.toLowerCase();

  return entities.filter((entity) => {
    return (
      entity.name.toLowerCase().includes(query) ||
      entity.description.toLowerCase().includes(query) ||
      entity.aliases.some((alias) =>
        alias.toLowerCase().includes(query),
      )
    );
  });
}
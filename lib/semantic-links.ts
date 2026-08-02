import { entities } from "@/data/entities";
import { glossary } from "@/data/glossary";
import { industries } from "@/data/industries";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

/* -------------------------------------------------------------------------- */
/*                            Entity → Resources                              */
/* -------------------------------------------------------------------------- */

export function getResourcesForEntity(entitySlug: string) {
  return resources.filter((resource) => {
    return (
      resource.primaryTopic === entitySlug ||
      resource.secondaryTopics.includes(entitySlug) ||
      resource.entityKeywords.some(
        (keyword) =>
          keyword.toLowerCase() === entitySlug.toLowerCase(),
      )
    );
  });
}

/* -------------------------------------------------------------------------- */
/*                            Entity → Services                               */
/* -------------------------------------------------------------------------- */

export function getServicesForEntity(entitySlug: string) {
  return services.filter((service) => {
    const text = [
      service.title,
      service.description,
      ...service.keywords,
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(entitySlug.toLowerCase());
  });
}

/* -------------------------------------------------------------------------- */
/*                           Entity → Industries                              */
/* -------------------------------------------------------------------------- */

export function getIndustriesForEntity(entitySlug: string) {
  return industries.filter((industry) => {
    return (
      industry.entityId === entitySlug ||
      industry.primaryTopic === entitySlug ||
      industry.keywords.some((keyword) =>
        keyword.toLowerCase().includes(entitySlug.toLowerCase()),
      ) ||
      industry.recommendedServices.includes(entitySlug)
    );
  });
}

/* -------------------------------------------------------------------------- */
/*                            Entity → Glossary                               */
/* -------------------------------------------------------------------------- */

export function getGlossaryForEntity(entitySlug: string) {
  return glossary.filter((item) =>
    item.relatedEntities.includes(entitySlug),
  );
}

/* -------------------------------------------------------------------------- */
/*                           Related Entities                                 */
/* -------------------------------------------------------------------------- */

export function getRelatedEntities(entitySlug: string) {
  const entity = entities.find(
    (item) => item.slug === entitySlug,
  );

  if (!entity) {
    return [];
  }

  return entities.filter((item) => {
    if (item.slug === entitySlug) {
      return false;
    }

    return (
      item.type === entity.type ||
      entity.relatedEntities.includes(item.slug) ||
      item.relatedEntities.includes(entity.slug)
    );
  });
}
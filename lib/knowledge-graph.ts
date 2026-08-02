import { entities } from "@/data/entities";
import { glossary } from "@/data/glossary";
import { industries } from "@/data/industries";
import { resources } from "@/data/resources";
import { services } from "@/data/services";

/* -------------------------------------------------------------------------- */
/*                               Single Finders                               */
/* -------------------------------------------------------------------------- */

export function getEntity(slug: string) {
  return entities.find((item) => item.slug === slug);
}

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getResource(slug: string) {
  return resources.find((item) => item.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((item) => item.slug === slug);
}

export function getGlossary(slug: string) {
  return glossary.find((item) => item.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*                           Entity → Related Services                        */
/* -------------------------------------------------------------------------- */

export function getRelatedServices(entitySlug: string) {
  const entity = getEntity(entitySlug);

  if (!entity) {
    return [];
  }

  return services.filter((service) => {
    const text = [
      service.title,
      service.description,
      ...service.keywords,
      ...service.technologies,
    ]
      .join(" ")
      .toLowerCase();

    return text.includes(entity.name.toLowerCase());
  });
}

/* -------------------------------------------------------------------------- */
/*                          Entity → Related Resources                        */
/* -------------------------------------------------------------------------- */

export function getRelatedResources(entitySlug: string) {
  return resources.filter(
    (resource) =>
      resource.primaryTopic === entitySlug ||
      resource.secondaryTopics.includes(entitySlug) ||
      resource.entityKeywords.some(
        (keyword) =>
          keyword.toLowerCase() === entitySlug.toLowerCase(),
      ),
  );
}

/* -------------------------------------------------------------------------- */
/*                           Entity → Glossary                               */
/* -------------------------------------------------------------------------- */

export function getRelatedGlossary(entitySlug: string) {
  return glossary.filter((item) =>
    item.relatedEntities.includes(entitySlug),
  );
}

/* -------------------------------------------------------------------------- */
/*                           Service → Resources                              */
/* -------------------------------------------------------------------------- */

export function getResourcesForService(
  serviceSlug: string,
) {
  return resources.filter((resource) =>
    resource.relatedServices.includes(serviceSlug),
  );
}

/* -------------------------------------------------------------------------- */
/*                           Service → Industries                             */
/* -------------------------------------------------------------------------- */

export function getIndustriesForService(
  serviceSlug: string,
) {
  return industries.filter((industry) =>
    industry.recommendedServices.includes(serviceSlug),
  );
}

/* -------------------------------------------------------------------------- */
/*                               Search Helpers                               */
/* -------------------------------------------------------------------------- */

export function searchEntities(query: string) {
  const keyword = query.trim().toLowerCase();

  return entities.filter((entity) => {
    return (
      entity.name.toLowerCase().includes(keyword) ||
      entity.description.toLowerCase().includes(keyword)
    );
  });
}

export function searchResources(query: string) {
  const keyword = query.trim().toLowerCase();

  return resources.filter((resource) => {
    return (
      resource.title.toLowerCase().includes(keyword) ||
      resource.description
        .toLowerCase()
        .includes(keyword)
    );
  });
}

/* -------------------------------------------------------------------------- */
/*                          Global Knowledge Graph                            */
/* -------------------------------------------------------------------------- */

export function getKnowledgeGraph() {
  return {
    entities,
    services,
    industries,
    resources,
    glossary,
  };
}
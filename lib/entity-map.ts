import { entities } from "@/data/entities";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { resources } from "@/data/resources";
import { glossary } from "@/data/glossary";

export type EntityRelationship = {
  entitySlug: string;

  services: readonly string[];

  industries: readonly string[];

  resources: readonly string[];

  glossary: readonly string[];
};

/* -------------------------------------------------------------------------- */
/*                         Entity Relationship Builder                        */
/* -------------------------------------------------------------------------- */

export const entityMap: readonly EntityRelationship[] =
  entities.map((entity) => {
    const relatedServices = services
      .filter((service) => {
        const text = [
          service.title,
          service.description,
          ...service.keywords,
          ...service.technologies,
        ]
          .join(" ")
          .toLowerCase();

        return text.includes(entity.name.toLowerCase());
      })
      .map((service) => service.slug);

    const relatedIndustries = industries
      .filter(
        (industry) =>
          industry.entityId === entity.slug ||
          industry.primaryTopic === entity.slug ||
          industry.keywords.some((keyword) =>
            keyword
              .toLowerCase()
              .includes(entity.name.toLowerCase()),
          ),
      )
      .map((industry) => industry.slug);

    const relatedResources = resources
      .filter(
        (resource) =>
          resource.primaryTopic === entity.slug ||
          resource.secondaryTopics.includes(entity.slug) ||
          resource.entityKeywords.some(
            (keyword) =>
              keyword.toLowerCase() ===
              entity.name.toLowerCase(),
          ),
      )
      .map((resource) => resource.slug);

    const relatedGlossary = glossary
      .filter((item) =>
        item.relatedEntities.includes(entity.slug),
      )
      .map((item) => item.slug);

    return {
      entitySlug: entity.slug,

      services: relatedServices,

      industries: relatedIndustries,

      resources: relatedResources,

      glossary: relatedGlossary,
    };
  });

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

export function getEntityMap(slug: string) {
  return entityMap.find(
    (item) => item.entitySlug === slug,
  );
}

export function getEntityServices(slug: string) {
  return (
    getEntityMap(slug)?.services ??
    []
  );
}

export function getEntityIndustries(slug: string) {
  return (
    getEntityMap(slug)?.industries ??
    []
  );
}

export function getEntityResources(slug: string) {
  return (
    getEntityMap(slug)?.resources ??
    []
  );
}

export function getEntityGlossary(slug: string) {
  return (
    getEntityMap(slug)?.glossary ??
    []
  );
}
import { services } from "@/data/services";
import { resources } from "@/data/resources";
import { industries } from "@/data/industries";
import { glossary } from "@/data/glossary";

export function getRelatedServices(currentSlug: string) {
  return services.filter(
    (service) => service.slug !== currentSlug,
  );
}

export function getRelatedResources(
  relatedServices: readonly string[],
) {
  return resources.filter((resource) =>
    resource.relatedServices.some((service) =>
      relatedServices.includes(service),
    ),
  );
}

export function getRelatedIndustries() {
  return industries;
}

export function getRelatedGlossary(
  relatedEntities: readonly string[],
) {
  return glossary.filter((item) =>
    item.relatedEntities.some((entity) =>
      relatedEntities.includes(entity),
    ),
  );
}
import { company } from "@/config/company";
import type { Entity } from "@/data/entities";
import { knowledgeLinks } from "@/lib/knowledge-links";

const SITE_URL = company.url;

export function entitySchema(entity: Entity) {
  const schemaType =
    entity.type === "Service"
      ? "Service"
      : entity.type === "Technology"
      ? "SoftwareApplication"
      : entity.type === "Platform"
      ? "WebSite"
      : entity.type === "Metric"
      ? "DefinedTerm"
      : "Thing";

  const links = knowledgeLinks[entity.slug];

  return {
    "@context": "https://schema.org",

    "@type": schemaType,

    "@id": `${SITE_URL}/entities/${entity.slug}#entity`,

    name: entity.name,

    description: entity.description,

    url: `${SITE_URL}/entities/${entity.slug}`,

    identifier: entity.slug,

    alternateName: [...entity.aliases],

    isPartOf: {
      "@id": `${SITE_URL}#website`,
    },

    provider: {
      "@id": `${SITE_URL}#organization`,
    },

    about: entity.relatedEntities.map((slug) => ({
      "@id": `${SITE_URL}/entities/${slug}#entity`,
    })),

    subjectOf: [
      ...(links?.services ?? []).map((slug) => ({
        "@id": `${SITE_URL}/services/${slug}#service`,
      })),

      ...(links?.resources ?? []).map((slug) => ({
        "@id": `${SITE_URL}/resources/${slug}#article`,
      })),

      ...(links?.portfolio ?? []).map((slug) => ({
        "@id": `${SITE_URL}/portfolio/${slug}#project`,
      })),

      ...(links?.industries ?? []).map((slug) => ({
        "@id": `${SITE_URL}/industries/${slug}#industry`,
      })),
    ],
  };
}
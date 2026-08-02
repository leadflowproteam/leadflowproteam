import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/schema";

export function siteGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      professionalServiceSchema(),
      websiteSchema(),
      ...nodes.filter(Boolean),
    ],
  };
}
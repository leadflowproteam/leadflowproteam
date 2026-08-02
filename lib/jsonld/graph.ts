import { company } from "@/config/company";
import { organizationSchema, websiteSchema } from "@/lib/schema";

type GraphNode = Record<string, unknown>;

export function graphSchema(
  ...nodes: GraphNode[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      ...nodes,
    ],
  };
}
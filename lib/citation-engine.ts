import { comparisons } from "@/data/comparisons";

/**
 * Get all comparisons.
 */
export function getAllComparisons() {
  return comparisons;
}

/**
 * Get a comparison by slug.
 */
export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}

/**
 * Get comparisons related to a service.
 */
export function getComparisonsForService(serviceSlug: string) {
  return comparisons.filter((item) =>
    item.relatedServices.includes(serviceSlug),
  );
}

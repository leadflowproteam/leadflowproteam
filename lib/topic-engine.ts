import {
  topicClusters,
  type TopicCluster,
} from "@/data/topic-clusters";

/**
 * Get all topic clusters
 */
export function getAllTopicClusters(): readonly TopicCluster[] {
  return topicClusters;
}

/**
 * Get one cluster by slug
 */
export function getTopicCluster(
  slug: string,
): TopicCluster | undefined {
  return topicClusters.find(
    (cluster) => cluster.slug === slug,
  );
}

/**
 * Get related clusters
 */
export function getRelatedClusters(
  slug: string,
): readonly TopicCluster[] {
  const cluster = getTopicCluster(slug);

  if (!cluster) {
    return [];
  }

  return topicClusters.filter((item) =>
    cluster.relatedClusters.includes(item.slug),
  );
}

/**
 * Get entity slugs
 */
export function getClusterEntities(
  slug: string,
): readonly string[] {
  return getTopicCluster(slug)?.entities ?? [];
}

/**
 * Get related resource slugs
 */
export function getClusterResources(
  slug: string,
): readonly string[] {
  return getTopicCluster(slug)?.resources ?? [];
}

/**
 * Get related portfolio slugs
 */
export function getClusterPortfolio(
  slug: string,
): readonly string[] {
  return getTopicCluster(slug)?.portfolio ?? [];
}

/**
 * Get pillar service
 */
export function getPrimaryService(
  slug: string,
): string | undefined {
  return getTopicCluster(slug)?.pillarService;
}

/**
 * Priority ordered clusters
 */
export function getPriorityClusters(): readonly TopicCluster[] {
  return [...topicClusters].sort(
    (a, b) => a.priority - b.priority,
  );
}

/**
 * Commercial clusters
 */
export function getCommercialClusters() {
  return topicClusters.filter(
    (cluster) =>
      cluster.searchIntent === "commercial",
  );
}

/**
 * Informational clusters
 */
export function getInformationalClusters() {
  return topicClusters.filter(
    (cluster) =>
      cluster.searchIntent === "informational",
  );
}

/**
 * Transactional clusters
 */
export function getTransactionalClusters() {
  return topicClusters.filter(
    (cluster) =>
      cluster.searchIntent === "transactional",
  );
}
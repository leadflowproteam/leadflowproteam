import { resources } from "@/data/resources";

export function getRelatedResources(slug: string) {
  const current = resources.find((item) => item.slug === slug);

  if (!current) return [];

  return resources
    .filter((item) => item.slug !== slug)
    .filter((item) => {
      if (item.primaryTopic === current.primaryTopic) {
        return true;
      }

      return item.secondaryTopics.some((topic) =>
        current.secondaryTopics.includes(topic),
      );
    })
    .slice(0, 3);
}

export function getFeaturedResources() {
  return resources.filter((item) => item.featured);
}

export function getResourcesByTopic(topic: string) {
  return resources.filter(
    (item) =>
      item.primaryTopic === topic ||
      item.secondaryTopics.includes(topic),
  );
}
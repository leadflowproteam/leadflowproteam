import { entities } from "@/data/entities";

export function calculateEntityScore(text: string) {
  const content = text.toLowerCase();

  let score = 0;

  const matchedEntities = entities.filter((entity) => {
    const matched =
      content.includes(entity.name.toLowerCase()) ||
      entity.aliases.some((alias) =>
        content.includes(alias.toLowerCase()),
      );

    if (matched) {
      score += 1;
    }

    return matched;
  });

  return {
    score,
    total: entities.length,
    percentage:
      entities.length === 0
        ? 0
        : Math.round((score / entities.length) * 100),
    matchedEntities,
  };
}
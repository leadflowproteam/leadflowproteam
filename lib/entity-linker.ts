import { entities } from "@/data/entities";

export type EntityMatch = {
  slug: string;
  name: string;
  type: string;
  href: string;
  start: number;
  end: number;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function findEntities(text: string): EntityMatch[] {
  const matches: EntityMatch[] = [];

  for (const entity of entities) {
    const keywords = [entity.name, ...entity.aliases];

    for (const keyword of keywords) {
      const regex = new RegExp(
        `\\b${escapeRegExp(keyword)}\\b`,
        "gi",
      );

      let result: RegExpExecArray | null;

      while ((result = regex.exec(text)) !== null) {
        matches.push({
          slug: entity.slug,
          name: entity.name,
          type: entity.type,
          href: `/entities/${entity.slug}`,
          start: result.index,
          end: result.index + result[0].length,
        });
      }
    }
  }

  return matches.sort((a, b) => a.start - b.start);
}

export function hasEntity(text: string, slug: string) {
  return findEntities(text).some(
    (item) => item.slug === slug,
  );
}

export function extractEntitySlugs(
  text: string,
): string[] {
  return Array.from(
    new Set(findEntities(text).map((e) => e.slug)),
  );
}
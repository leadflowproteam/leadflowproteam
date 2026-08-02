import { glossary } from "@/data/glossary";

export function getGlossaryTerm(slug: string) {
  return glossary.find(
    (item) => item.slug === slug,
  );
}

export function getAllGlossaryTerms() {
  return glossary;
}

export function searchGlossary(
  keyword: string,
) {
  const query = keyword.toLowerCase();

  return glossary.filter(
    (item) =>
      item.term
        .toLowerCase()
        .includes(query) ||
      item.definition
        .toLowerCase()
        .includes(query),
  );
}
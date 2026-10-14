import { authors } from "@/data/authors";
import { company } from "@/config/company";

export function getAuthor(slug: string) {
  return authors.find(
    (author) => author.slug === slug,
  );
}

export function getAllAuthors() {
  return authors;
}

/**
 * Schema.org Person JSON-LD for an author — used on resource
 * articles so search engines and AI systems can verify who
 * produced the content (E-E-A-T).
 */
export function authorSchema(slug: string) {
  const author = getAuthor(slug);

  if (!author) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${company.url}/about#author-${author.slug}`,
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    image: `${company.url}${author.image}`,
    url: `${company.url}/about`,
    worksFor: {
      "@id": `${company.url}#organization`,
    },
    knowsAbout: [...author.expertise],
    ...(author.sameAs.length > 0 && {
      sameAs: [...author.sameAs],
    }),
  };
}

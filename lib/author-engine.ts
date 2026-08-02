import { authors } from "@/data/authors";

export function getAuthor(slug: string) {
  return authors.find(
    (author) => author.slug === slug,
  );
}

export function getAllAuthors() {
  return authors;
}
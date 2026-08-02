import { faqs } from "@/data/faqs";

export function getFAQsByCategory(category: string) {
  return faqs.filter((faq) => faq.category === category);
}

export function getFAQ(id: string) {
  return faqs.find((faq) => faq.id === id);
}

export function getAllFAQs() {
  return faqs;
}
import { faqs } from "@/data/faqs";
import { serviceFaqs } from "@/data/service-faqs";
import { serviceFaqsMore } from "@/data/service-faqs-more";

import type { FAQCategory } from "@/data/faqs";

const allFaqs = [...faqs, ...serviceFaqs, ...serviceFaqsMore];

export function getFAQsByCategory(category: FAQCategory) {
  return allFaqs.filter((faq) => faq.category === category);
}

export function getFAQ(id: string) {
  return allFaqs.find((faq) => faq.id === id);
}

export function getAllFAQs() {
  return allFaqs;
}

export function getGeneralFAQs() {
  return getFAQsByCategory("general");
}

export function getContactFAQs() {
  const ids = [
    "response-time",
    "international",
    "services",
    "consultation",
    "redesign",
    "ongoing-support",
  ];

  return ids
    .map((id) => allFaqs.find((faq) => faq.id === id))
    .filter((faq): faq is (typeof allFaqs)[number] => Boolean(faq));
}

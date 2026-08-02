"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import { faqs as defaultFaqs } from "@/data/faqs";

type FAQItem = {
  readonly question: string;
  readonly answer: string;
};

type FAQProps = {
  badge?: string;
  title?: string;
  description?: string;
  items?: readonly FAQItem[];
};

export default function FAQ({
  badge = "Frequently Asked Questions",
  title = "Questions We Hear Before Every Project",
  description =
    "Clear answers about our web development, Technical SEO, AI Search Optimization, project process, and ongoing support.",
  items = defaultFaqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          description={description}
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-5 lg:mt-16">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    p-6
                    text-left
                  "
                >
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-${index}`}
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5">
                      <p className="leading-8 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
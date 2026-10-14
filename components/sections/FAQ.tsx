"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQSchema from "@/components/seo/FAQSchema";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  badge?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: readonly FAQItem[];
};

export default function FAQ({
  badge,
  eyebrow,
  title,
  description,
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) {
    return null;
  }

  const sectionEyebrow = badge ?? eyebrow ?? "Frequently Asked Questions";

  const sectionTitle = title ?? "Frequently Asked Questions";

  const sectionDescription =
    description ??
    "Clear, direct answers — written so both customers and AI answer engines can use them.";

  return (
    <section className="bg-white py-20 lg:py-28">
      {/* FAQPage structured data for AI answer engines */}
      <FAQSchema items={items} />

      <Container>
        <SectionHeading
          badge={sectionEyebrow}
          title={sectionTitle}
          description={sectionDescription}
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="space-y-4">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-gray-50 sm:px-7"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <HelpCircle className="h-5 w-5 text-blue-600" />
                      </span>

                      <span className="text-base font-bold text-gray-900 sm:text-lg">
                        {faq.question}
                      </span>
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-6 py-5 sm:px-7">
                        <p className="text-sm leading-7 text-gray-600 sm:pl-13">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  badge?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What is an AI Search Visibility Audit?",
    answer:
      "An AI Search Visibility Audit examines how your business is represented across relevant search, local information, and AI answer experiences. It looks at business identity, website and technical foundations, local data, AI visibility, customer queries, reputation signals, competitors, and improvement opportunities.",
  },
  {
    question: "Is AI Search Visibility the same as traditional SEO?",
    answer:
      "They overlap, but they are not the same. Traditional SEO often focuses heavily on search visibility and rankings. AI Search Visibility also considers whether business information is clear, complete, consistent, and understandable across the wider information ecosystem that can influence AI-generated answers and customer research.",
  },
  {
    question: "Can you guarantee that my business will appear in ChatGPT or other AI systems?",
    answer:
      "No. AI systems, search systems, data sources, and answer processes are outside any agency's direct control. We do not promise guaranteed rankings, mentions, or inclusion. Instead, we focus on identifying observable gaps and improving the information and signals that can be influenced.",
  },
  {
    question: "What does the audit actually check?",
    answer:
      "Our methodology uses eight areas: Business & Identity, Website & Technical Foundation, Local Search & Data Consistency, AI Search Visibility, Customer Query Testing, Reputation & Trust Signals, Competitive Intelligence, and Opportunity & Commercial Assessment.",
  },
  {
    question: "Will I receive just a score?",
    answer:
      "No. The goal is to produce useful evidence and explain what it means. Depending on the audit scope, the output can include findings, information gaps, competitive observations, priority opportunities, and practical recommendations.",
  },
  {
    question: "Do I have to purchase implementation after the audit?",
    answer:
      "No. The audit is designed to be valuable as a standalone diagnostic service. If implementation is appropriate, the findings can identify what should be improved and help define the required scope.",
  },
  {
    question: "Can you help fix the issues found in the audit?",
    answer:
      "Yes. Depending on the findings, implementation can include website engineering, technical SEO, local business information improvements, structured data, content and information updates, AI visibility optimization, performance improvements, and conversion-focused changes.",
  },
  {
    question: "Why is ongoing monitoring important?",
    answer:
      "Business information, websites, competitors, search experiences, and AI systems can change over time. Monitoring helps identify meaningful changes, new gaps, and new opportunities rather than treating visibility as a one-time task.",
  },
];

export default function FAQ({
  badge,
  eyebrow,
  title,
  description,
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionEyebrow =
    badge ?? eyebrow ?? "Frequently Asked Questions";

  const sectionTitle =
    title ?? "Questions About AI Search Visibility.";

  const sectionDescription =
    description ??
    "Here are clear answers to the questions business owners commonly have before starting an AI Search Visibility Audit.";

  const faqItems = items ?? defaultFaqs;

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          badge={sectionEyebrow}
          title={sectionTitle}
          description={sectionDescription}
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={`${faq.question}-${index}`}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
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
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
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

        {!items && (
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50/70 p-6 text-center sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Still Have Questions?
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
              Start With the Business Problem, Not the Technology.
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              The right audit scope depends on your business, market,
              customers, and current visibility.
            </p>

            <a
              href="/free-audit"
              className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Request an AI Visibility Audit
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
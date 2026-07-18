"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers to the questions we hear most often from prospective clients."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                  <p className="leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
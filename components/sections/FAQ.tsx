"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ChevronDown,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

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
    "Clear answers about our Website Development, Technical SEO, AI Search Visibility, project workflow, pricing, and long-term support.",
  items = defaultFaqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl" />

      </div>

      <Container className="relative z-10">

        <SectionHeading
          badge={badge}
          title={title}
          description={description}
        />

        <div className="mx-auto mt-20 max-w-5xl space-y-6">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:border-blue-200
                  hover:shadow-xl
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
                    gap-6
                    p-7
                    text-left
                  "
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="
                        mt-1
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-50
                        text-blue-600
                        transition-all
                        duration-300
                        group-hover:bg-blue-600
                        group-hover:text-white
                      "
                    >
                      <HelpCircle className="h-6 w-6" />
                    </div>

                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-8
                          text-slate-900
                        "
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`
                      h-6
                      w-6
                      shrink-0
                      text-blue-600
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  id={`faq-${index}`}
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        border-t
                        border-slate-100
                        px-7
                        pb-7
                        pt-6
                      "
                    >
                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            bg-linear-to-r
            from-slate-900
            via-blue-700
            to-blue-600
            px-10
            py-16
            text-center
            shadow-2xl
          "
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-100
              backdrop-blur
            "
          >
            <Sparkles className="mr-2 h-4 w-4" />
            We're Here To Help
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you need a new business website,
            Technical SEO,
            AI Search Visibility,
            or a complete website audit,
            our team is ready to help you choose the right solution.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="group">
                Contact Our Team
                <ArrowRight
                  className="
                    ml-2
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Button>
            </Link>

            <Link href="/free-audit">
              <Button
                variant="outline"
                size="lg"
                className="
                  border-white
                  text-white
                  hover:bg-white
                  hover:text-blue-700
                "
              >
                Get Free Website Audit
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


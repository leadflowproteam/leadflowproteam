"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  description?: string;
  badge?: string;
  accentColor?: "blue" | "violet" | "emerald";
}

const accentMap = {
  blue:    { badge: "bg-blue-50 text-blue-700 border-blue-200", icon: "text-blue-600", ring: "focus-visible:ring-blue-500", open: "bg-blue-50/50 border-blue-200" },
  violet:  { badge: "bg-violet-50 text-violet-700 border-violet-200", icon: "text-violet-600", ring: "focus-visible:ring-violet-500", open: "bg-violet-50/50 border-violet-200" },
  emerald: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "text-emerald-600", ring: "focus-visible:ring-emerald-500", open: "bg-emerald-50/50 border-emerald-200" },
};

export default function FAQSection({
  items,
  title,
  description,
  badge,
  accentColor = "blue",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const colors = accentMap[accentColor];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {/* Optional header */}
      {(badge || title || description) && (
        <div className="mb-10 text-center">
          {badge && (
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${colors.badge}`}>
              <HelpCircle className="h-3.5 w-3.5" />
              {badge}
            </span>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
              {description}
            </p>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen ? colors.open : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left ${colors.ring} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
              >
                <span className="text-base font-semibold text-gray-900">
                  {item.question}
                </span>

                <span
                  className={`flex-shrink-0 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className={`h-4 w-4 ${colors.icon}`} />
                </span>
              </button>

              {/* Answer — smooth height animation via grid trick */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-7 text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

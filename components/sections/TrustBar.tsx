import {
  Bot,
  Gauge,
  SearchCheck,
  TrendingUp,
} from "lucide-react";

import Section from "@/components/ui/Section";

const items = [
  {
    icon: Gauge,
    title: "Lightning Fast Performance",
    description:
      "Built with Next.js, optimized Core Web Vitals, and fast loading experiences that improve both rankings and conversions.",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO Built-In",
    description:
      "Every website is engineered with clean architecture, structured metadata, crawlability, and search engine best practices.",
  },
  {
    icon: Bot,
    title: "AI Search Ready",
    description:
      "Designed for Google's AI Overviews, ChatGPT, Gemini, Claude, and the next generation of AI-powered search.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Focused",
    description:
      "Conversion-driven layouts and clear calls-to-action help transform visitors into qualified business enquiries.",
  },
];

export default function TrustBar() {
  return (
    <Section className="py-14 sm:py-16 lg:py-20">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-200
                hover:shadow-xl
              "
            >
              <div className="mb-5 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
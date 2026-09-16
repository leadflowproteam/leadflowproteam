import {
  Bot,
  Code2,
  FileCheck2,
  MapPin,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

const trustSignals = [
  {
    icon: Bot,
    title: "AI Search Visibility",
  },
  {
    icon: SearchCheck,
    title: "Technical SEO",
  },
  {
    icon: MapPin,
    title: "Local Search & Data",
  },
  {
    icon: Code2,
    title: "Modern Web Engineering",
  },
  {
    icon: FileCheck2,
    title: "Evidence-Based Audits",
  },
  {
    icon: ShieldCheck,
    title: "Human Validation",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              Built Around
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-900">
              Visibility, evidence, and practical implementation
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:w-auto lg:grid-cols-6">
            {trustSignals.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-blue-600" />

                  <span className="text-xs font-semibold text-gray-700">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
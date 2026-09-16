import { CheckCircle2 } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const businessData = [
  "Business name consistency",
  "Primary category",
  "Secondary categories where appropriate",
  "Core services",
  "Service-area information",
  "Address or location information",
  "Phone and contact details",
  "Business hours",
  "Website URL",
  "Booking or contact pathway",
];

const localSignals = [
  "Google Business Profile information",
  "Relevant local directories",
  "Website-to-profile consistency",
  "Local structured data",
  "Location-specific page signals",
  "Service-location relationships",
  "Public business descriptions",
  "Freshness of important information",
  "Review presence",
  "Third-party mentions",
];

const discoveryTesting = [
  "Business-name queries",
  "Service + location queries",
  "Category + location queries",
  "Best-provider questions",
  "Customer decision questions",
  "Availability questions",
  "Hours questions",
  "Location questions",
  "AI/search discovery checks",
  "Expected vs observed information comparison",
];

function ChecklistCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
          {title}
        </h3>

        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          {items.length} areas
        </span>
      </div>

      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <CheckCircle2
              className="mt-1 h-4 w-4 shrink-0 text-slate-900"
              aria-hidden="true"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LocalSeoChecklist() {
  return (
    <Section className="bg-slate-50">
      <SectionHeading
        badge="Local Visibility Checklist"
        title="A Local Search Review Built Around Business Reality"
        description="We verify the information first, then identify where corrections or improvements can create meaningful local-search and customer-discovery value."
      />

      <div className="grid gap-7 lg:grid-cols-3">
        <ChecklistCard
          title="Business Data"
          items={businessData}
        />

        <ChecklistCard
          title="Local Signals"
          items={localSignals}
        />

        <ChecklistCard
          title="Discovery Testing"
          items={discoveryTesting}
        />
      </div>
    </Section>
  );
}

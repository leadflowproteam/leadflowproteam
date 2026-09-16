import {
  BarChart3,
  ClipboardList,
  Layers3,
  Target,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const engagementOutcomes = [
  {
    icon: Target,
    title: "A Clear Visibility Baseline",
    description:
      "Understand what customers, search systems, local sources, and AI answer systems can currently discover about the business.",
  },
  {
    icon: ClipboardList,
    title: "A Prioritized Action Plan",
    description:
      "Turn findings into a structured list of gaps ranked by severity, business impact, competitive impact, fixability, and priority.",
  },
  {
    icon: Layers3,
    title: "Implementation Opportunities",
    description:
      "Address genuine problems through clearly scoped website, technical SEO, structured data, content, local information, and conversion work.",
  },
  {
    icon: BarChart3,
    title: "A Basis for Re-Testing",
    description:
      "Preserve the original findings so important changes can be reviewed later and ongoing optimization can be evaluated over time.",
  },
];

export default function AiSearchTestimonials() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="What Clients Receive"
          title="Professional Work Built Around Evidence and Business Priorities"
          description="Rather than publishing unverified testimonials or promising guaranteed AI placement, we define the work, document the findings, and connect improvements to real business needs."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {engagementOutcomes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon
                    className="h-7 w-7"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
            Our Standard
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            No invented results. No guaranteed AI rankings.
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            We separate verified business facts, observed search or AI
            results, and recommendations. Important client-facing conclusions
            are reviewed before publication or delivery.
          </p>
        </div>
      </Container>
    </section>
  );
}

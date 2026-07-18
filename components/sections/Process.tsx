import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

const steps = [
  {
    number: "01",
    title: "Free Website Audit",
    description:
      "We analyze your current website, advertising funnel, and search visibility.",
  },
  {
    number: "02",
    title: "Growth Strategy",
    description:
      "We create a custom roadmap focused on speed, conversions, and long-term growth.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We build your high-performance Next.js website with SEO and AI search optimization.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "After launch, we continue optimizing performance, visibility, and conversions.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            A Simple Process Designed for Growth
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From audit to launch, every step is focused on helping your business
            grow faster.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="Our Process"
          title="A Proven Process for Sustainable eCommerce Growth"
          description="Every project follows a structured workflow focused on performance, conversions, SEO, and long-term business growth."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {step.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
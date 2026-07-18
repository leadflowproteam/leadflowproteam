import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { results } from "@/data/results";

export default function Results() {
  return (
    <section className="bg-gray-50 py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="What You Can Expect"
          title="Built to Deliver Long-Term Business Value"
          description="Our focus is creating websites that are fast, search-friendly, scalable, and ready to support your business as it grows."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
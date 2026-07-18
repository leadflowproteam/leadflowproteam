import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { results } from "@/data/results";

export default function Results() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionHeading
          badge="What You Can Expect"
          title="Built to Help Your Business Grow"
          description="Every website we build is designed with performance, visibility, and conversions in mind."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
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
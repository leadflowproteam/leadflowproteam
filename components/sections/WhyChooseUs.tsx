import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/why-choose-us";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="A Reliable Digital Partner for Long-Term Growth"
          description="We combine modern technology, technical expertise, and a growth-focused strategy to build websites that help businesses succeed online."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
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
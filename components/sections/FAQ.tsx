import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Answers to the most common questions about our services, process, and approach."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
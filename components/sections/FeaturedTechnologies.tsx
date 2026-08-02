import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  {
    title: "Next.js",
    description:
      "Modern React framework for lightning-fast, scalable business websites.",
  },
  {
    title: "TypeScript",
    description:
      "Type-safe development that improves reliability and long-term maintainability.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Clean, responsive UI built with a utility-first CSS framework.",
  },
  {
    title: "Technical SEO",
    description:
      "Search-first architecture with semantic HTML, metadata, and structured data.",
  },
  {
    title: "AI Search Ready",
    description:
      "Optimized for AI-powered search experiences using semantic content and entity-focused architecture.",
  },
  {
    title: "Core Web Vitals",
    description:
      "Performance-focused engineering to improve speed, usability, and search visibility.",
  },
];

export default function FeaturedTechnologies() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeading
          badge="Technology Stack"
          title="Built With Modern Web Technologies"
          description="Every website is engineered using proven technologies and search-focused best practices to deliver speed, scalability, and long-term business growth."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <article
              key={tech.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {tech.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {tech.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
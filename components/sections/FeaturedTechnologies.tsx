import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const technologies = [
  {
    title: "Next.js Architecture",
    description:
      "Enterprise-grade React framework for building lightning-fast, secure, scalable, and SEO-friendly business websites.",
  },
  {
    title: "TypeScript Development",
    description:
      "Type-safe development that improves code quality, maintainability, scalability, and long-term project reliability.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Modern utility-first CSS framework that delivers responsive, accessible, clean, and highly optimized user interfaces.",
  },
  {
    title: "Technical SEO",
    description:
      "Built with crawlable architecture, semantic HTML, structured metadata, XML sitemaps, schema markup, and indexing best practices.",
  },
  {
    title: "AI Search Optimization",
    description:
      "Prepared for Google AI Overviews, ChatGPT, Gemini, Claude, Microsoft Copilot, Perplexity, and the future of AI-powered search.",
  },
  {
    title: "Core Web Vitals",
    description:
      "Performance-first engineering focused on loading speed, responsiveness, visual stability, and long-term search performance.",
  },
];

export default function FeaturedTechnologies() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeading
  badge="Modern Technology Stack"
  title="Powered by Modern Web Technologies & AI Search Optimization"
  description="Every LeadFlowProTeam website is engineered using modern web technologies, enterprise development standards, Technical SEO, Core Web Vitals optimization, Entity SEO, and AI Search Optimization to deliver exceptional performance, stronger search visibility, and sustainable business growth."
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
                <div className="mt-20 rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 lg:p-12">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Modern Technology. Better Rankings. Smarter Growth.
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We don't simply build beautiful websites—we engineer high-performance
              digital platforms using modern web technologies, Technical SEO,
              structured data, semantic architecture, and AI Search Optimization.
              Every project is designed to remain fast, scalable, secure, and
              ready for the future of search.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  Modern Development
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Built with Next.js, React, TypeScript, and Tailwind CSS for
                  maximum speed, scalability, and maintainability.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  Search-First Architecture
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Technical SEO, structured data, semantic markup, and entity
                  optimization help search engines and AI systems better understand
                  your website.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-100 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">
                  AI Search Ready
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prepared for Google AI Overviews, ChatGPT, Gemini, Claude,
                  Microsoft Copilot, Perplexity, and the next generation of
                  AI-powered search experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ServicesHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Professional Digital Services
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Web Development,
            <br />
            Technical SEO &
            <br />
            AI Search Optimization
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            We help service businesses build modern websites, improve search
            visibility, and generate more qualified leads through performance,
            technical SEO, and AI-ready digital strategies.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Get Your Free Website Audit
            </Button>

            <Button variant="outline" size="lg">
              Talk With Our Team
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-gray-600">
            <span className="rounded-full bg-gray-100 px-4 py-2">
              Next.js Development
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              Technical SEO
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              AI Search Ready
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              Core Web Vitals
            </span>

            <span className="rounded-full bg-gray-100 px-4 py-2">
              Lead Generation
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Web Design • Technical SEO • AI Search Optimization
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Build Faster.
            <br />
            Rank Smarter.
            <br />
            Grow Better.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            We help service businesses grow with high-performance websites,
            technical SEO, AI-ready search optimization, and landing pages
            designed to generate more leads and increase conversions.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Get Free Website Audit
            </Button>

            <Button variant="outline">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-500">
            <span>⚡ Fast Performance</span>
            <span>🔍 Technical SEO</span>
            <span>🤖 AI Search Ready</span>
            <span>📈 Conversion Focused</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
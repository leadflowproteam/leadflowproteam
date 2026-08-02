import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            About LeadFlowProTeam
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            We Build Websites
            <br />
            That Grow Businesses.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            LeadFlowProTeam helps businesses create
            high-performance websites, improve technical SEO,
            and prepare for the future of AI-powered search.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Work With Us
            </Button>

            <Button variant="outline">
              Explore Services
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
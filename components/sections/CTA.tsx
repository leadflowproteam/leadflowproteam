import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-100">
            Free Growth Audit
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Grow Your eCommerce Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Discover how a lightning-fast, conversion-focused website can help
            you generate more sales from Facebook Ads, Google Ads, and organic
            search.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button>
              Book Free Growth Audit
            </Button>

            <Button variant="secondary">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
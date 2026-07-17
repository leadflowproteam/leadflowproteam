import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            High-Performance eCommerce Growth Agency
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Turn Every Ad Click Into More Sales
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We build lightning-fast eCommerce websites and improve search
            visibility to help businesses get better results from Facebook Ads
            and Google Ads.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button>Book Free Audit</Button>
            <Button variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
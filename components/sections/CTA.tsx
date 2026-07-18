import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            Let's Build Something Great Together
          </span>

          <h2 className="mt-8 text-4xl font-extrabold md:text-5xl">
            Ready to Grow Your Business Online?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you need a modern website, technical SEO, or AI-ready search
            optimization, we're here to help you build a stronger online
            presence and generate more qualified leads.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button>
                Get Free Website Audit
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="secondary">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
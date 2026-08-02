import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function NotFoundHero() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Error 404
          </span>

          <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-gray-900 md:text-8xl">
            404
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 md:text-5xl">
            Page Not Found
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Sorry, the page you are looking for doesn't exist, has been moved,
            or the URL may be incorrect. Let's help you get back on track.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button className="group">
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <Link href="/services">
              <Button variant="outline" className="group">
                <Search className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
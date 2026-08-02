import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;

  primaryButtonText: string;
  primaryButtonHref?: string;

  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  tags?: readonly string[];
};

export default function PageHero({
  badge,
  title,
  description,

  primaryButtonText,
  primaryButtonHref = "/contact",

  secondaryButtonText,
  secondaryButtonHref = "/contact",

  tags = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-16 lg:py-24 xl:py-28">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_35%)]"
      />

      <Container>
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
            {badge}
          </span>

          {/* Title */}
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:mt-6 sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mt-8 lg:text-xl">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:justify-center">
            <Link
              href={primaryButtonHref}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                fullWidth
              >
                {primaryButtonText}
              </Button>
            </Link>

            {secondaryButtonText && (
              <Link
                href={secondaryButtonHref}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}
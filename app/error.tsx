"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            Something Went Wrong
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Unexpected Error
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            Sorry, something unexpected happened while loading this page.
            Please try again. If the problem continues, contact our team.
          </p>

          {process.env.NODE_ENV === "development" && (
            <pre className="mt-8 overflow-auto rounded-2xl bg-gray-100 p-4 text-left text-sm text-red-600">
              {error.message}
            </pre>
          )}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={reset}
              size="lg"
            >
              Try Again
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            Loading...
          </h2>

          <p className="mt-3 max-w-md text-gray-600">
            Please wait while we prepare your experience.
          </p>
        </div>
      </Container>
    </main>
  );
}
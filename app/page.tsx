import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-24">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Welcome to LeadFlowProTeam
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              Professional Web Development &
              <span className="text-blue-600">
                {" "}
                AI Search Optimization
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              We help businesses build fast, modern websites that rank better,
              generate more leads, and grow with confidence.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button>Book Free Consultation</Button>

              <Button variant="secondary">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
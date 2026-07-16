export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
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
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Book Free Consultation
          </button>

          <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
            View Services
          </button>
        </div>
      </section>
    </main>
  );
}
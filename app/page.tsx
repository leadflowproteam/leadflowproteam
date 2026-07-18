import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <Hero />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <Process />
        <Results />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
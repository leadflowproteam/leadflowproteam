import Process from "@/components/sections/Process"; 
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import TrustBar from "@/components/sections/TrustBar";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

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
</main>
    </>
  );
}
import type { Metadata } from "next";

import NotFoundHero from "@/components/sections/NotFoundHero";

export const metadata: Metadata = {
  title: "404 - Page Not Found | LeadFlowProTeam",
  description:
    "The page you're looking for could not be found. Explore our services or return to the homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="bg-white">
      <NotFoundHero />
    </main>
  );
}
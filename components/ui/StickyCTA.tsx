"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  return (
    <>
      {/* Desktop Floating CTA */}

      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <Link
          href="/free-audit"
          className="group inline-flex items-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
        >
          Get Free Website Audit

          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mobile Sticky CTA */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-2xl lg:hidden">
        <Link
          href="/free-audit"
          className="flex items-center justify-center rounded-xl bg-blue-600 px-5 py-4 text-base font-semibold text-white"
        >
          Get Free Website Audit

          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </>
  );
}
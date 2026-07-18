"use client";

import { useState } from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { navigation } from "@/config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-gray-200 p-2 transition hover:bg-gray-100"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-14 z-50 w-72 rounded-xl border border-gray-200 bg-white shadow-xl">
          <nav className="flex flex-col p-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 border-t border-gray-200 pt-6">
              <Button className="w-full">
                Book Free Audit
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
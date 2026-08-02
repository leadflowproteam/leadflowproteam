"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import { navigation } from "@/config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="relative lg:hidden"
    >
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`absolute right-0 top-14 z-50 w-80 origin-top-right rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl transition-all duration-300 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mt-4 border-t border-gray-200 pt-5">
            <Button
              fullWidth
              className="group"
            >
              Get Free Website Audit

              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
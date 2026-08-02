"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";
import { navigation } from "@/config/navigation";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="
        sticky
        top-0
        z-50

        border-b
        border-slate-200/80

        bg-white/90

        backdrop-blur-xl

        supports-[backdrop-filter]:bg-white/75

        shadow-sm
      "
    >
      <Container>
        <div className="flex h-18 lg:h-20 items-center justify-between">

          {/* Logo */}

          <Logo />

          {/* Desktop Navigation */}

          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 xl:gap-10"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "group",
                    "relative",

                    "text-sm",
                    "font-semibold",

                    "transition-colors",
                    "duration-300",

                    isActive
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600",
                  ].join(" ")}
                >
                  {item.label}

                  <span
                    className={[
                      "absolute",
                      "-bottom-2",
                      "left-0",

                      "h-0.5",

                      "bg-blue-600",

                      "transition-all",
                      "duration-300",

                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <div className="hidden lg:block">
              <Link href="/free-audit">
                <Button className="group">
                  Get Free Website Audit

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <MobileMenu />

          </div>

        </div>
      </Container>
    </header>
  );
}
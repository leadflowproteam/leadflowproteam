"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import MobileMenu from "@/components/layout/MobileMenu";

import { navigation } from "@/config/navigation";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Announcement Bar */}

      <div
        className="
          hidden
          lg:block
          border-b
          border-blue-700
          bg-linear-to-r
          from-slate-900
          via-blue-700
          to-blue-600
        "
      >
        <Container>

          <div
            className="
              flex
              h-10
              items-center
              justify-center
              text-sm
              text-blue-100
            "
          >
            <Sparkles className="mr-2 h-4 w-4" />

            Modern Website Development • Technical SEO • AI Search Visibility

          </div>

        </Container>
      </div>

      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-slate-200/80

          bg-white/90

          backdrop-blur-xl

          supports-backdrop-filter:bg-white/75

          shadow-sm
        "
      >
        <Container>

          <div
            className="
              flex
              h-20
              items-center
              justify-between
            "
          >

            {/* Logo */}

            <Logo />

            {/* Desktop Navigation */}

            <nav
              aria-label="Primary Navigation"
              className="
                hidden
                lg:flex
                items-center
                gap-8
                xl:gap-10
              "
            >

              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" &&
                    pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className="
                      group
                      relative
                      flex
                      items-center

                      text-sm
                      font-semibold

                      transition-all
                      duration-300

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-500
                      focus-visible:ring-offset-2
                    "
                  >
                    <span
                      className={
                        isActive
                          ? "text-blue-600"
                          : "text-slate-700 group-hover:text-blue-600"
                      }
                    >
                      {item.label}
                    </span>

                    {/* Animated underline */}

                    <span
                      className={`
                        absolute
                        -bottom-7.5
                        left-0

                        h-0.75
                        rounded-full

                        bg-linear-to-r
                        from-blue-600
                        to-indigo-600

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                );
              })}

            </nav>

            {/* Right Side */}

            <div
              className="
                flex
                items-center
                gap-4
              ">


              {/* Desktop CTA */}

              <div className="hidden lg:block">
                <Link href="/free-audit">

                  <Button
                    size="lg"
                    className="
                      group
                      shadow-lg
                      shadow-blue-600/20
                    "
                  >
                    Get Free Website Audit

                    <ArrowRight
                      className="
                        ml-2
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </Button>

                </Link>
              </div>

              {/* Mobile Navigation */}

              <MobileMenu />

            </div>

          </div>

        </Container>

      </header>

    </>
  );
}


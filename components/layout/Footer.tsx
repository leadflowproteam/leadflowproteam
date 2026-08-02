import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import { company } from "@/config/company";
import { navigation } from "@/config/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container>
        {/* Top */}
        <div className="grid gap-14 py-20 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 leading-7 text-gray-600">
              {company.description}
            </p>

            <div className="mt-8">
              <Link href="/free-audit">
                <Button className="group">
                  Get Free Website Audit

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 transition hover:text-blue-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  AI-Ready Website Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/technical-seo"
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  Technical SEO
                </Link>
              </li>

              <li>
                <Link
                  href="/services/ai-search-visibility"
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  AI Search Visibility
                </Link>
              </li>

              <li>
                <Link
                  href="/services/website-audit"
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  Website Audit
                </Link>
              </li>

              <li>
                <Link
                  href="/services/landing-page-development"
                  className="text-gray-600 transition hover:text-blue-600"
                >
                  Landing Page Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-blue-600" />

                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {company.contact.email}
                </a>
              </div>

              {company.contact.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-blue-600" />

                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {company.contact.phone}
                  </a>
                </div>
              )}

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-600" />

                <span className="text-gray-600">
                  {company.contact.address.country}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {currentYear} {company.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              href="/resources"
              className="transition hover:text-blue-600"
            >
              Resources
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
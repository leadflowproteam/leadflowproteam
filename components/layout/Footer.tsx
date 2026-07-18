import Link from "next/link";

import Container from "@/components/ui/Container";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              {company.name}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {company.slogan}
            </p>

            <p className="mt-6 text-sm text-gray-400">
              {company.contact.email}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white">
              Company
            </h4>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3">
              {company.services.map((service) => (
                <li key={service}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-3">
              <li>{company.contact.email}</li>

              {company.phone && (
                <li>{company.phone}</li>
              )}

              <li>
                Serving USA, Canada, UK & Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
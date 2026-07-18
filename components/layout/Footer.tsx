import Link from "next/link";

import Container from "@/components/ui/Container";
import { company } from "@/config/company";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {company.name}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {company.slogan}
            </p>

            <p className="mt-6 text-sm">
              {company.contact.email}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3">
              <li>eCommerce Websites</li>
              <li>Landing Pages</li>
              <li>Technical SEO</li>
              <li>AI Search Optimization</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Company
            </h4>

            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Resources
            </h4>

            <ul className="mt-5 space-y-3">
              <li>Blog</li>
              <li>Free Audit</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-8 text-sm md:flex-row">
          <p>
            © 2026 {company.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
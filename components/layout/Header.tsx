import Link from "next/link";

import MobileMenu from "@/components/layout/MobileMenu";
import { company } from "@/config/company";
import { navigation } from "@/config/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button>Book Free Audit</Button>
            </div>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
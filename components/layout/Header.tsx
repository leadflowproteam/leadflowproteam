import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-600">LeadFlow</span>
          <span className="text-gray-900">ProTeam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button>Free Audit</Button>
        </div>
      </Container>
    </header>
  );
}
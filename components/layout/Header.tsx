import Link from "next/link";

import { navigation } from "@/config/navigation";
import { company } from "@/config/company";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            {company.name}
          </Link>

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

          <div className="hidden lg:block">
            <Button>Free Audit</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
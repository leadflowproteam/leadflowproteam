import type { ReactNode } from "react";
import type { Viewport } from "next";

import "./globals.css";

import { metadata } from "@/lib/metadata";

export { metadata };

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
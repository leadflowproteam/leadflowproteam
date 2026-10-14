// middleware.ts — Nonce-based Content Security Policy (P15).
// Removes 'unsafe-inline' from script-src by generating a per-request
// nonce, passing it to Next.js via the request headers, and emitting
// the CSP header bound to that nonce. Inline scripts injected by
// Next.js itself automatically carry the nonce via the request header
// contract (`x-nonce` → CSP script-src 'nonce-...').

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateNonce(): string {
  // 16 bytes of random base64 — cryptographically strong.
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const binary = String.fromCharCode(...bytes);
  return btoa(binary);
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce();

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "base-uri 'self'",
    "object-src 'none'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt|manifest.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)).*)"],
};

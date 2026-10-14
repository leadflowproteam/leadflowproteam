import type { NextConfig } from "next";

// Content-Security-Policy:
// - default-src 'self' — everything must come from this origin by default.
// - script-src/style-src 'unsafe-inline' — Next.js injects inline bootstrap
//   and hydration scripts/styles (self.__next_f.push, RSC payload). Removing
//   'unsafe-inline' breaks hydration; nonce-based CSP requires middleware
//   and is a follow-up hardening step if desired.
// - font-src 'self' — next/font/google self-hosts fonts at build time, so
//   no fonts.gstatic.com is needed.
// - img-src data:/blob: — Next.js image optimizer and inline placeholders.
// - frame-ancestors 'self' — complements X-Frame-Options (Clickjacking).
// - form-action/base-uri 'self', object-src 'none' — no form hijacking,
//   no <object>/<embed>, no base tag hijacking.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: CSP,
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

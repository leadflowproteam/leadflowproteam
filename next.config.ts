import type { NextConfig } from "next";

// Content-Security-Policy is now emitted per-request by middleware.ts
// (P15) with a unique nonce on script-src. Do NOT add a static CSP here —
// sending two CSP headers would let the weaker (unsafe-inline) policy
// weaken the nonce-based one in some browsers.
// - style-src keeps 'unsafe-inline' (handled in middleware) because
//   Next.js inlines critical styles; scripts are nonce-gated.
// - font-src 'self' — next/font/google self-hosts fonts at build time.
// - img-src data:/blob: — Next.js image optimizer and inline placeholders.
// - frame-ancestors 'self' — complements X-Frame-Options (Clickjacking).

const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Cross-Origin isolation headers:
  // - COOP same-origin: pages cannot be interacted with cross-origin
  //   windows (blocks some XS-Leaks / tab-nabbing attacks).
  // - COEP require-corp: the document refuses cross-origin subresources
  //   lacking CORP headers. Safe because this repo loads no cross-origin
  //   subresources (verified: no third-party scripts/images/iframes).
  // - CORP same-origin: our own resources are protected from being
  //   embedded by other origins (complements CSP frame-ancestors).
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
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

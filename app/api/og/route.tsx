// app/api/og/route.tsx — Dynamic Open Graph image generator (P16-C).
// Renders per-page social cards on the fly with next/og (satori).
// Same-origin (img-src 'self' compliant) — no third-party service, CSP stays strict.
// Usage: /api/og?title=Your%20Page%20Title&subtitle=Optional%20Subtitle

import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "LeadFlowProTeam";
const BRAND_TAGLINE = "AI Search Visibility Agency";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get("title")?.slice(0, 120) || "See How AI Sees Your Business";
  const subtitle = searchParams.get("subtitle")?.slice(0, 120) || BRAND_TAGLINE;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "linear-gradient(135deg, #0b1f3a 0%, #0e2a4d 55%, #0f766e 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "#14b8a6",
                color: "#04241f",
                fontWeight: 800,
                fontSize: 30,
                marginRight: 20,
              }}
            >
              LF
            </div>
            {BRAND}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#5eead4",
              letterSpacing: 1,
            }}
          >
            leadflowproteam.com
          </div>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 30,
              color: "#a5f3fc",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex" }}>AI Search Visibility Audits</div>
          <div style={{ display: "flex" }}>Next.js · Schema · AEO/GEO</div>
        </div>
      </div>
    ),
    size,
  );
}

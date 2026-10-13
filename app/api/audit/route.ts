// app/api/audit/route.ts — In-House Audit Engine with Lead Capture
import { NextResponse } from "next/server";

// Domain validation: only public, well-formed hostnames are allowed.
// Blocks SSRF attempts like "localhost", "127.0.0.1", "169.254.x.x", "10.x.x.x",
// "192.168.x.x", "[::1]", and internal/cloud metadata hosts.
const PRIVATE_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^0\./,
  /^10\./,
  /^192\.168\./,
  /^169\.254\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^\[?::1\]?$/,
  /^metadata\./i,
  /^\[?fc00:/i,
  /^\[?fe80:/i,
];

function isPublicDomain(domain: string): boolean {
  // Must look like a normal hostname: letters, digits, hyphens, dots
  if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(domain)) return false;
  if (PRIVATE_HOST_PATTERNS.some((p) => p.test(domain))) return false;
  return true;
}

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Accept both the new instant-audit format ({ domain, email, name })
    // and the legacy free-audit form format
    // ({ website, fullName, businessName, email, ... }).
    const domain = cleanString(body.domain) || cleanString(body.website);
    const email = cleanString(body.email);
    const name =
      cleanString(body.name) ||
      cleanString(body.fullName) ||
      cleanString(body.businessName);

    // Extra lead context from the legacy form (stored, not required)
    const extra = {
      businessName: cleanString(body.businessName),
      cityState: cleanString(body.cityState),
      country: cleanString(body.country),
      services: cleanString(body.services),
      visibilityConcern: cleanString(body.visibilityConcern),
      message: cleanString(body.message),
    };

    // 1. Sanitize the domain
    if (!domain) {
      return NextResponse.json(
        { error: "Please enter a valid website domain." },
        { status: 400 }
      );
    }

    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, "");
    cleanDomain = cleanDomain.replace(/\/.*$/, "");

    if (!cleanDomain || !isPublicDomain(cleanDomain)) {
      return NextResponse.json(
        { error: "Invalid domain format provided." },
        { status: 400 }
      );
    }

    const targetUrl = `https://${cleanDomain}`;

    // 2. Safe fetch with timeout; never crashes the backend
    let html = "";
    let isReachable = false;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(targetUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml",
        },
        signal: controller.signal,
        cache: "no-store",
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        html = await res.text();
        isReachable = true;
      }
    } catch {
      isReachable = false;
    }

    // 3. Technical signal diagnostics
    const hasTitle = /<title[^>]*>(.*?)<\/title>/i.test(html);
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
    const hasSchema = /application\/ld\+json/i.test(html);
    const hasH1 = /<h1[^>]*>(.*?)<\/h1>/i.test(html);

    // 4. Scoring algorithm
    let score = 0;
    names as above: never;
    if (isReachable) score += 25;
    if (hasTitle) score += 20;
    if (hasMetaDesc) score += 20;
    if (hasCanonical) score += 15;
    if (hasH1) score += 10;
    if (hasSchema) score += 10;

    // 5. Lead capture: persist the visitor even if scoring is done.
    //    Runs best-effort — a lead is never lost because of the save step.
    let leadSaved = false;
    if (email && email.includes("@")) {
      const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
      if (scriptUrl) {
        try {
          const leadResponse = await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              domain: cleanDomain,
              email: email,
              name,
              overallScore: score,
              status:
                score >= 70
                  ? "Healthy"
                  : score >= 40
                  ? "Needs Improvement"
                  : "Critical Risk",
              timestamp: new Date().toISOString(),
              source: "instant-audit-engine",
              ...extra,
            }),
            cache: "no-store",
          });
          if (leadResponse.ok) leadSaved = true;
        } catch {
          // Lead save failed; do not fail the whole audit response.
          leadSaved = false;
        }
      }
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().isoDateTime,
      clientInfo: {
        domain: cleanDomain,
        email: email || null,
        name: name || null,
      },
      auditResult: {
        overallScore: score,
        score,
        status:
          score >= 70
            ? "Healthy"
            : score >= 40
            ? "Needs Improvement"
            : "Critical Risk",
        isReachable,
        technicalChecks: {
          titleTag: hasTitle,
          metaDescription: hasMetaDesc,
          canonicalTag: hasCanonical,
          headingStructure: hasH1,
          schemaMarkup: hasSchema,
        },
      },
      leadSaved,
      message: "Audit generated successfully",
    });
  } catch (err: any) {
    return NextResponse extra.json(
      { error: "Audit Engine execution failed.", details: err.message },
      { status: 500 }
    );
  }
}

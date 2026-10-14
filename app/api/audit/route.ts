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

    // Accept the instant-audit format ({ domain, email, name }),
    // the free-audit form format ({ website, fullName, businessName, ... }),
    // and the contact form format ({ fullName, company, email, website, ... }).
    const domain = cleanString(body.domain) || cleanString(body.website);
    const email = cleanString(body.email);
    const name =
      cleanString(body.name) ||
      cleanString(body.fullName) ||
      cleanString(body.businessName) ||
      cleanString(body.company);

    // Extra lead context from the free-audit and contact forms
    // (stored, not required). `source` is kept out of this object so it
    // can be set explicitly in the lead payload below.
    const extra = {
      businessName: cleanString(body.businessName) || cleanString(body.company),
      cityState: cleanString(body.cityState),
      country: cleanString(body.country),
      services: cleanString(body.services) || cleanString(body.service),
      visibilityConcern: cleanString(body.visibilityConcern),
      budget: cleanString(body.budget),
      message: cleanString(body.message),
    };

    const formSource = cleanString(body.source);

    // 1. Email is the minimum requirement for a lead.
    //    Even without a domain (contact form), the lead must be saved.
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // 2. Sanitize the domain (contact form may not include one)
    let cleanDomain = (domain || "").trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, "");
    cleanDomain = cleanDomain.replace(/\/.*$/, "");

    const hasDomain = Boolean(cleanDomain) && isPublicDomain(cleanDomain);

    let score = 0;
    let isReachable = false;
    let technicalChecks = {
      titleTag: false,
      metaDescription: false,
      canonicalTag: false,
      headingStructure: false,
      schemaMarkup: false,
    };

    // 3. If a domain is provided, fetch and score it (best effort).
    if (hasDomain) {
      const targetUrl = `https://${cleanDomain}`;

      let html = "";

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

      const hasTitle = /<title[^>]*>(.*?)<\/title>/i.test(html);
      const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
      const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
      const hasSchema = /application\/ld\+json/i.test(html);
      const hasH1 = /<h1[^>]*>(.*?)<\/h1>/i.test(html);

      technicalChecks = {
        titleTag: hasTitle,
        metaDescription: hasMetaDesc,
        canonicalTag: hasCanonical,
        headingStructure: hasH1,
        schemaMarkup: hasSchema,
      };

      if (isReachable) score += 25;
      if (hasTitle) score += 20;
      if (hasMetaDesc) score += 20;
      if (hasCanonical) score += 15;
      if (hasH1) score += 10;
      if (hasSchema) score += 10;
    }

    // 4. Lead capture: persist the visitor even if scoring is done.
    //    Runs best-effort — a lead is never lost because of the save step.
    let leadSaved = false;
    let leadSaveStatus = "skipped";
    let leadSaveDetail = "";

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (scriptUrl) {
      leadSaveStatus = "attempted";

      const leadSource =
        formSource === "contact-form" && hasDomain
          ? "contact-form-with-website"
          : formSource;

      try {
        const leadController = new AbortController();
        const leadTimeoutId = setTimeout(() => leadController.abort(), 8000);

        const leadResponse = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            domain: cleanDomain,
            email,
            name,
            // The Apps Script deployed at GOOGLE_APPS_SCRIPT_URL validates
            // `fullName` AND reads `website` (the direct test with `website`
            // succeeded; the API call without it failed). Send both
            // spellings so the currently deployed script accepts the lead
            // without needing a redeploy.
            fullName: name,
            website: cleanDomain,
            overallScore: score,
            status:
              score >= 70
                ? "Healthy"
                : score >= 40
                ? "Needs Improvement"
                : "Critical Risk",
            timestamp: new Date().toISOString(),
            source: leadSource,
            ...extra,
          }),
          signal: leadController.signal,
          cache: "no-store",
        });

        clearTimeout(leadTimeoutId);

        // Read the RAW text first. Apps Script web apps can return HTML
        // error pages or redirect bodies while still sending HTTP 200 —
        // in that case JSON.parse throws and the real cause is lost.
        // Capturing the raw body lets us see exactly what the script said.
        const rawText = await leadResponse.text();

        let scriptResult: Record<string, unknown> = {};
        let isJson = false;

        try {
          scriptResult = JSON.parse(rawText);
          isJson = true;
        } catch {
          isJson = false;
        }

        // Success is determined by the script's own payload, not the
        // HTTP status code (Apps Script always answers 200/302 → 200).
        const scriptOk = isJson && scriptResult["ok"] === true;

        if (scriptOk) {
          leadSaved = true;
          leadSaveStatus = "saved";
          leadSaveDetail = cleanString(scriptResult["message"]);
        } else {
          leadSaved = false;
          leadSaveStatus = isJson ? "script-returned-error" : "script-returned-non-json";

          if (isJson) {
            leadSaveDetail =
              cleanString(scriptResult["message"]) ||
              cleanString(scriptResult["error"]) ||
              "Script responded with JSON but without ok:true.";
          } else {
            // Show the first 200 chars of the raw body (often an HTML
            // login/redirect page) so the real cause is visible.
            const snippet = rawText.replace(/\s+/g, " ").slice(0, 200);
            leadSaveDetail =
              snippet || "Script returned an empty or non-JSON body.";
          }
        }
      } catch {
        // Lead save failed; do not fail the whole audit response.
        leadSaved = false;
        leadSaveStatus = "timeout-or-network-error";
        leadSaveDetail = "Apps Script call timed out or failed at network level.";
      }
    } else {
      leadSaveStatus = "not-configured";
      leadSaveDetail = "GOOGLE_APPS_SCRIPT_URL is not set in this environment.";
    }

    // Structured server-side log line — one line per submission,
    // greppable in Vercel logs for lead-capture debugging.
    console.log(
      JSON.stringify({
        event: "lead_submission",
        domain: cleanDomain,
        hasDomain,
        hasEmail: Boolean(email),
        score,
        leadSaved,
        leadSaveStatus,
        leadSaveDetail,
        timestamp: new Date().toISOString(),
      }),
    );

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      clientInfo: {
        domain: cleanDomain || null,
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
        technicalChecks,
      },
      leadSaved,
      leadSaveStatus,
      leadSaveDetail,
      message: "Audit generated successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Audit Engine execution failed.", details: err.message },
      { status: 500 }
    );
  }
}

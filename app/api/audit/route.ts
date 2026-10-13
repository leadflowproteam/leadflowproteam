// app/api/audit/route.ts — Bulletproof In-House Engine
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { domain, email, name } = body;

    // ১. স্যানিটাইজেশন
    if (!domain || typeof domain !== "string") {
      return NextResponse.json(
        { error: "Please enter a valid website domain." },
        { status: 400 }
      );
    }

    let cleanDomain = domain.trim().toLowerCase();
    cleanDomain = cleanDomain.replace(/^(https?:\/\/)?(www\.)?/, "");
    cleanDomain = cleanDomain.replace(/\/.*$/, ""); // রুট পাথ বাদ দেওয়া

    if (!cleanDomain) {
      return NextResponse.json(
        { error: "Invalid domain format provided." },
        { status: 400 }
      );
    }

    const targetUrl = `https://${cleanDomain}`;

    // ২. ফলব্যাক সহ সেফ ফেচ
    let html = "";
    let isReachable = false;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000); // ৬ সেকেন্ড টাইমআউট

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
    } catch (fetchErr) {
      // যদি সাইট টাইমআউট বা ব্লক করে, তাহলেও ব্যাকএন্ড ক্র্যাশ করবে না
      isReachable = false;
    }

    // ৩. টেকনিক্যাল সিগন্যাল ডায়াগনস্টিকস
    const hasTitle = /<title[^>]*>(.*?)<\/title>/i.test(html);
    const hasMetaDesc = /<meta[^>]*name=["']description["'][^>]*>/i.test(html);
    const hasCanonical = /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html);
    const hasSchema = /application\/ld\+json/i.test(html);
    const hasH1 = /<h1[^>]*>(.*?)<\/h1>/i.test(html);

    // ৪. স্কোরিং অ্যালগরিদম
    let score = 0;
    if (isReachable) score += 25;
    if (hasTitle) score += 20;
    if (hasMetaDesc) score += 20;
    if (hasCanonical) score += 15;
    if (hasH1) score += 10;
    if (hasSchema) score += 10;

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      clientInfo: {
        domain: cleanDomain,
        email: email || null,
        name: name || null,
      },
      auditResult: {
        overallScore: score,
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
      message: "Audit generated successfully",
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Audit Engine execution failed.", details: err.message },
      { status: 500 }
    );
  }
}
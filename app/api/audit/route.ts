import { NextResponse } from "next/server";

type AuditPayload = {
  fullName: string;
  businessName: string;
  email: string;
  website: string;
  cityState: string;
  country: string;
  services: string;
  visibilityConcern: string;
  message?: string;
};

function clean(value: unknown) {
  return String(value ?? "").trim();
}

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        {
          ok: false,
          message: "Audit intake is not configured yet.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as Partial<AuditPayload>;

    const payload: AuditPayload = {
      fullName: clean(body.fullName),
      businessName: clean(body.businessName),
      email: clean(body.email),
      website: clean(body.website),
      cityState: clean(body.cityState),
      country: clean(body.country),
      services: clean(body.services),
      visibilityConcern: clean(body.visibilityConcern),
      message: clean(body.message),
    };

    const requiredFields: Array<keyof AuditPayload> = [
      "fullName",
      "businessName",
      "email",
      "website",
      "cityState",
      "country",
      "services",
      "visibilityConcern",
    ];

    const missingField = requiredFields.find(
      (field) => !payload[field],
    );

    if (missingField) {
      return NextResponse.json(
        {
          ok: false,
          message: `Missing required field: ${missingField}`,
        },
        { status: 400 },
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "The audit request service returned an error.",
        },
        { status: 502 },
      );
    }

    const resultText = await response.text();

    let result: { ok?: boolean; message?: string } = {};

    try {
      result = JSON.parse(resultText);
    } catch {
      result = {};
    }

    if (result.ok === false) {
      return NextResponse.json(
        {
          ok: false,
          message:
            result.message ?? "The audit request could not be saved.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Audit request saved successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit the audit request. Please try again.",
      },
      { status: 500 },
    );
  }
}
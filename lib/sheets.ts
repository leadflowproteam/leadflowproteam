// lib/sheets.ts — Google Sheets direct-write module (P14-C).
// Replaces the public Apps Script /exec endpoint as the primary lead-save
// path. There is no public web-app URL to spam; the Vercel function
// authenticates as a Google service account and writes rows directly.
//
// Required environment variables (set in Vercel dashboard):
//   GOOGLE_SHEETS_PRIVATE_KEY      — service account private key (JSON "private_key", single line with \n escaped or raw)
//   GOOGLE_SHEETS_CLIENT_EMAIL     — service account email (xxx@xxx.iam.gserviceaccount.com)
//   GOOGLE_SHEETS_SPREADSHEET_ID   — target spreadsheet ID (from the sheet URL)
//   GOOGLE_SHEETS_SHEET_NAME       — tab name, e.g. "Leads" (optional, default "Leads")
//
// The service account must be granted Editor access to the spreadsheet
// (Share → add the service-account email as Editor).

type SheetsConfig = {
  privateKey: string;
  clientEmail: string;
  spreadsheetId: string;
  sheetName: string;
};

type LeadRow = {
  timestamp: string;
  email: string;
  name: string;
  domain: string;
  overallScore: number;
  status: string;
  source: string;
  businessName: string;
  cityState: string;
  country: string;
  services: string;
  visibilityConcern: string;
  budget: string;
  message: string;
};

function getSheetsConfig(): SheetsConfig | null {
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Leads";

  if (!privateKey || !clientEmail || !spreadsheetId) {
    return null;
  }

  // Vercel CLI/dashboard may deliver the key with literal "\n" sequences.
  const normalizedKey = privateKey.includes("\\n")
    ? privateKey.replace(/\\n/g, "\n")
    : privateKey;

  return { privateKey: normalizedKey, clientEmail, spreadsheetId, sheetName };
}

// Accepts both strings and Buffer/Uint8Array (e.g. signer.sign() output).
function base64url(input: string | Uint8Array | ArrayBuffer): string {
  const buf = Buffer.from(input);
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

// Minimal JWT (RS256) signer using Node's built-in crypto.
async function makeAccessToken(cfg: SheetsConfig): Promise<string> {
  const { createSign } = await import("node:crypto");

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: cfg.clientEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(
    JSON.stringify(claims),
  )}`;

  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  const signature = signer.sign(cfg.privateKey);
  const jwt = `${unsigned}.${base64url(signature)}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!tokenRes.ok) {
    throw new Error(`Google token exchange failed (HTTP ${tokenRes.status})`);
  }

  const tokenJson = (await tokenRes.json()) as { access_token?: string };
  if (!tokenJson.access_token) {
    throw new Error("Google token response missing access_token");
  }

  return tokenJson.access_token;
}

/**
 * Append one lead row to the spreadsheet.
 * Returns a human-readable status string for API diagnostics,
 * or throws on failure (caller decides fallback behavior).
 */
export async function appendLeadRow(lead: LeadRow): Promise<string> {
  const cfg = getSheetsConfig();
  if (!cfg) {
    throw new Error("Sheets credentials not configured");
  }

  const accessToken = await makeAccessToken(cfg);

  const range = cfg.sheetName;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${cfg.spreadsheetId}/values/${encodeURIComponent(
    range,
  )}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  const values = [[
    lead.timestamp, lead.email, lead.name, lead.domain,
    lead.overallScore, lead.status, lead.source, lead.businessName,
    lead.cityState, lead.country, lead.services, lead.visibilityConcern,
    lead.budget, lead.message,
  ]];

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values }),
  });

  if (!res.ok) {
    const detail = (await res.text()).replace(/\s+/g, " ").slice(0, 300);
    throw new Error(`Sheets append failed (HTTP ${res.status}): ${detail}`);
  }

  return "Lead appended to Google Sheet via service account.";
}

export function isSheetsConfigured(): boolean {
  return getSheetsConfig() !== null;
}

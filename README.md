# LeadFlowProTeam - Marketing Site

High-performance Next.js website for LeadFlowProTeam: AI-ready websites,
Technical SEO, and AI Search Visibility services for commercial businesses.

Built for SEO + GEO + AEO + AIO + LLMSEO discovery: structured data
(@graph JSON-LD), entity knowledge-graph architecture, FAQPage schema,
llms.txt, author E-E-A-T signals, and internal link engines.

## Getting Started

```bash
npm run dev
```

Open http://localhost:3000 with your browser.

## Environment Variables

Copy .env.example to .env.local for local development. Set the same
variables in Vercel (Project Settings > Environment Variables) for
production.

- GOOGLE_APPS_SCRIPT_URL - Lead capture: URL of the Google Apps Script
  Web App that appends audit-form submissions to the Leads Google Sheet
- NEXT_PUBLIC_SITE_URL - Public site URL used for canonical URLs

## Lead Capture Setup (Google Sheet)

Free-audit and instant-audit form submissions are POSTed to /api/audit.
When an email is present, the API forwards the lead to a Google Apps
Script Web App which appends a row to the Leads Google Sheet.

Setup steps:

1. Create a Google Sheet (e.g. LeadFlowProTeam Leads) with headers:
   Timestamp, Source, Domain, Email, Name, Business Name, City/State,
   Country, Services, Visibility Concern, Message, Score, Status
2. In the Sheet: Extensions > Apps Script, paste a doPost(e) handler
   that parses the incoming JSON and appends a row via appendRow.
3. Deploy > New deployment > Web app: execute as Me, access Anyone.
4. Copy the Web App URL and set it as GOOGLE_APPS_SCRIPT_URL
   in .env.local AND in Vercel environment variables.
5. Redeploy. Submit a test lead and confirm the row appears in the Sheet.

Diagnostics: the /api/audit response includes leadSaved and leadSaveStatus
(saved / not-configured / script-returned-XXX / timeout-or-network-error).
Every submission also logs one JSON line (event: audit_submission) to the
server logs, visible in Vercel under Logs.

## Deployment

Deployed on Vercel. Production deploys are triggered by merges to main.

## Learn More

- Next.js Documentation: https://nextjs.org/docs
- Deployment on Vercel: https://vercel.com/docs

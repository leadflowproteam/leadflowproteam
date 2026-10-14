# setup-lead-destination.ps1 — One-command lead-capture setup (P11 + P14-C).
#
# MODE 1 (SIMPLE — fixes P11 in ~2 minutes):
#   .\scripts\setup-lead-destination.ps1 -AppsScriptUrl "<correct /exec URL>"
#   Sets GOOGLE_APPS_SCRIPT_URL in Vercel production env and redeploys.
#
# MODE 2 (STRONG — P14-C, closes the public /exec door for good):
#   Prereq: Google Cloud service account JSON key + share the Sheet with
#   the service-account email as Editor.
#   .\scripts\setup-lead-destination.ps1 -KeyJsonPath "K:\keys\sa.json" -SpreadsheetId "<sheet id>"
#   Sets all 4 GOOGLE_SHEETS_* vars in Vercel production env and redeploys.
#
# Common prereq: Vercel CLI logged in and project linked
#   (npm i -g vercel; vercel login; vercel link) — run once.

param(
  [string]$KeyJsonPath,
  [string]$SpreadsheetId,
  [string]$SheetName = "Leads",
  [string]$AppsScriptUrl
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
  Write-Error "Vercel CLI not found. Run: npm i -g vercel  (then: vercel login; vercel link)"
  exit 1
}

function Set-EnvVar([string]$Name, [string]$Value) {
  Write-Host "Setting $Name ..." -ForegroundColor Cyan
  # Remove existing value first so re-runs don't fail on duplicates.
  vercel env rm $Name production --yes 2>$null | Out-Null
  $Value | vercel env add $Name production
  if ($LASTEXITCODE -ne 0) { Write-Error "Failed to set $Name"; exit 1 }
}

if ($AppsScriptUrl) {
  # ---------------- MODE 1: SIMPLE ----------------
  if ($AppsScriptUrl -notmatch "^https://script\.google\.com/macros/s/AKfycbwrOvUU.+\/exec$") {
    Write-Warning "URL does not start with the expected AKfycbwrOvUU... prefix. Continuing anyway — please double-check."
  }
  Set-EnvVar "GOOGLE_APPS_SCRIPT_URL" $AppsScriptUrl
  Write-Host "Redeploying production ..." -ForegroundColor Cyan
  vercel deploy --prod --yes
  Write-Host ""
  Write-Host "DONE. Now submit the form at https://www.leadflowproteam.com/free-audit" -ForegroundColor Green
  Write-Host "and confirm leadSaveStatus is 'saved' + a new row appears in the Leads sheet."
  exit 0
}

if ($KeyJsonPath -and $SpreadsheetId) {
  # ---------------- MODE 2: STRONG ----------------
  if (-not (Test-Path $KeyJsonPath)) { Write-Error "Key file not found: $KeyJsonPath"; exit 1 }

  $json = Get-Content $KeyJsonPath -Raw | ConvertFrom-Json
  $clientEmail = $json.client_email
  if (-not $clientEmail) { Write-Error "client_email missing in JSON key"; exit 1 }

  # Convert real newlines in the private key to literal \n so the env var
  # stays single-line. The app (lib/sheets.ts) normalizes it back.
  $privateKey = $json.private_key.Replace("`n", "\n")

  Write-Host "Service account: $clientEmail" -ForegroundColor Yellow
  Write-Host "IMPORTANT: share the spreadsheet with this email as Editor if not done already."
  $confirm = Read-Host "Sheet shared? (y/n)"
  if ($confirm -ne "y") { Write-Host "Share it first, then re-run."; exit 1 }

  Set-EnvVar "GOOGLE_SHEETS_CLIENT_EMAIL" $clientEmail
  Set-EnvVar "GOOGLE_SHEETS_PRIVATE_KEY" $privateKey
  Set-EnvVar "GOOGLE_SHEETS_SPREADSHEET_ID" $SpreadsheetId
  Set-EnvVar "GOOGLE_SHEETS_SHEET_NAME" $SheetName

  Write-Host "Redeploying production ..." -ForegroundColor Cyan
  vercel deploy --prod --yes
  Write-Host ""
  Write-Host "DONE. Submit the form at https://www.leadflowproteam.com/free-audit" -ForegroundColor Green
  Write-Host "Expected response: leadSaveStatus 'saved', leadSaveDetail 'sheets-direct: ...'"
  exit 0
}

Write-Host "No mode selected. Use -AppsScriptUrl <url> (simple) OR -KeyJsonPath <file> -SpreadsheetId <id> (strong)."
exit 1

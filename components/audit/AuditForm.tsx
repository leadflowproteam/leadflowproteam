"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, Loader2, RefreshCw } from "lucide-react";

interface AuditResult {
  success: boolean;
  timestamp: string;
  clientInfo: {
    domain: string;
    email: string | null;
    name: string | null;
  };
  auditResult: {
    overallScore: number;
    status: string;
    isReachable: boolean;
    technicalChecks: {
      titleTag: boolean;
      metaDescription: boolean;
      canonicalTag: boolean;
      headingStructure: boolean;
      schemaMarkup: boolean;
    };
  };
  message?: string;
}

export default function AuditForm() {
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          domain: domain.trim(),
          email: email ? email.trim() : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to submit your audit request.");
      }

      setResult(data);
    } catch (err: any) {
      console.error("Audit Intake Error:", err);
      setError(
        err.message || "Unable to submit your audit request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!result ? (
        <form
          onSubmit={handleAuditSubmit}
          className="space-y-5 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Website Domain <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none text-gray-900 transition text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Work Email <span className="text-gray-400 font-normal">(To receive detailed report)</span>
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:outline-none text-gray-900 transition text-base"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Failed</p>
                <p className="text-xs text-red-600 mt-0.5">{error}</p>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-200 disabled:opacity-60 shadow-md shadow-blue-500/20 text-base"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Running Audit Engine...</span>
              </>
            ) : (
              <>
                <span>Run Instant AI Visibility Audit</span>
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* Instant Live Audit Score Display */
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-lg text-left space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-5">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Audit Complete
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                {result.clientInfo?.domain}
              </h3>
            </div>
            <div className="text-right">
              <div className="flex items-baseline justify-end gap-1">
                <span className="text-4xl font-black text-blue-600">
                  {result.auditResult?.overallScore}
                </span>
                <span className="text-gray-400 font-bold text-lg">/100</span>
              </div>
              <p
                className={`text-xs font-bold mt-1 ${
                  result.auditResult?.overallScore >= 70
                    ? "text-green-600"
                    : result.auditResult?.overallScore >= 40
                    ? "text-amber-600"
                    : "text-red-600"
                }`}
              >
                {result.auditResult?.status}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500">
              Technical Signal Diagnostics
            </h4>
            <div className="grid gap-3">
              {Object.entries(result.auditResult?.technicalChecks || {}).map(
                ([key, val]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between text-sm p-3.5 rounded-xl border border-gray-100 bg-gray-50/50"
                  >
                    <span className="font-medium text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    {val ? (
                      <span className="text-green-600 font-bold text-xs flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="h-4 w-4" /> Passed
                      </span>
                    ) : (
                      <span className="text-red-500 font-bold text-xs flex items-center gap-1.5 bg-red-50 px-2.5 py-1 rounded-md">
                        <AlertTriangle className="h-4 w-4" /> Missing Signal
                      </span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setResult(null);
                setDomain("");
                setEmail("");
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 py-3 px-4 rounded-xl transition"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Audit Another Website Domain</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
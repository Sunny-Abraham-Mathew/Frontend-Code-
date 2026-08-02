"use client";

import React, { useState } from "react";
import {
  Shield,
  X,
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Check,
  AlertTriangle,
  RefreshCw,
  Copy
} from "lucide-react";

interface ScannerModalProps {
  urlInput: string;
  isScanning: boolean;
  scanProgress: number;
  scanStep: number;
  scanSteps: string[];
  onClose: () => void;
  onRescan: () => void;
}

export function ScannerModal({
  urlInput,
  isScanning,
  scanProgress,
  scanStep,
  scanSteps,
  onClose,
  onRescan,
}: ScannerModalProps) {
  const [copiedReport, setCopiedReport] = useState(false);

  const handleCopyReport = () => {
    const reportText = `Fortexa Security Audit Report for ${urlInput}\nOverall Score: 94/100 (Grade A)\nSSL/TLS: Valid TLS 1.3\nOWASP Audit: Passed\nHSTS: Enforced\nWarnings: 1 Low Risk (Missing Content Security Policy Header)`;
    navigator.clipboard.writeText(reportText);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  const auditFindings = [
    {
      name: "SSL/TLS Encryption Certificate",
      status: "Passed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold",
      details: "Valid RSA 2048-bit certificate issued by Let's Encrypt. TLS 1.3 enforced."
    },
    {
      name: "OWASP Vulnerability Injection Test",
      status: "Passed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold",
      details: "No SQLi, Reflective XSS, or Command Injection vulnerabilities detected."
    },
    {
      name: "HSTS (Strict-Transport-Security)",
      status: "Passed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold",
      details: "max-age=31536000; includeSubDomains; preload enabled."
    },
    {
      name: "Content Security Policy (CSP)",
      status: "Warning",
      badgeClass: "bg-amber-100 text-amber-800 border-amber-300 font-bold",
      details: "Content-Security-Policy header not present. Recommended to prevent inline script execution."
    },
    {
      name: "Exposed Infrastructure Ports",
      status: "Passed",
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold",
      details: "Ports 80 & 443 active. Sensitive management ports (22, 3306, 5432) are secured."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200" role="dialog" aria-modal="true">
      <div className="glass-panel-glow max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-slate-300 flex flex-col gap-6 max-h-[90vh] overflow-y-auto relative shadow-2xl bg-white">
        
        {/* Close Modal Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close vulnerability report dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center">
            <Shield className="w-6 h-6 text-slate-900" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Security Vulnerability Assessment</h3>
            <p className="text-slate-600 text-sm flex items-center gap-2 font-medium">
              <span>Target:</span>
              <span className="text-slate-900 font-mono font-bold">{urlInput}</span>
            </p>
          </div>
        </div>

        {/* Scanning Progress Bar */}
        {isScanning ? (
          <div className="flex flex-col gap-6 py-8 px-4 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-slate-200 animate-spin border-t-slate-900" />
                <Shield className="w-10 h-10 text-slate-900 animate-pulse" />
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-black text-slate-900">{scanProgress}%</span>
                <span className="text-slate-600 text-sm font-medium">Scanning target infrastructure...</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="h-full bg-slate-900 transition-all duration-300 rounded-full"
                style={{ width: `${scanProgress}%` }}
              />
            </div>

            {/* Live Console Log Box */}
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 text-left font-mono text-xs sm:text-sm text-slate-200 flex flex-col gap-2 shadow-inner">
              <div className="flex items-center gap-2 text-slate-400 border-b border-slate-800 pb-2">
                <Terminal className="w-4 h-4 text-slate-300" />
                <span className="font-semibold text-xs uppercase">Scan Engine Console Log</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 pt-1">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{scanSteps[scanStep]}</span>
              </div>
            </div>
          </div>
        ) : (
          /* SCAN COMPLETED REPORT VIEW */
          <div className="flex flex-col gap-6 animate-in fade-in duration-300">
            
            {/* Score & Summary Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Overall Score */}
              <div className="glass-panel p-5 rounded-2xl border border-emerald-300 flex items-center justify-between bg-emerald-50/80">
                <div>
                  <div className="text-slate-600 text-xs font-bold uppercase">Security Score</div>
                  <div className="text-4xl font-black text-emerald-700 mt-1">94 <span className="text-lg text-emerald-600">/ 100</span></div>
                  <div className="text-emerald-800 text-xs mt-1 font-bold">Grade A (Excellent)</div>
                </div>
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-emerald-700" />
                </div>
              </div>

              {/* Passed Checks */}
              <div className="glass-panel p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-slate-600 text-xs font-bold uppercase">Tests Passed</div>
                  <div className="text-3xl font-black text-slate-900 mt-1">18 / 19</div>
                  <div className="text-slate-600 text-xs mt-1 font-medium">SSL, Headers, Port Check</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center">
                  <Check className="w-6 h-6 text-slate-900" />
                </div>
              </div>

              {/* Potential Warning */}
              <div className="glass-panel p-5 rounded-2xl border border-amber-300 flex items-center justify-between bg-amber-50/80">
                <div>
                  <div className="text-slate-600 text-xs font-bold uppercase">Warnings Identified</div>
                  <div className="text-3xl font-black text-amber-700 mt-1">1 Low Risk</div>
                  <div className="text-amber-800 text-xs mt-1 font-bold">Missing CSP Header</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-amber-700" />
                </div>
              </div>

            </div>

            {/* Detailed Findings List */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Automated Audit Breakdown</h4>

              {auditFindings.map((finding, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-200 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 text-sm sm:text-base">{finding.name}</span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium">{finding.details}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${finding.badgeClass} shrink-0`}>
                    {finding.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Modal Footer Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button 
                  onClick={onRescan}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors cursor-pointer min-h-[44px]"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Run Re-scan</span>
                </button>

                <button 
                  onClick={handleCopyReport}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors cursor-pointer min-h-[44px]"
                >
                  {copiedReport ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
              </div>

              <div className="w-full sm:w-auto flex items-center gap-3">
                <button 
                  onClick={onClose}
                  className="w-full sm:w-auto btn-solid-dark px-6 py-2.5 rounded-xl font-bold text-sm text-white shadow-md cursor-pointer min-h-[44px]"
                >
                  Close Summary
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

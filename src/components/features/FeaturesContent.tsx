"use client";

import React from "react";
import { ShieldAlert, Lock, Server, Cpu, Activity, FileText } from "lucide-react";

export function FeaturesContent() {
  const featuresList = [
    {
      icon: ShieldAlert,
      title: "Vulnerability Scanning",
      desc: "Scans for OWASP Top 10 vulnerabilities including SQL injection, XSS, CSRF, and remote code execution exploits."
    },
    {
      icon: Lock,
      title: "SSL / TLS Audit",
      desc: "Checks certificate chain validity, revocation lists, cipher suite strength, and TLS version compatibility."
    },
    {
      icon: Server,
      title: "Header & Port Analysis",
      desc: "Inspects HTTP response headers (CSP, HSTS, X-Frame-Options) and evaluates exposed infrastructure ports."
    },
    {
      icon: Cpu,
      title: "Automated Heuristics",
      desc: "AI-assisted pattern recognition that detects zero-day misconfigurations and malicious script injections."
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      desc: "Schedule automated daily or weekly security audits with instant email and webhook alerts for regressions."
    },
    {
      icon: FileText,
      title: "Compliance Reports",
      desc: "Generate auditor-ready compliance reports tailored for ISO 27001, SOC2, HIPAA, and PCI-DSS standards."
    }
  ];

  return (
    <div className="flex flex-col gap-16 text-left max-w-6xl mx-auto py-4 animate-in fade-in duration-500">
      
      {/* 3-Step Process Header (From 1st Reference Image) */}
      <div className="flex flex-col gap-4">
        <span className="text-purple-700 text-xs font-bold uppercase tracking-widest">
          From Scan to Continuous Security
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight max-w-4xl">
          Our platform automatically scans, detects, and helps you fix vulnerabilities so your product stays secure at every stage of deployment.
        </h2>
      </div>

      {/* 3-Card Grid (Scan, Detect, Remediate) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Scan */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Scan</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Automatically analyze your application across every deployment. Run deep security checks in seconds – no setup complexity, no manual effort.
            </p>
          </div>
          <div className="mt-8 p-4 rounded-2xl bg-slate-900 text-white text-xs font-mono flex items-center justify-between">
            <span>Intel Feed</span>
            <span className="text-purple-400 font-bold">24 events</span>
          </div>
        </div>

        {/* Card 2: Detect (Dark Card) */}
        <div className="p-8 rounded-3xl border border-slate-800 bg-slate-900 text-white flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Detect</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Identify vulnerabilities, misconfigurations, and risks in real time. Get clear, actionable insights with prioritized issues and developer-friendly explanations.
            </p>
          </div>
          <div className="mt-8 p-4 rounded-2xl bg-slate-800 border border-slate-700 text-xs font-bold text-rose-400 flex items-center justify-between">
            <span>High Risk Assessment</span>
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300">[4]</span>
          </div>
        </div>

        {/* Card 3: Remediate (Purple Card) */}
        <div className="p-8 rounded-3xl border border-purple-500/40 bg-purple-600 text-white flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Remediate</h3>
            <p className="text-purple-100 text-sm leading-relaxed font-medium">
              Fix issues faster with guided recommendations and integrations. Track progress, verify fixes, and continuously improve your security posture.
            </p>
          </div>
          <div className="mt-8 p-4 rounded-2xl bg-purple-700/60 border border-purple-400/40 text-xs font-bold text-white flex items-center justify-between">
            <span>Auto Fix Scripting</span>
            <span className="text-purple-200">Active</span>
          </div>
        </div>

      </div>

      {/* Secondary 6-Feature Suite Grid */}
      <div className="pt-8 border-t border-slate-200 flex flex-col gap-8">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Comprehensive Vulnerability Detection Suite
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresList.map((feat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all hover:-translate-y-1 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-4">
                <feat.icon className="w-6 h-6 text-purple-700" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feat.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

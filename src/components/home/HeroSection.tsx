"use client";

import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Target, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onStartScan: (targetUrl?: string, e?: React.FormEvent) => void;
}

export function HeroSection({ onStartScan }: HeroSectionProps) {
  const [urlInput, setUrlInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartScan(urlInput, e);
  };

  return (
    <div className="w-full flex flex-col items-center text-center pt-6 pb-12">
      {/* Centered Main Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl">
        Application <span className="text-purple-400">Security Scanning</span> for Modern Teams
      </h1>

      {/* Subtitle */}
      <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed font-medium">
        Identify vulnerabilities, track remediation, and prove compliance – across every deployment. 102+ passive security checks, actionable results in under 2 minutes.
      </p>

      {/* Centered URL Input Bar */}
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-xl mx-auto">
        <div className="rounded-2xl p-1.5 flex items-center gap-2 border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl focus-within:border-white/30 transition-all">
          <input
            type="url"
            placeholder="Enter URL to scan..."
            aria-label="Enter website URL for scanning"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="bg-transparent text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none w-full px-4 py-2 font-medium"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap min-h-[44px]"
          >
            <span>Scan</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Floating Cyber Glass Cards Section (Over Globe Artwork) */}
      <div className="mt-16 w-full max-w-5xl relative min-h-[340px] flex items-center justify-center">
        
        {/* Floating Card 1: Left Security Score Card */}
        <div className="absolute left-0 sm:left-4 top-4 z-20 w-72 sm:w-80 rounded-3xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl text-left transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold mb-4 shadow-sm">
            Security Score
          </div>
          <div className="text-5xl font-black text-white tracking-tight mb-2">
            92.4
          </div>
          <p className="text-slate-300 text-xs font-medium leading-relaxed mb-4">
            Excellent security score. Your application is secure.
          </p>
          
          {/* Animated Wave Graph */}
          <div className="w-full h-12 relative overflow-hidden">
            <svg viewBox="0 0 300 50" className="w-full h-full stroke-purple-400 fill-none stroke-2">
              <path d="M0 30 Q 30 10, 60 35 T 120 20 T 180 40 T 240 15 T 300 30" />
            </svg>
          </div>
        </div>

        {/* Center Floating Badges */}
        <div className="hidden md:flex flex-col items-center gap-6 z-20 pointer-events-none">
          {/* Badge Top Left */}
          <div className="px-4 py-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl text-white text-xs font-bold flex items-center gap-2 shadow-xl -translate-x-12">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>102+ Checks</span>
          </div>

          {/* Badge Top Right */}
          <div className="px-4 py-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl text-white text-xs font-bold flex items-center gap-2 shadow-xl translate-x-12">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            <span>0 Critical</span>
          </div>

          {/* Badge Bottom */}
          <div className="px-4 py-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl text-white text-xs font-bold flex items-center gap-2 shadow-xl">
            <Target className="w-4 h-4 text-purple-400" />
            <span>Real-time Scanning</span>
          </div>
        </div>

        {/* Floating Card 2: Right Recent Findings Card */}
        <div className="absolute right-0 sm:right-4 top-4 z-20 w-72 sm:w-80 rounded-3xl p-6 border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl text-left transform rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-sm font-bold text-white mb-4 tracking-wide">
            Recent Findings
          </h3>

          <div className="flex flex-col gap-3">
            {/* Finding Item 1 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Outdated dependency found</span>
              </div>
              <span className="text-[11px] text-purple-300 pl-4 font-semibold">High severity</span>
            </div>

            {/* Finding Item 2 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>X-Frame-Options Header not set</span>
              </div>
              <span className="text-[11px] text-slate-400 pl-4 font-semibold">Medium severity</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-300">
              Secure your application with real-time insights.
            </span>
            <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 ml-2 shadow-md">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

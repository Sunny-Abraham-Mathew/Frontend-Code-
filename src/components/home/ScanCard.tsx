"use client";

import React from "react";
import { Shield, Link as LinkIcon, ArrowRight, Search, ShieldCheck, Zap } from "lucide-react";

interface ScanCardProps {
  urlInput: string;
  setUrlInput: (url: string) => void;
  onStartScan: (targetUrl?: string, e?: React.FormEvent) => void;
  isScanning: boolean;
}

export function ScanCard({ urlInput, setUrlInput, onStartScan, isScanning }: ScanCardProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartScan(urlInput, e);
  };

  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-end">
      <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 max-w-md w-full relative overflow-hidden border border-slate-200/90 bg-white/95 shadow-2xl">
        {/* Laser Scan Beam Accent during Active Scan */}
        {isScanning && (
          <div className="absolute left-0 right-0 h-1 bg-slate-900 shadow-[0_0_15px_#0f172a] animate-laser-sweep z-20 pointer-events-none" />
        )}

        {/* Illuminated Circular Icon */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center shadow-md mb-4">
              <Shield className="w-8 h-8 text-slate-900" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Scan Your Website
          </h2>
        </div>

        {/* Form & Actions */}
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="card-url-input-component" className="text-slate-700 text-xs font-bold uppercase tracking-wider text-left">
              URL
            </label>
            <div className="glass-input rounded-xl px-4 py-3 flex items-center gap-3 border border-slate-300 bg-white text-slate-900 focus-within:border-slate-800 focus-within:ring-2 focus-within:ring-slate-200 transition-all">
              <LinkIcon className="w-4 h-4 text-slate-500 shrink-0" />
              <input
                id="card-url-input-component"
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://url.com"
                className="bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none w-full font-semibold"
                required
              />
            </div>
          </div>

          {/* Start Scan Button */}
          <button
            type="submit"
            className="mt-2 btn-solid-dark text-white py-3.5 px-6 rounded-xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg group cursor-pointer min-h-[48px]"
          >
            <span>Start Scan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divider line */}
        <div className="my-6 border-t border-slate-200" />

        {/* Bottom 3 Feature Highlights */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-default">
            <Search className="w-5 h-5 text-slate-800" />
            <span className="text-xs font-semibold text-slate-700">Deep Scan</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-default">
            <ShieldCheck className="w-5 h-5 text-slate-800" />
            <span className="text-xs font-semibold text-slate-700">Safe & Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-default">
            <Zap className="w-5 h-5 text-slate-800" />
            <span className="text-xs font-semibold text-slate-700">Instant Results</span>
          </div>
        </div>
      </div>
    </div>
  );
}

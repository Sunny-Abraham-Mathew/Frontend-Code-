"use client";

import React from "react";

export function AboutContent() {
  const stats = [
    { label: "Websites Scanned", val: "2.4M+" },
    { label: "Threats Identified", val: "850K+" },
    { label: "Scan Speed", val: "< 15s" },
    { label: "Global Accuracy", val: "99.8%" }
  ];

  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto py-4 text-center animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Empowering Developers to Build Secure Web Software</h2>
        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium text-base sm:text-lg">
          Fortexa was created with a single objective: to make enterprise-grade website vulnerability detection accessible, transparent, and instant for every developer and organization worldwide.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-3xl font-black text-gradient-purple mb-1">{stat.val}</div>
            <div className="text-slate-600 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

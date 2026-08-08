"use client";

import React from "react";

export function BlogsContent() {
  const blogPosts = [
    {
      tag: "Vulnerability Research",
      title: "Understanding Modern Cross-Site Scripting (XSS) Patterns in Next.js 15",
      date: "Aug 01, 2026",
      read: "5 min read",
      desc: "How client component boundaries and dynamic API routes impact script injection vectors."
    },
    {
      tag: "Infrastructure",
      title: "Hardening Content Security Policy (CSP) Headers for Web Apps",
      date: "Jul 28, 2026",
      read: "8 min read",
      desc: "Practical steps to enforce strict nonce-based CSP without breaking third-party scripts."
    },
    {
      tag: "Best Practices",
      title: "Top 5 Misconfigurations in Cloudflare & AWS WAF Deployments",
      date: "Jul 22, 2026",
      read: "6 min read",
      desc: "Common edge proxy pitfalls that leak backend IP addresses to public scanners."
    }
  ];

  return (
    <div className="flex flex-col gap-10 text-center max-w-5xl mx-auto py-4 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">Latest Cyber Threat Analysis</h2>
        <p className="text-slate-700 max-w-2xl mx-auto font-medium text-base sm:text-lg">
          Stay updated with deep dives, vulnerability breakdowns, and security best practices from our research team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-purple-300 transition-all hover:-translate-y-1 cursor-pointer shadow-sm">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">{post.tag}</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3 leading-snug">{post.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">{post.desc}</p>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200">
              <span>{post.date}</span>
              <span>{post.read}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React from "react";

export function TrustedLogos() {
  return (
    <div className="w-full max-w-7xl mx-auto my-6 px-4 sm:px-8 relative z-20">
      <div className="glass-panel rounded-3xl py-6 px-6 sm:px-10 border border-slate-200/90 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out bg-white/90">
        <div className="flex flex-col items-center gap-6">
          <span className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest text-center">
            Trusted by security-conscious teams
          </span>

          {/* Brand Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-85 filter grayscale hover:grayscale-0 transition-all duration-300">
            
            {/* Google */}
            <div className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-800">
              <svg className="w-6 h-6" viewBox="0 0 24 24" aria-label="Google Logo">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Google</span>
            </div>

            {/* Microsoft */}
            <div className="flex items-center gap-2.5 text-xl font-black tracking-tight text-slate-800">
              <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                <div className="bg-[#F25022]" />
                <div className="bg-[#7FBA00]" />
                <div className="bg-[#00A4EF]" />
                <div className="bg-[#FFB900]" />
              </div>
              <span>Microsoft</span>
            </div>

            {/* Cloudflare */}
            <div className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-800">
              <svg className="w-7 h-7 text-[#F38020]" fill="currentColor" viewBox="0 0 24 24" aria-label="Cloudflare Logo">
                <path d="M16.9 14.5c.3-.5.5-1.1.5-1.7 0-1.8-1.5-3.3-3.3-3.3-.4 0-.8.1-1.1.2C12.3 7.3 10.3 6 8 6 5.2 6 3 8.2 3 11c0 .4.1.8.2 1.2C1.4 12.8 0 14.4 0 16.5 0 19 2 21 4.5 21h14c2.5 0 4.5-2 4.5-4.5 0-1.9-1.2-3.5-2.9-4.2-.1.4-.1.8-.2 1.2z" />
              </svg>
              <span className="font-extrabold uppercase tracking-wider text-base">CLOUDFLARE</span>
            </div>

            {/* Amazon */}
            <div className="flex items-center gap-1.5 text-xl font-black tracking-tight text-slate-800">
              <span className="font-extrabold tracking-tighter text-2xl">amazon</span>
            </div>

            {/* OVHcloud */}
            <div className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-800">
              <div className="w-6 h-6 rounded bg-sky-600 text-white font-black flex items-center justify-center text-xs">
                OVH
              </div>
              <span className="font-bold tracking-tight">OVHcloud</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

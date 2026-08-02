"use client";

import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-10 px-4 sm:px-8 mt-16 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-black text-slate-900 tracking-wider">Fortexa</span>
          <span className="text-slate-500 text-xs sm:text-sm font-medium">© {new Date().getFullYear()} Fortexa Security. All rights reserved.</span>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600">
          <Link href="/#features" className="hover:text-slate-900 transition-colors">Solutions</Link>
          <Link href="/team" className="hover:text-slate-900 transition-colors">Team</Link>
          <Link href="/#blogs" className="hover:text-slate-900 transition-colors">Blogs</Link>
          <Link href="/#faq" className="hover:text-slate-900 transition-colors">FAQ</Link>
          <Link href="/#about" className="hover:text-slate-900 transition-colors">About Us</Link>
          <Link href="/login" className="hover:text-slate-900 transition-colors">Login</Link>
        </div>

      </div>
    </footer>
  );
}

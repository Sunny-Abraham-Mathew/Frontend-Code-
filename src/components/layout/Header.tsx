"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, ArrowUpRight, LogIn } from "lucide-react";

interface HeaderProps {
  onStartScan?: () => void;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export function Header({ activeSection = "home", setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDarkThemePage = pathname === "/" || pathname === "/login" || pathname === "/register";
  const isHomePage = pathname === "/";

  const navItems = [
    { name: "Product", id: "home", href: "/#home" },
    { name: "Solutions", id: "features", href: "/#features" },
    { name: "Team", id: "team", href: "/team" },
    { name: "Blogs", id: "blogs", href: "/#blogs" },
    { name: "FAQ", id: "faq", href: "/#faq" },
    { name: "About Us", id: "about", href: "/#about" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (setActiveSection) {
      setActiveSection(item.id);
    }
    setMobileMenuOpen(false);

    if (isHomePage && item.href.startsWith("/#")) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 pt-4 pb-2 px-4 sm:px-8 max-w-7xl w-full mx-auto relative z-40">
      <div
        className={`rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-xl transition-all duration-300 ${
          isDarkThemePage
            ? "border border-white/10 bg-black/40 backdrop-blur-xl text-white"
            : "border border-slate-200/90 bg-white/95 backdrop-blur-xl text-slate-900 shadow-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => handleNavClick(navItems[0])}
          className="flex items-center gap-3 cursor-pointer group text-left focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          aria-label="Fortexa Security Home"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${
              isDarkThemePage
                ? "bg-purple-600/30 border border-purple-500/40"
                : "bg-slate-900 text-white"
            }`}
          >
            <Shield className={`w-5 h-5 ${isDarkThemePage ? "text-purple-400 fill-purple-400/20" : "text-white"}`} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isDarkThemePage ? "text-white" : "text-slate-900"}`}>
            Fortexa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (isHomePage && activeSection === item.id);
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (isHomePage && item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item);
                  }
                }}
                className={`relative py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 rounded px-1 ${
                  isActive
                    ? isDarkThemePage ? "text-white font-bold" : "text-slate-900 font-extrabold"
                    : isDarkThemePage ? "text-slate-400 hover:text-white" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
              isDarkThemePage
                ? "text-slate-300 hover:text-white hover:bg-white/10"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className={`px-5 py-2 rounded-lg font-bold text-xs flex items-center gap-1 shadow-md transition-all cursor-pointer min-h-[40px] ${
              isDarkThemePage
                ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-600/30"
                : "btn-solid-dark text-white shadow-slate-900/20"
            }`}
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center ${
            isDarkThemePage ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
          }`}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden mt-3 rounded-2xl p-4 flex flex-col gap-3 border backdrop-blur-xl animate-in fade-in slide-in-from-top-2 ${
            isDarkThemePage
              ? "border-white/10 bg-black/90 text-white"
              : "border-slate-200 bg-white/95 text-slate-900 shadow-xl"
          }`}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (isHomePage && activeSection === item.id);
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (isHomePage && item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
                className={`text-left py-2.5 px-4 rounded-xl text-base font-semibold cursor-pointer ${
                  isActive
                    ? isDarkThemePage
                      ? "bg-purple-600/40 text-white font-bold border border-purple-500/40"
                      : "bg-slate-100 text-slate-900 font-extrabold border border-slate-300"
                    : isDarkThemePage
                    ? "text-slate-300 hover:bg-white/10"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 rounded-xl font-bold text-sm text-center border ${
                isDarkThemePage
                  ? "border-white/20 text-slate-300 hover:bg-white/10"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 rounded-xl font-bold text-sm text-center text-white shadow-md flex items-center justify-center gap-1 ${
                isDarkThemePage ? "bg-purple-600" : "btn-solid-dark"
              }`}
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

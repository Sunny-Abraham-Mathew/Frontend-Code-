"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { FeaturesContent } from "@/components/features/FeaturesContent";
import { BlogsContent } from "@/components/blogs/BlogsContent";
import { FaqContent } from "@/components/faq/FaqContent";
import { AboutContent } from "@/components/about/AboutContent";
import { ScannerModal } from "@/components/scanner/ScannerModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [urlInput, setUrlInput] = useState("https://example.com");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState(0);
  const [showReportModal, setShowReportModal] = useState(false);

  const scanSteps = [
    "Initializing threat intelligence engines...",
    "Verifying Domain & DNS records...",
    "Inspecting SSL/TLS certificate validity & cipher strength...",
    "Scanning OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)...",
    "Analyzing HTTP Security Headers & Content Security Policy...",
    "Checking server port exposure & misconfigurations...",
    "Compiling final threat assessment report...",
  ];

  const handleStartScan = (targetOverride?: string, e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const targetUrl = targetOverride || urlInput.trim() || "https://example.com";
    setUrlInput(targetUrl);
    setIsScanning(true);
    setScanProgress(0);
    setScanStep(0);
    setShowReportModal(true);
  };

  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 9) + 5;
        const currentStep = Math.min(
          Math.floor((next / 100) * scanSteps.length),
          scanSteps.length - 1
        );
        setScanStep(currentStep);
        return next > 100 ? 100 : next;
      });
    }, 160);

    return () => clearInterval(interval);
  }, [isScanning]);

  // Scroll observer to update active header tab automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "blogs", "faq", "about"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      
      {/* 100vh HERO SECTION WITH CLEAN GLOWING BLUE/PURPLE GLOBE */}
      <div id="home" className="relative min-h-screen bg-[#020108] flex flex-col justify-between overflow-hidden">
        {/* Clean Glowing Blue/Purple Globe Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat opacity-100"
          style={{ backgroundImage: `url('/bg.jpg')` }}
          aria-hidden="true"
        />

        {/* Top Header inside Hero */}
        <div className="relative z-10">
          <Header 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
            onStartScan={() => handleStartScan()} 
          />
        </div>

        {/* Hero Main Showcase */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 flex-1 flex items-center">
          <HeroSection onStartScan={handleStartScan} />
        </div>
      </div>

      {/* TRUSTED BY SECURITY-CONSCIOUS TEAMS LOGOS */}
      <div className="-mt-6 relative z-20">
        <TrustedLogos />
      </div>

      {/* REST OF SINGLE PAGE (Clean White Canvas below Hero) */}
      <main className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 flex flex-col gap-24 pt-12 pb-16">
        
        {/* SECTION 2: FEATURES */}
        <section id="features" className="scroll-mt-28">
          <FeaturesContent />
        </section>

        {/* SECTION 3: BLOGS */}
        <section id="blogs" className="scroll-mt-28 border-t border-slate-200/80 pt-16">
          <BlogsContent />
        </section>

        {/* SECTION 4: FAQ */}
        <section id="faq" className="scroll-mt-28 border-t border-slate-200/80 pt-16">
          <FaqContent />
        </section>

        {/* SECTION 5: ABOUT US */}
        <section id="about" className="scroll-mt-28 border-t border-slate-200/80 pt-16">
          <AboutContent />
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Vulnerability Report Modal */}
      {showReportModal && (
        <ScannerModal
          urlInput={urlInput}
          isScanning={isScanning}
          scanProgress={scanProgress}
          scanStep={scanStep}
          scanSteps={scanSteps}
          onClose={() => setShowReportModal(false)}
          onRescan={() => handleStartScan()}
        />
      )}

    </div>
  );
}

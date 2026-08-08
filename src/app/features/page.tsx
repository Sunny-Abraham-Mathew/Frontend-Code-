"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesContent } from "@/components/features/FeaturesContent";
import { ScannerModal } from "@/components/scanner/ScannerModal";

export default function FeaturesPage() {
  const [showReportModal, setShowReportModal] = useState(false);
  const [urlInput] = useState("https://example.com");

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Header activeSection="features" onStartScan={() => setShowReportModal(true)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <FeaturesContent />
      </main>

      <Footer />

      {showReportModal && (
        <ScannerModal
          urlInput={urlInput}
          isScanning={false}
          scanProgress={100}
          scanStep={6}
          scanSteps={[]}
          onClose={() => setShowReportModal(false)}
          onRescan={() => {}}
        />
      )}
    </div>
  );
}

"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { ShieldCheck, Terminal, FileText, Layers, Headphones, Share2, X } from "lucide-react";

interface PremiumUpgradeModalProps {
  open: boolean;
  onClose: () => void;
}

const premiumFeatures = [
  {
    title: "Premium Insights",
    description:
      "Gain additional context for each finding, including impact, attack scenarios, and practical remediation guidance.",
    icon: ShieldCheck,
  },
  {
    title: "Detailed Vulnerability Reports",
    description:
      "Generate structured reports with severity, affected endpoints, evidence, and remediation recommendations suitable for documentation.",
    icon: FileText,
  },
  {
    title: "Deep Scanning",
    description:
      "Run extended checks that identify advanced misconfigurations, hidden endpoints, and additional attack surface not included in the standard scan.",
    icon: Layers,
  },
  {
    title: "Priority Support",
    description:
      "Receive direct assistance from the security team for questions, troubleshooting, and premium-related issues.",
    icon: Headphones,
  },
  {
    title: "Export & Share",
    description:
      "Export reports in professional formats for clients, teams, or internal review.",
    icon: Share2,
  },
];

export function PremiumUpgradeModal({ open, onClose }: PremiumUpgradeModalProps) {  const router = useRouter();
    useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-[560px] rounded-[28px] border border-slate-700/80 bg-slate-950/98 shadow-[0_35px_120px_-30px_rgba(0,0,0,0.7)] p-6 sm:p-8 relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full border border-slate-700/70 bg-slate-900/90 text-slate-300 hover:text-white transition-colors p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          aria-label="Close premium upgrade dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Unlock Premium</h2>
          <p className="mt-2 text-sm text-slate-400 leading-6">
            Access advanced security analysis designed for professional assessments.
          </p>
        </div>

        <div className="space-y-3">
          {premiumFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-4 transition-colors duration-200 hover:bg-slate-800"
                style={{ animationDelay: `${index * 40 + 80}ms` }}
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 border-t border-slate-800 pt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={onClose}
            className="w-full sm:w-auto rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800"
          >
            Maybe Later
          </button>
          <button
            onClick={() => {
              onClose();
              router.push("/pricing");
            }}
            className="w-full sm:w-auto rounded-2xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-colors hover:bg-purple-500"
          >
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

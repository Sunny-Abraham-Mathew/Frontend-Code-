"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TeamContent } from "@/components/team/TeamContent";

export default function TeamPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Header activeSection="team" />
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-8 py-16 flex-1">
        <TeamContent />
      </main>
      <Footer />
    </div>
  );
}

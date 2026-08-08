"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthForm } from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white font-sans flex flex-col justify-between overflow-hidden">
      {/* Clean Purple Planet Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-right sm:bg-center bg-no-repeat opacity-100 pointer-events-none"
        style={{ backgroundImage: `url('/auth-bg.jpg')` }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <Header />
      </div>

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-12 flex flex-col justify-center items-center">
        <AuthForm initialMode="register" />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

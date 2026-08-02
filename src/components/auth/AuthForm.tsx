"use client";

import React, { useState } from "react";
import { CheckCircle2, Apple } from "lucide-react";

interface AuthFormProps {
  initialMode?: "login" | "register";
}

export function AuthForm({ initialMode = "login" }: AuthFormProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "register" && formData.password !== formData.confirmPassword) {
      setSubmittedMessage("Passwords do not match. Please try again.");
      return;
    }
    setSubmittedMessage(
      mode === "login"
        ? "Welcome back! Sign in successful."
        : "Account created successfully! Welcome to Fortexa."
    );
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in duration-300">
      <div className="rounded-3xl p-8 sm:p-10 border border-white/10 bg-[#0d091e]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden text-left">
        
        {/* Title & Subtitle */}
        <div className="flex flex-col mb-6">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {mode === "login" ? "Sign In" : "Sign Up"}
          </h2>
          <p className="text-slate-400 text-sm font-medium mt-1">
            Keep it all together and you'll be fine
          </p>
        </div>

        {/* Alert Status Message */}
        {submittedMessage && (
          <div
            className={`p-3 rounded-xl mb-4 text-xs font-bold flex items-center gap-2 ${
              submittedMessage.includes("match")
                ? "bg-rose-950/40 border border-rose-500/20 text-rose-300"
                : "bg-purple-950/40 border border-purple-500/20 text-purple-200"
            }`}
            role="status"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-400" />
            <span>{submittedMessage}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "register" && (
            <div className="flex flex-col gap-1 text-left">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm px-4 py-3.5 rounded-xl focus:border-white/30 focus:outline-none w-full font-mono transition-colors"
              />
            </div>
          )}

          {/* Email or Phone Input */}
          <div className="flex flex-col gap-1 text-left">
            <input
              type="text"
              placeholder="Email or Phone"
              required
              value={formData.emailOrPhone}
              onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
              className="bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm px-4 py-3.5 rounded-xl focus:border-white/30 focus:outline-none w-full font-mono transition-colors"
            />
          </div>

          {/* Password Input with Show Toggle */}
          <div className="flex flex-col gap-1 text-left relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              minLength={8}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm px-4 py-3.5 rounded-xl focus:border-white/30 focus:outline-none w-full font-mono transition-colors pr-16"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-white font-medium cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {mode === "register" && (
            <div className="flex flex-col gap-1 text-left">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                minLength={8}
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 text-sm px-4 py-3.5 rounded-xl focus:border-white/30 focus:outline-none w-full font-mono transition-colors"
              />
            </div>
          )}

          {/* Forgot Password */}
          {mode === "login" && (
            <div className="text-left">
              <a href="#forgot" className="text-xs text-slate-400 hover:text-white transition-colors font-medium">
                Forgot Password
              </a>
            </div>
          )}

          {/* Primary Submit Button */}
          <button
            type="submit"
            className="mt-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl shadow-md w-full text-base transition-all cursor-pointer"
          >
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <span className="relative bg-[#0d091e] px-3 text-xs text-slate-500 font-mono">
            or
          </span>
        </div>

        {/* Secondary OAuth Button */}
        <button
          type="button"
          onClick={() => setSubmittedMessage("Apple OAuth sign in requested.")}
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 w-full text-sm transition-all cursor-pointer"
        >
          <Apple className="w-4 h-4 text-white" />
          <span>Sign in with Apple</span>
        </button>

        {/* Footer Toggle Text */}
        <div className="mt-8 text-center text-xs text-slate-400 font-medium">
          {mode === "login" ? (
            <p>
              New to Fortexa?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setSubmittedMessage("");
                }}
                className="text-purple-400 font-bold hover:underline cursor-pointer ml-1"
              >
                Join Now
              </button>
            </p>
          ) : (
            <p>
              Already registered?{" "}
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setSubmittedMessage("");
                }}
                className="text-purple-400 font-bold hover:underline cursor-pointer ml-1"
              >
                Sign In
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

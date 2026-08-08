"use client";

import React from "react";
import {
  ShieldCheck,
  FileText,
  Layers,
  Headphones,
  Share2,
  Check,
  Zap,
  Crown,
  ArrowRight,
  ChevronDown
} from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams getting started with security scanning",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "5 scans per month",
      "Basic vulnerability detection",
      "Standard security reports",
      "Email support",
      "Single project",
      "7-day report history"
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing teams that need advanced security features",
    icon: <ShieldCheck className="w-6 h-6" />,
    highlighted: true,
    features: [
      "Unlimited scans",
      "Premium insights & context",
      "Detailed vulnerability reports",
      "Deep scanning capabilities",
      "Priority email support",
      "Up to 5 projects",
      "30-day report history",
      "Export & share reports",
      "Scheduled automated scans",
      "Custom report templates"
    ],
    cta: "Upgrade to Professional",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with advanced requirements",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Everything in Professional",
      "Unlimited projects",
      "Advanced API access",
      "24/7 priority support",
      "Dedicated account manager",
      "Custom integrations",
      "White-label reports",
      "Compliance audit trails",
      "90-day report history",
      "SLA guarantees"
    ],
    cta: "Contact Sales",
  }
];

const comparisonFeatures = [
  "Unlimited Scans",
  "Premium Insights",
  "Deep Scanning",
  "Detailed Reports",
  "Priority Support",
  "API Access",
  "Custom Integrations",
  "Compliance Reports"
];

export function PricingContent() {
  return (
    <div className="flex flex-col gap-16 text-left max-w-7xl mx-auto py-4 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center">
        <span className="text-purple-700 text-xs font-bold uppercase tracking-widest mx-auto">
          Simple, Transparent Pricing
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight max-w-4xl mx-auto">
          Plans for Every Team Size
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-2">
          Start scanning with our free tier, upgrade when you need advanced security insights and continuous monitoring.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {pricingTiers.map((tier, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col rounded-3xl border transition-all duration-300 ${
              tier.highlighted
                ? "glass-panel-glow border-purple-300 bg-gradient-to-br from-purple-50/80 to-white shadow-xl md:scale-105 md:z-10"
                : "glass-panel border-slate-200 bg-white hover:shadow-lg hover:border-slate-300"
            }`}
          >
            {/* Badge for Popular */}
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs font-bold uppercase px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              </div>
            )}

            {/* Card Content */}
            <div className="p-8 flex flex-col h-full gap-6">
              
              {/* Tier Header */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    tier.highlighted 
                      ? "bg-gradient-to-br from-purple-200 to-purple-100 text-purple-700" 
                      : "bg-slate-100 text-slate-600"
                  }`}>
                    {tier.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                    <p className="text-slate-600 text-sm mt-1">{tier.description}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                <span className="text-slate-600 font-medium text-sm">{tier.period}</span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:from-purple-700 hover:to-purple-600"
                    : "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Features List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      tier.highlighted
                        ? "bg-purple-200"
                        : "bg-slate-100"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        tier.highlighted
                          ? "text-purple-700"
                          : "text-slate-600"
                      }`} />
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Section */}
      <div className="pt-12 border-t border-slate-200">
        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Feature Comparison
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-6 font-bold text-slate-900">Feature</th>
                <th className="text-center py-4 px-6 font-bold text-slate-600">Starter</th>
                <th className="text-center py-4 px-6 font-bold text-purple-700 bg-purple-50/50">Professional</th>
                <th className="text-center py-4 px-6 font-bold text-slate-600">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-700">{feature}</td>
                  <td className="text-center py-4 px-6">
                    <div className="flex justify-center">
                      {idx < 1 ? (
                        <Check className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </div>
                  </td>
                  <td className="text-center py-4 px-6 bg-purple-50/30">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  </td>
                  <td className="text-center py-4 px-6">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="pt-8 max-w-2xl mx-auto w-full">
        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        
        <div className="flex flex-col gap-4">
          {[
            {
              q: "Can I upgrade or downgrade my plan anytime?",
              a: "Yes! You can change your plan at any time. Changes take effect immediately, and we'll prorate your billing."
            },
            {
              q: "What happens if I need more scans than my plan allows?",
              a: "Additional scans beyond your monthly limit are available at $2 per scan. Or upgrade to a higher tier for unlimited scans."
            },
            {
              q: "Do you offer discounts for annual billing?",
              a: "Yes! Prepay annually and save 25% on any plan. Perfect for budget-conscious teams."
            },
            {
              q: "Is there a free trial?",
              a: "Absolutely! Start with our free tier to run 2 scans per month. No credit card required."
            }
          ].map((faq, idx) => (
            <details
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-200 cursor-pointer group hover:border-slate-300 transition-colors"
            >
              <summary className="flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-slate-600 text-sm leading-relaxed mt-4 font-medium">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="glass-panel-glow p-12 rounded-3xl border border-slate-300 bg-gradient-to-br from-purple-50/80 to-white">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to secure your applications?
          </h3>
          <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
            Start with unlimited scanning in our Professional plan and get instant access to all premium features.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-2xl font-bold text-base shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all hover:from-purple-700 hover:to-purple-600 flex items-center gap-2 mx-auto group">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
}

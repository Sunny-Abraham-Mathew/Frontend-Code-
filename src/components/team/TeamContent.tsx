"use client";

import React from "react";
import Image from "next/image";
import { Globe, Share2, Mail } from "lucide-react";

export function TeamContent() {
  const teamMembers = [
    {
      name: "Sienna Hewitt",
      role: "Founder & Chief Executive Officer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      bio: "Former co-founder of Opendoor. Early cybersecurity staff at Spotify and Clearbit.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Ashwin Santiago",
      role: "Engineering Manager & Security Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
      bio: "Lead engineering teams at Netflix, Pitch, and Protocol Labs specializing in cloud security.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Caitlyn King",
      role: "Product & UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
      bio: "Founding design team at Figma. Former UX lead at Pleo, Stripe, and Tile.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Owen Garcia",
      role: "Lead Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
      bio: "Former frontend developer for Linear, Coinbase, and Postscript building high-performance web apps.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Lulu Meyers",
      role: "Product Manager & Threat Intel Lead",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=80",
      bio: "Spearheaded threat intelligence strategies at CrowdStrike and Cloudflare.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Orlando Diggs",
      role: "Backend & Vulnerability Engine Lead",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80",
      bio: "Architected distributed web scrapers and static analysis engines at Datadog and Sentry.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Kyla Clay",
      role: "UX Researcher & Accessibility Specialist",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      bio: "Focused on human-centered security interface design and WCAG accessibility standards.",
      website: "#",
      share: "#",
      email: "#"
    },
    {
      name: "Brianna Ware",
      role: "Customer Success & DevSecOps Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
      bio: "Helped over 500 enterprise security teams integrate continuous vulnerability scanning.",
      website: "#",
      share: "#",
      email: "#"
    }
  ];

  return (
    <div className="flex flex-col gap-12 text-center max-w-7xl mx-auto py-4 animate-in fade-in duration-500">
      {/* Section Header */}
      <div className="flex flex-col gap-3 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          We are the people who make up Fortexa
        </h2>
        <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
          Our philosophy is simple: hire great people and give them the resources and support to do their best work.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
          >
            {/* Avatar Container */}
            <div className="relative w-full aspect-[4/4] bg-slate-200 rounded-2xl overflow-hidden mb-4">
              <Image
                src={member.avatar}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Member Details */}
            <div className="flex flex-col gap-1 px-1">
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-slate-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm font-bold text-slate-700">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-1 font-medium">
                {member.bio}
              </p>

              {/* Social / Contact Icons */}
              <div className="flex items-center gap-3 pt-3 text-slate-400 group-hover:text-slate-600 transition-colors">
                <a
                  href={member.website}
                  aria-label={`${member.name}'s website`}
                  className="hover:text-slate-900 transition-colors p-1"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href={member.share}
                  aria-label={`Share ${member.name}'s profile`}
                  className="hover:text-slate-900 transition-colors p-1"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href={member.email}
                  aria-label={`Contact ${member.name}`}
                  className="hover:text-slate-900 transition-colors p-1"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

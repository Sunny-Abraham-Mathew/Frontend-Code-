"use client";

import React, { CSSProperties } from "react";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqRow {
  id: string;
  speed: string;
  direction: "left" | "right";
  faqItems: FaqItem[];
}

export interface FaqData {
  mainTitle: string;
  mainSubtitle: string;
  rows: FaqRow[];
}

export interface FaqCardProps {
  question: string;
  answer: string;
}

/**
 * FaqCard
 * Reusable card for a single FAQ item.
 */
export const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  return (
    <div className="flex flex-col items-start gap-3 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all w-80 sm:w-96 shrink-0 faq-card">
      <h3 className="text-lg font-extrabold text-slate-900 faq-title leading-snug">{question}</h3>
      <p className="text-sm text-slate-600 faq-answer leading-relaxed font-medium">{answer}</p>
    </div>
  );
};

export interface HorizontalScrollerProps {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation without side gradients.
 */
export const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  speed = "40s",
  direction = "left",
}) => {
  const animationClass =
    direction === "right" ? "animate-scroll-horizontal-reverse" : "animate-scroll-horizontal";

  // Inline style to set the CSS custom property for scroll duration.
  const style = { "--scroll-duration": speed } as CSSProperties;

  return (
    <div className="w-full overflow-hidden group relative py-2">
      <div className={`flex ${animationClass}`} style={style}>
        <div className="flex items-stretch justify-center shrink-0 gap-6 px-3">
          {children}
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div className="flex items-stretch justify-center shrink-0 gap-6 px-3" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface FaqSectionProps {
  data: FaqData;
}

/**
 * FaqSection
 * Assembles title, subtitle, and multiple horizontal rows.
 */
const FaqSection: React.FC<FaqSectionProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col items-center gap-10 p-4 sm:p-8 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-4 text-center z-10 max-w-2xl">
        <h2
          className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 0.2s forwards" }}
        >
          {data.mainTitle}
        </h2>
        <p
          className="text-base sm:text-lg text-slate-600 font-medium"
          style={{ opacity: 0, animation: "fadeInUp 0.7s ease-out 0.4s forwards" }}
        >
          {data.mainSubtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6 z-10 w-full overflow-hidden">
        {data.rows.map((row) => (
          <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
            {row.faqItems.map((item) => (
              <FaqCard key={item.id} question={item.question} answer={item.answer} />
            ))}
          </HorizontalScroller>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

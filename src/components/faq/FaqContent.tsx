"use client";

import React from "react";
import FaqSection, { FaqData } from "@/components/ui/habit-faq-scroller";

export function FaqContent() {
  const faqData: FaqData = {
    mainTitle: "Frequently Asked Questions",
    mainSubtitle:
      "Everything you need to know about Fortexa web vulnerability scanning, continuous monitoring, and automated threat reporting.",
    rows: [
      {
        id: "row1",
        speed: "55s",
        direction: "left",
        faqItems: [
          {
            id: "q1",
            question: "How long does a vulnerability scan take?",
            answer:
              "Most web applications are scanned thoroughly in under 2 minutes. Our distributed threat engine performs 102+ passive security checks simultaneously."
          },
          {
            id: "q2",
            question: "Does scanning disrupt my live web application?",
            answer:
              "No. Fortexa uses non-destructive, rate-limited passive vulnerability scanning that safely tests your endpoints without causing downtime or high server load."
          },
          {
            id: "q3",
            question: "What security compliance frameworks do you support?",
            answer:
              "Our automated reporting exports auditor-friendly compliance documentation mapped directly to ISO 27001, SOC2 Type II, OWASP Top 10, HIPAA, and PCI-DSS standards."
          }
        ]
      },
      {
        id: "row2",
        speed: "45s",
        direction: "right",
        faqItems: [
          {
            id: "q4",
            question: "Can I schedule automated continuous monitoring?",
            answer:
              "Yes! You can configure daily, weekly, or event-driven automated scans triggered directly from your GitHub Actions or GitLab CI/CD pipelines."
          },
          {
            id: "q5",
            question: "How are severity vulnerabilities classified?",
            answer:
              "We use CVSS v3.1 scoring along with threat intelligence feeds to categorize findings into Critical, High, Medium, and Low risk alerts with remediation steps."
          },
          {
            id: "q6",
            question: "Is there a free tier for developers?",
            answer:
              "Absolutely. Developers can run up to 10 free scans per month with instant SSL and HTTP security header audits without entering a credit card."
          }
        ]
      },
      {
        id: "row3",
        speed: "65s",
        direction: "left",
        faqItems: [
          {
            id: "q7",
            question: "Can I invite team members to review audit reports?",
            answer:
              "Yes. Enterprise and Team plans allow role-based access control (RBAC) to share live interactive reports with developers and security auditors."
          },
          {
            id: "q8",
            question: "How does Fortexa protect my scan data?",
            answer:
              "All audit logs and report metadata are encrypted at rest with AES-256 and in transit with TLS 1.3. We never share your application infrastructure details."
          },
          {
            id: "q9",
            question: "How do I start scanning right now?",
            answer:
              "Simply enter your application domain in the scanner input bar at the top of the homepage and hit 'Start Scan' to receive instant security insights."
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full py-4">
      <FaqSection data={faqData} />
    </div>
  );
}

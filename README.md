# 🛡️ Fortexa — Application Security Scanning Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2.12-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Fortexa** is a modern, high-performance web application security scanning platform engineered for security teams, DevOps engineers, and developers. It provides rapid, non-destructive passive security scans across 102+ security checks—detecting OWASP Top 10 vulnerabilities, inspecting SSL/TLS ciphers, validating HTTP security headers, and compiling auditor-ready compliance reports in under 2 minutes.

---

## ✨ Key Features

- ⚡ **Instant Passive Web Scanner**: Execute 102+ non-destructive vulnerability checks (OWASP Top 10, SSL/TLS validation, HTTP Security Headers) in under 2 minutes without app downtime.
- 🎯 **Interactive Threat Modal**: Real-time scan simulation engine with live 7-step threat progression, CVSS severity classification, and actionable remediation guidelines.
- 🌌 **Cosmic Hero & Clean White Theme**: 100vh deep-space hero fold featuring a glowing purple planet artwork background (`/bg.jpg`), seamlessly transitioning into a clean, high-contrast light theme canvas for lower content sections.
- 👥 **Dedicated Team Directory (`/team`)**: Fully responsive project team page featuring member avatars, titles, bios, and direct contact channels.
- 🔑 **Cosmic Glass Auth (`/login` & `/register`)**: Ultra-sleek sign-in and sign-up portals with dark glassmorphic cards, password visibility toggles, and third-party Apple OAuth integration.
- 🔄 **Seamless Habit FAQ Scroller**: Interactive horizontal looping FAQ component with hover-to-pause animation controls.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Motion & Animations**: Framer Motion & CSS Keyframe Animations
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
├── public/
│   ├── bg.jpg             # Hero section glowing purple planet background
│   └── auth-bg.jpg        # Authentication pages purple planet background
├── src/
│   ├── app/
│   │   ├── page.tsx       # Main landing page (Hero, Features, Blogs, FAQ, About)
│   │   ├── team/          # Dedicated Team Directory route (/team)
│   │   ├── login/         # Dedicated Sign-In route (/login)
│   │   ├── register/      # Dedicated Sign-Up route (/register)
│   │   ├── features/      # Solutions standalone route
│   │   ├── blogs/         # Blogs standalone route
│   │   ├── faq/           # FAQ standalone route
│   │   ├── about/         # About Us standalone route
│   │   ├── layout.tsx     # Global application layout & metadata
│   │   └── globals.css    # Global CSS reset & animation keyframes
│   └── components/
│       ├── layout/        # Header and Footer layout components
│       ├── home/          # HeroSection & TrustedLogos
│       ├── features/      # 3-Step Process & Features grid
│       ├── team/          # TeamContent profile grid
│       ├── auth/          # AuthForm sign-in / sign-up card
│       ├── scanner/       # ScannerModal & interactive vulnerability engine
│       ├── ui/            # Reusable UI components (habit-faq-scroller.tsx)
│       ├── blogs/         # BlogsContent
│       ├── faq/           # FaqContent
│       └── about/         # AboutContent
├── PRODUCT.md             # Impeccable product specifications & brand commitments
└── package.json           # Dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AdhwaithAS/MulearnOffensiveProjectFrontend.git
   cd MulearnOffensiveProjectFrontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application live.

---

## 🧭 Page Routes

| Route | Description |
| :--- | :--- |
| `/` | Landing page featuring 100vh Hero section, 3-step security process, solutions grid, blogs, FAQ scroller, and about section. |
| `/team` | Project Team page featuring team member profiles, roles, and contacts. |
| `/login` | Cosmic glassmorphic Sign-In portal. |
| `/register` | Cosmic glassmorphic Sign-Up portal. |
| `/features` | Dedicated Solutions & Features overview page. |
| `/blogs` | Dedicated Security Blogs & Threat Research page. |
| `/faq` | Dedicated Frequently Asked Questions page. |
| `/about` | Dedicated About Fortexa page. |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

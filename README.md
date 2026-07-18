# ReCircuit — E-Waste Recycling Frontend

ReCircuit is a modern e-waste recycling platform built with **React + Vite + Tailwind CSS**. It connects users with certified e-waste collection centers nearby, encouraging responsible electronics disposal.

## 🌱 Features

- **Find a Center** — Locate certified e-waste drop-off centers near you
- **What We Accept** — Browse accepted device categories
- **How It Works** — Step-by-step recycling guide
- **Impact Calculator** — Track your environmental contribution
- **Testimonials** — Real stories from responsible recyclers
- **FAQ** — Frequently asked questions
- **Newsletter** — Subscribe for recycling tips and updates
- **Dark Mode** — Full dark/light theme toggle with persistence

## 🚀 Tech Stack

- [React 19](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Lightning-fast build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS framework
- [Lucide React](https://lucide.dev/) — Icon library
- [Oxlint](https://oxc.rs/) — Fast JavaScript linter

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Sticky top nav with dark mode toggle
│   ├── Hero.jsx             # Landing hero section with stats bar
│   ├── FindCenter.jsx       # Center locator with search/filter
│   ├── WhatWeAccept.jsx     # Accepted device categories
│   ├── HowItWorks.jsx       # Step-by-step guide
│   ├── Impact.jsx           # Environmental impact metrics
│   ├── ImpactCalculator.jsx # Interactive impact calculator
│   ├── Testimonials.jsx     # User testimonials carousel
│   ├── FAQ.jsx              # Accordion FAQ section
│   ├── Newsletter.jsx       # Email subscription form
│   ├── Footer.jsx           # Site footer with links
│   └── ScrollToTop.jsx      # Scroll to top button
├── index.css                # Global styles & Tailwind config
└── main.jsx                 # App entry point
```

## 🌍 Environmental Mission

ReCircuit aims to reduce e-waste landfill contribution by making certified recycling centers easily accessible to everyone. Every device recycled through our platform is tracked and reported to ensure responsible disposal.

## 📄 License

MIT © ReCircuit Team

## 📝 Changelog

### Recent Updates
- **a11y**: Add `aria-controls` / `aria-labelledby` / `role="region"` to `FaqItem` accordion for full ARIA compliance
- **a11y**: Mark decorative `Quote` watermark icon as `aria-hidden` in `TestimonialCard`
- **a11y**: Add descriptive `aria-label` attributes to `CenterCard` action buttons
- **refactor**: Extract `ANIMATION_DURATION` constant in `CountUpStat` and mark icon wrapper as `aria-hidden`
- **ux**: Lower scroll-to-top trigger threshold to 300px for earlier visibility

# Portfolio

A modern, responsive portfolio website built with React + Vite, featuring smooth animations, dark/light theme support, and an accessible design.

## Live Website

- https://krishna-9099.github.io/krishan-dev/

## 📋 Table of Contents

- [Portfolio](#portfolio)
  - [Live Website](#live-website)
  - [📋 Table of Contents](#-table-of-contents)
  - [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Production Build](#production-build)
  - [Available Scripts](#available-scripts)
  - [Features](#features)
  - [Pages](#pages)
  - [Components Overview](#components-overview)
    - [Layout Components](#layout-components)
    - [Page Sections](#page-sections)
    - [UI Components](#ui-components)
    - [Animation Components](#animation-components)
  - [Configuration Files](#configuration-files)
  - [Browser Support](#browser-support)

## Overview

This portfolio website showcases professional work and skills with a focus on modern web development practices. Built with performance and user experience in mind, it features:

- **Smooth Animations**: Powered by Framer Motion and GSAP for fluid, performant animations
- **Responsive Design**: Mobile-first approach ensuring great experience across all devices
- **Dark/Light Theme**: User preference detection with manual toggle support
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Accessible**: ARIA labels, keyboard navigation, and screen reader support

## Tech Stack

| Technology                   | Version | Purpose                 |
| ---------------------------- | ------- | ----------------------- |
| React                        | 18      | UI framework            |
| Vite                         | 5       | Build tool & dev server |
| TypeScript                   | -       | Type safety             |
| Tailwind CSS                 | -       | Utility-first styling   |
| React Router DOM             | -       | Client-side routing     |
| Framer Motion                | -       | Declarative animations  |
| GSAP                         | -       | Advanced animations     |
| Three.js / React Three Fiber | -       | 3D graphics             |

## Project Structure

```
src/
├── assets/              # Static assets (images, fonts)
├── components/          # Reusable UI components
│   └── animations/      # Animation components
├── context/             # React context providers
├── data/                # Static data/constants
├── hooks/               # Custom React hooks
├── layouts/             # Layout components
├── pages/               # Page components
├── services/            # API integrations
├── styles/              # Global styles
├── utils/               # Utility functions
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Available Scripts

| Script            | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start development server at http://localhost:3000 |
| `npm run build`   | Build optimized production bundle                 |
| `npm run preview` | Preview production build locally                  |
| `npm run lint`    | Run ESLint for code quality checks                |

## Features

- 🎨 **Dark/Light Theme Toggle** - Automatic detection of system preferences with manual override
- 📱 **Fully Responsive Design** - Mobile-first approach with breakpoints for all screen sizes
- ✨ **Smooth Animations** - Framer Motion & GSAP powered transitions and interactions
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and structured data
- ♿ **Accessible** - ARIA labels, semantic HTML, keyboard navigation
- 🚀 **Fast Build** - Vite provides near-instant hot module replacement

## Pages

| Route | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| `/`   | Home page featuring all main sections (Hero, About, Projects, Skills, Contact) |
| `*`   | 404 Not Found page for undefined routes                                        |

## Components Overview

### Layout Components
- `Navigation` - Main navigation with responsive menu
- `Footer` - Site footer with social links

### Page Sections
- `Hero` - Landing section with animated introduction
- `About` - Professional background and summary
- `FeaturedProject` - Highlighted project showcase
- `ProjectTimeline` - Chronological project display
- `SkillsVisualization` - Interactive skills display
- `TechStack` - Technology stack presentation
- `Contact` - Contact form and information

### UI Components
- `SocialIcon` - Social media link icons
- `ScrollProgress` - Page scroll progress indicator

### Animation Components
- `ParticleBackground` - Three.js particle system background
- `ScrollReveal` - Scroll-triggered reveal animations
- `PageTransition` - Page transition effects
- `AnimatedCounter` - Number counting animations
- `MagneticCursor` - Interactive cursor effects
- `TextReveal` - Text reveal animations

## Configuration Files

| File                 | Purpose                       |
| -------------------- | ----------------------------- |
| `vite.config.ts`     | Vite build configuration      |
| `tsconfig.json`      | TypeScript compiler options   |
| `tailwind.config.js` | Tailwind CSS customization    |
| `postcss.config.js`  | PostCSS plugins configuration |
| `.eslintrc.json`     | ESLint rules and settings     |

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |

---

Built with ❤️ using React + Vite

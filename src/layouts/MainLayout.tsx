import { type ReactNode, Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';

// ============================================================================
// SEO & Metadata Constants (Preserved from Next.js layout)
// ============================================================================

/**
 * Site metadata - preserved from Next.js metadata export
 * In Vite, these would be used in index.html or dynamically via react-helmet
 */
export const SITE_METADATA = {
  title: {
    default: 'Krishan | Flutter Developer & Audio Architect',
    template: '%s | Krishan Portfolio',
  },
  description:
    'Portfolio of Krishan, a Flutter Developer and Audio Architect specializing in high-performance mobile applications, audio systems, and cross-platform solutions. 20+ apps published.',
  keywords: [
    'Flutter Developer',
    'Dart',
    'Mobile App Development',
    'Audio Architecture',
    'Cross-platform Apps',
    'Firebase',
    'Open Source',
    'JioSaavn',
    'Flutter Expert',
    'India',
  ],
  authors: [{ name: 'Krishan', url: 'https://krishan.dev' }],
  creator: 'Krishan',
  publisher: 'Krishan',
  metadataBase: 'https://krishan.dev',
  openGraph: {
    title: 'Krishan | Flutter Developer & Audio Architect',
    description:
      'Portfolio of Krishan, a Flutter Developer and Audio Architect specializing in high-performance mobile applications and audio systems.',
    url: 'https://krishan.dev',
    siteName: 'Krishan Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Krishan - Flutter Developer & Audio Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishan | Flutter Developer & Audio Architect',
    description:
      'Portfolio of Krishan, a Flutter Developer and Audio Architect specializing in high-performance mobile applications.',
    images: ['/og-image.svg'],
    creator: '@krishan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://krishan.dev',
  },
  category: 'technology',
} as const;

/**
 * JSON-LD structured data for SEO
 * In Vite, this would be injected via a helmet library or directly in index.html
 */
export const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Krishan',
  url: 'https://krishan.dev',
  jobTitle: 'Flutter Developer & Audio Architect',
  description:
    'Flutter Developer and Audio Architect specializing in high-performance mobile applications and audio systems.',
  sameAs: [
    'https://github.com/krishan',
    'https://linkedin.com/in/krishan',
    'https://twitter.com/krishan',
  ],
  knowsAbout: [
    'Flutter',
    'Dart',
    'Mobile App Development',
    'Audio Processing',
    'Firebase',
    'Cross-platform Development',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
} as const;

// ============================================================================
// Lazy-loaded animation components (avoid SSR issues in Vite)
// ============================================================================

// Note: These imports would need to be adjusted based on actual component locations
// For now, we'll use placeholder components that can be replaced

const ParticleBackground = lazy(
  () =>
  import('../components/animations/ParticleBackground').then((mod) => ({
    default: mod.default,
  })).catch(() => ({ default: () => <></> }))
);

const MagneticCursor = lazy(
  () =>
  import('../components/animations/MagneticCursor').then((mod) => ({
    default: mod.default,
  })).catch(() => ({ default: () => <></> }))
);

const ScrollProgress = lazy(
  () =>
  import('../components/ScrollProgress').then((mod) => ({
    default: mod.default,
  })).catch(() => ({ default: () => <></> }))
);

// ============================================================================
// Fallback components for Suspense
// ============================================================================

function LoadingFallback() {
  return null; // Invisible fallback for background components
}

// ============================================================================
// Layout Component
// ============================================================================

interface MainLayoutProps {
  children?: ReactNode;
}

/**
 * Main layout component for React + Vite
 * Wraps React Router's Outlet with theme provider and global components
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-black focus:rounded-lg focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Suspense boundary for lazy-loaded components */}
      <Suspense fallback={<LoadingFallback />}>
        {/* Particle background */}
        <ParticleBackground />

        {/* Magnetic cursor */}
        <MagneticCursor />

        {/* Scroll progress indicator */}
        <ScrollProgress />
      </Suspense>

      {/* Faint grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Main content - use children if provided, otherwise Outlet */}
      {children || <Outlet />}
    </ThemeProvider>
  );
}

// ============================================================================
// Alternative Layout for specific pages (if needed)
// ============================================================================

/**
 * Minimal layout without animations for specific pages
 */
export function MinimalLayout({ children }: MainLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      {children || <Outlet />}
    </ThemeProvider>
  );
}

export default MainLayout;

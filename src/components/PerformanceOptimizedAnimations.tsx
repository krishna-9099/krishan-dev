import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface PerformanceConfig {
  reduceMotion: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  isLowEndDevice: boolean;
}

// Extend Navigator interface for deviceMemory
declare global {
  interface Navigator {
    deviceMemory?: number;
  }
}

export function usePerformanceOptimizedAnimations() {
  const [config, setConfig] = useState<PerformanceConfig>({
    reduceMotion: false,
    prefersReducedMotion: false,
    isMobile: false,
    isLowEndDevice: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReducedMotion = mediaQuery.matches;

    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Detect low-end devices based on hardware concurrency and memory
    const isLowEndDevice =
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
    (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    isMobile;

    setConfig({
      reduceMotion: isReducedMotion,
      prefersReducedMotion: isReducedMotion,
      isMobile,
      isLowEndDevice,
    });

    const handleChange = (e: MediaQueryListEvent) => {
      setConfig(prev => ({
        ...prev,
        reduceMotion: e.matches,
        prefersReducedMotion: e.matches,
      }));
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return config;
}

interface OptimizedMotionProps {
  children: React.ReactNode;
  animation?: {
    initial?: any;
    animate?: any;
    transition?: any;
  };
  fallback?: React.ReactNode;
  className?: string;
}

export function OptimizedMotion({
  children,
  animation,
  fallback,
  className
}: OptimizedMotionProps) {
  const config = usePerformanceOptimizedAnimations();
  const controls = useAnimation();

  useEffect(() => {
    if (config.reduceMotion || config.isLowEndDevice) {
      controls.set({ opacity: 1, y: 0, scale: 1 });
    } else if (animation) {
      controls.start(animation.animate);
    }
  }, [config, animation, controls]);

  if (config.reduceMotion || config.isLowEndDevice) {
    return (
      <div className={className}>
        {fallback || children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={animation?.initial}
      animate={controls}
      transition={animation?.transition}
    >
      {children}
    </motion.div>
  );
}

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  className
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  useEffect(() => {
    if (ref.current) {
      setIsVisible(true);
    }
  }, [ref.current]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : null}
    </div>
  );
}

interface IntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverOptions = {}
) {
  const [ref, setRef] = useState<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef as React.Dispatch<React.SetStateAction<T | null>>, isIntersecting, current: ref };
}

// Performance-optimized animation variants
export const performanceVariants = {
  // Lightweight animations for low-end devices
  lightweight: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  },

  // Standard animations
  standard: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  },

  // Rich animations for high-end devices
  rich: {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }
    },
  },

  // Ultra-lightweight for reduced motion
  reduced: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

// Smart animation selector based on device capabilities
export function getOptimalAnimationVariant() {
  const config = usePerformanceOptimizedAnimations();

  if (config.reduceMotion) {
    return performanceVariants.reduced;
  }

  if (config.isLowEndDevice) {
    return performanceVariants.lightweight;
  }

  if (config.isMobile) {
    return performanceVariants.standard;
  }

  return performanceVariants.rich;
}

// Performance monitoring hook
export function usePerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [memoryUsage, setMemoryUsage] = useState(0);

  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    let frames = 0;

    const measurePerformance = (currentTime: number) => {
      frames++;
      if (currentTime - lastTime >= 1000) {
        setFps(frames);
        frames = 0;
        lastTime = currentTime;

        // Monitor memory usage if available
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMemoryUsage(memory.usedJSHeapSize / 1024 / 1024); // MB
        }
      }
      rafId = requestAnimationFrame(measurePerformance);
    };

    rafId = requestAnimationFrame(measurePerformance);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { fps, memoryUsage };
}

// Animation performance utilities
export const animationUtils = {
  // Debounce function for scroll events
  debounce: (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for resize events
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function executedFunction(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
};

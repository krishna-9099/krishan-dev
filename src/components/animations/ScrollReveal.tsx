import { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  threshold = 0.2,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!elementRef.current || isReducedMotion) return;

    const element = elementRef.current;

    // Initial states based on animation type
    const initialStates = {
      fadeUp: { opacity: 0, y: 40 },
      fadeIn: { opacity: 0 },
      slideLeft: { opacity: 0, x: 60 },
      slideRight: { opacity: 0, x: -60 },
      scale: { opacity: 0, scale: 0.9 },
    };

    // Set initial state
    gsap.set(element, initialStates[animation]);

    // Create scroll trigger animation
    gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, threshold, isReducedMotion]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!elementRef.current || isReducedMotion) return;

    const element = elementRef.current;

    gsap.to(element, {
      y: () => window.innerHeight * speed * 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, isReducedMotion]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

// Staggered reveal for lists
interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  stagger?: number;
}

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || isReducedMotion) return;

    const container = containerRef.current;
    const items = container.children;

    gsap.set(items, { opacity: 0, y: 30 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [stagger, isReducedMotion]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Text reveal animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!elementRef.current || isReducedMotion) return;

    const element = elementRef.current;

    // Split text into words
    const words = element.querySelectorAll(".word");

    gsap.set(words, { opacity: 0, y: 20 });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, isReducedMotion]);

  // Split text into words
  const words = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block">
      {word}
      {i < text.split(" ").length - 1 ? "\u00A0" : ""}
    </span>
  ));

  return (
    <div ref={elementRef} className={className}>
      {words}
    </div>
  );
}

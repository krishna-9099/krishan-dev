import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);
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
    if (!counterRef.current || isReducedMotion) {
      // If reduced motion, just show the final value
      if (counterRef.current) {
        counterRef.current.textContent = prefix + value + suffix;
      }
      return;
    }

    const counter = { value: 0 };

    const tl = gsap.to(counter, {
      value: value,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            prefix + Math.round(counter.value) + suffix;
        }
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [value, suffix, prefix, duration, isReducedMotion]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

// Stats section component for easy reuse
interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface StatsGridProps {
  stats: StatItem[];
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          </div>
          <div className="text-text-secondary text-sm md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  trigger = true
}: TextRevealProps) {
  const controls = useAnimation();
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (trigger && !isReducedMotion) {
      // Animate each word with different entrance paths
      const words = text.split(" ");
      words.forEach((_, index) => {
        let animation = {};

        switch (index) {
          case 0: // "Let's" - slide from left
            animation = {
              x: [-50, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: delay + (index * 0.15)
              }
            };
            break;
          case 1: // "build" - drop from top
            animation = {
              y: [-40, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // cubic-bezier for bounce
                delay: delay + (index * 0.15)
              }
            };
            break;
          case 2: // "something" - slide from right
            animation = {
              x: [50, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: delay + (index * 0.15)
              }
            };
            break;
          case 3: // "extraordinary" - pop up with scale
            animation = {
              scale: [0.5, 1.1, 1],
              opacity: [0, 1],
              transition: {
                duration: 0.9,
                ease: [0.34, 1.56, 0.64, 1], // custom bounce
                delay: delay + (index * 0.15)
              }
            };
            break;
          default:
            animation = {
              opacity: [0, 1],
              transition: {
                duration: 0.6,
                delay: delay + (index * 0.15)
              }
            };
        }

        // Start animation for this specific word
        const wordElement = document.querySelector(`.word-${index}`);
        if (wordElement) {
          controls.start(animation);
        }
      });
    } else if (trigger && isReducedMotion) {
      // For reduced motion, just fade in without complex animations
      controls.start({
        opacity: 1,
        transition: { duration: 0.3, delay }
      });
    }
  }, [controls, delay, trigger, text, isReducedMotion]);

  // Split text into words with unique classes
  const words = text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      className={`word-${index} inline-block mr-2 last:mr-0`}
      initial={isReducedMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={controls}
      style={{
        display: 'inline-block',
        verticalAlign: 'top'
      }}
    >
      {word}
    </motion.span>
  ));

  return (
    <motion.div
      className={`text-6xl md:text-8xl font-bold text-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: isReducedMotion ? 0.1 : 0.5, delay }}
    >
      {/* Gradient overlay for text */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-xl" />
        <div className="relative bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          {words}
        </div>
      </div>
    </motion.div>
  );
}

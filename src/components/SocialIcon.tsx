import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  index?: number;
}

export default function SocialIcon({
  href,
  label,
  icon: Icon,
  isExternal = false,
  index = 0
}: SocialIconProps) {
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
    if (!isReducedMotion) {
      // Initial entrance animation with bounce
      // Note: Spring animations only support 2 keyframes, so we use a single target value
      // The bounce effect is achieved through the spring physics (stiffness/damping)
      controls.start({
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: index * 0.1
        }
      });
    } else {
      // For reduced motion, just fade in
      controls.start({
        opacity: 1,
        transition: { duration: 0.1 }
      });
    }
  }, [controls, index, isReducedMotion]);

  const handleMouseEnter = () => {
    if (!isReducedMotion) {
      controls.start({
        scale: 1.8,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isReducedMotion) {
      controls.start({
        scale: 1,
        rotate: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 25
        }
      });
    }
  };

  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.a
      href={href}
      {...linkProps}
      className="relative group w-14 h-14 rounded-full border border-border-subtle bg-bg-secondary/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:border-accent/50"
      aria-label={label}
      animate={controls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: isReducedMotion ? 1 : 0.95 }}
      whileHover={{
        y: isReducedMotion ? 0 : -2,
        transition: { duration: 0.2 }
      }}
      initial={isReducedMotion ? { scale: 1, opacity: 1, y: 0 } : { scale: 0, opacity: 0, y: 20 }}
    >
      {/* Inner icon */}
      <Icon className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors duration-200" />

      {/* Glow effect on hover (only if not reduced motion) */}
      {!isReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(34, 197, 94, 0)",
              "0 0 0 8px rgba(34, 197, 94, 0.3)",
              "0 0 0 0 rgba(34, 197, 94, 0)"
            ],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            filter: "blur(4px)"
          }}
        />
      )}

      {/* Magnetic cursor effect indicator (only if not reduced motion) */}
      {!isReducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-full border border-transparent"
          animate={{
            borderColor: ["transparent", "rgba(34, 197, 94, 0.5)", "transparent"],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
      )}
    </motion.a>
  );
}

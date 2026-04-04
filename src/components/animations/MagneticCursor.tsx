import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Check if touch device
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice || isReducedMotion) {
      return;
    }

    setIsVisible(true);

    const cursor = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursor || !cursorInner) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    // Magnetic effect on interactive elements
    const magnets = document.querySelectorAll(
      'a, button, [data-magnetic], .btn-primary, .btn-secondary, .nav-link'
    );

    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursorInner, {
        scale: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);

    magnets.forEach((magnet) => {
      magnet.addEventListener("mouseenter", handleMouseEnter);
      magnet.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide cursor when leaving window
    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        gsap.to([cursor, cursorInner], {
          opacity: 0,
          duration: 0.3,
        });
      }
    };

    const handleMouseOver = () => {
      gsap.to([cursor, cursorInner], {
        opacity: 1,
        duration: 0.3,
      });
    };

    document.addEventListener("mouseleave", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      magnets.forEach((magnet) => {
        magnet.removeEventListener("mouseenter", handleMouseEnter);
        magnet.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.removeEventListener("mouseleave", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseOver);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isReducedMotion]);

  // Don't render on touch devices or reduced motion
  if (!isVisible || isReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(34, 197, 94, 0.5)",
          opacity: 0.8,
          transition: "border-color 0.3s ease",
        }}
      />
      {/* Inner cursor */}
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: isHovering ? "#22c55e" : "rgba(34, 197, 94, 0.8)",
        }}
      />
    </>
  );
}

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const circleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const springConfig = { damping: 20, stiffness: 100 };
  const rotateXRaw = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateYRaw = useTransform(mouseX, [0, 1], [-15, 15]);
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  const handleScrollToProjects = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll-triggered animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    // Parallax effect for the circle - subtle movement
    gsap.to(".hero-circle", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden"
      aria-label="Hero section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto relative z-10" style={{ perspective: "1000px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="order-2 lg:order-1 hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium tracking-wider">
                AVAILABLE FOR HIRE
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
              variants={itemVariants}
            >
              Crafting{" "}
              <motion.span
                className="text-accent relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                High-Performance
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                />
              </motion.span>{" "}
              Mobile Experiences
            </motion.h1>

            <motion.p
              className="text-text-body text-lg md:text-xl max-w-[480px] mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Specialized in{" "}
              <span className="text-text-primary font-medium">
                Flutter & Audio Architecture
              </span>
              . I build seamless, beautiful applications where code meets
              creativity.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              variants={itemVariants}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-primary flex items-center gap-2 group"
                data-magnetic
              >
                <span>View My Work</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </a>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="btn-ghost flex items-center gap-2"
                data-magnetic
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Engineering Core Circle */}
          <motion.div
            className="order-1 lg:order-2 flex items-center justify-center hero-circle"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square" style={{ transform: "translateZ(50px)" }}>
              {/* Outer orbit ring - slow rotation */}
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Middle orbit ring - opposite direction */}
              <motion.div
                className="absolute inset-4 rounded-full border border-accent/15"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner orbit ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main circle with gradient border */}
              <div
                className="absolute inset-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, rgba(34, 197, 94, 0.1) 100%)",
                  padding: "2px",
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--bg-primary)",
                  }}
                >
                  {/* Inner content */}
                  <div className="text-center px-6">
                    {/* Flutter Logo */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center backdrop-blur-sm border border-accent/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <motion.path
                          d="M14.314 3.5L7.5 10.314l3.186 3.186L21 3.186 14.314 3.5z"
                          fill="var(--accent)"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 1, pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.path
                          d="M14.314 13.5l-3.186 3.186 3.186 3.186L21 13.186 14.314 13.5z"
                          fill="var(--accent)"
                          opacity="0.6"
                          initial={{ opacity: 0, pathLength: 0 }}
                          animate={{ opacity: 0.6, pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.7 }}
                        />
                      </svg>
                    </motion.div>

                    {/* Engineering Core Label */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-2">
                        Engineering Core
                      </span>
                      <h3 className="text-lg font-bold mb-1 text-text-primary">
                        Flutter • Audio • Systems
                      </h3>
                      <p className="text-text-muted text-xs">
                        Native-quality experiences
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: "var(--accent-glow)" }}
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />

              {/* Orbiting dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-accent/60"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: `-${(i + 1) * 60}px`,
                      left: "-3px",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-6 h-6 text-text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

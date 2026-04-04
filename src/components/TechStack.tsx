import { motion } from "framer-motion";
import { useState } from "react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
  description: string;
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const techStack: TechItem[] = [
    {
      name: "Flutter",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M14.314 3.5L7.5 10.314l3.186 3.186L21 3.186 14.314 3.5z"
            fill="currentColor"
          />
          <path
            d="M14.314 13.5l-3.186 3.186 3.186 3.186L21 13.186 14.314 13.5z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      ),
      color: "#02569B",
      category: "Mobile",
      description: "Cross-platform mobile development framework",
    },
    {
      name: "Dart",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M4.5 4.5v15h15v-15h-15zm13.5 13.5H6V6h12v12z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            d="M4.5 4.5L6 6l6 6-6 6-1.5 1.5v-15z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M4.5 4.5l1.5 1.5 6 6 6-6 1.5-1.5h-15z"
            fill="currentColor"
          />
          <path
            d="M19.5 4.5l-1.5 1.5-6 6 6 6 1.5 1.5v-15z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
      ),
      color: "#0175C2",
      category: "Language",
      description: "Modern programming language for Flutter",
    },
    {
      name: "Firebase",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.099a.542.542 0 00-.96-.296L3.89 19.364zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.89 19.364z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#FFCA28",
      category: "Backend",
      description: "Backend-as-a-Service platform",
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.96 0 1.57-.59 1.57-1.5V9.4c0-.12-.1-.22-.22-.22h-.96c-.12 0-.22.1-.22.22v8.33c0 .46-.47.83-.92.6l-2.03-1.17a.26.26 0 01-.13-.21V8.37c0-.09.04-.17.13-.21l7.44-4.29c.08-.05.2-.05.28 0l7.44 4.29c.08.04.13.12.13.21v8.58c0 .09-.05.17-.13.21l-7.44 4.29c-.08.05-.2.05-.28 0l-1.89-1.12c-.08-.03-.16-.03-.24 0-.53.3-.63.34-1.13.5-.11.04-.29.11.07.32l2.48 1.47c.24.14.5.2.78.2.27 0 .54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V8.41c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.24-.13-.5-.2-.78-.2z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#68A063",
      category: "Backend",
      description: "JavaScript runtime for server-side development",
    },
    {
      name: "Kotlin",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M3 3h18l-9 9L3 21V3z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#7F52FF",
      category: "Language",
      description: "Modern programming language for Android",
    },
    {
      name: "SwiftUI",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M18.71 7.21a8.5 8.5 0 00-13.42 0C3.6 9.15 3 11.5 3 14c0 4.42 3.58 8 8 8 2.4 0 4.55-.95 6.14-2.49A7.98 7.98 0 0021 14c0-2.5-.6-4.85-2.29-6.79zM12 20c-3.31 0-6-2.69-6-6 0-1.77.77-3.37 2-4.46A6.5 6.5 0 0112 8c1.44 0 2.77.47 3.85 1.27-.6.55-1.25 1.07-1.96 1.54-1.24.82-2.64 1.42-4.14 1.73.08.45.25.88.5 1.27.79 1.24 2.25 2.06 3.92 2.06 1.67 0 3.13-.82 3.92-2.06.25-.39.42-.82.5-1.27-1.5-.31-2.9-.91-4.14-1.73-.71-.47-1.36-.99-1.96-1.54A6.48 6.48 0 0118 14c0 3.31-2.69 6-6 6z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#FA7343",
      category: "Mobile",
      description: "Declarative UI framework for Apple platforms",
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M2 2h20v20H2V2z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M4 6h16v2H4V6zm0 4h16v2H4V10zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#3178C6",
      category: "Language",
      description: "Typed superset of JavaScript",
    },
    {
      name: "AWS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M12 2l-2 4h4l-2-4zm0 20l-2-4h4l-2 4z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M4 12l4-2v4L4 12zm16 0l-4-2v4l4-2z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#FF9900",
      category: "Cloud",
      description: "Amazon Web Services cloud platform",
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M2 6h20v12H2V6zm2 2v8h16V8H4z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            d="M6 10h12v4H6V10z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "#2496ED",
      category: "DevOps",
      description: "Containerization platform",
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M12 6v12M6 12h12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      color: "#F05032",
      category: "DevOps",
      description: "Version control system",
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          </g>
        </svg>
      ),
      color: "#61DAFB",
      category: "Language",
      description: "Library for web and native user interfaces",
    },
    {
      name: "Clean Arch",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#00D1FF",
      category: "Architecture",
      description: "Maintainable and testable code structure",
    },
    {
      name: "REST APIs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path d="M4 11V3h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 13v8h-8v-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="20" cy="9" r="2" fill="currentColor"/>
          <circle cx="4" cy="15" r="2" fill="currentColor"/>
        </svg>
      ),
      color: "#FF0055",
      category: "Backend",
      description: "RESTful API design and integration",
    },
  ];

  const categories = ["All", "Mobile", "Language", "Backend", "Cloud", "DevOps", "Architecture"];

  const filteredTechStack = activeCategory === "All"
    ? techStack
    : techStack.filter(tech => tech.category === activeCategory);

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-4 block">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-4">
            Tools & Technologies
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
            A curated selection of technologies I use to build modern, scalable applications.
          </p>

          {/* Core Competencies */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {[
              "Mobile App Architecture",
              "Audio Programming",
              "Cross-Platform Solutions",
              "UI/UX Implementation",
              "API Integration"
            ].map((competency, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-text-primary shadow-lg backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                {competency}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-accent text-black shadow-lg shadow-accent/20"
                : "bg-white/5 border border-white/10 text-text-secondary hover:bg-white/10"
                }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-magnetic
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredTechStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${tech.category}`} tech={tech} index={index} />
          ))}
        </motion.div>


      </div>
    </section>
  );
}

interface TechIconProps {
  tech: TechItem;
  index: number;
}

function TechIcon({ tech, index }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      className="group cursor-pointer"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-magnetic
    >
      {/* Icon container with enhanced glow effect */}
      <motion.div
        className="relative"
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced glow background */}
        <motion.div
          className="absolute inset-0 rounded-2xl blur-2xl"
          style={{ backgroundColor: tech.color }}
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.8 : 1,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Icon with 3D effect */}
        <motion.div
          className="relative w-16 h-16 md:w-20 md:h-20 p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-xl"
          style={{ color: tech.color }}
          animate={{
            rotateY: isHovered ? 15 : 0,
            rotateX: isHovered ? -15 : 0,
            boxShadow: isHovered
              ? `0 20px 40px ${tech.color}40, 0 10px 20px ${tech.color}20`
              : "0 10px 30px rgba(0,0,0,0.3)",
            borderColor: isHovered ? tech.color : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated ring on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ border: `3px solid ${tech.color}` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? [0, 0.8, 0] : 0,
              scale: isHovered ? [0.8, 1.2, 0.8] : 0.8,
            }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Icon content */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {tech.icon}
          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute -top-2 -right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white border border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {tech.category}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Name with enhanced animation */}
      <motion.div
        className="mt-4 text-center"
        animate={{
          y: isHovered ? -2 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.h3
          className="text-lg font-bold text-text-heading"
          animate={{
            color: isHovered ? tech.color : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          {tech.name}
        </motion.h3>
        <motion.p
          className="text-text-secondary text-sm mt-1 line-clamp-2"
          animate={{
            opacity: isHovered ? 1 : 0.7,
            y: isHovered ? 0 : 2,
          }}
          transition={{ duration: 0.3 }}
        >
          {tech.description}
        </motion.p>
      </motion.div>

      {/* Floating particles and effects */}
      {isHovered && (
        <>
          {/* Floating tech particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: tech.color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: (Math.random() - 0.5) * 60,
                y: (Math.random() - 0.5) * 60 - 40,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Pulsing connection lines */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: tech.color }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Floating description tooltip */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-text-secondary text-xs">{tech.description}</span>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Cloud, Building, Music, Smartphone, Database, Server, Globe, Code } from "lucide-react";
import React, { useRef } from "react";

interface TimelineProject {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  pubDevUrl?: string;
  icon: React.ReactNode;
  gradient: string;
  year: string;
  imageSrc?: string;
  deviceType?: "mobile" | "desktop";
}

const timelineProjects: TimelineProject[] = [
  {
    id: 1,
    title: "KrishnaTune Alexa Skill",
    category: "VOICE MUSIC STREAMING",
    description:
      "A production-grade Alexa skill for streaming JioSaavn music with intelligent AutoMix, robust queue handling, and rich voice-based discovery across charts, moods, and trending content.",
    techStack: ["Node.js", "Alexa Skills Kit", "AWS Lambda", "JioSaavn SDK"],
    features: [
      "Intelligent AutoMix for long listening sessions",
      "Voice controls for play, pause, seek, and queue",
      "Multi-language playback with chart, mood, and trending intents",
      "Session-aware playback state and resilient error handling",
    ],
    githubUrl: "https://github.com/krishna-9099/krishna-tune",
    icon: <Server className="w-6 h-6" />,
    gradient: "from-cyan-500 to-blue-400",
    year: "2026",
    deviceType: "mobile",
  },
  {
    id: 2,
    title: "Saavn Play",
    category: "OPEN SOURCE LIBRARY",
    description:
      "A powerful Dart/Flutter package available on pub.dev that provides seamless integration with Saavn Play APIs for music data and playback workflows. Enables developers to build music applications with access to rich catalog metadata.",
    techStack: ["Dart", "Flutter", "REST API", "pub.dev"],
    features: [
      "Song search & streaming",
      "Playlist management",
      "Lyrics support",
      "Artist & album discovery",
    ],
    pubDevUrl: "https://pub.dev/packages/saavn_play",
    githubUrl: "https://github.com/krishna-9099/saavn_play",
    icon: <Music className="w-6 h-6" />,
    gradient: "from-green-500 to-emerald-400",
    year: "2024",
    deviceType: "mobile",
  },
  {
    id: 3,
    title: "Hostel Management System",
    category: "ENTERPRISE SOLUTION",
    description:
      "A comprehensive hostel management platform designed to streamline room allocations, student records, fee management, and facility bookings. Built with scalability and user experience in mind.",
    techStack: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    features: [
      "Room allocation & management",
      "Student record tracking",
      "Fee payment integration",
      "Real-time notifications",
    ],
    githubUrl: "https://github.com/krishan/hostel-management",
    icon: <Building className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-400",
    year: "2023",
    deviceType: "mobile",
  },
  {
    id: 4,
    title: "Weather App",
    category: "WEATHER FORECASTING",
    description:
      "A sleek and intuitive weather application that provides real-time weather data, forecasts, and location-based weather updates. Features beautiful weather animations and a clean, minimal interface.",
    techStack: ["Flutter", "Dart", "OpenWeather", "Geolocation"],
    features: [
      "Real-time weather updates",
      "7-day weather forecast",
      "Location-based weather detection",
      "Beautiful weather animations",
    ],
    githubUrl: "https://github.com/krishan/weather-app",
    icon: <Cloud className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-400",
    year: "2023",
    deviceType: "mobile",
  },
];

// Helper to map tech stack names to icons
function getTechIcon(tech: string) {
  const t = tech.toLowerCase();
  if (t.includes("flutter") || t.includes("dart") || t.includes("react") || t.includes("native")) return <Smartphone className="w-3.5 h-3.5 text-blue-400" />;
  if (t.includes("api") || t.includes("node") || t.includes("engine")) return <Server className="w-3.5 h-3.5 text-green-400" />;
  if (t.includes("firebase") || t.includes("mongo") || t.includes("hive")) return <Database className="w-3.5 h-3.5 text-yellow-400" />;
  if (t.includes("web") || t.includes("openweather") || t.includes("geolocation") || t.includes("pub.dev")) return <Globe className="w-3.5 h-3.5 text-purple-400" />;
  return <Code className="w-3.5 h-3.5 text-gray-400" />;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as const, // Beautiful easeOutQuint
    },
  },
};

export default function ProjectTimeline() {
  return (
    <section
      id="timeline"
      className="relative py-24 md:py-32 px-6 overflow-hidden bg-transparent"
      aria-label="Project Timeline"
    >
      {/* Background Ambient Orbs for total scene depth */}
      <div className="absolute top-[10%] -left-64 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-64 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs font-bold tracking-widest uppercase shadow-sm">
            Featured Projects
          </span>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold flex flex-col md:flex-row md:items-end justify-between gap-6 mb-24 md:mb-32 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Crafting Experiences</span>
          <span className="text-lg font-normal text-white/50 md:w-1/3 leading-relaxed tracking-wide">
            A selection of my best work exploring mobile architecture, intuitive UI, and cross-platform native feel.
          </span>
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          <motion.div
            className="flex flex-col gap-32 md:gap-40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {timelineProjects.map((project, index) => (
              <TimelineItem
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  project: TimelineProject;
  index: number;
}

function DeviceMockup({ project, isEven }: { project: TimelineProject, isEven: boolean }) {
  // Parallax effect for the mockup scrolling gently
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Angle towards the text side
  const rotateY = isEven ? 15 : -15;

  return (
    <motion.div
      ref={ref}
      style={{ y, perspective: "1500px" }}
      className="relative w-full max-w-[340px] md:max-w-[420px] mx-auto z-10 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Implied Glow emitting from the device back */}
      <div className={`absolute -inset-4 md:-inset-10 bg-gradient-to-br ${project.gradient} opacity-20 blur-[60px] rounded-full -z-20 transition-opacity duration-700 group-hover:opacity-40`} />

      {/* Floating Badges (Glassmorphism Micro-interactions) */}
      <motion.div
        className="hidden md:flex absolute -top-4 -left-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] items-center justify-center z-30"
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transform: "translateZ(80px)" }}
      >
        {React.cloneElement(project.icon as React.ReactElement, { className: "w-6 h-6 text-white/80" })}
      </motion.div>

      <motion.div
        className="hidden md:flex absolute -bottom-10 -right-4 w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] items-center justify-center z-30"
        animate={{ y: [0, 12, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        style={{ transform: "translateZ(60px)" }}
      >
        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${project.gradient} shadow-[0_0_10px_rgba(255,255,255,0.4)]`} />
      </motion.div>

      {/* The 3D Angle Wrapper */}
      <motion.div
        className="relative w-full aspect-[4/5] rounded-[2rem] bg-[#111113]/80 backdrop-blur-sm border border-white/5 shadow-2xl flex items-center justify-center group"
        whileHover={{ rotateY: rotateY * 0.4, rotateX: 2, rotateZ: 0 }}
        animate={{ rotateY: rotateY, rotateX: 8, rotateZ: isEven ? -2 : 2 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* Soft edge highlight for backplate */}
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* The Phone Overlaying the Backplate */}
        <div
          className="absolute w-[82%] aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-[#222225] bg-black shadow-[30px_30px_50px_rgba(0,0,0,0.7)] overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[40px_40px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out will-change-transform"
          style={{ transform: "translateZ(40px)" }} // Pop out in 3D
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-28 h-5 md:h-6 bg-[#222225] rounded-b-2xl z-20 flex justify-center items-center gap-1.5 shadow-sm">
            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#0a0a0a] shadow-inner" />
            <div className="w-[3px] md:w-1 h-[3px] md:h-1 rounded-full bg-blue-900/50 shadow-[0_0_4px_rgba(59,130,246,0.5)]" />
          </div>

          {/* Screen Display */}
          <div className="absolute inset-0 bg-[#0a0a0c] w-full h-full z-10 overflow-hidden group-hover:scale-105 transition-transform duration-1000">
            {project.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.imageSrc} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full relative flex flex-col items-center justify-center p-6 text-center">
                {/* Internal gradient app mockup logic */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-black/80 to-transparent" />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent" />

                <motion.div
                  className="relative p-4 md:p-5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl mb-6 shadow-2xl"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                >
                  {React.cloneElement(project.icon as React.ReactElement, { className: "w-8 h-8 md:w-10 md:h-10 text-white shadow-sm" })}
                </motion.div>
                <h4 className="relative text-white font-bold text-lg md:text-xl mb-1 shadow-black drop-shadow-lg leading-tight">{project.title}</h4>
                <p className="relative text-white/50 text-[10px] md:text-xs mt-2 tracking-[0.2em] uppercase font-bold">In Development</p>
              </div>
            )}
          </div>

          {/* Glare overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none z-30" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function TimelineItem({ project, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${isEven ? "" : "md:flex-row-reverse"
        }`}
      variants={itemVariants}
    >
      {/* 3D Mockup Column */}
      <div className="w-full md:w-1/2 flex justify-center py-4 md:py-8">
        <DeviceMockup project={project} isEven={isEven} />
      </div>

      {/* Info Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <motion.div
          whileHover={{ x: isEven ? 5 : -5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative group"
        >
          {/* Subtle Year Background */}
          <div className={`absolute -top-16 md:-top-24 ${isEven ? "-left-8 md:-left-16" : "-right-8 md:-right-16"} text-8xl md:text-[160px] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none z-0`}>
            {project.year}
          </div>

          <div className="relative z-10">
            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-white group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>

            {/* Description Subtitle */}
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 md:mb-10 lg:w-[90%]">
              {project.description}
            </p>

            {/* Premium Pill Tech Stack */}
            <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-colors"
                >
                  {getTechIcon(tech)}
                  <span className="text-[11px] md:text-xs font-semibold text-white/80 tracking-wide">{tech}</span>
                </div>
              ))}
            </div>

            {/* Premium Action Buttons - Solid Primary & Outlined Secondary */}
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  View Code
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              )}
              {(project.liveUrl || project.pubDevUrl) && (
                <a
                  href={project.liveUrl || project.pubDevUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  {project.liveUrl ? "Live Demo" : "Explore Package"}
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


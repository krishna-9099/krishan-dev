import { motion } from "framer-motion";
import { ExternalLink, Check, AudioWaveform } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  caseStudyUrl?: string;
  imageUrl?: string;
}

const featuredProject: Project = {
  title: "Muse Music App",
  category: "AUDIO ARCHITECTURE",
  description:
    "A high-fidelity dual-player crossfade engine engineered for seamless mixing. Features real-time audio analysis and a custom gesture-based interface.",
  techStack: ["Flutter 3.0", "Dart", "FFMpeg", "Clean Architecture"],
  features: [
    "Zero-latency audio playback engine",
    "Custom waveform visualization shaders",
  ],
  githubUrl: "https://github.com/krishan/muse",
  caseStudyUrl: "#",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7VMn6kSbpar1tE4LPzkaXe-R1qHC0nmZXLFuJM0PT47eacT5mj1acHNMMB3ZI_Xq6DtJx2nPL3ADUYzkiflTDb-u92mxBPMYMrWB06X5MrchOlRAGlC7Iw1Lmq6uDeLsPhrE43ZpsWiKFssaFQJGKdJ-Kse3OCuG1HB_6Wp1QUOcTgc5xxZG5twSkdYvIkqRvDOc8CDE1UQN4aQPegeaEmWzTPWF72Jv1HJGxa7QJhQ44LkhxL69ArKNqpZD7PIhAxq2gn2equwc",
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6"
      aria-label="Featured projects"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-accent text-sm font-medium tracking-wider">
            SELECTED WORK
          </span>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Featured Project
        </motion.h2>

        {/* Main Featured Project Card */}
        <motion.div
          className="glass-card rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative group hover:border-accent/30 transition-colors duration-500"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Background Gradient Splash */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup Area */}
            <motion.div
              className="relative min-h-[550px] md:min-h-[600px] lg:min-h-[500px] lg:h-[500px] w-full flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Phone Mockup */}
              <motion.div
                className="relative w-[260px] h-[520px] bg-slate-900 border-8 border-slate-800 rounded-[3rem] shadow-2xl rotate-[-6deg] translate-y-12 lg:translate-y-0 lg:-translate-x-4 z-10 overflow-hidden transform transition-transform duration-500 group-hover:rotate-0 group-hover:translate-y-4"
                whileHover={{ scale: 1.02 }}
              >
                {/* Phone Screen Image */}
                {featuredProject.imageUrl ? (
                  <img
                    src={featuredProject.imageUrl}
                    alt="Muse App Music Player Interface showing album art and waveforms"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black" />
                )}

                {/* Overlay UI elements */}
                <div className="absolute bottom-8 left-6 right-6">
                  <div className="h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "66%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-white">
                    <span className="w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                      </svg>
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center text-accent hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Second screen behind */}
              <div className="absolute w-[240px] h-[480px] bg-slate-800 rounded-[2.5rem] opacity-40 rotate-[6deg] scale-90 translate-x-12 lg:translate-x-20 -z-0 blur-[1px]" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex flex-col gap-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Category Badge with Icon */}
              <motion.div
                className="flex items-center gap-3 mb-2"
                variants={itemVariants}
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <AudioWaveform className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent font-bold tracking-wide text-sm">
                  {featuredProject.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-text-heading leading-tight"
                variants={itemVariants}
              >
                {featuredProject.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-text-secondary text-lg leading-relaxed"
                variants={itemVariants}
              >
                {featuredProject.description}
              </motion.p>

              {/* Tech Stack Tags */}
              <motion.div
                className="flex flex-wrap gap-2 my-2"
                variants={itemVariants}
              >
                {featuredProject.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-secondary hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Features List */}
              <motion.ul
                className="space-y-3 mb-4"
                aria-label="Project features"
                variants={containerVariants}
              >
                {featuredProject.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-text-secondary"
                    variants={itemVariants}
                  >
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 pt-4"
                variants={itemVariants}
              >
                {featuredProject.githubUrl && (
                  <motion.a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-magnetic
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    View Source
                  </motion.a>
                )}
                {featuredProject.caseStudyUrl && (
                  <motion.a
                    href={featuredProject.caseStudyUrl}
                    className="btn-secondary flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-magnetic
                  >
                    Case Study
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

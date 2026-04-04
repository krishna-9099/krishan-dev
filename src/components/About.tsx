import { motion } from "framer-motion";
import { Smartphone, Music, Rocket, Download, ExternalLink } from "lucide-react";

interface Highlight {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const highlights: Highlight[] = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    value: "20+",
    label: "Apps Published",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: <Music className="w-5 h-5" />,
    value: "1M+",
    label: "Downloads",
    color: "from-orange-500 to-amber-400",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    value: "50+",
    label: "Projects Delivered",
    color: "from-green-500 to-emerald-400",
  },
];

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6"
      aria-label="About section"
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
            WHO I AM
          </span>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Bio Bento Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Subtle gradient hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-6 mb-2">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-1 shrink-0">
                  <div className="w-full h-full rounded-full bg-background flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
                      KT
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-1">Krishan</h3>
                  <p className="text-text-muted text-lg">Flutter Developer & Audio Architect</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <p className="text-text-body text-lg leading-relaxed">
                  I'm a passionate <span className="text-text-primary font-medium">Flutter Developer</span> and
                  <span className="text-text-primary font-medium"> Audio Architect</span> based in India,
                  specializing in building high-performance mobile applications with seamless user experiences.
                </p>
                <p className="text-text-body text-lg leading-relaxed">
                  I've had the privilege of working with startups and enterprises alike, delivering solutions
                  that have reached millions of users worldwide. My expertise lies in crafting audio-intensive
                  applications, real-time systems, and cross-platform solutions.
                </p>
                <p className="text-text-body text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new music, contributing to open-source projects,
                  or writing technical articles to share knowledge with the developer community.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="/resume"
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn-secondary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Get in Touch
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Stats Bento */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 grid grid-cols-2 gap-6 lg:gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                className={`glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center group ${
                  index === 2 ? "col-span-2" : "col-span-1"
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                variants={itemVariants}
              >
                <motion.div
                  className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {highlight.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  {highlight.value}
                </div>
                <div className="text-text-muted text-sm font-medium">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

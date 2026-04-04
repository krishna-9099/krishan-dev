import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative pt-12 pb-8 overflow-hidden"
      aria-label="Footer"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-[100%] blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <motion.div
          className="pt-8 border-t border-border-subtle flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-text-muted text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span variants={itemVariants}>
            © {currentYear} Krishan. All rights reserved.
          </motion.span>
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-accent font-medium">System Operational</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-border-subtle" />
            <span>Powered by <span className="text-text-primary">React</span> & <span className="text-text-primary">Three.js</span></span>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <span>Crafted with</span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span>passion</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

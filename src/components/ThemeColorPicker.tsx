import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';

interface ColorTheme {
  name: string;
  accent: string;
  accentMuted: string;
  accentGlow: string;
  borderAccent: string;
}

const colorThemes: ColorTheme[] = [
  {
    name: 'Emerald',
    accent: '#22c55e',
    accentMuted: 'rgba(34, 197, 94, 0.1)',
    accentGlow: 'rgba(34, 197, 94, 0.15)',
    borderAccent: 'rgba(34, 197, 94, 0.3)',
  },
  {
    name: 'Ocean Blue',
    accent: '#3b82f6',
    accentMuted: 'rgba(59, 130, 246, 0.1)',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    borderAccent: 'rgba(59, 130, 246, 0.3)',
  },
  {
    name: 'Electric Purple',
    accent: '#a855f7',
    accentMuted: 'rgba(168, 85, 247, 0.1)',
    accentGlow: 'rgba(168, 85, 247, 0.15)',
    borderAccent: 'rgba(168, 85, 247, 0.3)',
  },
  {
    name: 'Sunset Orange',
    accent: '#f97316',
    accentMuted: 'rgba(249, 115, 22, 0.1)',
    accentGlow: 'rgba(249, 115, 22, 0.15)',
    borderAccent: 'rgba(249, 115, 22, 0.3)',
  },
  {
    name: 'Cyberpunk Pink',
    accent: '#ec4899',
    accentMuted: 'rgba(236, 72, 153, 0.1)',
    accentGlow: 'rgba(236, 72, 153, 0.15)',
    borderAccent: 'rgba(236, 72, 153, 0.3)',
  },
];

export default function ThemeColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ColorTheme>(colorThemes[0]);

  const applyTheme = (theme: ColorTheme) => {
    setActiveTheme(theme);
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-muted', theme.accentMuted);
    root.style.setProperty('--accent-glow', theme.accentGlow);
    root.style.setProperty('--border-accent', theme.borderAccent);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-4">
      {/* Toggle Button */}
      <motion.button
        className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-text-primary hover:text-accent shadow-lg transition-colors border border-border-subtle hover:border-accent group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme picker"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-text-primary group-hover:text-accent" />
            </motion.div>
          ) : (
            <motion.div
              key="palette"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Palette className="w-5 h-5 text-text-primary group-hover:text-accent" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Palette Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 p-3 rounded-2xl glass-card border border-border-subtle shadow-xl items-center"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {colorThemes.map((theme) => (
              <motion.button
                key={theme.name}
                className={`w-8 h-8 rounded-full border-2 transition-transform duration-200 relative ${activeTheme.name === theme.name ? 'border-white' : 'border-transparent'}`}
                style={{ backgroundColor: theme.accent }}
                onClick={() => applyTheme(theme)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Switch to ${theme.name} theme`}
                title={theme.name}
              >
                {activeTheme.name === theme.name && (
                  <motion.div 
                    layoutId="activeColorIndicator"
                    className="absolute inset-0 rounded-full ring-2 ring-white ring-offset-2 ring-offset-bg-primary shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

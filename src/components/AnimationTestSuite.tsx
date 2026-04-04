import { useState } from "react";
import { motion } from "framer-motion";
import { usePerformanceOptimizedAnimations, usePerformanceMonitor } from "./PerformanceOptimizedAnimations";
import { Code, Smartphone, Database, Cloud } from "lucide-react";

export default function AnimationTestSuite() {
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<any[]>([]);
  const config = usePerformanceOptimizedAnimations();
  const { fps, memoryUsage } = usePerformanceMonitor();

  const runTests = () => {
    setIsTesting(true);
    const results: any[] = [];

    // Test 1: Performance Configuration
    results.push({
      test: "Performance Configuration",
      status: "PASS",
      details: {
        reduceMotion: config.reduceMotion,
        isMobile: config.isMobile,
        isLowEndDevice: config.isLowEndDevice,
        prefersReducedMotion: config.prefersReducedMotion,
      }
    });

    // Test 2: Animation Performance
    setTimeout(() => {
      results.push({
        test: "Animation Performance",
        status: fps > 50 ? "PASS" : "WARN",
        details: {
          fps: Math.round(fps),
          memoryUsage: `${memoryUsage.toFixed(2)} MB`,
          recommendation: fps < 30 ? "Consider reducing animation complexity" : "Performance is good"
        }
      });
    }, 1000);

    // Test 3: Reduced Motion Support
    results.push({
      test: "Reduced Motion Support",
      status: config.reduceMotion ? "PASS" : "SKIP",
      details: {
        message: config.reduceMotion
          ? "Animations disabled for accessibility"
          : "Animations enabled"
      }
    });

    // Test 4: Device Detection
    results.push({
      test: "Device Detection",
      status: "PASS",
      details: {
        deviceType: config.isMobile ? "Mobile" : "Desktop",
        performanceTier: config.isLowEndDevice ? "Low-end" : "High-end",
        animationTier: getAnimationTier(config)
      }
    });

    setTestResults(results);
    setIsTesting(false);
  };

  const getAnimationTier = (config: any) => {
    if (config.reduceMotion) return "None";
    if (config.isLowEndDevice) return "Lightweight";
    if (config.isMobile) return "Standard";
    return "Rich";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-sm">Animation Test Suite</h3>
          <button
            onClick={runTests}
            className="px-2 py-1 bg-accent text-black text-xs rounded hover:bg-white/80 transition-colors"
          >
            Run Tests
          </button>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div>FPS: <span className={fps > 50 ? "text-green-400" : fps > 30 ? "text-yellow-400" : "text-red-400"}>{Math.round(fps)}</span></div>
          <div>Memory: <span className="text-blue-400">{memoryUsage.toFixed(2)} MB</span></div>
          <div>Device: <span className="text-purple-400">{config.isMobile ? "Mobile" : "Desktop"}</span></div>
          <div>Animations: <span className={config.reduceMotion ? "text-red-400" : "text-green-400"}>
            {config.reduceMotion ? "Disabled" : "Enabled"}
          </span></div>
        </div>

        {/* Test Results */}
        {testResults.length > 0 && (
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {testResults.map((result, index) => (
              <div key={index} className="text-xs">
                <span className={result.status === "PASS" ? "text-green-400" : result.status === "WARN" ? "text-yellow-400" : "text-red-400"}>
                  {result.status}
                </span>
                : {result.test}
              </div>
            ))}
          </div>
        )}

        {/* Loading Indicator */}
        {isTesting && (
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Running tests...
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Component to test different animation scenarios
export function AnimationScenarioTester() {
  const config = usePerformanceOptimizedAnimations();

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Animation Scenarios</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scenario 1: Floating Numbers */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold mb-4">Floating Numbers</h3>
            <div className="text-4xl font-bold text-accent">
              {config.reduceMotion ? "100%" : "100%"}
            </div>
            <p className="text-sm text-text-secondary mt-2">
              Performance: {config.isLowEndDevice ? "Optimized" : "Enhanced"}
            </p>
          </motion.div>

          {/* Scenario 2: Interactive Skills */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-bold mb-4">Interactive Skills</h3>
            <div className="flex gap-2">
              {[Code, Smartphone, Database, Cloud].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-2">
              Motion: {config.reduceMotion ? "Reduced" : "Full"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Component to demonstrate accessibility features
export function AccessibilityDemo() {
  const config = usePerformanceOptimizedAnimations();

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-bg-primary to-bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Accessibility Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <h3 className="font-bold mb-4">Reduced Motion</h3>
            <p className="text-sm text-text-secondary mb-4">
              Respects user's motion preferences
            </p>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${config.reduceMotion ? 'bg-red-500' : 'bg-green-500'}`} />
              <span className="text-sm">
                {config.reduceMotion ? "Disabled" : "Enabled"}
              </span>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold mb-4">Performance Optimization</h3>
            <p className="text-sm text-text-secondary mb-4">
              Adapts to device capabilities
            </p>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${config.isLowEndDevice ? 'bg-yellow-500' : 'bg-blue-500'}`} />
              <span className="text-sm">
                {config.isLowEndDevice ? "Optimized" : "Enhanced"}
              </span>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold mb-4">Mobile Support</h3>
            <p className="text-sm text-text-secondary mb-4">
              Touch-friendly interactions
            </p>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${config.isMobile ? 'bg-purple-500' : 'bg-gray-500'}`} />
              <span className="text-sm">
                {config.isMobile ? "Mobile" : "Desktop"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

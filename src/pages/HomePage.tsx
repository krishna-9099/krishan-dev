import Navigation from '../components/Navigation';
import ThemeColorPicker from '../components/ThemeColorPicker';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProject from '../components/FeaturedProject';
import ProjectTimeline from '../components/ProjectTimeline';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

/**
 * HomePage - Main landing page combining all section components
 * Converted from app/page.tsx for React + Vite
 */
export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <ScrollProgress />
      <ThemeColorPicker />
      <Navigation />
      <Hero />
      <About />
      <FeaturedProject />
      <ProjectTimeline />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

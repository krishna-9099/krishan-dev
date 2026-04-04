import { Download, ArrowLeft, MapPin, Mail, Globe, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * ResumePage - Printable resume page
 * Converted from app/resume/page.tsx for React + Vite
 * Note: Print styles are handled in src/styles/globals.css
 */
export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Print/Download Button - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </button>
        <Link
          to="/"
          className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      {/* Resume Content */}
      <div className="max-w-[850px] mx-auto p-8 md:p-12 print:p-8 print:max-w-none">
        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Krishan</h1>
          <p className="text-xl text-gray-600 mt-1">Flutter Developer & Audio Architect</p>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              India (IST, UTC+5:30)
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              hello@krishan.dev
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              krishan.dev
            </span>
            <span className="flex items-center gap-1">
              <Github className="w-4 h-4" />
              github.com/krishan
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Flutter Developer and Audio Architect building high-performance mobile applications.
            Specialized in audio processing, cross-platform development, and creating seamless user experiences.
            Published 20+ apps with over 1M+ combined downloads. Creator of the JioSaavn Dart package on pub.dev.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Mobile Development</h3>
              <p className="text-gray-600 text-sm">Flutter, Dart, Kotlin, SwiftUI, Firebase, REST APIs</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Audio & Media</h3>
              <p className="text-gray-600 text-sm">FFmpeg, Audio Processing, Waveform Visualization, Streaming</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Backend & Database</h3>
              <p className="text-gray-600 text-sm">Node.js, MongoDB, Firebase, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Tools & Architecture</h3>
              <p className="text-gray-600 text-sm">Git, CI/CD, Clean Architecture, TDD, Agile</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Professional Experience
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Senior Flutter Developer</h3>
                <p className="text-gray-600">Freelance / Contract</p>
              </div>
              <span className="text-gray-500 text-sm">2021 - Present</span>
            </div>
            <ul className="mt-2 text-gray-700 text-sm space-y-1">
              <li>• Led development of 15+ mobile applications from concept to deployment</li>
              <li>• Built high-fidelity audio engine with zero-latency playback for music streaming apps</li>
              <li>• Implemented custom waveform visualization using OpenGL shaders</li>
              <li>• Reduced app startup time by 40% through performance optimization</li>
            </ul>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Flutter Developer</h3>
                <p className="text-gray-600">Tech Startup</p>
              </div>
              <span className="text-gray-500 text-sm">2019 - 2021</span>
            </div>
            <ul className="mt-2 text-gray-700 text-sm space-y-1">
              <li>• Developed cross-platform mobile applications serving 500K+ users</li>
              <li>• Integrated Firebase services including Auth, Firestore, and Cloud Functions</li>
              <li>• Collaborated with design team to implement pixel-perfect UI components</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Notable Projects
          </h2>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">Muse Music App</h3>
              <span className="text-gray-500 text-sm">2024</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              High-fidelity dual-player crossfade engine with real-time audio analysis and gesture-based interface.
              Built with Flutter 3.0, Dart, and FFmpeg.
            </p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">JioSaavn Package</h3>
              <span className="text-gray-500 text-sm">2024</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Open-source Dart/Flutter package on pub.dev for JioSaavn music streaming integration.
              Enables song search, streaming, playlist management, and lyrics support.
            </p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">ScapWall</h3>
              <span className="text-gray-500 text-sm">2024</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Modern wallpaper application with curated collections, smart categorization,
              and automatic wallpaper changer functionality.
            </p>
          </div>

          <div className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-gray-900">Hostel Management System</h3>
              <span className="text-gray-500 text-sm">2023</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">
              Enterprise solution for room allocations, student records, fee management,
              and facility bookings. Built with Flutter, Firebase, and Node.js.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Education
          </h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h3>
              <p className="text-gray-600">University Name</p>
            </div>
            <span className="text-gray-500 text-sm">2015 - 2019</span>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-gray-300 pb-2 mb-3">
            Achievements
          </h2>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• 20+ mobile applications published on App Store and Google Play</li>
            <li>• 1M+ combined downloads across all applications</li>
            <li>• Open-source contributor with packages on pub.dev</li>
            <li>• Speaker at Flutter community meetups</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

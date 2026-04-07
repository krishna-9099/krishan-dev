import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? "py-2" : "py-4"
        }`}
      aria-label="Main navigation"
    >
      {/* Background with vibrant gradient and blur - only visible when scrolled */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-out ${isScrolled ? "opacity-100" : "opacity-0"
          }`}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(34, 197, 94, 0.95) 0%, rgba(16, 185, 129, 0.92) 25%, rgba(20, 184, 166, 0.93) 50%, rgba(59, 130, 246, 0.92) 75%, rgba(99, 102, 241, 0.95) 100%)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.3)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.4), 0 0 50px rgba(34, 197, 94, 0.3)"
            : "none",
        }}
      />

      {/* Animated gradient accent line at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${isScrolled ? "opacity-100" : "opacity-0"
          }`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #60a5fa 20%, #a78bfa 50%, #f472b6 80%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-bold transition-all duration-300 ${isScrolled
            ? "text-xl text-white drop-shadow-lg"
            : "text-xl text-text-heading hover:text-accent"
            }`}
          aria-label="Krishna - Home"
        >
          <span className="relative">
            Krishna
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${isScrolled ? "w-full" : "w-0"
                }`}
            />
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative transition-all duration-300 ${isScrolled
                ? "text-white font-medium drop-shadow-md hover:text-white/90"
                : "nav-link"
                }`}
            >
              {link.label}
              {isScrolled && (
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors duration-200 ${isScrolled
            ? "text-white drop-shadow-md hover:text-white/90"
            : "text-text-muted hover:text-accent"
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
        style={{
          background: isScrolled
            ? "linear-gradient(180deg, rgba(34, 197, 94, 0.96) 0%, rgba(16, 185, 129, 0.95) 50%, rgba(20, 184, 166, 0.96) 100%)"
            : "rgba(13, 13, 13, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.3)"
            : "1px solid rgba(34, 197, 94, 0.2)",
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`transition-colors duration-200 py-2 ${isScrolled
                ? "text-white font-medium drop-shadow-md hover:text-white/80"
                : "text-white/80 hover:text-accent"
                }`}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

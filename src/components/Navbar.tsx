"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      const sections = navLinks.map((link) => document.getElementById(link.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${scrolled
        ? "bg-[#FAF7EE]/95 border-[#EAE4D3] shadow-sm"
        : "bg-[#FAF7EE]/85 border-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="#hero"
          onClick={() => setActiveSection("hero")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300/80 flex items-center justify-center text-amber-700 group-hover:bg-amber-200/70 transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" viewBox="0 0 24 24">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#1F1D1B] group-hover:text-amber-700 transition-colors">
            hita.dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`transition-colors duration-200 relative py-1 ${isActive
                  ? "text-[#1F1D1B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full"
                  : "text-[#635E59] hover:text-[#1F1D1B]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#1F1D1B] hover:bg-neutral-800 shadow-md shadow-stone-800/15 hover:shadow-stone-800/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Get In Touch</span>
            <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" viewBox="0 0 24 24">
              <line x1="7" x2="17" y1="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#1F1D1B]"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1F1D1B] hover:bg-amber-100/50"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-[#FAF7EE] border-b border-[#EAE4D3] space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 text-sm font-medium transition-colors ${isActive ? "text-amber-700 font-semibold" : "text-[#635E59] hover:text-[#1F1D1B]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
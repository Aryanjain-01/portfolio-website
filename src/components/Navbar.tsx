"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-[#222]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-2 z-50 relative">
          <span className="text-xl font-bold tracking-tighter text-white">
            AJ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Links & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 z-50 relative">
          <div className="hidden md:flex items-center space-x-4 border-l border-[#222] pl-4">
            <Link
              href="https://github.com/Aryanjain-01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aryan-jain-193323212/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <FileText size={20} />
              <span className="sr-only">Resume</span>
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, display: "block" },
          closed: { opacity: 0, y: "-100%", transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center pt-20"
      >
        <nav className="flex flex-col items-center space-y-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 pt-8 border-t border-[#222] w-full justify-center">
            <Link href="https://github.com/aryanjain" target="_blank" className="text-muted hover:text-white">
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/aryanjain" target="_blank" className="text-muted hover:text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="/resume.pdf" target="_blank" className="text-muted hover:text-white">
              <FileText size={24} />
            </Link>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}

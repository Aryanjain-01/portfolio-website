"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText, Activity } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const terminalLines = [
  { label: "SYSTEM STATUS", value: "ONLINE", status: "success" },
  { label: "MARKET DATA", value: "CONNECTED", status: "success" },
  { label: "API", value: "FASTAPI", status: "neutral" },
  { label: "DATABASE", value: "POSTGRESQL", status: "neutral" },
  { label: "FRONTEND", value: "REACT", status: "neutral" },
  { label: "LANGUAGES", value: "PYTHON / C++ / TS", status: "neutral" },
  { label: "FOCUS", value: "FINTECH / AI", status: "accent" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#222] bg-white/5 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-muted uppercase tracking-wider">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            ARYAN JAIN
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-white/90">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl font-mono text-muted/80">
              Financial Systems &bull; Algorithmic Trading &bull; AI
            </p>
          </div>
          
          <p className="text-lg text-muted max-w-lg leading-relaxed pt-4 border-t border-[#222]">
            I build software systems at the intersection of engineering, finance, and artificial intelligence. Focusing on robust backends, data-intensive pipelines, and premium user experiences.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-medium transition-colors hover:bg-gray-200"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            
            <div className="flex items-center space-x-4 ml-2">
              <Link
                href="https://github.com/Aryanjain-01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md border border-[#222] bg-[#111] text-muted hover:text-white hover:border-gray-500 transition-all group"
              >
                <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aryan-jain-193323212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md border border-[#222] bg-[#111] text-muted hover:text-white hover:border-gray-500 transition-all group"
              >
                <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md border border-[#222] bg-[#111] text-muted hover:text-white hover:border-gray-500 transition-all group"
              >
                <FileText size={20} className="group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-md"
        >
          <div className="glass-panel rounded-xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 opacity-50 z-0"></div>
            
            {/* Terminal Header */}
            <div className="flex items-center space-x-2 px-4 py-3 border-b border-[#222] bg-[#111]/80 z-10 relative">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto flex items-center space-x-2 text-xs font-mono text-muted/60">
                <Activity size={12} />
                <span>ENGINEERING_SYSTEM_V2.0</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm z-10 relative">
              <div className="flex flex-col space-y-4">
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={line.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="flex justify-between items-center border-b border-[#222]/50 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-muted/80">{line.label}</span>
                    <div className="flex items-center space-x-2">
                      {line.status === "success" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                      )}
                      <span
                        className={`font-medium ${
                          line.status === "success"
                            ? "text-green-400"
                            : line.status === "accent"
                            ? "text-blue-400"
                            : "text-white"
                        }`}
                      >
                        {line.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={mounted ? { opacity: 1 } : {}}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="pt-4 flex items-center text-muted"
                >
                  <span className="text-green-500 mr-2">aj@system:~$</span>
                  <span className="inline-block w-2 h-4 bg-white/80 animate-pulse"></span>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] pointer-events-none"></div>
        </motion.div>

      </div>
    </section>
  );
}

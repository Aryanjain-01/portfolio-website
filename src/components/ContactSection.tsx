"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Code2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 relative border-t border-[#222]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            LET'S BUILD SOMETHING <span className="text-blue-500">USEFUL.</span>
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
            Interested in software engineering, financial systems, algorithmic trading or AI? I'm always open to discussing technical challenges and new opportunities.
          </p>

          <Link href="mailto:aryanjain9699@gmail.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              <Mail size={20} />
              <span>Get in Touch</span>
            </motion.button>
          </Link>

          <div className="flex items-center justify-center space-x-6 mt-16 pt-12 border-t border-[#222]/50">
            <Link
              href="https://github.com/Aryanjain-01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-white transition-colors group"
            >
              <FaGithub size={20} className="group-hover:text-white transition-colors" />
              <span className="font-mono text-sm">GitHub</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/aryan-jain-193323212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-white transition-colors group"
            >
              <FaLinkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              <span className="font-mono text-sm">LinkedIn</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="https://leetcode.com/u/Aryanjain41/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-white transition-colors group"
            >
              <Code2 size={20} className="group-hover:text-yellow-500 transition-colors" />
              <span className="font-mono text-sm">LeetCode</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

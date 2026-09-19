import Link from "next/link";
import { Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a] py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tighter text-white mb-2">
            ARYAN JAIN
          </h2>
          <p className="text-sm text-muted">
            Software Engineer &bull; Financial Systems &bull; AI
          </p>
          <p className="text-xs text-muted/60 mt-4">
            &copy; {new Date().getFullYear()} Aryan Jain. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="https://github.com/Aryanjain-01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span className="text-sm hidden sm:inline-block">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aryan-jain-193323212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span className="text-sm hidden sm:inline-block">LinkedIn</span>
          </Link>
          <Link
            href="https://leetcode.com/u/Aryanjain41/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-white transition-colors flex items-center space-x-2"
          >
            <Code2 size={20} />
            <span className="text-sm hidden sm:inline-block">LeetCode</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

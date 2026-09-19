"use client";

import { motion } from "framer-motion";
import { Server, LineChart, BrainCircuit, GraduationCap } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "ENGINEERING",
    description:
      "Backend APIs, full-stack applications, databases, and system workflows. Building robust, scalable architecture with modern tools.",
    icon: <Server className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "02",
    title: "FINANCE",
    description:
      "Algorithmic trading, market data, trading signals, risk management, and paper trading. Bridging the gap between code and capital.",
    icon: <LineChart className="w-6 h-6 text-green-400" />,
  },
  {
    id: "03",
    title: "AI",
    description:
      "Machine learning, LLM APIs, and AI agents. Integrating intelligence into software systems for automated decision-making.",
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            <span className="text-muted mr-4 font-mono text-xl">/01</span>
            Core Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl flex flex-col group hover:border-gray-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-muted group-hover:text-white transition-colors">
                  {pillar.id}
                </span>
                <div className="p-3 bg-[#111] rounded-lg border border-[#222]">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Currently Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 glass-panel rounded-xl p-8 relative overflow-hidden"
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-[#111] rounded-full border border-[#222]">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-mono text-muted uppercase tracking-wider mb-1">Currently</h4>
                <p className="text-lg md:text-xl font-medium text-white">Software Engineering Student</p>
              </div>
            </div>
            
            <div className="flex flex-col md:text-right space-y-1 pl-4 md:pl-0 border-l-2 md:border-l-0 border-[#222]">
              <p className="text-white font-medium">JECRC University</p>
              <p className="text-muted">B.Tech Computer Science Engineering</p>
              <p className="text-sm font-mono text-muted/60 mt-1">2023 — 2027</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

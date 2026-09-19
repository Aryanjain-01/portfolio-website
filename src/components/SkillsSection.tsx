"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    title: "BACKEND & APIs",
    skills: ["FastAPI", "REST APIs", "API Integration", "JSON", "Next.js"],
  },
  {
    title: "TRADING & FINANCE",
    skills: [
      "Market Data",
      "Trading Signals",
      "Technical Indicators",
      "BUY/SELL Orders",
      "Long/Short Positions",
      "Stop-Loss",
      "Targets",
      "Risk-Reward",
      "Position Sizing",
      "Paper Trading",
      "Order Management",
    ],
  },
  {
    title: "DATABASES",
    skills: ["MySQL", "SQLAlchemy"],
  },
  {
    title: "AI & MACHINE LEARNING",
    skills: ["Scikit-learn", "TensorFlow", "LLM APIs", "AI Agents"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "CLOUD & TOOLS",
    skills: ["AWS S3", "Git", "GitHub", "Docker", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            <span className="text-muted mr-4 font-mono text-xl">/04</span>
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono text-muted uppercase tracking-widest mb-6 border-b border-[#222] pb-2 inline-block w-fit">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-md bg-[#111] border border-[#222] text-sm text-white/90 hover:text-white hover:border-gray-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

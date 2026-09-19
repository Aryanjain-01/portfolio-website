"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Celebal Technologies",
    role: "CEI Intern — Data Science",
    period: "May 2026 — Present",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
    highlights: [
      "Designed and implemented robust data-processing workflows to clean and preprocess complex datasets.",
      "Conducted extensive exploratory data analysis (EDA) to extract actionable insights and trends.",
      "Engineered features to improve the performance and accuracy of statistical and machine learning models.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            <span className="text-muted mr-4 font-mono text-xl">/02</span>
            Experience
          </h2>
        </div>

        <div className="relative pl-4 md:pl-8 border-l border-[#222]/50 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[21px] md:-left-[37px] top-1 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>

              <div className="glass-panel rounded-xl p-6 md:p-8 ml-4 md:ml-0 hover:border-gray-600 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-muted">
                      <Building2 size={16} />
                      <span className="font-medium text-white/90">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm font-mono text-muted/80 bg-[#111] px-3 py-1.5 rounded-md border border-[#222]">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start space-x-3 text-muted">
                      <ChevronRight size={18} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222]/50">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#111] text-muted border border-[#222]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    role: "Participant",
    description: "Ranked among the Top 15 teams at the college level.",
  },
  {
    title: "JU Verse Tech Club",
    role: "Operations Lead",
    description: "Coordinated technical events and managed cross-functional teams involving 500+ student participants.",
  },
];

const education = [
  {
    institution: "JECRC University, Jaipur",
    degree: "B.Tech in Computer Science Engineering",
    period: "2023 — 2027",
    metrics: "CGPA: 7.47/10",
  },
  {
    institution: "MDS Public School, Udaipur",
    degree: "Class XII",
    period: "Completed",
    metrics: "Percentage: 76%",
  },
  {
    institution: "Delhi Public School, Udaipur",
    degree: "Class X",
    period: "Completed",
    metrics: "Percentage: 92%",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Achievements */}
          <div>
            <div className="mb-10 flex items-center space-x-4">
              <div className="p-3 bg-[#111] rounded-lg border border-[#222]">
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                Achievements & Leadership
              </h2>
            </div>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-6 rounded-xl"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm font-mono text-blue-400 mb-3">{item.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-10 flex items-center space-x-4">
              <div className="p-3 bg-[#111] rounded-lg border border-[#222]">
                <GraduationCap className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                Education
              </h2>
            </div>
            
            <div className="relative pl-6 border-l border-[#222]/50 space-y-10">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-white border-2 border-[#111]"></div>
                  
                  <div className="ml-2">
                    <h3 className="text-lg font-bold text-white mb-1">{item.institution}</h3>
                    <p className="text-white/80 font-medium mb-1">{item.degree}</p>
                    <div className="flex items-center space-x-3 text-sm font-mono mt-2">
                      <span className="text-muted bg-[#111] px-2 py-0.5 rounded border border-[#222]">{item.period}</span>
                      <span className="text-green-400">{item.metrics}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

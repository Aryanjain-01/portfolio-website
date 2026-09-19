"use client";

import { motion } from "framer-motion";

const principles = [
  {
    id: "01",
    title: "BUILD SYSTEMS, NOT JUST FEATURES",
    description: "Focusing on the architecture, scalability, and maintainability of the entire application rather than isolated components.",
  },
  {
    id: "02",
    title: "THINK IN DATA FLOWS",
    description: "Designing solutions by first understanding how data moves through the system, from the database to the client UI.",
  },
  {
    id: "03",
    title: "DESIGN FOR REAL WORKFLOWS",
    description: "Creating interfaces and APIs that map naturally to how users and other systems actually operate.",
  },
  {
    id: "04",
    title: "LEARN BY SHIPPING",
    description: "Prioritizing deployment and real-world feedback to iterate rapidly and solve actual problems.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-mono text-muted uppercase tracking-widest border border-[#222] bg-[#111] px-4 py-2 rounded-full inline-block">
            Engineering Philosophy
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-6">
            HOW I BUILD
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border-l-4 border-l-blue-500 hover:border-l-green-500 transition-colors"
            >
              <span className="text-xl font-mono text-muted/50 mb-4 block">
                {principle.id}
              </span>
              <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                {principle.title}
              </h4>
              <p className="text-muted leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Database, Layout, Server, Activity, Wallet, Lock, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            <span className="text-muted mr-4 font-mono text-xl">/03</span>
            Systems & Applications
          </h2>
          <p className="text-muted mt-6 max-w-2xl text-lg">
            A selection of production-grade systems engineered for scale, reliability, and complex data workflows.
          </p>
        </div>

        <div className="space-y-32">
          {/* PROJECT 01: TRADEPILOT */}
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-green-400 uppercase tracking-widest border border-green-500/30 bg-green-500/10 px-3 py-1 rounded-full">
                    Project 01
                  </span>
                  <span className="text-xs font-mono text-muted uppercase tracking-widest">
                    Algorithmic Trading &bull; Paper Trading
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  TradePilot
                </h3>
                <p className="text-xl text-white/80 font-medium">
                  End-to-end algorithmic trading and portfolio management system.
                </p>
                <p className="text-muted leading-relaxed text-lg">
                  A comprehensive paper-trading platform simulating the entire trading lifecycle—from streaming market data and automated strategy signals to trade execution, risk management, and real-time position tracking.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-mono text-muted uppercase tracking-widest">Core Capabilities</h4>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-muted/90">
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Live Market Data</span></li>
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Strategy Signals</span></li>
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Position Management</span></li>
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Risk/Reward Calc</span></li>
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Automated Stop-loss</span></li>
                  <li className="flex items-center space-x-2"><Activity size={14} className="text-green-500"/><span>Portfolio P&L</span></li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "React", "TypeScript", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-md bg-[#111] text-white/70 border border-[#222]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="https://tradepilot-q9h8.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-medium transition-colors hover:bg-gray-200"
                >
                  <span>View Live</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="https://github.com/Aryanjain-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 rounded-md font-medium text-white border border-[#222] hover:bg-[#111] transition-colors"
                >
                  <FaGithub size={18} />
                  <span>Source</span>
                </Link>
              </div>
            </motion.div>

            {/* Trading Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl group-hover:from-green-500/20 transition-all duration-500 pointer-events-none"></div>
              <div className="glass-panel rounded-xl overflow-hidden shadow-2xl relative border-[#333] z-10">
                {/* Mock Browser Header */}
                <div className="h-10 border-b border-[#222] bg-[#111] flex items-center px-4 space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto bg-[#1a1a1a] rounded px-4 py-1 text-[10px] font-mono text-muted/50 border border-[#222]">
                    tradepilot.aryanjain.dev
                  </div>
                </div>
                {/* Mock Dashboard UI */}
                <div className="bg-[#0a0a0a] p-4 font-mono select-none">
                  <div className="flex justify-between items-center mb-4 border-b border-[#222] pb-4">
                    <div className="text-white font-bold tracking-wider">TRADEPILOT<span className="text-green-500 text-xs ml-1">v1.2</span></div>
                    <div className="flex space-x-4 text-xs">
                      <div className="text-muted">PORTFOLIO <span className="text-white font-sans font-medium">$124,500.00</span></div>
                      <div className="text-green-400">P&L +$4,500.00 (+3.75%)</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 border border-[#222] rounded bg-[#111] h-48 relative overflow-hidden flex flex-col justify-end p-2">
                      <div className="absolute top-2 left-2 text-xs text-muted">BTC/USD <span className="text-green-400">64,230.00</span></div>
                      {/* Fake Chart Lines */}
                      <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                        <polyline points="0,30 10,25 20,28 30,15 40,20 50,10 60,18 70,5 80,12 90,8 100,10" fill="none" stroke="#10b981" strokeWidth="1" />
                        <polygon points="0,40 0,30 10,25 20,28 30,15 40,20 50,10 60,18 70,5 80,12 90,8 100,10 100,40" fill="url(#green-gradient)" opacity="0.2" />
                        <defs>
                          <linearGradient id="green-gradient" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="col-span-1 flex flex-col gap-2">
                      <div className="border border-[#222] rounded bg-[#111] p-3">
                        <div className="text-[10px] text-muted mb-2">ORDER ENTRY</div>
                        <div className="flex gap-2 mb-2">
                          <div className="flex-1 bg-green-500/20 text-green-400 text-center text-xs py-1 rounded border border-green-500/30">BUY</div>
                          <div className="flex-1 bg-[#1a1a1a] text-muted text-center text-xs py-1 rounded border border-[#222]">SELL</div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-[#222] p-1.5 rounded text-xs text-white mb-2 flex justify-between"><span>QTY</span><span>1.5</span></div>
                        <div className="bg-green-500 text-black text-center text-xs py-1.5 rounded font-bold">SUBMIT ORDER</div>
                      </div>
                      <div className="border border-[#222] rounded bg-[#111] p-2 flex-1">
                         <div className="text-[10px] text-muted mb-2">OPEN POSITIONS</div>
                         <div className="text-xs flex justify-between text-white/80 mb-1"><span>BTC</span><span className="text-green-400">+1.2%</span></div>
                         <div className="text-xs flex justify-between text-white/80"><span>ETH</span><span className="text-red-400">-0.5%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <hr className="border-[#222]" />

          {/* PROJECT 02: FINNOVA */}
          <div className="flex flex-col xl:flex-row-reverse gap-12 xl:gap-20 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-widest border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">
                    Project 02
                  </span>
                  <span className="text-xs font-mono text-muted uppercase tracking-widest">
                    Personal Finance &bull; Full Stack
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                  Finnova
                </h3>
                <p className="text-xl text-white/80 font-medium">
                  Scalable financial management architecture.
                </p>
                <p className="text-muted leading-relaxed text-lg">
                  A secure, full-stack financial platform designed to track accounts, transactions, budgets, and expenses. Built with a focus on relational database design, data integrity, and fast retrieval.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-mono text-muted uppercase tracking-widest">System Architecture</h4>
                <div className="flex flex-col space-y-2 p-4 glass-panel rounded-lg border-[#333]">
                  <div className="flex items-center text-sm font-mono text-white/80"><Layout size={14} className="mr-3 text-blue-400"/> NEXT.JS / REACT (Client)</div>
                  <div className="pl-1.5 border-l border-[#444] ml-1.5 h-3"></div>
                  <div className="flex items-center text-sm font-mono text-white/80"><Server size={14} className="mr-3 text-purple-400"/> REST APIs (Server Routes)</div>
                  <div className="pl-1.5 border-l border-[#444] ml-1.5 h-3"></div>
                  <div className="flex items-center text-sm font-mono text-white/80"><Layers size={14} className="mr-3 text-orange-400"/> PRISMA (ORM)</div>
                  <div className="pl-1.5 border-l border-[#444] ml-1.5 h-3"></div>
                  <div className="flex items-center text-sm font-mono text-white/80"><Database size={14} className="mr-3 text-blue-500"/> POSTGRESQL (Database)</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-md bg-[#111] text-white/70 border border-[#222]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Link
                  href="https://www.finnova.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-md font-medium transition-colors hover:bg-gray-200"
                >
                  <span>View Live</span>
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="https://github.com/Aryanjain-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 rounded-md font-medium text-white border border-[#222] hover:bg-[#111] transition-colors"
                >
                  <FaGithub size={18} />
                  <span>Source</span>
                </Link>
              </div>
            </motion.div>

            {/* Architecture / DB Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl group-hover:from-blue-500/20 transition-all duration-500 pointer-events-none"></div>
              <div className="glass-panel rounded-xl p-8 relative border-[#333] z-10 flex flex-col items-center justify-center min-h-[400px]">
                
                <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                  <div className="col-span-2 glass-panel p-4 rounded-lg flex items-center justify-between border-blue-500/30 bg-blue-500/5">
                    <div className="flex items-center space-x-3">
                      <Lock className="text-blue-400" size={20} />
                      <span className="font-mono text-sm text-white">Auth Service</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  </div>
                  
                  <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center space-y-2 border-[#333]">
                    <Wallet className="text-white/60" size={24} />
                    <span className="font-mono text-xs text-muted">Transactions</span>
                  </div>
                  
                  <div className="glass-panel p-4 rounded-lg flex flex-col items-center justify-center space-y-2 border-[#333]">
                    <Activity className="text-white/60" size={24} />
                    <span className="font-mono text-xs text-muted">Budgets</span>
                  </div>
                  
                  <div className="col-span-2 glass-panel p-4 rounded-lg flex items-center justify-between border-green-500/20 bg-green-500/5 mt-4">
                    <div className="flex items-center space-x-3">
                      <Database className="text-green-400" size={20} />
                      <span className="font-mono text-sm text-white">PostgreSQL DB</span>
                    </div>
                    <div className="text-[10px] font-mono text-green-400 border border-green-400/30 px-2 py-0.5 rounded">CONNECTED</div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-muted/40">
                  SYSTEM_DIAGRAM_RENDER
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

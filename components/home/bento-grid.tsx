'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Layers, Code2, Terminal } from 'lucide-react'; // Added Terminal icon
import Link from 'next/link';

export function BentoGrid() {
  return (
    <section className="py-24 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight mb-6"
          >
            We bridge the gap between <br />
            <span className="text-neutral-400">Design</span> and <span className="text-neutral-400">Engineering</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-500 max-w-xl leading-relaxed"
          >
            Stop choosing between aesthetics and performance. We build pixel-perfect interfaces 
            that ship faster and rank higher.
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Instant Setup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 relative rounded-2xl bg-neutral-50 border border-neutral-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-neutral-300 transition-colors overflow-hidden"
          >
            <div className="max-w-xs z-10">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                <Terminal className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-2xl font-medium mb-2">Instant Setup</h3>
              <p className="text-neutral-500">
                Skip the manual copying. Install any template directly into your codebase with our open-source CLI.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Link href="/courses" className="text-sm font-bold border-b border-neutral-900 pb-0.5 hover:opacity-70 transition-opacity">
                   Start Building
                </Link>
              </div>
            </div>

            {/* Visual: Mock Terminal */}
            <div className="w-full md:w-auto flex-1 max-w-sm">
                <div className="bg-neutral-900 rounded-lg shadow-xl overflow-hidden border border-neutral-800">
                    <div className="bg-neutral-800 px-3 py-2 flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"/>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"/>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"/>
                    </div>
                    <div className="p-4 font-mono text-xs text-neutral-300 space-y-2">
                        <div className="flex gap-2">
                            <span className="text-green-400">➜</span>
                            <span>~ npx @william/ui create</span>
                        </div>
                        <div className="text-neutral-500">Downloading template...</div>
                        <div className="text-green-400">✓ Done in 1.2s</div>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Card 2: Tech Stack */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="relative rounded-2xl bg-neutral-900 text-white p-8 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-neutral-300" />
              </div>
              <h3 className="text-xl font-medium">Modern Stack</h3>
              <p className="text-neutral-400 text-sm mt-2">
                Built for the Vercel ecosystem.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
               {['Next.js 16', 'TypeScript', 'Tailwind', 'Framer'].map((tech) => (
                 <span key={tech} className="px-3 py-1 bg-neutral-800 rounded-full text-xs font-mono text-neutral-300 border border-neutral-700">
                   {tech}
                 </span>
               ))}
            </div>
          </motion.div>

          {/* Card 3: Performance Metrics */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="relative rounded-2xl bg-white border border-neutral-200 p-8 flex flex-col justify-between group hover:border-neutral-300 transition-colors"
          >
             <div>
               <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center mb-4 text-green-600">
                 <Zap className="w-5 h-5" />
               </div>
               <h3 className="text-xl font-medium">Core Web Vitals</h3>
             </div>

             <div className="flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tighter">99</span>
                <span className="text-sm text-neutral-500 mb-2 font-medium">/ 100</span>
             </div>
             
             {/* Tiny Graph */}
             <div className="flex items-end gap-0.5 h-8 mt-2 w-full">
                <div className="flex-1 min-w-0 bg-neutral-200 h-[35%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[50%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[45%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[65%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[55%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[70%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[60%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[85%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-neutral-200 h-[75%] rounded-sm" />
                <div className="flex-1 min-w-0 bg-green-500 h-[100%] rounded-sm" />
             </div>
          </motion.div>

          {/* Card 4: The Marketplace */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-50 border border-neutral-200 p-8 flex flex-col justify-between hover:border-neutral-300 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neutral-100 to-transparent rounded-full blur-3xl -z-10" />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                <Layers className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-2xl font-medium mb-2">The Marketplace</h3>
              <p className="text-neutral-500 max-w-sm">
                Access our internal library of premium, production-ready components. 
                Steal our best work for your next project.
              </p>
            </div>

            {/* Visual Abstract for Marketplace */}
            <div className="absolute right-[-20px] bottom-[-20px] md:right-8 md:bottom-8 opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500">
               <div className="flex gap-4">
                 <div className="w-32 h-20 bg-white rounded-lg border border-neutral-200 shadow-sm p-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 mb-2"/>
                    <div className="w-16 h-2 bg-neutral-100 rounded-full"/>
                 </div>
                 <div className="w-32 h-20 bg-neutral-900 rounded-lg shadow-lg p-3 -mt-6">
                    <div className="w-8 h-8 rounded-full bg-neutral-800 mb-2"/>
                    <div className="w-16 h-2 bg-neutral-800 rounded-full"/>
                 </div>
               </div>
            </div>

            <Link href="/marketplace" className="absolute inset-0 z-20" aria-label="Go to marketplace" />
            <ArrowUpRight className="absolute top-8 right-8 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
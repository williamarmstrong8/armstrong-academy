'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Layers, Code2, Palette } from 'lucide-react';
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
          
          {/* Card 1: The Marketplace (Large - Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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

            <Link href="/products" className="absolute inset-0 z-20" aria-label="Go to marketplace" />
            <ArrowUpRight className="absolute top-8 right-8 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
          </motion.div>

          {/* Card 2: Tech Stack (Tall - Row span 1) */}
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
               {['Next.js 14', 'TypeScript', 'Tailwind', 'Framer'].map((tech) => (
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
             <div className="flex items-end gap-1 h-8 mt-2">
                <div className="w-2 bg-neutral-100 h-[40%] rounded-sm" />
                <div className="w-2 bg-neutral-100 h-[60%] rounded-sm" />
                <div className="w-2 bg-neutral-100 h-[30%] rounded-sm" />
                <div className="w-2 bg-neutral-100 h-[80%] rounded-sm" />
                <div className="w-2 bg-neutral-900 h-[100%] rounded-sm" />
             </div>
          </motion.div>

          {/* Card 4: Design System (Large - Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 relative rounded-2xl bg-neutral-50 border border-neutral-200 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-neutral-300 transition-colors"
          >
            <div className="max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm">
                <Palette className="w-5 h-5 text-neutral-700" />
              </div>
              <h3 className="text-2xl font-medium mb-2">Bespoke Agency Services</h3>
              <p className="text-neutral-500">
                We don't just sell components. We partner with select clients to build award-winning digital experiences.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-bold border-b border-neutral-900 pb-0.5 hover:opacity-70 transition-opacity">
                Start a Project <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Visual: Typography Aa */}
            <div className="h-full aspect-square bg-white border border-neutral-200 rounded-xl flex items-center justify-center shadow-sm">
               <span className="text-7xl font-serif italic text-neutral-900">Aa</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
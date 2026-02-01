'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Layout, Database, Sparkles } from 'lucide-react';
import Link from 'next/link';

// --- Data ---
const projects = [
  {
    id: '01',
    category: 'Frontend Fundamentals',
    title: 'The "Vibe" Portfolio',
    description: 'Build a high-performance personal site with dark mode, page transitions, and a CMS blog.',
    tech: ['Next.js 14', 'Framer Motion', 'Tailwind Typography'],
    features: ['Page Transitions', 'MDX Blog', 'Responsive Grid'],
    color: 'bg-neutral-100',
    icon: <Layout className="w-5 h-5 text-neutral-600" />,
  },
  {
    id: '02',
    category: 'Full Stack App',
    title: 'AI Note Taker',
    description: 'A SaaS application that uses OpenAI to summarize notes. Includes auth and database.',
    tech: ['Supabase', 'OpenAI API', 'Clerk Auth'],
    features: ['Streaming Text', 'Vector Embeddings', 'User Auth'],
    color: 'bg-blue-50',
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
  },
  {
    id: '03',
    category: 'E-Commerce',
    title: 'Digital Asset Store',
    description: 'A complete marketplace for selling digital goods. Handle payments, file delivery, and admin.',
    tech: ['Stripe Connect', 'React Email', 'Zustand'],
    features: ['Payment Webhooks', 'Cart Logic', 'Admin Dashboard'],
    color: 'bg-orange-50',
    icon: <Database className="w-5 h-5 text-orange-600" />,
  },
];

export function ProjectShowcase() {
  return (
    <section className="py-32 bg-white text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            No more "To-Do" lists.
            <br />
            <span className="text-neutral-400">Build software you can actually sell.</span>
          </h2>
          <p className="text-lg text-neutral-500">
            Our projects are designed to be the cornerstone of your portfolio. 
            By the end of the course, you won't just have knowledge—you'll have a shipped product.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* Github Link / Secondary CTA */}
        <div className="mt-16 text-center">
             <Link href="https://github.com" className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-0.5">
                View Source Code on GitHub <ArrowUpRight size={14} />
             </Link>
        </div>

      </div>
    </section>
  );
}

// --- Card Component ---

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col h-full border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-300 bg-white group"
    >
      {/* Visual Preview Area (Abstract UI) */}
      <div className={`h-48 ${project.color} border-b border-neutral-100 flex items-center justify-center relative overflow-hidden`}>
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="w-3/4 h-3/4 bg-white rounded-t-xl shadow-sm border border-neutral-200 translate-y-4 group-hover:translate-y-2 transition-transform duration-500 flex flex-col p-3 gap-2">
               <div className="flex gap-2 mb-2">
                   <div className="w-2 h-2 rounded-full bg-neutral-200" />
                   <div className="w-2 h-2 rounded-full bg-neutral-200" />
               </div>
               <div className="h-2 w-1/2 bg-neutral-100 rounded-full" />
               <div className="h-2 w-3/4 bg-neutral-100 rounded-full" />
               <div className="flex-1 bg-neutral-50 rounded-md mt-1 border border-neutral-100 border-dashed" />
          </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-md bg-white border border-neutral-100 shadow-sm`}>
                {project.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                {project.category}
            </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-neutral-900">
            {project.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
            {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string) => (
                <span key={t} className="px-2 py-1 bg-neutral-50 border border-neutral-100 rounded text-[10px] font-mono text-neutral-600 uppercase">
                    {t}
                </span>
            ))}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-auto space-y-2">
            {project.features.map((feature: string) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                    <Check size={14} className="text-green-600" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Quote, Terminal, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    id: 1,
    icon: <Quote className="h-6 w-6 text-white" />,
    text: "This library has saved me countless hours. The components are accessible, well-documented, and look incredible right out of the box.",
    author: "Sofia Davis",
    role: "Senior Developer @ Vercel",
    visual: (
      <div className="p-6 bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-xl shadow-2xl max-w-sm mx-auto transform rotate-[-2deg]">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-4 w-4 text-orange-400 fill-orange-400" />
          ))}
        </div>
        <p className="text-zinc-300 text-lg font-medium leading-relaxed">
          "I simply copy, paste, and ship. It's the cleanest UI kit I've used in years."
        </p>
      </div>
    ),
  },
  {
    id: 2,
    icon: <Terminal className="h-6 w-6 text-white" />,
    text: "Built for modern stacks. Fully compatible with Next.js 15, React Server Components, and Tailwind CSS.",
    author: "System",
    role: "v2.4.0 Release",
    visual: (
      <div className="w-full max-w-sm mx-auto overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl transform rotate-[2deg]">
        <div className="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800/50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-zinc-400 ml-2">bash</span>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="flex gap-2">
            <span className="text-emerald-400">➜</span>
            <span className="text-zinc-400">~</span>
            <span className="text-zinc-100">npm install armstrong-ui</span>
          </div>
          <div className="mt-2 text-zinc-500">
            <span>installing...</span>
            <br />
            <span className="text-emerald-400">✓ Added 14 components</span>
            <br />
            <span className="text-emerald-400">✓ Tailwind configured</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: <Users className="h-6 w-6 text-white" />,
    text: "Join a growing community of 10,000+ developers building the next generation of web apps and sofwares.",
    author: "Community",
    role: "Global",
    visual: (
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        <div className="p-4 bg-zinc-800/50 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-white">12k+</div>
          <div className="text-xs text-zinc-400 mt-1">Downloads</div>
        </div>
        <div className="p-4 bg-zinc-800/50 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-white">4.9</div>
          <div className="text-xs text-zinc-400 mt-1">Average Rating</div>
        </div>
        <div className="col-span-2 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30 flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-white">Pro Plan</div>
            <div className="text-xs text-zinc-400">Unlocks everything</div>
          </div>
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
            <Star className="h-4 w-4 text-white fill-white" />
          </div>
        </div>
      </div>
    ),
  },
];

export function AuthShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full flex flex-col p-12 overflow-hidden bg-zinc-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.9))]" />
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      {/* Middle: Visual Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className={cn(
              "absolute transition-all duration-700 ease-in-out transform w-full px-8",
              i === index 
                ? "opacity-100 translate-y-0 scale-100" 
                : "opacity-0 translate-y-8 scale-95 pointer-events-none"
            )}
          >
            {slide.visual}
          </div>
        ))}
      </div>

      {/* Bottom: Text Content & Indicators */}
      <div className="relative z-10 shrink-0 mb-4">
        
        {/* INCREASED: min-h to 160px to prevent overlap */}
        <div className="relative min-h-[200px]"> 
          {SLIDES.map((slide, i) => (
            <div
              key={slide.id}
              className={cn(
                "absolute top-0 left-0 right-0 transition-all duration-500",
                i === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
              )}
            >
              <div className="flex items-center gap-3 mb-4 text-zinc-400">
                {slide.icon}
                <span className="text-sm font-medium uppercase tracking-wider">{slide.author}</span>
              </div>
              <p className="text-xl font-medium text-white leading-relaxed">
                "{slide.text}"
              </p>
              <p className="mt-2 text-sm text-zinc-400 font-mono">
                {slide.role}
              </p>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === index ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
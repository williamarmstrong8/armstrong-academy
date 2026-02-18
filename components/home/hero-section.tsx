"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, RotateCw, CheckCircle2, Terminal, Loader2, Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 md:px-8 text-center overflow-hidden bg-white text-zinc-900 border-b border-zinc-100">
      
      {/* 0. Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

      {/* 1. Trust Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="tracking-wide uppercase">System Operational</span>
        <span className="text-zinc-300">|</span>
        <span>Updated for Next.js 16</span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] text-zinc-900 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
        The foundation for <br />
        <span className="text-zinc-400">AI-native builders.</span>
      </h1>

      {/* 3. Subheadline */}
      <p className="max-w-2xl mx-auto text-lg text-zinc-500 leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        Skip the boring setup entirely. Describe what you want in plain language, and ship a real app fast. No more wrestling with configs or boilerplate.
      </p>

      {/* 4. CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <Button size="lg" className="h-10 px-8 text-sm font-bold bg-zinc-900 text-white hover:bg-zinc-800 rounded-md" asChild>
          <Link href="/courses">
            Start Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="h-10 px-8 text-sm font-bold border-zinc-200 text-zinc-600 hover:text-zinc-900 rounded-md bg-white" asChild>
          <Link href="/stack">
            View the Stack
          </Link>
        </Button>
      </div>

      {/* 5. Visual Hook: The Animated Window — same card size, side-by-side at all breakpoints */}
      <div className="relative w-full max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-zinc-200/50 to-zinc-400/20 blur-[100px] -z-10 rounded-full" />
        <VibeCodingVisual />
      </div>
    </section>
  );
}

// Sub-component to handle the animation logic independently
function VibeCodingVisual() {
  const [step, setStep] = useState(0); 
  // 0: Typing basic prompt
  // 1: Optimizing (Vibe Check)
  // 2: Generating Code
  // 3: Showing Result
  
  useEffect(() => {
    // Cycle through the animation steps
    const cycle = async () => {
      setStep(0);
      await new Promise(r => setTimeout(r, 2000)); // Wait on basic prompt
      setStep(1);
      await new Promise(r => setTimeout(r, 2500)); // Wait on optimization
      setStep(2);
      await new Promise(r => setTimeout(r, 2500)); // Wait on generation (slightly longer for new UI)
      setStep(3);
      await new Promise(r => setTimeout(r, 5000)); // Wait on result
      // Loop back
      cycle();
    };
    cycle();
  }, []);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-2xl overflow-hidden flex flex-row w-full h-[400px]">
      
      {/* LEFT PANEL: The AI/Editor Interface */}
      <div className="w-[40%] min-w-0 bg-zinc-50 border-r border-zinc-200 p-4 flex flex-col relative transition-colors duration-500 shrink-0">
         
         {/* Window Controls */}
         <div className="flex gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
            <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
            <div className="h-3 w-3 rounded-full bg-zinc-300"></div>
         </div>

         {/* Header */}
         <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
               <Sparkles size={12} className={cn("transition-colors duration-300", step === 1 ? "text-purple-500" : "text-zinc-400")} />
               <span>{step === 1 ? "Armstrong Optimizer" : "AI Agent"}</span>
            </div>
            {step === 1 && (
               <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold animate-pulse">
                 OPTIMIZING
               </span>
            )}
         </div>

         {/* The Prompt Bubble Area */}
         <div className="relative mb-4">
            {/* The "Basic" Prompt (Fades out) */}
            <div className={cn(
              "absolute inset-0 bg-white border border-zinc-200 p-4 rounded-lg shadow-sm transition-all duration-500 transform origin-top",
              step === 0 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              <p className="text-sm text-zinc-400 font-medium">
                 "make a dashboard for my saas"
              </p>
            </div>

            {/* The "Optimized" Prompt (Fades in) */}
            <div className={cn(
              "bg-white border-l-4 border-l-purple-500 border-y border-r border-zinc-200 p-4 rounded-lg shadow-sm transition-all duration-500 transform",
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
               <p className="text-sm text-zinc-800 font-medium leading-relaxed">
                  "Create a responsive SaaS dashboard. <br/>
                  <span className="text-purple-600 font-bold">Stack:</span> Next.js 16, Tailwind, Lucide. <br/>
                  <span className="text-purple-600 font-bold">Features:</span> Stats grid, activity feed, and monochromatic aesthetic."
               </p>
            </div>
         </div>

         {/* The "Thinking/Building" Status Label */}
         <div className="mt-auto mb-3 flex items-center gap-2 text-xs text-zinc-500 h-4">
            {step === 2 && (
                <>
                    <RotateCw size={12} className="animate-spin text-zinc-400" />
                    <span>Execution in progress...</span>
                </>
            )}
            {step === 3 && (
                <>
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span className="text-emerald-600 font-medium">Systems operational.</span>
                </>
            )}
         </div>

         {/* Terminal UI — hidden on mobile */}
         <div className="hidden md:flex bg-zinc-950 rounded-lg border border-zinc-800 p-3 h-36 overflow-hidden relative flex-col shadow-inner min-h-0 flex-1">
            {/* Terminal Header */}
            <div className="flex items-center gap-1.5 mb-2 absolute top-2 left-2 opacity-50">
               <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
               <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
               <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            </div>
            <div className="absolute top-2 right-2 opacity-30">
                 <Terminal size={10} className="text-zinc-500" />
            </div>

            {/* Human-Readable Logs */}
            <div className="mt-5 space-y-1.5 font-mono text-[9px] leading-relaxed z-10 overflow-y-auto flex-1 min-h-0">
                <TerminalLogItem step={step} triggerStep={1} text="Analyzing prompt requirements..." />
                <TerminalLogItem step={step} triggerStep={2} text="Scaffolding Next.js 16 architecture..." />
                {/* We use CSS delays in the component to stagger these during step 2 */}
                <TerminalLogItem step={step} triggerStep={2} text="Generating UI components & layout..." delayIdx={1} />
                <TerminalLogItem step={step} triggerStep={2} text="Connecting data layer..." delayIdx={2} />
                
                {step === 3 && (
                   <div className="text-emerald-400 flex items-center gap-2 mt-4 font-bold animate-in fade-in slide-in-from-left-1 duration-300">
                      <CheckCircle2 size={12} /> Build complete. Launching preview.
                   </div>
                )}
                {step < 3 && (
                   <span className="inline-block w-1.5 h-3 bg-zinc-600 animate-pulse mt-2" />
                )}
            </div>
             {/* Subtle background glow for terminal */}
             <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none mix-blend-screen"></div>
         </div>
      </div>

      {/* RIGHT PANEL: The "Product" (Output Preview) */}
      <div className="w-[60%] min-w-0 bg-zinc-100 relative overflow-hidden flex items-center justify-center p-4">
         
         {/* Abstract Grid Background */}
         <div className="absolute inset-0 w-full h-full opacity-[0.4] bg-[linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d8_1px,transparent_1px)] bg-[size:24px_24px]" />
         
         {/* The UI Container */}
         <div className={cn(
            "relative z-10 w-full max-w-full h-full bg-white rounded-xl border border-zinc-200 shadow-2xl flex overflow-hidden transition-all duration-1000 ease-out",
            step < 3 ? "opacity-0 translate-y-10 scale-95 blur-sm" : "opacity-100 translate-y-0 scale-100 blur-0"
         )}>
            
            {/* Sidebar */}
            <div className="w-10 border-r border-zinc-100 bg-zinc-50/50 p-2 flex flex-col gap-2">
               <div className="h-4 w-4 rounded bg-zinc-900 mb-2" />
               <div className="space-y-2">
                  <div className="h-1.5 w-12 bg-zinc-200 rounded-full" />
                  <div className="h-1.5 w-10 bg-zinc-200 rounded-full" />
                  <div className="h-1.5 w-14 bg-zinc-200 rounded-full" />
               </div>
               <div className="mt-auto h-6 w-full bg-zinc-200/50 rounded-md" />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-3 bg-white flex flex-col min-w-0">
               {/* Header */}
               <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="h-2.5 w-20 bg-zinc-100 rounded-full mb-1" />
                    <div className="h-1.5 w-14 bg-zinc-50 rounded-full" />
                  </div>
                  <div className="h-6 w-6 rounded-full bg-zinc-100 border border-zinc-200 shrink-0" />
               </div>

               {/* Stats Grid */}
               <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3].map((i) => (
                      <div key={i} className="p-2 rounded-lg border border-zinc-100 bg-zinc-50/30 min-w-0">
                         <div className="h-1.5 w-6 bg-zinc-200 rounded-full mb-2" />
                         <div className="h-3 w-10 bg-zinc-900 rounded-md" />
                      </div>
                  ))}
               </div>

               {/* Activity Feed */}
               <div className="flex-1 min-h-0 border border-dashed border-zinc-200 rounded-lg p-2">
                  <div className="space-y-2">
                     {[1,2,3].map(k => (
                        <div key={k} className="flex items-center gap-2">
                           <div className="h-4 w-4 rounded-full bg-zinc-100 flex-shrink-0" />
                           <div className="h-1.5 w-full bg-zinc-50 rounded-full min-w-0" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Floating "Live" Badge */}
            <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 backdrop-blur border border-zinc-200 rounded-full text-[8px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1 text-emerald-600 z-20">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                Localhost:3000
            </div>

         </div>
      </div>
    </div>
  );
}

// Helper component for the cleaner terminal lines
function TerminalLogItem({ step, triggerStep, text, delayIdx = 0 } : { step: number, triggerStep: number, text: string, delayIdx?: number }) {
    const isActive = step === triggerStep;
    const isDone = step > triggerStep;

    // Base state (waiting)
    let icon = <Circle size={10} className="text-zinc-700" />;
    let textColor = "text-zinc-600";

    if (isActive) {
        // Active State (Loading)
        icon = <Loader2 size={10} className="text-blue-400 animate-spin" />;
        textColor = "text-blue-300";
    } else if (isDone) {
        // Done state (Success)
        icon = <CheckCircle2 size={10} className="text-emerald-500" />;
        textColor = "text-zinc-400 opacity-80";
    }

    return (
        <div 
            className={cn("flex items-center gap-2 transition-all duration-300", step < triggerStep ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0")}
            // Stagger the appearance during the active step for a dynamic feel
            style={{ transitionDelay: isActive ? `${delayIdx * 400}ms` : '0ms' }}
        >
            <div className="w-3 flex justify-center shrink-0">{icon}</div>
            <span className={cn("truncate transition-colors", textColor)}>{text}</span>
        </div>
    )
}
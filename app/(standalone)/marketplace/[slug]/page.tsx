import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, Sparkles, Lock } from "lucide-react";
import { clsx } from "clsx";

// Data & Components
import { inventory, type Product } from "@/lib/marketplace-data";
import { getPreviewComponent } from "@/components/marketplace/previews";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/marketplace/copy-button"; 
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Checkout from "@/components/marketplace/checkout"; 

// ------------------------------------------------------------------
// 1. REALISTIC DUMMY CODE (Visual filler for locked items)
// ------------------------------------------------------------------
const BLURRED_CODE_SAMPLE = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
}

// ------------------------------------------------------------------
// This source code is locked. Please purchase to view full source.
// ------------------------------------------------------------------

export default function PremiumComponent({ data }: { data: any[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initialize animations
    console.log("Component mounted");
  }, []);

  return (
    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
      <header className="p-6 border-b border-zinc-100 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-zinc-900 rounded-lg" />
            <h2 className="font-bold text-lg">Premium Layout</h2>
         </div>
         <Button variant="ghost" size="icon">
            <ChevronRight className="h-4 w-4" />
         </Button>
      </header>
      
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Mapping through protected data */}
         {[1, 2, 3, 4].map((item) => (
           <div key={item} className="group relative aspect-square bg-zinc-50 rounded-xl border border-zinc-100 p-4 transition-all hover:border-zinc-300">
              <div className="absolute inset-x-4 bottom-4">
                 <div className="h-2 w-2/3 bg-zinc-200 rounded mb-2" />
                 <div className="h-2 w-1/3 bg-zinc-200 rounded" />
              </div>
           </div>
         ))}
      </main>
      
      <footer className="p-4 bg-zinc-50 border-t border-zinc-100 text-center">
         <p className="text-xs text-zinc-400">Restricted Access</p>
      </footer>
    </div>
  );
}

function HelperComponent() {
  return <span>Utils</span>
}
`.repeat(2); 

export async function generateStaticParams() {
  return inventory.map((product: Product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = inventory.find((p: Product) => p.id === slug);
  
  if (!product) {
    notFound();
  }

  const isFree = product.category === 'free';
  const displayPrice = product.price === '$0' ? 'Free' : product.price;
  
  // FIX: We now use product.id as the Stripe ID for premium items
  // This removes the "Property 'stripeId' does not exist" error
  const stripeId = product.id; 

  // Select content
  const codeContent = isFree ? product.codeSnippet : BLURRED_CODE_SAMPLE;

  return (
    <div className="h-screen bg-white flex flex-col lg:flex-row overflow-hidden overscroll-none">
      
      {/* --- LEFT COLUMN: Visual Preview --- */}
      <div className="w-full lg:w-[60%] bg-zinc-50/50 relative border-b lg:border-b-0 lg:border-r border-zinc-200 shrink-0 lg:h-full flex flex-col">
        <div className="absolute top-6 left-6 z-20">
          <Link 
            href="/marketplace" 
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/50 hover:border-zinc-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 relative min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          <div className="relative z-10 scale-90 lg:scale-110">
            {getPreviewComponent(product.id, 'slug')}
          </div>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Details & Code --- */}
      <div className="w-full lg:w-[40%] bg-white flex flex-col h-full lg:overflow-hidden">
        
        {/* Header */}
        <div className="p-6 lg:p-8 border-b border-zinc-100 shrink-0 bg-white z-10">
          <div className="flex items-center justify-between mb-4">
             <span className={clsx("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", 
                isFree 
                ? "bg-emerald-50 text-emerald-600 border-emerald-100" 
                : "bg-zinc-50 text-zinc-600 border-zinc-200"
             )}>
               {isFree ? 'Open Source' : 'Premium'}
             </span>
             <span className="text-xl font-bold text-zinc-900">{displayPrice}</span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold text-zinc-900 mb-2 lg:mb-3 tracking-tight">{product.name}</h1>
          <p className="text-zinc-500 leading-relaxed text-sm lg:text-base">
            {product.description}
          </p>
        </div>

        {/* Code / Actions Container */}
        <div className="flex-1 relative bg-zinc-50/30 flex flex-col min-h-0">
          
          <div className="px-6 py-3 border-b border-zinc-100 flex items-center justify-between bg-white shrink-0">
            <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
               source.tsx
            </span>
            {isFree && (
               <CopyButton text={product.codeSnippet} label="Copy Raw" />
            )}
          </div>

          {/* Code Block Container */}
          <div className={clsx(
            "relative flex-1 bg-white p-6 group",
            isFree ? "overflow-y-auto overscroll-contain" : "overflow-hidden"
          )}>
             
             {/* THE CODE BLOCK */}
             <pre className={clsx(
                "font-mono text-[13px] leading-6 text-zinc-600 tab-[2]", 
                !isFree && "filter blur-[3px] select-none opacity-70 pointer-events-none" 
             )}>
                <code>{codeContent}</code>
             </pre>

             {/* THE PAYWALL OVERLAY */}
             {!isFree && (
               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-[2px]">
                 <div className="h-12 w-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm border border-zinc-200">
                    <Lock className="w-5 h-5 text-zinc-900" />
                 </div>
                 
                 <h3 className="text-zinc-900 font-bold text-lg mb-2">Source Code Locked</h3>
                 
                 <p className="text-zinc-500 text-sm mb-6 text-center max-w-[240px]">
                    Purchase to unlock full source, prompt, and rights.
                 </p>
                 
                 {/* Checkout Modal */}
                 <Dialog>
                   <DialogTrigger asChild>
                     <Button className="w-full max-w-[220px] rounded-full h-11 font-bold bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-200/50 transition-all hover:scale-[1.02]">
                       Buy Now — {displayPrice}
                     </Button>
                   </DialogTrigger>
                   
                   <DialogContent className="sm:max-w-xl p-0 bg-white max-h-[90vh] flex flex-col overflow-hidden">
                      <div className="p-6 bg-zinc-50 border-b border-zinc-100 shrink-0">
                        <DialogTitle className="text-lg font-bold">
                          Secure Checkout
                        </DialogTitle>
                        <p className="text-sm text-zinc-500">Powered by Stripe</p>
                      </div>
                      
                      <div className="p-1 pb-6 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <Checkout productId={stripeId} />
                      </div>
                   </DialogContent>
                 </Dialog>
               </div>
             )}
          </div>

          {/* Footer Actions (Only for Free) */}
          {isFree && (
            <div className="sticky bottom-0 left-0 right-0 p-6 bg-white border-t border-zinc-100 shrink-0">
                <div className="grid grid-cols-2 gap-3">
                    <CopyButton 
                      text={product.prompt || `Create a ${product.name}...`} 
                      variant="outline"
                      icon={<Sparkles className="mr-2 h-4 w-4" />}
                      label="Copy Prompt"
                      className="h-11 border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                    />
                    <CopyButton 
                      text={product.codeSnippet} 
                      variant="default"
                      icon={<Code2 className="mr-2 h-4 w-4" />}
                      label="Copy Code"
                      className="h-11 bg-zinc-900 text-white hover:bg-zinc-800"
                    />
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
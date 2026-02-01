import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, Sparkles, Lock } from "lucide-react";
import { clsx } from "clsx";

// Data & Components
import { inventory, type Product } from "@/lib/marketplace-data";
import { getPreviewComponent } from "@/components/marketplace/previews";
import { Button } from "@/components/ui/button";
import { CopyButton } from "@/components/marketplace/copy-button"; 

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

  return (
    // FIX 1: Removed 'pt-[64px]' to kill the white gap.
    // FIX 2: Changed height to 'calc(100vh - 64px)' so it fits exactly under your Navbar.
    <div className="h-[calc(100vh-64px)] bg-white flex flex-col lg:flex-row overflow-hidden">
      
      {/* --- LEFT COLUMN: Visual Preview --- */}
      <div className="w-full lg:w-[60%] bg-zinc-50/50 relative border-b lg:border-b-0 lg:border-r border-zinc-200 shrink-0 lg:h-full flex flex-col">
        
        {/* Navigation Breadcrumb */}
        <div className="absolute top-6 left-6 z-20">
          <Link 
            href="/marketplace" 
            className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/50 hover:border-zinc-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Marketplace
          </Link>
        </div>

        {/* The Preview Canvas */}
        <div className="flex-1 flex items-center justify-center p-8 relative min-h-[300px] lg:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
          
          <div className="relative z-10 scale-90 lg:scale-110">
            {getPreviewComponent(product.id, 'slug')}
          </div>
        </div>
      </div>

      {/* --- RIGHT COLUMN: Details & Code --- */}
      <div className="w-full lg:w-[40%] bg-white flex flex-col h-full lg:overflow-hidden">
        
        {/* Header Section */}
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
          
          {/* Tab / Label */}
          <div className="px-6 py-3 border-b border-zinc-100 flex items-center justify-between bg-white shrink-0">
            <span className="text-xs font-mono font-medium text-zinc-400 uppercase tracking-wider">
               source.tsx
            </span>
            {isFree && (
               <CopyButton text={product.codeSnippet} label="Copy Raw" />
            )}
          </div>

          {/* Code Block - Handles its own scrolling */}
          <div className="relative flex-1 overflow-y-auto bg-white p-6 group">
             <pre className={clsx(
                "font-mono text-[13px] leading-6 text-zinc-600 tab-[2]", 
                !isFree && "filter blur-[4px] select-none opacity-40 pointer-events-none"
             )}>
                <code>{product.codeSnippet}</code>
             </pre>

             {/* Premium Lock Overlay */}
             {!isFree && (
               <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-[2px]">
                 <div className="h-12 w-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Lock className="w-5 h-5 text-zinc-500" />
                 </div>
                 <h3 className="text-zinc-900 font-bold text-lg mb-2">Source Code Locked</h3>
                 <p className="text-zinc-500 text-sm mb-6 text-center max-w-[240px]">
                    Purchase to unlock full source, prompt, and rights.
                 </p>
                 <Button className="w-full max-w-[200px] rounded-full font-bold bg-zinc-900 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-200/50">
                   Buy Now — {displayPrice}
                 </Button>
               </div>
             )}
          </div>

          {/* Footer Actions */}
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
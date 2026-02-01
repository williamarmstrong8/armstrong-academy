import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-white relative overflow-hidden">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

        <div className="z-10 text-center space-y-8 max-w-md px-6">
            
            {/* Big 404 Number */}
            <div className="relative">
                <h1 className="text-9xl font-bold tracking-tighter text-zinc-100 select-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-zinc-900 bg-white px-4 py-1 rounded-full border border-zinc-100 shadow-sm">
                        Page Not Found
                    </span>
                </div>
            </div>

            <p className="text-zinc-500 text-lg leading-relaxed">
                The component you are looking for has been moved, deleted, or possibly never existed.
            </p>
            
            {/* Actions */}
            <div className="flex items-center justify-center gap-4">
                 <Button asChild variant="outline" className="rounded-full border-zinc-200 hover:bg-zinc-50 hover:text-zinc-900">
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" /> Home
                    </Link>
                </Button>
                <Button asChild className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800">
                    <Link href="/marketplace">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  );
}
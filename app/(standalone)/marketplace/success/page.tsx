import Link from "next/link";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Define the props type to handle both Next.js 14 (object) and 15 (Promise)
type Props = {
  searchParams: Promise<{ session_id?: string }> | { session_id?: string };
};

// 2. Make the function ASYNC to support the new Next.js standards
export default async function SuccessPage({ searchParams }: Props) {
  // 3. Await the params (works in both versions)
  const resolvedParams = await searchParams;
  const sessionId = resolvedParams?.session_id;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-sm border border-emerald-100">
        <CheckCircle className="w-10 h-10 text-emerald-600" />
      </div>

      <h1 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tight">
        Payment Successful!
      </h1>
      
      <p className="text-zinc-500 max-w-md mb-10 text-lg leading-relaxed">
        You now have full access. We have sent a receipt and the source code 
        to your email address.
      </p>

      {/* Info Card */}
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 max-w-sm w-full mb-10 flex flex-col gap-4 text-left shadow-sm">
        <div className="flex gap-4">
            <div className="bg-white p-2 rounded-lg border border-zinc-100 h-fit shrink-0">
                <Mail className="w-5 h-5 text-zinc-900" />
            </div>
            <div>
                <p className="font-bold text-zinc-900">Check your inbox</p>
                <p className="text-sm text-zinc-500 mt-1">
                    We sent the code to the email you used at checkout. Check spam if missing.
                </p>
                {/* Optional: Show Session ID for debugging */}
                {sessionId && (
                  <p className="text-[10px] text-zinc-400 mt-2 font-mono">
                    ID: {sessionId.slice(-8)}
                  </p>
                )}
            </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/marketplace">
            <Button variant="outline" className="rounded-full h-12 px-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Marketplace
            </Button>
        </Link>
      </div>
    </div>
  );
}
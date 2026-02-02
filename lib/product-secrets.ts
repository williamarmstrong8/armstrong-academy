// lib/product-secrets.ts

// Map Stripe Product IDs to the actual premium code
export const productSecrets: Record<string, string> = {
    // The ID must match what is in marketplace-data.ts and Stripe
    "prod_Ttv9MPW0ErPNBS": `
  "use client";
  
  import { useState } from "react";
  import { BarChart, Activity, Users } from "lucide-react";
  
  export default function SaasDashboard() {
    return (
      <div className="p-6 bg-zinc-50 min-h-screen">
         <h1 className="text-2xl font-bold mb-4">Premium SaaS Dashboard</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded shadow flex items-center gap-4">
               <Activity className="h-8 w-8 text-blue-500" />
               <div>
                  <p className="text-sm text-gray-500">Active Users</p>
                  <p className="text-xl font-bold">1,234</p>
               </div>
            </div>
            {/* ... Rest of your premium code ... */}
         </div>
      </div>
    );
  }
    `,
    
    // Future products:
    // "prod_another_id": "Your other code..."
  };
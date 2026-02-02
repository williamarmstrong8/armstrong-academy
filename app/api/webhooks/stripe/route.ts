import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Resend } from 'resend';
import { neon } from '@neondatabase/serverless'; // ✅ Use this ONLY
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const productId = session.metadata?.productId;

    if (productId && customerEmail) {
      // 1. Generate a Unique Key
      const licenseKey = `key_${crypto.randomUUID()}`;

      try {
        // 2. CONNECT TO NEON & SAVE
        // ✅ Initialize the connection inside the handler
        const sql = neon(`${process.env.DATABASE_URL}`);
        
        // Neon uses tagged template literals; params are safely parameterized
        await sql`
          INSERT INTO licenses (key, product_id, email) VALUES (${licenseKey}, ${productId}, ${customerEmail})
        `;

        console.log(`✅ Database: Saved license for ${customerEmail}`);

        // 3. Send Email
        await resend.emails.send({
          from: 'onboarding@resend.dev', // ✅ REQUIRED field. Update this if you have a custom domain.
          to: customerEmail,
          subject: "Your License Key",
          html: `
            <h1>Thank you for your order!</h1>
            <p>Your license key is:</p>
            <pre><strong>${licenseKey}</strong></pre>
            <p>Run this to download:</p>
            <pre>npx @yourname/cli create ${productId}</pre>
          `
        });

      } catch (error) {
        console.error("❌ Database/Email Error:", error);
        return NextResponse.json({ error: "Error saving license" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
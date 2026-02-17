import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { env } from "@/lib/env";
import { Resend } from 'resend';
import { neon } from '@neondatabase/serverless';
import crypto from 'crypto';

const endpointSecret = env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err: any) {
    console.error("❌ Stripe webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const customerEmail = session.customer_details?.email;
    const productId = session.metadata?.productId;
    const sessionId = session.id; // 🔑 Stripe's unique session ID

    if (productId && customerEmail) {
      try {
        // 1. Connect to Neon
        const sql = neon(env.DATABASE_URL);
        
        // 🛡️ Check if this session was already processed
        const existingLicense = await sql`
          SELECT id FROM licenses WHERE stripe_session_id = ${sessionId}
        `;

        if (existingLicense.length > 0) {
          console.log(`⚠️ Duplicate webhook ignored for session: ${sessionId}`);
          return NextResponse.json({ received: true, message: "Already processed" });
        }

        // Generate license key
        const licenseKey = `key_${crypto.randomUUID()}`;
        
        // 2. Insert license with session ID and set download limits
        await sql`
          INSERT INTO licenses (key, product_id, email, stripe_session_id, usage_count, max_uses, is_active) 
          VALUES (${licenseKey}, ${productId}, ${customerEmail}, ${sessionId}, 0, 3, TRUE)
        `;

        console.log(`✅ Database: Saved license for ${customerEmail}`);

        // ✅ Initialize Resend INSIDE the function
        const resend = new Resend(env.RESEND_API_KEY);

        // 3. Send Email
        await resend.emails.send({
          from: env.RESEND_FROM_EMAIL,
          to: customerEmail,
          subject: "Your Armstrong Academy License Key",
          html: `
            <h1>🎉 Order Confirmed!</h1>
            <p>Thank you for your purchase. Here's your license key:</p>
            <p><strong style="font-size: 18px; color: #0070f3;">${licenseKey}</strong></p>
            <hr>
            <h2>📦 Download Your Template</h2>
            <p>Run this command in your terminal:</p>
            <pre style="background: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto;">npx @armstrong-academy/cli create ${productId}</pre>
            <p>When prompted, enter your license key above.</p>
            <hr>
            <p style="color: #666; font-size: 14px;">
              You can download this template up to 3 times. Need help? Reply to this email.
            </p>
          `
        });

      } catch (error: any) {
        console.error("❌ Database/Email Error:", {
          error: error.message,
          email: customerEmail,
          productId: productId,
          sessionId: sessionId
        });
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
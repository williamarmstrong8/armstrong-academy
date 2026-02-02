import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Resend } from 'resend'; // 👈 Import only, don't init yet
import { neon } from '@neondatabase/serverless';
import crypto from 'crypto';

// ❌ DELETE THIS LINE FROM THE TOP:
// const resend = new Resend(process.env.RESEND_API_KEY);

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
      const licenseKey = `key_${crypto.randomUUID()}`;

      try {
        // 1. Connect to Neon
        const sql = neon(`${process.env.DATABASE_URL}`);
        
        await sql`
          INSERT INTO licenses (key, product_id, email) VALUES (${licenseKey}, ${productId}, ${customerEmail})
        `;

        console.log(`✅ Database: Saved license for ${customerEmail}`);

        // ✅ Initialize Resend INSIDE the function
        const resend = new Resend(process.env.RESEND_API_KEY);

        // 2. Send Email
        await resend.emails.send({
          from: 'onboarding@resend.dev', // Update this if you have a custom domain
          to: customerEmail,
          subject: "Your License Key",
          html: `
            <h1>Order Confirmed</h1>
            <p>License Key: <strong>${licenseKey}</strong></p>
            <p>Run this to download:</p>
            <pre>npx @william/saas-ui create ${productId}</pre>
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
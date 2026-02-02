'use server'

import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'

export async function startCheckoutSession(productId: string) {
  const headersList = await headers()
  const origin = headersList.get('origin') || 'http://localhost:3000'

  // 1. Ask Stripe: "What is the active price for this Product ID?"
  const prices = await stripe.prices.list({
    product: productId,
    active: true,
    limit: 1, 
  })

  // Safety check: specific error if no price exists in Stripe
  if (prices.data.length === 0) {
    throw new Error(`No active price found for product: ${productId}`)
  }

  const priceId = prices.data[0].id

  // 2. Create the session
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    mode: 'payment',
    
    // UPDATED: This tells Stripe where to go when payment is done.
    // We removed "redirect_on_completion: 'never'" so this redirect actually happens.
    return_url: `${origin}/marketplace/success?session_id={CHECKOUT_SESSION_ID}`,
    
    // UPDATED: We pass the ID here so your Webhook knows which product to email.
    metadata: {
      productId: productId, 
    },

    line_items: [
      {
        price: priceId, // Using the dynamic price ID from Stripe
        quantity: 1,
      },
    ],
  })

  if (!session.client_secret) {
    throw new Error('Failed to create checkout session')
  }

  return session.client_secret
}
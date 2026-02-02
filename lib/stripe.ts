import 'server-only'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is missing. Please set it in your .env file.')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // Use the latest API version or the one matching your package.json
  // You can find the latest version by running: npm list stripe
  apiVersion: '2026-01-28.clover', 
  typescript: true,
})
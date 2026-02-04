import 'server-only'
import Stripe from 'stripe'
import { env } from './env'

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  // Use the latest API version or the one matching your package.json
  // You can find the latest version by running: npm list stripe
  apiVersion: '2026-01-28.clover', 
  typescript: true,
})
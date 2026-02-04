/**
 * Environment Variable Validation
 * Ensures all required environment variables are present at runtime
 */

const requiredEnvVars = {
  // Stripe
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  
  // Database
  DATABASE_URL: process.env.DATABASE_URL,
  
  // Email
  RESEND_API_KEY: process.env.RESEND_API_KEY,
} as const;

const optionalEnvVars = {
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
} as const;

/**
 * Validates that all required environment variables are set
 * Throws an error if any are missing
 */
export function validateEnv() {
  const missing: string[] = [];

  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value || value.length === 0) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map(key => `  - ${key}`).join('\n')}\n\n` +
      `Please check your .env.local file or environment configuration.`
    );
  }

  // Log warnings for optional vars in development
  if (process.env.NODE_ENV === 'development') {
    for (const [key, value] of Object.entries(optionalEnvVars)) {
      if (!value) {
        console.warn(`⚠️  Optional env var not set: ${key}`);
      }
    }
  }
}

/**
 * Type-safe access to environment variables
 */
export const env = {
  // Stripe
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET!,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  
  // Database
  DATABASE_URL: process.env.DATABASE_URL!,
  
  // Email
  RESEND_API_KEY: process.env.RESEND_API_KEY!,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
  
  // Application
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
} as const;

// Validate on module load (only in server context)
if (typeof window === 'undefined') {
  validateEnv();
}

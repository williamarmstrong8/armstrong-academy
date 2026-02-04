# Armstrong Academy - SaaS Marketplace

A modern Next.js marketplace for selling digital products with automated license key delivery.

## Features

- 🛍️ **Product Marketplace** - Showcase and sell digital templates
- 💳 **Stripe Integration** - Secure embedded checkout
- 🔑 **License Key System** - Automated key generation and delivery
- 📧 **Email Delivery** - Instant license key emails via Resend
- 🔒 **Usage Tracking** - Limit downloads per license
- 🚀 **CLI Distribution** - Custom CLI tool for product delivery
- ⚡ **Built with Next.js 15** - App Router, Server Actions, TypeScript

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Payments**: Stripe Checkout + Webhooks
- **Database**: Neon Postgres (Serverless)
- **Email**: Resend
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Stripe account
- Neon database
- Resend account

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd my-app
   pnpm install
   ```

2. **Set up environment variables:**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials:
   ```bash
   # Stripe (get from: https://dashboard.stripe.com/apikeys)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_SECRET_KEY="sk_test_..."
   
   # Database (get from: https://console.neon.tech)
   DATABASE_URL="postgresql://..."
   
   # Email (get from: https://resend.com/api-keys)
   RESEND_API_KEY="re_..."
   RESEND_FROM_EMAIL="onboarding@yourdomain.com"
   ```

3. **Set up the database:**
   ```bash
   # Run the schema file in your Neon SQL editor
   # Or use psql:
   psql $DATABASE_URL < db/schema.sql
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Set up Stripe webhook (in another terminal):**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
   Copy the webhook secret to your `.env.local` file.

## Project Structure

```
my-app/
├── app/
│   ├── (marketing)/          # Marketing pages (home, about, etc.)
│   ├── (auth)/                # Auth pages (login, signup)
│   ├── (standalone)/          # Standalone pages (marketplace products)
│   ├── api/
│   │   ├── webhooks/stripe/   # Stripe webhook handler
│   │   └── registry/download/ # License verification & download
│   └── actions/               # Server actions
├── components/                # React components
├── lib/
│   ├── env.ts                 # Environment validation
│   ├── stripe.ts              # Stripe client
│   └── marketplace-data.ts    # Product catalog
├── db/
│   └── schema.sql             # Database schema
└── templates/                 # ZIP files for products
```

## How It Works

### Purchase Flow

1. **Customer browses marketplace** → Views products
2. **Customer clicks "Purchase"** → Stripe Checkout opens
3. **Payment succeeds** → Stripe sends webhook
4. **Webhook handler:**
   - Generates license key
   - Saves to database
   - Sends email with key + CLI command
5. **Customer receives email** → Contains license key
6. **Customer runs CLI** → Downloads product with key

### License System

- Each purchase creates a unique license key (`key_[uuid]`)
- License tracks usage count (default: 3 downloads max)
- CLI validates license and increments count
- Prevents duplicate purchases via `stripe_session_id`

## Environment Variables

### Required

| Variable | Description | Example |
|----------|-------------|---------|
| `STRIPE_SECRET_KEY` | Stripe secret API key | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret | `whsec_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | `pk_test_...` |
| `DATABASE_URL` | Neon connection string | `postgresql://...` |
| `RESEND_API_KEY` | Resend API key | `re_...` |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `RESEND_FROM_EMAIL` | Email sender address | `onboarding@resend.dev` |
| `NEXT_PUBLIC_SITE_URL` | Production URL | `http://localhost:3000` |

## API Routes

### POST `/api/webhooks/stripe`

Handles Stripe webhook events:
- Creates license on `checkout.session.completed`
- Prevents duplicate processing
- Sends license email

### POST `/api/registry/download`

Validates license and serves product ZIP:
- Verifies license key
- Checks download limit
- Increments usage count
- Returns ZIP file

## Testing

### Test the Purchase Flow

1. Start dev server: `pnpm dev`
2. Start webhook listener: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
3. Go to: `http://localhost:3000/marketplace`
4. Use test card: `4242 4242 4242 4242`
5. Check terminal for webhook logs
6. Check email for license key

### Test the CLI

```bash
# Create a test license in your database
# Then test the CLI:
cd ../my-cli
npm run build
npm link
saas-kit create prod_Ttv9MPW0ErPNBS
# Enter test license key
```

## Deployment

See [DEPLOYMENT.md](../DEPLOYMENT.md) for detailed production deployment instructions.

Quick deploy to Vercel:

```bash
vercel --prod
```

Don't forget to:
- Set environment variables in Vercel
- Switch to Stripe live mode
- Create production webhook
- Publish CLI to npm

## Security

- ✅ Environment variables validated on startup
- ✅ Webhook signature verification
- ✅ Duplicate purchase prevention
- ✅ SQL injection protection (parameterized queries)
- ✅ Security headers enabled
- ✅ Rate limiting (recommended to add)

## Troubleshooting

**Webhook returns 500:**
- Check `stripe_session_id` column exists
- Verify environment variables are set
- Check Vercel/terminal logs

**Email not sending:**
- Verify Resend domain is verified
- Check `RESEND_FROM_EMAIL` is set correctly
- Review Resend dashboard logs

**CLI can't download:**
- Verify Next.js server is running
- Check license key is valid
- Ensure `usage_count < max_uses`

## License

MIT

## Support

For issues or questions:
- Open an issue on GitHub
- Email: support@yourdomain.com

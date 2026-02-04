-- Armstrong Academy License Management Database Schema
-- Created: 2026-02-04
-- Purpose: Manage product licenses for SaaS kit marketplace

CREATE TABLE IF NOT EXISTS licenses (
  id SERIAL PRIMARY KEY,
  
  -- License Information
  key VARCHAR(255) UNIQUE NOT NULL,
  product_id VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  
  -- Stripe Integration
  stripe_session_id VARCHAR(255) UNIQUE,
  
  -- Usage Tracking
  usage_count INTEGER DEFAULT 0 NOT NULL,
  max_uses INTEGER DEFAULT 3 NOT NULL,
  is_active BOOLEAN DEFAULT TRUE NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_license_key ON licenses(key);
CREATE INDEX IF NOT EXISTS idx_stripe_session_id ON licenses(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_email ON licenses(email);
CREATE INDEX IF NOT EXISTS idx_product_id ON licenses(product_id);
CREATE INDEX IF NOT EXISTS idx_is_active ON licenses(is_active);

-- Comments for Documentation
COMMENT ON TABLE licenses IS 'Stores license keys for purchased products';
COMMENT ON COLUMN licenses.key IS 'Unique license key in format: key_[uuid]';
COMMENT ON COLUMN licenses.stripe_session_id IS 'Stripe checkout session ID for idempotency';
COMMENT ON COLUMN licenses.usage_count IS 'Number of times this license has been used';
COMMENT ON COLUMN licenses.max_uses IS 'Maximum number of downloads allowed';

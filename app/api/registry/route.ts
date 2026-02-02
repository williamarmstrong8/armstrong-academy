import { NextResponse } from "next/server";

/**
 * Base /api/registry route - use /api/registry/download for product downloads.
 */
export async function GET() {
  return NextResponse.json(
    { message: "Use POST /api/registry/download with productId and licenseKey" },
    { status: 200 }
  );
}

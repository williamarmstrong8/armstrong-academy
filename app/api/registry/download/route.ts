import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { neon } from '@neondatabase/serverless';

const FILE_MAP: Record<string, string> = {
  "prod_Ttv9MPW0ErPNBS": "saas-kit.zip", 
};

export async function POST(req: Request) {
  try {
    const { productId, licenseKey } = await req.json();
    const cleanId = productId ? productId.trim() : "";

    const sql = neon(`${process.env.DATABASE_URL}`);

    // 1. ATOMIC UPDATE: Check limit AND increment in one step
    // This query tries to increase usage_count ONLY IF it is less than max_uses.
    // If the limit is reached, it returns nothing.
    const rows = await sql`
      UPDATE licenses 
      SET usage_count = usage_count + 1 
      WHERE key = ${licenseKey} 
        AND product_id = ${cleanId} 
        AND is_active = TRUE
        AND usage_count < max_uses
      RETURNING usage_count, max_uses, email
    `;

    // 2. If no rows returned, the key is invalid OR limit reached
    if (rows.length === 0) {
      // Let's do a quick check to give a better error message
      const check = await sql`
        SELECT usage_count, max_uses FROM licenses WHERE key = ${licenseKey}
      `;
      
      if (check.length > 0 && check[0].usage_count >= check[0].max_uses) {
        return NextResponse.json(
          { error: "Download limit reached. Contact support to reset." },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: "Invalid or expired license key." },
        { status: 403 }
      );
    }

    const { usage_count, max_uses } = rows[0];
    console.log(`[API] Download ${usage_count}/${max_uses} for ${rows[0].email}`);

    // 3. Serve File
    const filename = FILE_MAP[cleanId];
    if (!filename) {
      return NextResponse.json({ error: "Product file not found." }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'templates', filename);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File system error." }, { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename=${filename}`,
        // Custom header to let the CLI know how many are left (optional)
        "X-Downloads-Left": (max_uses - usage_count).toString()
      },
    });

  } catch (error) {
    console.error("[API] Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
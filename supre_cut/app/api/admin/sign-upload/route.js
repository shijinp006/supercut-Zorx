import { NextResponse } from "next/server";
import { getAdmin } from "../../../../lib/auth";
import { signParams } from "../../../../lib/cloudinary";
import { PRODUCT_IMAGE_FOLDER } from "../../../../lib/validation";

// Upload params the widget may ask us to sign; anything else is refused
const ALLOWED_KEYS = new Set(["timestamp", "folder", "source", "use_filename", "unique_filename", "allowed_formats"]);

/** Signs a Cloudinary upload, so only a signed-in admin can upload images */
export async function POST(request) {
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Admin access required" }, { status: 403 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const params = body?.paramsToSign;
  if (!params || typeof params !== "object") {
    return NextResponse.json({ error: "Missing upload parameters" }, { status: 400 });
  }
  const unknown = Object.keys(params).filter((k) => !ALLOWED_KEYS.has(k));
  if (unknown.length) {
    return NextResponse.json({ error: `Upload parameter not allowed: ${unknown.join(", ")}` }, { status: 400 });
  }
  if (params.folder !== PRODUCT_IMAGE_FOLDER) {
    return NextResponse.json({ error: "Uploads must go to the products folder" }, { status: 400 });
  }
  const age = Math.abs(Date.now() / 1000 - Number(params.timestamp));
  if (!Number.isFinite(age) || age > 60 * 10) {
    return NextResponse.json({ error: "Upload request expired" }, { status: 400 });
  }

  return NextResponse.json({ signature: signParams(params) });
}

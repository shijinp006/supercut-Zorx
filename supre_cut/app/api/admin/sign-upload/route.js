import { NextResponse } from "next/server";
import { getAdmin } from "../../../../lib/auth";
import { signParams } from "../../../../lib/cloudinary";
import { PRODUCT_IMAGE_FOLDER } from "../../../../lib/validation";

/**
 * Signs a direct browser-to-Cloudinary upload, so only a signed-in admin can upload.
 * The server chooses every signed parameter; the client cannot widen what it may upload.
 */
export async function POST() {
  const admin = await getAdmin();
  if (!admin) return NextResponse.json({ error: "Admin access required" }, { status: 403 });

  const params = {
    timestamp: Math.round(Date.now() / 1000),
    folder: PRODUCT_IMAGE_FOLDER,
    allowed_formats: "jpg,jpeg,png,webp",
  };

  return NextResponse.json({
    ...params,
    signature: signParams(params),
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  });
}

import { z } from "zod";

export const PRODUCT_IMAGE_FOLDER = "supercut/products";

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  password: z.string().min(1, "Password is required").max(200),
});

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must be at least 2 characters")
    .max(80, "Title must be 80 characters or fewer"),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(600, "Description must be 600 characters or fewer"),
  imagePublicId: z
    .string()
    .trim()
    .regex(
      new RegExp(`^${PRODUCT_IMAGE_FOLDER}/[A-Za-z0-9_\\-/]+$`),
      "Image must be uploaded through the dashboard"
    )
    .max(200),
  imageUrl: z
    .string()
    .trim()
    .url()
    .refine(
      (url) => url.startsWith(`https://res.cloudinary.com/${cloudName}/image/upload/`),
      "Image must be hosted on the Super Cut Cloudinary account"
    ),
});

/** Flattens zod issues into { field: message } for the form */
export function fieldErrors(error) {
  const out = {};
  for (const issue of error.issues) {
    const key = issue.path[0] ?? "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

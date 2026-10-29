import { z } from "zod";

export const PRODUCT_IMAGE_FOLDER = "supercut/products";

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  password: z.string().min(1, "Password is required").max(200),
});

const title = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters")
  .max(80, "Name must be 80 characters or fewer");

const description = z
  .string()
  .trim()
  .min(10, "Description must be at least 10 characters")
  .max(600, "Description must be 600 characters or fewer");

// Only images uploaded through the dashboard (signed, into our folder) are accepted
const imagePublicId = z
  .string()
  .trim()
  .max(200)
  .regex(new RegExp(`^${PRODUCT_IMAGE_FOLDER}/[A-Za-z0-9_\\-/]+$`), "Upload the image through the dashboard");

export const productSchema = z.object({ title, description, imagePublicId });

export const productUpdateSchema = z
  .object({ title, description, imagePublicId })
  .partial()
  .refine((v) => Object.keys(v).length > 0, { message: "Nothing to update" });

/** Flattens zod issues into { field: message } for the form */
export function fieldErrors(error) {
  const out = {};
  for (const issue of error.issues) {
    const key = issue.path[0] ?? "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

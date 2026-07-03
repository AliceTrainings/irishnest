import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const productEditorSchema = z.object({
  name: z.string().min(2),
  slug: z
    .string()
    .min(2)
    .regex(/^[a-z0-9-]+$/),
  status: z.enum(["draft", "published", "archived"]),
  shortDescription: z.string().min(12),
  floorAreaSqm: z.coerce.number().positive(),
});

export const quoteItemSchema = z.object({
  description: z.string().min(2),
  quantity: z.coerce.number().positive(),
  unitAmountCents: z.coerce.number().int().nonnegative(),
});

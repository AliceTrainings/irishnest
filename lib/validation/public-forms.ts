import { z } from "zod";

const requiredText = z
  .string()
  .trim()
  .min(2, "Please enter at least 2 characters.");
const optionalText = z
  .string()
  .trim()
  .transform((value) => (value.length > 0 ? value : undefined))
  .optional();

export const publicProductSlugSchema = z
  .string()
  .trim()
  .regex(/^[a-z0-9-]*$/, "Choose a valid home.");

export const enquirySchema = z.object({
  fullName: requiredText,
  email: z.email("Enter a valid email address.").trim(),
  phone: optionalText,
  eircode: optionalText,
  desiredHomeType: requiredText,
  timeline: optionalText,
  message: z.string().trim().min(10, "Please add a short note."),
  productSlug: publicProductSlugSchema.optional(),
  consent: z.literal("on", {
    error: "Please consent before submitting.",
  }),
});

export const appointmentSchema = z.object({
  fullName: requiredText,
  email: z.email("Enter a valid email address.").trim(),
  phone: optionalText,
  preferredDate: optionalText,
  preferredTime: optionalText,
  meetingType: z.string().trim().min(2, "Choose a meeting type."),
  notes: optionalText,
  productSlug: publicProductSlugSchema.optional(),
});

export const feasibilitySchema = z.object({
  fullName: requiredText,
  email: z.email("Enter a valid email address.").trim(),
  phone: optionalText,
  eircode: z.string().trim().min(6, "Enter a valid Eircode."),
  desiredHomeType: requiredText,
  timeline: optionalText,
  notes: optionalText,
  productSlug: publicProductSlugSchema.optional(),
  consent: z.literal("on", {
    error: "Please consent before submitting.",
  }),
});

export const reservationSchema = z.object({
  fullName: requiredText,
  email: z.email("Enter a valid email address.").trim(),
  phone: optionalText,
  eircode: z.string().trim().min(6, "Enter a valid Eircode."),
  preferredTimeline: optionalText,
  notes: optionalText,
  productSlug: publicProductSlugSchema.optional(),
  depositDisclaimer: z.literal("on", {
    error: "Please accept the refundable deposit terms before reserving.",
  }),
});

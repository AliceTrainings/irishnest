"use server";

import { redirect } from "next/navigation";

import {
  appointmentSchema,
  enquirySchema,
  feasibilitySchema,
  reservationSchema,
} from "@/lib/validation/public-forms";
import {
  createAnonServerSupabaseClient,
  createServiceSupabaseClient,
} from "@/lib/supabase/server";
import { getProductBySlug } from "@/lib/mock-data";
import { getReservationPaymentProvider } from "@/lib/payments/reservation-payment";

export type PublicFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export const initialPublicFormState: PublicFormState = {
  status: "idle",
  message: "",
};

type SupabaseWriteError = { message: string };

type InsertOnlyTable = {
  insert(values: Record<string, unknown>): PromiseLike<{
    error: SupabaseWriteError | null;
  }>;
};

type InsertReturningIdTable = {
  insert(values: Record<string, unknown>): {
    select(columns: "id"): {
      single(): PromiseLike<{
        data: { id: string } | null;
        error: SupabaseWriteError | null;
      }>;
    };
  };
};

function insertOnlyTable(
  supabase: NonNullable<ReturnType<typeof createAnonServerSupabaseClient>>,
  table: string,
) {
  return supabase.from(table) as unknown as InsertOnlyTable;
}

function insertReturningIdTable(
  supabase: NonNullable<ReturnType<typeof createAnonServerSupabaseClient>>,
  table: string,
) {
  return supabase.from(table) as unknown as InsertReturningIdTable;
}

function serviceInsertOnlyTable(
  supabase: NonNullable<ReturnType<typeof createServiceSupabaseClient>>,
  table: string,
) {
  return supabase.from(table) as unknown as InsertOnlyTable;
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function parseForm(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

function validationError(
  error: {
    flatten: () => { fieldErrors: Record<string, string[] | undefined> };
  },
  message = "Please review the highlighted fields.",
): PublicFormState {
  return {
    status: "error",
    message,
    fieldErrors: error.flatten().fieldErrors,
  };
}

function missingSupabaseState(): PublicFormState {
  return {
    status: "error",
    message:
      "Supabase is not configured yet. Add the public Supabase URL and anon key before accepting live submissions.",
  };
}

function productNameFromSlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return getProductBySlug(slug)?.name;
}

export async function submitEnquiry(
  _state: PublicFormState,
  formData: FormData,
): Promise<PublicFormState> {
  const parsed = enquirySchema.safeParse(parseForm(formData));

  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const supabase = createAnonServerSupabaseClient();

  if (!supabase) {
    return missingSupabaseState();
  }

  const productName = productNameFromSlug(parsed.data.productSlug);
  const { error } = await insertOnlyTable(supabase, "enquiries").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    eircode: parsed.data.eircode,
    desired_home_type: productName ?? parsed.data.desiredHomeType,
    timeline: parsed.data.timeline,
    message: parsed.data.message,
    consent: true,
    source: getString(formData, "source") || "website",
    status: "new",
  });

  if (error) {
    return {
      status: "error",
      message: error.message,
    };
  }

  return {
    status: "success",
    message:
      "Thanks. Your enquiry has been saved and the Irish Nest team will review it before any supplier confirmation.",
  };
}

export async function submitAppointment(
  _state: PublicFormState,
  formData: FormData,
): Promise<PublicFormState> {
  const parsed = appointmentSchema.safeParse(parseForm(formData));

  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const supabase = createAnonServerSupabaseClient();

  if (!supabase) {
    return missingSupabaseState();
  }

  const productName = productNameFromSlug(parsed.data.productSlug);
  const { error } = await insertOnlyTable(supabase, "appointments").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    preferred_date: parsed.data.preferredDate,
    preferred_time: parsed.data.preferredTime,
    meeting_type: parsed.data.meetingType,
    notes: [
      productName ? `Product: ${productName}` : undefined,
      parsed.data.notes,
    ]
      .filter(Boolean)
      .join("\n"),
    status: "requested",
  });

  if (error) {
    return {
      status: "error",
      message: error.message,
    };
  }

  return {
    status: "success",
    message:
      "Your consultation request has been saved. A requested appointment is not confirmed until Irish Nest follows up.",
  };
}

export async function submitFeasibility(
  _state: PublicFormState,
  formData: FormData,
): Promise<PublicFormState> {
  const parsed = feasibilitySchema.safeParse(parseForm(formData));

  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const supabase = createAnonServerSupabaseClient();

  if (!supabase) {
    return missingSupabaseState();
  }

  const productName = productNameFromSlug(parsed.data.productSlug);
  const { error } = await insertOnlyTable(
    supabase,
    "site_feasibility_requests",
  ).insert({
    eircode: parsed.data.eircode,
    desired_home_type: productName ?? parsed.data.desiredHomeType,
    timeline: parsed.data.timeline,
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    consent: true,
    status: "new",
    notes: parsed.data.notes,
  });

  if (error) {
    return {
      status: "error",
      message: error.message,
    };
  }

  return {
    status: "success",
    message:
      "Your feasibility enquiry has been saved. This is not planning, engineering, pricing, access, or delivery approval.",
  };
}

export async function submitReservation(
  _state: PublicFormState,
  formData: FormData,
): Promise<PublicFormState> {
  const parsed = reservationSchema.safeParse(parseForm(formData));

  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const supabase = createAnonServerSupabaseClient();

  if (!supabase) {
    return missingSupabaseState();
  }

  const productName = productNameFromSlug(parsed.data.productSlug);
  const paymentProvider = getReservationPaymentProvider();
  const paymentIntent = await paymentProvider.createPendingIntent({
    reservationLabel: productName ?? "Irish Nest home",
    customerEmail: parsed.data.email,
  });
  const { data, error } = await insertReturningIdTable(supabase, "reservations")
    .insert({
      full_name: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      eircode: parsed.data.eircode,
      preferred_timeline: parsed.data.preferredTimeline,
      notes: [
        productName ? `Product: ${productName}` : undefined,
        parsed.data.notes,
      ]
        .filter(Boolean)
        .join("\n"),
      deposit_amount_cents: 0,
      currency: "EUR",
      status: paymentIntent.status,
      payment_provider: paymentIntent.provider,
      payment_reference: paymentIntent.reference,
      disclaimer_accepted: true,
    })
    .select("id")
    .single();

  if (error) {
    return {
      status: "error",
      message: error.message,
    };
  }

  if (!data) {
    return {
      status: "error",
      message: "The reservation was not created. Please try again.",
    };
  }

  const serviceSupabase = createServiceSupabaseClient();

  if (serviceSupabase) {
    await serviceInsertOnlyTable(serviceSupabase, "admin_tasks").insert({
      title: "Follow up pending reservation",
      description: `Contact ${parsed.data.fullName} about refundable-deposit next steps for ${productName ?? "their selected home"}.`,
      status: "open",
      priority: "high",
      entity_table: "reservations",
      entity_id: data.id,
    });
  }

  redirect(`/reserve/confirmation?ref=${data.id}`);
}

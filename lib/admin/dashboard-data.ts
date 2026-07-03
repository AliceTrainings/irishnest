import "server-only";

import { products as mockProducts } from "@/lib/mock-data";
import { createServiceSupabaseClient } from "@/lib/supabase/server";

export type AdminStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "site_review"
  | "quote_sent"
  | "consultation_booked"
  | "reservation_pending"
  | "reserved"
  | "closed_won"
  | "closed_lost"
  | "draft"
  | "published"
  | "pending_payment"
  | "sent"
  | "requested"
  | "active";

export type AdminMetric = {
  label: string;
  value: string;
  detail: string;
};

export type AdminProduct = {
  name: string;
  slug: string;
  category: string;
  status: AdminStatus;
  area: string;
  supplier: string;
  updatedAt: string;
};

export type AdminLead = {
  id: string;
  name: string;
  email: string;
  interest: string;
  status: AdminStatus;
  owner: string;
  createdAt: string;
};

export type AdminAppointment = {
  name: string;
  email: string;
  date: string;
  type: string;
  status: AdminStatus;
};

export type AdminReservation = {
  name: string;
  product: string;
  status: AdminStatus;
  deposit: string;
  timeline: string;
};

export type AdminQuote = {
  number: string;
  customer: string;
  product: string;
  status: AdminStatus;
  total: string;
  validUntil: string;
};

export type AdminActivity = {
  action: string;
  subject: string;
  when: string;
};

export type AdminDashboardData = {
  source: "supabase" | "fallback";
  metrics: AdminMetric[];
  products: AdminProduct[];
  leads: AdminLead[];
  appointments: AdminAppointment[];
  reservations: AdminReservation[];
  quotes: AdminQuote[];
  activity: AdminActivity[];
  funnel: { label: string; value: number }[];
};

type ProductRecord = {
  name: string;
  slug: string;
  status: AdminStatus;
  floor_area_sqm: number | null;
  updated_at: string;
  product_categories: { name: string } | null;
  suppliers: { name: string } | null;
};

type LeadRecord = {
  id: string;
  full_name: string;
  email: string;
  desired_home_type: string | null;
  status: AdminStatus;
  created_at: string;
  admin_users: { display_name: string } | null;
};

type AppointmentRecord = {
  full_name: string;
  email: string;
  preferred_date: string | null;
  meeting_type: string;
  status: AdminStatus | string;
};

type ReservationRecord = {
  full_name: string;
  preferred_timeline: string | null;
  status: AdminStatus;
  deposit_amount_cents: number | null;
  products: { name: string } | null;
};

type QuoteRecord = {
  quote_number: string;
  customer_name: string;
  status: AdminStatus;
  subtotal_cents: number | null;
  valid_until: string | null;
  products: { name: string } | null;
};

type ActivityRecord = {
  action: string;
  entity_table: string;
  created_at: string;
};

const fallbackProducts: AdminProduct[] = mockProducts
  .slice(0, 6)
  .map((item) => ({
    name: item.name,
    slug: item.slug,
    category: item.category,
    status: item.status === "preview" ? "draft" : "published",
    area: item.floorArea,
    supplier: "Private supplier record",
    updatedAt: "Prepared for Supabase sync",
  }));

const fallbackLeads: AdminLead[] = [
  {
    id: "lead-001",
    name: "Aoife Byrne",
    email: "aoife@example.ie",
    interest: "Rath One-Bed Home",
    status: "new",
    owner: "Unassigned",
    createdAt: "Today",
  },
  {
    id: "lead-002",
    name: "Cian Walsh",
    email: "cian@example.ie",
    interest: "Dun Two-Bed Lodge",
    status: "site_review",
    owner: "Sales desk",
    createdAt: "Yesterday",
  },
  {
    id: "lead-003",
    name: "Niamh Kelly",
    email: "niamh@example.ie",
    interest: "Garden room feasibility",
    status: "quote_sent",
    owner: "Sales desk",
    createdAt: "This week",
  },
];

const fallbackAppointments: AdminAppointment[] = [
  {
    name: "Aoife Byrne",
    email: "aoife@example.ie",
    date: "Next available slot",
    type: "Consultation",
    status: "requested",
  },
  {
    name: "Cian Walsh",
    email: "cian@example.ie",
    date: "Pending confirmation",
    type: "Site review call",
    status: "consultation_booked",
  },
];

const fallbackReservations: AdminReservation[] = [
  {
    name: "Reserve flow test",
    product: "Rath One-Bed Home",
    status: "pending_payment",
    deposit: "EUR 0",
    timeline: "Future Stripe handoff",
  },
];

const fallbackQuotes: AdminQuote[] = [
  {
    number: "Q-READY-001",
    customer: "Aoife Byrne",
    product: "Rath One-Bed Home",
    status: "draft",
    total: "Indicative only",
    validUntil: "Not sent",
  },
  {
    number: "Q-READY-002",
    customer: "Cian Walsh",
    product: "Dun Two-Bed Lodge",
    status: "sent",
    total: "Supplier-confirmed later",
    validUntil: "Review required",
  },
];

const fallbackActivity: AdminActivity[] = [
  {
    action: "Schema prepared",
    subject: "Products, leads, quotes, reservations, media, journal",
    when: "Phase 3",
  },
  {
    action: "RLS enabled",
    subject: "Public insert-only lead policies and admin role policies",
    when: "Phase 3",
  },
  {
    action: "Admin shell added",
    subject: "Operational routes are ready for Supabase records",
    when: "Now",
  },
];

const fallbackData: AdminDashboardData = {
  source: "fallback",
  metrics: [
    { label: "New enquiries", value: "3", detail: "Fallback pipeline sample" },
    { label: "Open quotes", value: "2", detail: "Draft and sent quotes" },
    {
      label: "Upcoming consultations",
      value: "2",
      detail: "Awaiting calendar workflow",
    },
    {
      label: "Pending reservations",
      value: "1",
      detail: "Payment provider abstracted",
    },
  ],
  products: fallbackProducts,
  leads: fallbackLeads,
  appointments: fallbackAppointments,
  reservations: fallbackReservations,
  quotes: fallbackQuotes,
  activity: fallbackActivity,
  funnel: [
    { label: "New", value: 3 },
    { label: "Contacted", value: 1 },
    { label: "Qualified", value: 1 },
    { label: "Site Review", value: 2 },
    { label: "Quote Sent", value: 1 },
    { label: "Reservation Pending", value: 1 },
  ],
};

function formatCents(value: number | null) {
  if (!value) {
    return "Indicative only";
  }

  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value / 100);
}

export async function getAdminDashboardData(): Promise<AdminDashboardData> {
  const supabase = createServiceSupabaseClient();

  if (!supabase) {
    return fallbackData;
  }

  const [
    productsResult,
    enquiriesResult,
    appointmentsResult,
    reservationsResult,
    quotesResult,
    activityResult,
  ] = await Promise.all([
    supabase
      .from("products")
      .select(
        "name, slug, status, floor_area_sqm, updated_at, product_categories(name), suppliers(name)",
      )
      .order("updated_at", { ascending: false })
      .limit(12),
    supabase
      .from("enquiries")
      .select(
        "id, full_name, email, desired_home_type, status, created_at, admin_users(display_name)",
      )
      .order("created_at", { ascending: false })
      .limit(20),
    supabase
      .from("appointments")
      .select("full_name, email, preferred_date, meeting_type, status")
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("reservations")
      .select(
        "full_name, preferred_timeline, status, deposit_amount_cents, products(name)",
      )
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("quotes")
      .select(
        "quote_number, customer_name, status, subtotal_cents, valid_until, products(name)",
      )
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("activity_log")
      .select("action, entity_table, created_at")
      .order("created_at", { ascending: false })
      .limit(8),
  ]);

  if (
    productsResult.error ||
    enquiriesResult.error ||
    appointmentsResult.error ||
    reservationsResult.error ||
    quotesResult.error
  ) {
    return fallbackData;
  }

  const productRecords = (productsResult.data ??
    []) as unknown as ProductRecord[];
  const leadRecords = (enquiriesResult.data ?? []) as unknown as LeadRecord[];
  const appointmentRecords = (appointmentsResult.data ??
    []) as unknown as AppointmentRecord[];
  const reservationRecords = (reservationsResult.data ??
    []) as unknown as ReservationRecord[];
  const quoteRecords = (quotesResult.data ?? []) as unknown as QuoteRecord[];
  const activityRecords = (activityResult.data ??
    []) as unknown as ActivityRecord[];

  const leads =
    leadRecords.map((item) => ({
      id: item.id,
      name: item.full_name,
      email: item.email,
      interest: item.desired_home_type ?? "General enquiry",
      status: item.status,
      owner: item.admin_users?.display_name ?? "Unassigned",
      createdAt: new Date(item.created_at).toLocaleDateString("en-IE"),
    })) ?? [];

  const products =
    productRecords.map((item) => ({
      name: item.name,
      slug: item.slug,
      category: item.product_categories?.name ?? "Uncategorised",
      status: item.status,
      area: item.floor_area_sqm ? `${item.floor_area_sqm} sq m` : "Not set",
      supplier: item.suppliers?.name ?? "Unassigned supplier",
      updatedAt: new Date(item.updated_at).toLocaleDateString("en-IE"),
    })) ?? [];

  const appointments =
    appointmentRecords.map((item) => ({
      name: item.full_name,
      email: item.email,
      date: item.preferred_date ?? "Requested",
      type: item.meeting_type,
      status: item.status as AdminStatus,
    })) ?? [];

  const reservations =
    reservationRecords.map((item) => ({
      name: item.full_name,
      product: item.products?.name ?? "Product pending",
      status: item.status,
      deposit: formatCents(item.deposit_amount_cents),
      timeline: item.preferred_timeline ?? "Not set",
    })) ?? [];

  const quotes =
    quoteRecords.map((item) => ({
      number: item.quote_number,
      customer: item.customer_name,
      product: item.products?.name ?? "Product pending",
      status: item.status,
      total: formatCents(item.subtotal_cents),
      validUntil: item.valid_until ?? "Not set",
    })) ?? [];

  const activity =
    activityRecords.map((item) => ({
      action: item.action,
      subject: item.entity_table,
      when: new Date(item.created_at).toLocaleDateString("en-IE"),
    })) ?? fallbackActivity;

  const funnel = [
    "new",
    "contacted",
    "qualified",
    "site_review",
    "quote_sent",
    "consultation_booked",
    "reservation_pending",
  ].map((status) => ({
    label: status
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    value: leads.filter((lead) => lead.status === status).length,
  }));

  return {
    source: "supabase",
    metrics: [
      {
        label: "New enquiries",
        value: String(leads.length),
        detail: "Latest lead records",
      },
      {
        label: "Open quotes",
        value: String(quotes.length),
        detail: "Draft, sent, or active",
      },
      {
        label: "Upcoming consultations",
        value: String(appointments.length),
        detail: "Requested and booked",
      },
      {
        label: "Pending reservations",
        value: String(reservations.length),
        detail: "Awaiting payment confirmation",
      },
    ],
    products,
    leads,
    appointments,
    reservations,
    quotes,
    activity,
    funnel,
  };
}

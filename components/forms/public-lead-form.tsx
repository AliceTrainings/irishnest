"use client";

import { useActionState } from "react";
import { CalendarDays, Mail, MapPin, Phone, User } from "lucide-react";

import {
  initialPublicFormState,
  submitAppointment,
  submitEnquiry,
  submitFeasibility,
  submitReservation,
  type PublicFormState,
} from "@/app/actions/public-leads";
import { SubmitButton } from "@/components/forms/submit-button";
import { cn } from "@/lib/utils";

type FormKind =
  "quote" | "contact" | "appointment" | "feasibility" | "reservation";

type HomeOption = {
  name: string;
  slug: string;
  category: string;
};

const actionMap = {
  quote: submitEnquiry,
  contact: submitEnquiry,
  appointment: submitAppointment,
  feasibility: submitFeasibility,
  reservation: submitReservation,
};

const copy = {
  quote: {
    title: "Request a supplier-confirmed quote",
    description:
      "Share the home you are considering and the site context. Irish Nest will review before any price, specification, availability, or delivery timeline is treated as final.",
    button: "Request quote",
    source: "quote_request",
  },
  contact: {
    title: "Send a careful enquiry",
    description:
      "Tell us what you are exploring. Irish Nest will review the context before offering guidance or supplier-confirmed next steps.",
    button: "Send enquiry",
    source: "contact_enquiry",
  },
  appointment: {
    title: "Book a consultation request",
    description:
      "Choose a preferred date and meeting type. This saves a requested appointment; the time is confirmed only after Irish Nest follows up.",
    button: "Request consultation",
    source: "consultation_request",
  },
  feasibility: {
    title: "Prepare an initial feasibility enquiry",
    description:
      "This is an initial feasibility enquiry only. It is not planning, engineering, pricing, access, or delivery approval.",
    button: "Submit feasibility enquiry",
    source: "site_feasibility",
  },
  reservation: {
    title: "Reserve with a refundable deposit request",
    description:
      "This creates a reservation record with status pending_payment. No reservation is confirmed until payment is actually received.",
    button: "Create pending reservation",
    source: "reservation_request",
  },
};

function FieldError({ state, name }: { state: PublicFormState; name: string }) {
  const message = state.fieldErrors?.[name]?.[0];

  if (!message) {
    return null;
  }

  return <p className="mt-2 text-xs font-semibold text-red-800">{message}</p>;
}

function InputShell({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ "aria-hidden": true; size: number }>;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-950">{label}</span>
      <span className="mt-2 flex min-h-12 items-center gap-3 border border-slate-950/15 bg-warm-white px-4">
        <Icon aria-hidden={true} size={18} />
        {children}
      </span>
    </label>
  );
}

export function PublicLeadForm({
  kind,
  homes,
  selectedHome,
  compact = false,
}: {
  kind: FormKind;
  homes: HomeOption[];
  selectedHome?: string;
  compact?: boolean;
}) {
  const [state, formAction] = useActionState(
    actionMap[kind],
    initialPublicFormState,
  );
  const selected = homes.find((home) => home.slug === selectedHome);
  const defaults = copy[kind];
  const isQuote = kind === "quote";
  const isContact = kind === "contact";
  const isAppointment = kind === "appointment";
  const isFeasibility = kind === "feasibility";
  const isReservation = kind === "reservation";

  return (
    <form
      action={formAction}
      className={cn(
        "grid gap-4 bg-ivory p-5 shadow-xl shadow-slate-950/5 md:grid-cols-2 md:p-8",
        compact && "shadow-none",
      )}
    >
      <input name="source" type="hidden" value={defaults.source} />
      {isAppointment && selected?.slug ? (
        <input name="productSlug" type="hidden" value={selected.slug} />
      ) : null}
      <div className="md:col-span-2">
        <h2 className="font-serif text-3xl leading-tight text-forest">
          {defaults.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-950/68">
          {defaults.description}
        </p>
      </div>

      <InputShell label="Full name" icon={User}>
        <input
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-950/45"
          name="fullName"
          required
          placeholder="Your name"
        />
      </InputShell>
      <div>
        <InputShell label="Email" icon={Mail}>
          <input
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-950/45"
            name="email"
            required
            type="email"
            placeholder="hello@example.ie"
          />
        </InputShell>
        <FieldError state={state} name="email" />
      </div>
      <InputShell label="Phone" icon={Phone}>
        <input
          className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-950/45"
          name="phone"
          type="tel"
          placeholder="+353"
        />
      </InputShell>
      <div>
        <InputShell label="Eircode" icon={MapPin}>
          <input
            className="min-w-0 flex-1 bg-transparent text-sm uppercase outline-none placeholder:text-slate-950/45"
            name="eircode"
            required={isFeasibility || isReservation}
            placeholder="A65 F4E2"
          />
        </InputShell>
        <FieldError state={state} name="eircode" />
      </div>

      {isAppointment ? (
        <>
          <InputShell label="Preferred date" icon={CalendarDays}>
            <input
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-950/45"
              name="preferredDate"
              type="date"
            />
          </InputShell>
          <label className="block">
            <span className="text-sm font-semibold text-slate-950">
              Meeting type
            </span>
            <select
              className="mt-2 min-h-12 w-full border border-slate-950/15 bg-warm-white px-4 text-sm outline-none"
              name="meetingType"
              defaultValue="consultation"
            >
              <option value="consultation">Consultation</option>
              <option value="site_review_call">Site review call</option>
              <option value="product_walkthrough">Product walkthrough</option>
            </select>
          </label>
        </>
      ) : (
        <>
          <label className="block">
            <span className="text-sm font-semibold text-slate-950">
              Desired home type
            </span>
            <select
              className="mt-2 min-h-12 w-full border border-slate-950/15 bg-warm-white px-4 text-sm outline-none"
              name="productSlug"
              defaultValue={selected?.slug ?? ""}
            >
              <option value="">Choose a home or category</option>
              {homes.map((home) => (
                <option key={home.slug} value={home.slug}>
                  {home.name} · {home.category}
                </option>
              ))}
            </select>
          </label>
          <InputShell label="Timeline" icon={CalendarDays}>
            <input
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-950/45"
              name={isReservation ? "preferredTimeline" : "timeline"}
              placeholder="6-12 months"
            />
          </InputShell>
        </>
      )}

      <input
        name="desiredHomeType"
        type="hidden"
        value={selected?.name ?? "General Irish Nest enquiry"}
      />

      {isQuote || isContact ? (
        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-slate-950">
            {isContact ? "Message" : "Quote notes"}
          </span>
          <textarea
            className="mt-2 min-h-32 w-full border border-slate-950/15 bg-warm-white px-4 py-3 text-sm outline-none placeholder:text-slate-950/45"
            name="message"
            required
            placeholder={
              isContact
                ? "Tell us what you would like to discuss."
                : "Tell us about your site, preferred home, budget range if known, and what you need clarified."
            }
          />
          <FieldError state={state} name="message" />
        </label>
      ) : null}

      {!isQuote && !isContact ? (
        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-slate-950">Notes</span>
          <textarea
            className="mt-2 min-h-28 w-full border border-slate-950/15 bg-warm-white px-4 py-3 text-sm outline-none placeholder:text-slate-950/45"
            name="notes"
            placeholder="Share access, services, preferred timing, or any context that may help the team prepare."
          />
        </label>
      ) : null}

      {isFeasibility || isQuote || isContact ? (
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-950/72 md:col-span-2">
          <input
            className="mt-1 size-4 accent-forest"
            name="consent"
            required
            type="checkbox"
          />
          <span>
            I consent to Irish Nest saving my enquiry details and contacting me
            about this request. Indicative information only.
          </span>
        </label>
      ) : null}

      {isReservation ? (
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-950/72 md:col-span-2">
          <input
            className="mt-1 size-4 accent-forest"
            name="depositDisclaimer"
            required
            type="checkbox"
          />
          <span>
            I understand this creates a pending reservation only. It is not
            confirmed until payment is actually received, and final
            specifications remain subject to consultation.
          </span>
        </label>
      ) : null}

      <div className="md:col-span-2">
        <SubmitButton>{defaults.button}</SubmitButton>
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className={cn(
            "md:col-span-2 border-l-2 p-4 text-sm font-semibold leading-6",
            state.status === "success"
              ? "border-forest bg-warm-white text-forest"
              : "border-red-800 bg-red-50 text-red-900",
          )}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

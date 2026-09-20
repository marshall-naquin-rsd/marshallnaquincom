import { audienceTypes, formatOptions } from "@/lib/copy";

export type BookingPayload = {
  name: string;
  email: string;
  organization: string;
  audienceType: string;
  preferredDates: string;
  format: string;
  location: string;
  message: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseBookingForm(input: Record<string, FormDataEntryValue>) {
  if (String(input.company ?? "").trim()) {
    return { ok: false as const, error: "Unable to send this inquiry." };
  }

  const payload: BookingPayload = {
    name: String(input.name ?? "").trim(),
    email: String(input.email ?? "").trim(),
    organization: String(input.organization ?? "").trim(),
    audienceType: String(input.audienceType ?? "").trim(),
    preferredDates: String(input.preferredDates ?? "").trim(),
    format: String(input.format ?? "").trim(),
    location: String(input.location ?? "").trim(),
    message: String(input.message ?? "").trim(),
  };

  if (!payload.name) {
    return { ok: false as const, error: "Please add your name." };
  }
  if (!payload.email || !EMAIL.test(payload.email)) {
    return { ok: false as const, error: "Please add a working email." };
  }
  if (!payload.organization) {
    return { ok: false as const, error: "Please add the organization or event name." };
  }
  if (
    payload.audienceType &&
    !audienceTypes.includes(payload.audienceType as (typeof audienceTypes)[number])
  ) {
    return { ok: false as const, error: "Please choose an audience type." };
  }
  if (
    payload.format &&
    !formatOptions.includes(payload.format as (typeof formatOptions)[number])
  ) {
    return { ok: false as const, error: "Please choose a format." };
  }
  if (!payload.message) {
    return { ok: false as const, error: "Please add a short message." };
  }

  return { ok: true as const, payload };
}

export async function deliverBooking(payload: BookingPayload) {
  const formId = process.env.FORMSPREE_FORM_ID?.trim();
  const webhook = process.env.BOOKING_WEBHOOK_URL?.trim();

  if (formId) {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: `Speaking inquiry from ${payload.name}`,
      }),
    });

    if (!response.ok) {
      return { ok: false as const, error: "The form did not send. Please try again." };
    }

    return { ok: true as const };
  }

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { ok: false as const, error: "The form did not send. Please try again." };
    }

    return { ok: true as const };
  }

  return {
    ok: false as const,
    error:
      "The booking inbox is not connected yet. Set FORMSPREE_FORM_ID or BOOKING_WEBHOOK_URL on Vercel.",
    unconfigured: true as const,
  };
}

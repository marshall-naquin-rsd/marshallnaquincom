import { formatOptions, roomOptions } from "@/lib/copy";
import { Resend } from "resend";

export type BookingPayload = {
  name: string;
  email: string;
  organization: string;
  room: string;
  format: string;
  dates: string;
  message: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BOOKING_TO = "marshall.naquin@professionalsupportconsulting.com";

export function parseBookingForm(input: Record<string, FormDataEntryValue>) {
  if (String(input.company ?? "").trim()) {
    return { ok: false as const, error: "Unable to send this inquiry." };
  }

  const payload: BookingPayload = {
    name: String(input.name ?? "").trim(),
    email: String(input.email ?? "").trim(),
    organization: String(input.organization ?? "").trim(),
    room: String(input.room ?? "").trim(),
    format: String(input.format ?? "").trim(),
    dates: String(input.dates ?? "").trim(),
    message: String(input.message ?? "").trim(),
  };

  if (!payload.name) {
    return { ok: false as const, error: "Please add your name." };
  }
  if (!payload.email || !EMAIL.test(payload.email)) {
    return { ok: false as const, error: "Please add a working email." };
  }
  if (payload.room && !roomOptions.includes(payload.room as (typeof roomOptions)[number])) {
    return { ok: false as const, error: "Please choose who is in the room." };
  }
  if (
    payload.format &&
    !formatOptions.includes(payload.format as (typeof formatOptions)[number])
  ) {
    return { ok: false as const, error: "Please choose a format." };
  }

  return { ok: true as const, payload };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function deliverBooking(payload: BookingPayload) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.BOOKING_FROM_EMAIL?.trim() ||
    "Marshall Naquin <booking@marshallnaquin.com>";

  if (!apiKey) {
    return {
      ok: false as const,
      error: "The booking inbox is not connected yet. Set RESEND_API_KEY on Vercel.",
      unconfigured: true as const,
    };
  }

  const subject = payload.format
    ? `Speaking inquiry — ${payload.name} — ${payload.format}`
    : `Speaking inquiry — ${payload.name}`;

  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Organization", payload.organization || "—"],
    ["Who is in the room", payload.room || "—"],
    ["Format", payload.format || "—"],
    ["Dates you have in mind", payload.dates || "—"],
    ["Anything else I should know", payload.message || "—"],
  ];

  const html = `
    <div style="font-family: Source Sans 3, Helvetica, Arial, sans-serif; color: #221d15;">
      <p>New speaking inquiry from marshallnaquin.com.</p>
      ${rows
        .map(
          ([label, value]) =>
            `<p><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>`,
        )
        .join("")}
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [BOOKING_TO],
    replyTo: payload.email,
    subject,
    html,
  });

  if (error) {
    return { ok: false as const, error: "The form did not send. Please try again." };
  }

  return { ok: true as const };
}

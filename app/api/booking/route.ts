import { deliverBooking, parseBookingForm } from "@/lib/booking";

// Resend transport, same shape as PSC /api/contact: POST JSON, Reply-To =
// submitter, fail closed if RESEND_API_KEY is missing.
export async function POST(request: Request) {
  let body: Record<string, FormDataEntryValue>;

  try {
    body = (await request.json()) as Record<string, FormDataEntryValue>;
  } catch {
    return Response.json({ error: "Please send the form as JSON." }, { status: 400 });
  }

  const parsed = parseBookingForm(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: 400 });
  }

  const delivered = await deliverBooking(parsed.payload);
  if (!delivered.ok) {
    return Response.json(
      { error: delivered.error },
      { status: "unconfigured" in delivered ? 503 : 502 },
    );
  }

  return Response.json({ ok: true });
}

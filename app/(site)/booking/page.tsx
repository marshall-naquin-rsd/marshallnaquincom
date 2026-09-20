import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { bookingPage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Book a talk",
  description:
    "Book Marshall Naquin for a talk on addiction and recovery. Tell me the room, the dates, and what you need.",
};

export default function BookingPage() {
  return (
    <main id="main" className="wrap pad-page">
      <p className="eyebrow">Speaking inquiry</p>
      <h1 className="page-title">{bookingPage.title}</h1>
      <p className="lead">{bookingPage.lead}</p>
      <div className="booking-panel">
        <BookingForm />
      </div>
    </main>
  );
}

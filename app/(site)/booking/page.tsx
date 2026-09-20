import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a talk",
  description:
    "Book Marshall Naquin for a talk on addiction and recovery. Include your dates and your audience.",
};

export default function BookingPage() {
  return (
    <main id="main" className="booking-main">
      <BookingForm />
    </main>
  );
}

import { BookingForm } from "@/components/BookingForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book Marshall Naquin, MD | Addiction & Recovery Talks",
  description:
    "Book Marshall Naquin, MD, to speak on addiction and recovery for treatment programs, recovery groups, hospitals and conferences. Send dates and audience.",
  path: "/booking",
  openGraphType: "website",
});

export default function BookingPage() {
  return (
    <main id="main" className="booking-main">
      <BookingForm />
    </main>
  );
}

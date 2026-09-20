import type { Metadata } from "next";
import Link from "next/link";
import { SpeakerAbout } from "@/components/SpeakerAbout";
import { bookingBand } from "@/lib/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marshall R. Naquin, M.D., board-certified emergency physician in recovery from gambling addiction.",
};

export default function AboutPage() {
  return (
    <main id="main" className="wrap pad-page">
      <p className="eyebrow">The speaker</p>
      <h1 className="page-title">About the speaker</h1>
      <SpeakerAbout />
      <p className="about-booking">
        <Link className="btn-primary" href="/booking">
          {bookingBand.cta}
        </Link>
      </p>
    </main>
  );
}

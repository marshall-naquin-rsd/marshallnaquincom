import Link from "next/link";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { SpeakerAbout } from "@/components/SpeakerAbout";
import { bookingBand } from "@/lib/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Marshall Naquin, MD | Emergency Physician in Recovery",
  description:
    "Board-certified emergency physician in recovery from gambling addiction. Marshall Naquin's story, credentials and why he speaks about addiction.",
  path: "/about",
  openGraphType: "profile",
});

export default function AboutPage() {
  return (
    <main id="main" className="band">
      <PersonJsonLd />
      <SpeakerAbout headingLevel="h1" showPortrait />
      <p className="about-booking">
        <Link className="btn-primary" href="/booking">
          {bookingBand.cta}
        </Link>
      </p>
    </main>
  );
}

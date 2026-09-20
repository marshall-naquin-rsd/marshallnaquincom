import Image from "next/image";
import Link from "next/link";
import { about, aboutEyebrow } from "@/lib/copy";

type SpeakerAboutProps = {
  headingLevel?: "h1" | "h2";
  showMore?: boolean;
  showPortrait?: boolean;
  hidePortraitOnPhone?: boolean;
};

export function SpeakerAbout({
  headingLevel = "h2",
  showMore = false,
  showPortrait = false,
  hidePortraitOnPhone = false,
}: SpeakerAboutProps) {
  const Heading = headingLevel;

  return (
    <div className="about-grid">
      <div className="about-copy">
        <p className="eyebrow">{aboutEyebrow}</p>
        <Heading className="section-title">{about.who}</Heading>
        <p className="speaker-cred">{about.cred}</p>
        <p className="speaker-bio">{about.bio}</p>
        {showMore ? (
          <Link className="cta-listen" href="/about">
            {about.more}
          </Link>
        ) : null}
      </div>
      {showPortrait ? (
        <Image
          className={hidePortraitOnPhone ? "portrait about-portrait" : "portrait"}
          src="/images/marshall-and-tracey.jpg"
          alt={about.pairAlt}
          width={1280}
          height={1600}
          sizes="240px"
        />
      ) : null}
    </div>
  );
}

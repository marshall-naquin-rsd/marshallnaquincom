import Image from "next/image";
import { about, hero } from "@/lib/copy";

export function SpeakerAbout() {
  return (
    <div className="about-block">
      <div className="photo-pair">
        <Image
          src="/images/marshall-naquin-md-portrait.jpg"
          alt={hero.portraitAlt}
          width={1024}
          height={1280}
          sizes="(max-width: 720px) 45vw, 190px"
        />
        <Image
          src="/images/marshall-and-tracey.jpg"
          alt={about.pairAlt}
          width={1280}
          height={1600}
          sizes="(max-width: 720px) 45vw, 190px"
        />
      </div>
      <div>
        <p className="speaker-who">{about.who}</p>
        <p className="speaker-cred">{about.cred}</p>
        <p className="speaker-bio">{about.bio}</p>
      </div>
    </div>
  );
}

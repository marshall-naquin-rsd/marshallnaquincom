import Image from "next/image";
import Link from "next/link";
import { SpeakerAbout } from "@/components/SpeakerAbout";
import {
  bothSides,
  bookingBand,
  formats,
  hero,
  otherSpeakers,
  samples,
  samplesIntro,
  takeaways,
  topics,
} from "@/lib/copy";

export default function Home() {
  return (
    <main id="main">
      <section className="wrap hero pad-band">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="h1-hero">{hero.h1}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/booking">
              {hero.primaryCta}
            </Link>
            <a className="cta-quiet" href="#samples">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <Image
          className="hero-portrait"
          src="/images/marshall-naquin-md-portrait.jpg"
          alt={hero.portraitAlt}
          width={1024}
          height={1280}
          sizes="(max-width: 720px) 180px, 260px"
          priority
        />
      </section>

      <section id="talks" className="night-band">
        <div className="wrap">
          <p className="eyebrow">{bothSides.eyebrow}</p>
          <h2 className="night-title">{bothSides.title}</h2>
          <p className="night-body">{bothSides.body}</p>
          <blockquote className="night-quote">
            <p>“{bothSides.quote}”</p>
          </blockquote>
        </div>
      </section>

      <section id="samples" className="wrap pad-band">
        <h2 className="eyebrow eyebrow-lg">Speaking samples</h2>
        <p className="section-lead">{samplesIntro}</p>
        <div className="sample-cards">
          {samples.map((sample) => (
            <article className="raised-card" key={sample.src}>
              <h3 className="card-title">{sample.title}</h3>
              <p>{sample.body}</p>
              <p className="sample-duration">{sample.duration}</p>
              <audio controls preload="metadata" aria-label={sample.label}>
                <source src={sample.src} type="audio/mpeg" />
                <a href={sample.src}>Download this sample (MP3)</a>
              </audio>
            </article>
          ))}
        </div>
      </section>

      <section id="topics" className="wrap pad-band">
        <h2 className="eyebrow eyebrow-lg">What I speak about</h2>
        <ul className="topic-chips">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <section id="takeaways" className="wrap pad-band">
        <h2 className="eyebrow eyebrow-lg">What a room takes away</h2>
        <ul className="takeaway-list">
          {takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="formats" className="wrap pad-band">
        <h2 className="eyebrow eyebrow-lg">Formats</h2>
        <dl className="format-rows">
          {formats.map((format) => (
            <div key={format.label}>
              <dt>{format.label}</dt>
              <dd>{format.length}</dd>
            </div>
          ))}
        </dl>
        <p className="other-speakers">{otherSpeakers}</p>
      </section>

      <section id="about" className="wrap pad-band">
        <h2 className="eyebrow eyebrow-lg">About the speaker</h2>
        <SpeakerAbout />
      </section>

      <section id="booking" className="booking-band">
        <div className="wrap">
          <h2 className="booking-title">{bookingBand.title}</h2>
          <p className="booking-body">{bookingBand.body}</p>
          <Link className="btn-primary" href="/booking">
            {bookingBand.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}

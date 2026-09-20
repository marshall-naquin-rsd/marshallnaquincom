import Image from "next/image";
import Link from "next/link";
import { SpeakerAbout } from "@/components/SpeakerAbout";
import {
  bothSides,
  bookingBand,
  downloadSample,
  formats,
  formatsEyebrow,
  formatsHeading,
  hero,
  otherSpeakers,
  otherSpeakersEyebrow,
  samples,
  samplesEyebrow,
  samplesHeading,
  samplesIntro,
  takeaways,
  takeawaysEyebrow,
  takeawaysHeading,
  topics,
  topicsEyebrow,
  topicsHeading,
} from "@/lib/copy";

export default function Home() {
  return (
    <main>
      <section id="main" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="h1-hero">{hero.h1}</h1>
          <p className="lead">{hero.lead}</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/booking">
              {hero.primaryCta}
            </Link>
            <a className="cta-listen" href="#samples">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <Image
          className="portrait hero-portrait"
          src="/images/marshall-naquin-md-portrait.jpg"
          alt={hero.portraitAlt}
          width={1024}
          height={1280}
          sizes="(max-width: 720px) 100vw, 240px"
          priority
        />
      </section>

      <section id="talk" className="night-band">
        <div className="inner-900 night-inner">
          <p className="eyebrow night-eyebrow">{bothSides.eyebrow}</p>
          <h2 className="night-title">{bothSides.title}</h2>
          <p className="night-body">{bothSides.body}</p>
          <blockquote className="night-quote">“{bothSides.quote}”</blockquote>
          <div className="night-listen">
            <a className="btn-night" href="#samples">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section id="samples" className="band">
        <div className="inner-900 stack-16">
          <p className="eyebrow">{samplesEyebrow}</p>
          <h2 className="section-title">{samplesHeading}</h2>
          <p className="section-lead">{samplesIntro}</p>
          <div className="sample-cards">
            {samples.map((sample) => (
              <article className="raised-card" key={sample.src}>
                <h3 className="card-title">{sample.title}</h3>
                <p className="card-body">{sample.body}</p>
                <audio controls preload="metadata" aria-label={sample.label}>
                  <source src={sample.src} type="audio/mpeg" />
                </audio>
                <a href={sample.src} download>
                  {downloadSample}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="topics" className="band band-rule">
        <div className="inner-900 stack-16">
          <p className="eyebrow">{topicsEyebrow}</p>
          <h2 className="section-title">{topicsHeading}</h2>
          <ul className="rule-list">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="takeaways" className="band band-rule">
        <div className="inner-900 stack-16">
          <p className="eyebrow">{takeawaysEyebrow}</p>
          <h2 className="section-title">{takeawaysHeading}</h2>
          <ul className="rule-list takeaway-list">
            {takeaways.map((item) => (
              <li key={item.before}>
                {item.before}
                {item.quote ? <em>“{item.quote}”</em> : null}
                {item.after}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="formats" className="band band-rule">
        <div className="inner-900 stack-16">
          <p className="eyebrow">{formatsEyebrow}</p>
          <h2 className="section-title">{formatsHeading}</h2>
          <div className="format-rows">
            {formats.map((format) => (
              <div key={format.label}>
                <span className="format-label">{format.label}</span>
                <span className="format-length">{format.length}</span>
              </div>
            ))}
          </div>
          <div className="other-speakers">
            <p className="eyebrow">{otherSpeakersEyebrow}</p>
            <p>{otherSpeakers}</p>
          </div>
        </div>
      </section>

      <section id="about" className="band band-rule">
        <SpeakerAbout showMore showPortrait hidePortraitOnPhone />
      </section>

      <section className="booking-band">
        <div className="inner-720 stack-14">
          <h2 className="section-title">{bookingBand.title}</h2>
          <p className="booking-body">{bookingBand.body}</p>
          <div>
            <Link className="btn-primary booking-band-cta" href="/booking">
              {bookingBand.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

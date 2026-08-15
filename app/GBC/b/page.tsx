import type { Metadata } from "next";
import Image from "next/image";
import { SampleMenu } from "../components/SampleMenu";

export const metadata: Metadata = {
  title: "Greenbriar Grove — Direction B",
  description: "Roots homepage sample for Greenbriar Grove.",
};

const INSTAGRAM = "https://www.instagram.com/greenbriargrove/";
const BOOK = "https://dusk.fm/@greenbriargrove";

export default function DirectionBPage() {
  return (
    <main className="gbc-shell gbc-font-archivo">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[303px]">
          <Image
            src="/gbc/b/hero.jpg"
            alt="Greenbriar Grove posed with a vintage car"
            fill
            className="object-cover object-[center_20%]"
            sizes="430px"
            priority
          />
        </div>
        <div className="absolute inset-x-0 top-[175px] h-[215px] bg-gradient-to-b from-transparent via-gbc-base/90 to-gbc-base" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gbc-base/70 to-transparent" />
        <header className="absolute inset-x-0 top-0 flex h-[62px] items-center justify-between px-[18px]">
          <Image
            src="/gbc/b/monogram.png"
            alt="Greenbriar Grove"
            width={30}
            height={32}
            className="h-8 w-[30px] object-contain"
            priority
          />
          <SampleMenu sample="b" />
        </header>
        <div className="absolute inset-x-0 top-[252px] px-[25px]">
          <div className="relative mx-auto aspect-[340/196] w-full max-w-[340px]">
            <Image
              src="/gbc/b/wordmark.png"
              alt="Greenbriar Grove"
              fill
              className="object-contain"
              sizes="340px"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-6 px-6 pb-[46px]">
        <p className="w-full max-w-[300px] text-center text-[15px] leading-[1.55] text-gbc-warm">
          Rock cover band from Baton Rouge, Louisiana.
        </p>
        <a className="gbc-cta-solid" href="#watch">
          Watch them play
        </a>
      </section>

      <section className="flex flex-col gap-[18px] px-6 pb-2 pt-11">
        <p className="text-[17px] leading-[1.6] text-gbc-warm">
          We enjoy what we do and hope to make everyone have at least half as
          much fun as we do performing. Original music is in the works!
        </p>
        <p className="gbc-font-black text-[22px] leading-[1.15] tracking-[-0.4px] text-gbc-ink">
          GOTTA KEEP ROCK N ROLL ALIVE!
        </p>
      </section>

      <section
        id="watch"
        className="flex scroll-mt-4 flex-col gap-[18px] bg-gbc-amber px-6 py-11"
      >
        <h2 className="gbc-display">SEE THEM PLAY</h2>
        <p className="text-[11px] leading-[1.6] text-gbc-ink">
          [INSTAGRAM EMBED] — live video pulled from @greenbriargrove. Embedded,
          never self-hosted: the platform carries the performance licence for
          covers, a self-hosted file would put that on the band.
        </p>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-[342/428] w-full overflow-hidden rounded-[2px]"
        >
          <Image
            src="/gbc/b/embed-drummer.jpg"
            alt="Drummer performing live"
            fill
            className="object-cover"
            sizes="430px"
          />
          <div className="absolute inset-0 bg-gbc-base/35" />
          <span className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/gbc/b/play.svg"
              alt=""
              className="size-full"
              width={64}
              height={64}
            />
            <img
              src="/gbc/b/play-glyph.svg"
              alt=""
              className="absolute left-1/2 top-1/2 h-[22px] w-[19px] -translate-x-1/2 -translate-y-1/2 rotate-90"
              width={19}
              height={22}
            />
          </span>
        </a>
        <p className="text-[13px] font-medium text-gbc-ink">
          Original music is in the works.
        </p>
      </section>

      <section className="flex flex-col gap-4 pt-11">
        <h2 className="gbc-display px-6">ON STAGE</h2>
        <div className="relative h-[300px] w-full">
          <Image
            src="/gbc/b/live-vocalist.jpg"
            alt="Vocalist performing live"
            fill
            className="object-cover"
            sizes="430px"
          />
        </div>
        <div className="flex h-[210px] gap-1">
          <div className="relative min-w-0 flex-1">
            <Image
              src="/gbc/b/live-guitar.jpg"
              alt="Guitarist performing live"
              fill
              className="object-cover"
              sizes="215px"
            />
          </div>
          <div className="relative min-w-0 flex-1">
            <Image
              src="/gbc/b/live-bass.jpg"
              alt="Guitarist on stage"
              fill
              className="object-cover"
              sizes="215px"
            />
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-3 bg-gbc-base-warm px-6 pb-11 pt-10">
        <a
          className="gbc-link-solid"
          href={BOOK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="text-[14px] font-medium">Book the band</span>
            <span className="text-[11px] font-normal">
              dusk.fm/@greenbriargrove
            </span>
          </span>
          <span className="text-[17px] font-medium" aria-hidden="true">
            ↗
          </span>
        </a>
        <a
          className="gbc-link-outline"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="text-[14px] font-medium text-gbc-ink">
              Instagram
            </span>
            <span className="text-[11px] font-normal text-gbc-warm">
              @greenbriargrove
            </span>
          </span>
          <span className="text-[17px] font-medium" aria-hidden="true">
            ↗
          </span>
        </a>
      </footer>
    </main>
  );
}

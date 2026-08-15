import type { Metadata } from "next";
import Image from "next/image";
import { SampleMenu } from "../components/SampleMenu";

export const metadata: Metadata = {
  title: "Greenbriar Grove — Direction A",
  description: "Field Recording homepage sample for Greenbriar Grove.",
};

const INSTAGRAM = "https://www.instagram.com/greenbriargrove/";

export default function DirectionAPage() {
  return (
    <main className="gbc-shell gbc-font-inter">
      <header className="flex h-[60px] items-center justify-between px-5">
        <Image
          src="/gbc/a/monogram.png"
          alt="Greenbriar Grove"
          width={30}
          height={32}
          className="h-8 w-[30px] object-contain"
          priority
        />
        <SampleMenu sample="a" />
      </header>

      <section className="flex flex-col gap-2.5 px-5 pt-2">
        <div className="relative h-[235px] w-full overflow-hidden">
          <Image
            src="/gbc/a/hero.jpg"
            alt="Greenbriar Grove posed with a vintage car"
            fill
            className="object-cover"
            sizes="430px"
            priority
          />
        </div>
        <p className="text-[9px] tracking-[0.8px] text-gbc-warm">
          [PHOTO CREDIT — from band]
        </p>
      </section>

      <section className="flex flex-col items-center gap-[22px] px-7 pb-11 pt-10">
        <div className="relative h-[206px] w-full">
          <Image
            src="/gbc/a/wordmark.png"
            alt="Greenbriar Grove"
            fill
            className="object-contain"
            sizes="430px"
          />
        </div>
        <p className="gbc-font-fraunces w-full max-w-[300px] text-center text-[15px] leading-[1.5] text-gbc-warm">
          Young and very talented rock cover band from Baton Rouge, Louisiana.
          We enjoy what we do and hope to make everyone have at least half as
          much fun as we do performing. Original music is in the works! Gotta
          keep Rock n Roll alive!
        </p>
        <a className="gbc-cta-ghost" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          Listen
        </a>
      </section>

      <section className="flex flex-col gap-3.5 px-5 pb-10 pt-9">
        <h2 className="gbc-kicker">Live</h2>
        <div className="flex h-[230px] gap-2.5">
          <div className="relative min-w-0 flex-1">
            <Image
              src="/gbc/a/live-vocalist.jpg"
              alt="Vocalist performing live"
              fill
              className="object-cover"
              sizes="210px"
            />
          </div>
          <div className="relative min-w-0 flex-1">
            <Image
              src="/gbc/a/live-guitar.jpg"
              alt="Guitarist performing live"
              fill
              className="object-cover"
              sizes="210px"
            />
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-2.5 bg-gbc-base-warm px-5 pb-10 pt-7">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium tracking-[0.5px] text-gbc-ink"
        >
          @greenbriargrove
        </a>
        <p className="text-[10px] text-gbc-warm">[CONTACT — from band]</p>
      </footer>
    </main>
  );
}

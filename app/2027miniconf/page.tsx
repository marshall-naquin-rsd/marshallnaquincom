"use client";

import { VolunteerForm } from "./VolunteerForm";

const expectCards = [
  {
    title: "Workshops",
    body: "Member-led sessions on the Steps, the Unity Program, pressure relief, and living clean of the bet.",
  },
  {
    title: "GA Meetings",
    body: "Friday night and Saturday night meetings — the heart of the whole weekend.",
  },
  {
    title: "Fun & Games",
    body: "Board games, trivia, talent night, a cookout and whatever else the entertainment committee dreams up.",
  },
  {
    title: "Fellowship & Meals",
    body: "Shared meals, coffee that never runs out, and the conversations that happen in between.",
  },
  {
    title: "Guests Welcome",
    body: "Family and friends are invited. Support group meetings for guests run alongside the GA workshops.",
  },
  {
    title: "Conference T-Shirts",
    body: "A shirt designed just for 2027. Someone has to draw it — maybe you.",
  },
] as const;

const facts = [
  {
    label: "When",
    title: "Friday–Sunday, Fall 2027",
    detail: "Likely October — exact dates to be announced.",
  },
  {
    label: "Where",
    title: "Baton Rouge, Louisiana",
    detail: "Venue is being scouted now.",
  },
  {
    label: "Who",
    title: "All of Area 7 — plus guests",
    detail: "Members, newcomers, family and friends.",
  },
  {
    label: "Right now",
    title: "Building the committee",
    detail: "Registration and pricing open later.",
  },
] as const;

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 24,
      behavior: "smooth",
    });
  }
}

export default function Area7Page() {
  return (
    <main className="mx-auto max-w-[1100px] px-5 pb-[72px] text-[#333333]">
      <section className="flex flex-col items-center gap-[18px] border-b-4 border-[#d4af37] py-14 text-center">
        <div className="area7-heading flex items-center gap-3 text-sm font-bold tracking-[0.22em] text-[#6B92B0] uppercase">
          <span className="block h-0.5 w-7 bg-[#d4af37]" />
          Save the Date
          <span className="block h-0.5 w-7 bg-[#d4af37]" />
        </div>
        <h1 className="area7-heading m-0 text-[clamp(34px,6vw,64px)] leading-[1.02] font-extrabold text-balance">
          2027 Area 7
          <br />
          <span className="text-[#6B92B0]">Mini-Conference</span>
        </h1>
        <p className="area7-heading m-0 text-[clamp(18px,2.4vw,26px)] font-semibold">
          Fall 2027 · Baton Rouge, Louisiana
        </p>
        <p className="m-0 max-w-[640px] text-lg leading-[1.6] text-pretty">
          A weekend of fun, fellowship, workshops and games — hosted in Baton
          Rouge. We are just getting started, and we need your help to build it.
        </p>
        <div className="mt-1.5 flex flex-wrap justify-center gap-3.5">
          <button
            type="button"
            className="area7-btn area7-btn-primary"
            onClick={() => scrollTo("volunteer")}
          >
            COUNT ME IN
          </button>
          <button
            type="button"
            className="area7-btn area7-btn-outline"
            onClick={() => scrollTo("ideas")}
          >
            SHARE AN IDEA
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-[18px] py-9 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-lg bg-[#F7F7F7] p-[22px]">
            <div className="area7-heading mb-2 text-xs font-bold tracking-[0.16em] text-[#6B92B0] uppercase">
              {fact.label}
            </div>
            <div className="text-[19px] leading-[1.35] font-semibold">
              {fact.title}
            </div>
            <div className="mt-1.5 text-[15px] text-[#555]">{fact.detail}</div>
          </div>
        ))}
      </section>

      <section className="px-0 pt-7 pb-2">
        <h2 className="area7-heading mb-2.5 text-center text-[clamp(26px,3.4vw,38px)] font-extrabold text-[#6B92B0]">
          What to expect
        </h2>
        <p className="mx-auto mb-[26px] max-w-[720px] text-center text-[17px] leading-[1.6] text-pretty">
          If you have been to a Mini-Conference before, you know the feeling. If
          you haven&apos;t — this is the weekend where the fellowship gets loud,
          laughs hard, and leaves stronger.
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expectCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-[#e6e6e6] border-t-4 border-t-[#8BB7D1] p-6"
            >
              <h3 className="area7-heading mb-2 text-[21px] font-bold">
                {card.title}
              </h3>
              <p className="m-0 text-base leading-[1.6]">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10 flex flex-wrap items-center justify-between gap-5 rounded-[10px] bg-[#6B92B0] px-8 py-[30px] text-white">
        <div className="min-w-[min(100%,320px)] flex-1">
          <h2 className="area7-heading mb-2 text-[clamp(23px,2.8vw,30px)] font-extrabold text-white">
            Area 7 Business Meeting — Saturday morning
          </h2>
          <p className="m-0 max-w-[640px] text-[17px] leading-[1.6] text-pretty text-white">
            The Area 7 Business Meeting will be held Saturday morning during the
            conference. Coming just for the business meeting? Saturday morning
            is all you need — day passes will be available.
          </p>
        </div>
      </section>

      <section id="volunteer" className="px-0 pt-5 pb-2">
        <h2 className="area7-heading mb-2.5 text-[clamp(26px,3.4vw,38px)] font-extrabold text-[#6B92B0]">
          We need you on the committee
        </h2>
        <p className="mb-[26px] max-w-[720px] text-[17px] leading-[1.6] text-pretty">
          A Mini-Conference is built by volunteers, one job at a time. Tell us
          where you&apos;d like to pitch in and the host committee will reach out.
          No experience required — willingness is the only qualification.
        </p>
        <VolunteerForm />
      </section>

      <section className="grid grid-cols-1 gap-[22px] pt-11 lg:grid-cols-2">
        <div className="rounded-[10px] border-2 border-[#d4af37] p-[26px]">
          <h2 className="area7-heading mb-2.5 text-2xl font-extrabold text-[#333333]">
            Sponsor a newcomer
          </h2>
          <p className="mb-4 text-base leading-[1.6] text-pretty">
            Cost should never keep a member away. Contributions to the
            scholarship fund cover registration and meals for someone new to the
            fellowship — or someone whose finances are still healing.
          </p>
          <p className="m-0 text-base leading-[1.6]">
            Want to give, or need a scholarship yourself? Reach out to the host
            committee. Every conversation is confidential.
          </p>
        </div>
        <div className="rounded-[10px] bg-[#F7F7F7] p-[26px]">
          <h2 className="area7-heading mb-2.5 text-2xl font-extrabold text-[#333333]">
            Questions? Call us.
          </h2>
          <div className="flex flex-col gap-3 text-[17px]">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">David H.</span>
              <a href="tel:2259531705" className="font-semibold">
                225-953-1705
              </a>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">Marshall N.</span>
              <a href="tel:3378898123" className="font-semibold">
                337-889-8123
              </a>
            </div>
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-bold">Email</span>
              <a
                href="mailto:batonrougega@gmail.com"
                className="font-semibold break-all"
              >
                batonrougega@gmail.com
              </a>
            </div>
          </div>
          <p className="mt-[18px] text-[15px] leading-[1.6] text-[#555]">
            Dates, venue, packages and pricing will be posted here as soon as
            they&apos;re set.
          </p>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Quick Reference",
};

function PhoneLink({ number, display }: { number: string; display: string }) {
  return (
    <a
      href={`tel:${number}`}
      className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
    >
      {display}
    </a>
  );
}

export default function QuickRefPage() {
  return (
    <GuidePage path="/PEPGuide/quickref" title="Quick Reference">
      <div className="pep-prose">
        {/* ── Important numbers ── */}
        <h2>Numbers worth having in your phone</h2>
        <p>Program yourself the important lines before you need them:</p>

        <ul className="card-list">
          {[
            { label: "PEP Main Number", display: "601-288-4772", number: "6012884772" },
            { label: "The Lakes Apartment Office", display: "601-599-5253", number: "6015995253" },
            {
              label: "Apartment After-hours Courtesy Officer",
              display: "601-264-4622",
              number: "6012644622",
            },
            { label: "PEP On-Call Staff Member", display: "601-709-8333", number: "6017098333" },
            {
              label: "FGH Family Medicine Residency Clinic",
              display: "601-288-5200",
              number: "6012885200",
            },
          ].map(({ label, display, number }) => (
            <li
              key={number}
              className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm text-muted-foreground">{label}</span>
              <PhoneLink number={number} display={display} />
            </li>
          ))}
        </ul>

        <p>
          For an emergency, call{" "}
          <PhoneLink number="911" display="911" />
          . If you&apos;re calling from a hospital phone, you have to dial{" "}
          <PhoneLink number="9911" display="9-911" />{" "}
          to get an outside line first. The FGH Public Safety (security) office can be reached
          at <PhoneLink number="6012884345" display="601-288-4345" />.
        </p>

        {/* ── Where you'll be living ── */}
        <h2>Where you&apos;ll be living</h2>
        <p>The apartments are at:</p>

        <div className="info-panel">
          <p className="font-semibold text-foreground">The Lakes at Turtle Creek</p>
          <p className="text-muted-foreground">155 Cross Creek Parkway</p>
          <p className="text-muted-foreground">Hattiesburg, MS 39402</p>
        </div>

        <p>You&apos;ll need two codes to get around:</p>

        <ul className="card-list font-mono">
          <li className="flex items-center justify-between px-4 py-3">
            <span className="font-sans text-sm text-muted-foreground">Gate code</span>
            <span className="font-semibold tracking-widest">#1551</span>
          </li>
          <li className="flex items-center justify-between px-4 py-3">
            <span className="font-sans text-sm text-muted-foreground">Pool code</span>
            <span className="font-semibold tracking-widest">4772#</span>
          </li>
        </ul>

        <p className="text-sm text-muted-foreground">
          This page pulls together the practical stuff you&apos;ll want at your fingertips in
          the first few days. Your binder is still the authority — if anything here conflicts
          with what the program hands you, or if a number or code has changed since this was
          written, the binder wins. Treat this as a convenience, not the source of truth.
        </p>

        {/* ── Black ink ── */}
        <h2>One small thing that matters more than you&apos;d think: black ink only</h2>
        <p>
          When you fill out forms and treatment plans, use black ink only. It sounds trivial,
          and it&apos;s easy to forget when you&apos;re borrowing whatever pen is nearby —
          but they mean it, and it saves you redoing paperwork. Keep a black pen on you.
        </p>

        {/* ── Medications ── */}
        <h2>Medications when you come in</h2>
        <p>
          Here&apos;s one that catches people off guard: even over-the-counter medications and
          supplements have to be approved before you can keep them. Anything OTC — including
          vitamins and supplements — has to be approved by Dr. Richardson. Once it&apos;s
          approved, you take it to PEP staff so they can put a label on it, and then it comes
          back to you. So don&apos;t just tuck your usual bottle of ibuprofen or your protein
          powder into your bag assuming it&apos;s fine — run it through the process first.
        </p>

        {/* ── Mail ── */}
        <h2>Mail</h2>
        <p>
          All of your mail comes to PEP, and it&apos;s opened in front of a staff member —
          that&apos;s the routine for everyone, so it&apos;s nothing to take personally. Have
          people send it addressed like this:
        </p>

        <div className="info-panel">
          <p className="font-semibold text-foreground">Professional Enhancement Program</p>
          <p className="text-muted-foreground">Attn: [Your First Name, Last Initial]</p>
          <p className="text-muted-foreground">2117 Broadway Drive</p>
          <p className="text-muted-foreground">Hattiesburg, MS 39402</p>
        </div>

        <p>
          Give that address to whoever might write you before you come in, so nothing gets
          sent to the wrong place while you&apos;re settling.
        </p>
      </div>
    </GuidePage>
  );
}

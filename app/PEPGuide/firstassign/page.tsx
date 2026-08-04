import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "First Assignments",
};

export default function FirstAssignPage() {
  return (
    <GuidePage path="/PEPGuide/firstassign" title="First Assignments">
      <div className="pep-prose">
        <p>
          You&apos;ll get a lot of assignments while you&apos;re here. Let me say this up
          front, because it saved me some grief: this isn&apos;t a race, and nobody hands out
          prizes for finishing the most, or finishing the fastest. Some of your assignments
          won&apos;t be done by the time you leave, and that&apos;s alright — that&apos;s how
          it&apos;s meant to work. As always, the binder and your staff are the authority
          here; I&apos;m just walking you through what the first stretch tends to look like.
        </p>
        <p>
          There&apos;s a section in your treatment plan for writing down each assignment as
          it&apos;s given to you. You may not have your treatment plan yet when the
          assignments start coming, so for now, just be ready to jot each one down somewhere
          — a notebook, whatever you&apos;ve got — until you can transfer it over.
        </p>

        <h2>Your first assignment: the paperwork</h2>
        <p>
          Complete and turn in any paperwork you were handed when you arrived. Fill it out
          completely, and get it back to staff. Simple as that — but &ldquo;completely&rdquo;
          is the part people rush. Take the few extra minutes so you&apos;re not redoing it.
        </p>

        <h2>Your second assignment: get into the binder</h2>
        <p>
          Browse through the different sections of the binder so you know what&apos;s in it
          and where to find things, and read the Community Guidelines section all the way
          through. That one you read completely — don&apos;t skim it.
        </p>
        <p>
          The highpoints of the community guidelines are covered here on this companion site,
          so you can use those as a running start. But the highlights are just that —
          highlights. They don&apos;t replace reading the section in the binder for yourself.
        </p>

        <h2>Your third assignment: the self-assessments</h2>
        <p>
          There&apos;s a section of self-assessments in the binder. Take your time with
          these; they aren&apos;t something to power through.
        </p>
        <p>
          Work them in passes. Start with the assessments that definitely apply to you. Then
          go back through and do the ones that may apply to you. Whatever&apos;s left over,
          do those last — and don&apos;t write them off just because they don&apos;t seem to
          fit. You might be surprised by some of them.
        </p>
      </div>
    </GuidePage>
  );
}

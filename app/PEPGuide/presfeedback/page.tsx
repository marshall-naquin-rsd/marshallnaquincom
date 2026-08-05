import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Presentations & Feedback",
};

/** Which assignments are pointed at which group. `null` means no standard one to name. */
const groupAssignments: { group: string; assignments: string | null }[] = [
  { group: "Spirituality", assignments: "Spiritual River" },
  {
    group: "Vocational",
    assignments:
      "Vocational Timeline; Boundary Violations Index; work and future-employment journals",
  },
  {
    group: "Family Systems",
    assignments: "Genogram; journals about family of origin and growing up",
  },
  { group: "Values", assignments: null },
  { group: "Personality", assignments: "Personality Trait Schemas (from your binder)" },
  {
    group: "Addictions and Compulsions (AC)",
    assignments:
      "Chemical Timelines; Step Work (Steps 1, 2, 3); Addictive Cycle; journals",
  },
  { group: "Sexual Issues (SI)", assignments: null },
  { group: "Professional Sexual Misconduct (PSM)", assignments: null },
  { group: "Clergy", assignments: null },
  {
    group: "Group Psychotherapy (“Group Psych”)",
    assignments: "Catch-all for assignments not tied to another group",
  },
  { group: "Men's / Women's", assignments: "Assignments specific to gender roles" },
  {
    group: "Relapse Prevention",
    assignments: "Relapse Prevention Plan; Addiction/Relapse Cycle",
  },
];

export default function PresFeedbackPage() {
  return (
    <GuidePage path="/PEPGuide/presfeedback" title="Presentations & Feedback">
      <div className="pep-prose">
        <p>
          A lot of your written work doesn&apos;t stay on the page — you present it out loud in
          a group, and your peers respond. This covers how presenting works, what&apos;s
          expected of you both when you give feedback and when you receive it, and which group
          each assignment goes to. Tips and highlights only — your binder and treatment team
          are the authority.
        </p>

        <h2>What presenting looks like</h2>
        <p>
          A group starts and the therapist asks who&apos;s ready. The catch nobody spells out
          on day one: you have to speak up to get presented.
        </p>

        <ul className="pep-list">
          <li>
            <strong>Claim your slot.</strong>{" "}
            Say you&apos;re ready — and if the assignment&apos;s been ready a while, say so
            specifically. The vocal peers present more; the passive ones fall behind.
          </li>
          <li>
            <strong>The clock: 7.5 minutes to present, 7.5 for peer feedback.</strong>{" "}
            It goes fast.
          </li>
          <li>
            <strong>Read it or speak from it depends on the assignment.</strong>{" "}
            Some are read as written; some you talk through.
          </li>
        </ul>

        <p>First-timer mistakes worth skipping:</p>

        <ul className="pep-list">
          <li>
            <strong>Losing the clock</strong>{" "}
            — running over and never reaching what mattered.
          </li>
          <li>
            <strong>Too much detail</strong>{" "}
            — burying the gist your peers needed.
          </li>
          <li>
            <strong>Responding to feedback</strong>{" "}
            — the second half isn&apos;t yours to talk in (see below).
          </li>
        </ul>

        <h2>Giving feedback: &ldquo;when you said this, I felt&hellip;&rdquo;</h2>
        <p>
          Most of the time you&apos;re not presenting — you&apos;re one of the peers giving
          feedback. Your job in that second 7.5 minutes is to tell the presenter how what they
          shared landed on you.
        </p>

        <ul className="pep-list">
          <li>
            <strong>The core move:</strong>{" "}
            &ldquo;When you said this, I felt&hellip;&rdquo; — happy, sad, glad, mad. Your
            genuine reaction, not a critique, not advice, not a fix.
          </li>
          <li>
            <strong>Different from treatment-planning feedback.</strong>{" "}
            Short version: treatment-planning feedback is about what you{" "}
            <em>saw them do</em> during the week (tied to a plan criterion); presentation
            feedback is about what you <em>heard them say</em> in the room.
          </li>
          <li>
            <strong>The two do touch.</strong>{" "}
            A behavior or trait that shows up <em>during</em> a group can still feed treatment
            planning later.
          </li>
          <li>
            <strong>This is your work when it isn&apos;t your turn.</strong>{" "}
            The 7.5/7.5 split is how group therapy runs for everyone. Don&apos;t present,
            don&apos;t listen, don&apos;t give feedback — and you&apos;ve wasted an hour of
            programming.
          </li>
        </ul>

        <h2>Receiving feedback: this is where you learn</h2>
        <p>When feedback turns to you, the job flips: you listen. That&apos;s it.</p>

        <ul className="pep-list">
          <li>
            <strong>You said what you said.</strong>{" "}
            No more information is required — you don&apos;t need to explain, defend, or
            correct anyone&apos;s read.
          </li>
          <li>
            <strong>
              This is where you learn how your thoughts and actions land on others
            </strong>{" "}
            — the thing you can&apos;t see from the inside, and the whole point of the
            exercise.
          </li>
          <li>
            <strong>No note-taking</strong>{" "}
            during a presentation or feedback, yours or anyone&apos;s. Be present instead.
          </li>
          <li>
            <strong>A brief &ldquo;thank you&rdquo; at the end is fine.</strong>{" "}
            No speech needed.
          </li>
          <li>
            <strong>Struggling to just listen?</strong>{" "}
            There&apos;s a book — <em>Thanks for the Feedback</em>{" "}
            — you may be assigned to read. Not a punishment; a real tool for the exact reflex
            you&apos;ll be fighting.
          </li>
        </ul>

        <h2>The groups, and what shows up in each</h2>
        <p>
          Most assignments are pointed at one of these groups. A handful are fairly standard
          (named below); plenty of others get assigned for your specific situation, so this
          isn&apos;t the full list. Where it says <em>varies</em>, that means I&apos;m not
          naming a standard one — check your binder.
        </p>

        <ul className="card-list">
          {groupAssignments.map(({ group, assignments }) => (
            <li key={group} className="flex flex-col gap-0.5 px-4 py-3">
              <span className="font-semibold text-foreground">{group}</span>
              {assignments ? (
                <span className="text-sm text-muted-foreground">{assignments}</span>
              ) : (
                <span className="text-sm italic text-muted-foreground">
                  varies — check your binder
                </span>
              )}
            </li>
          ))}
        </ul>

        <p>Unsure where an assignment goes? Ask — don&apos;t guess.</p>
      </div>
    </GuidePage>
  );
}

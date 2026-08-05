import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "More About Treatment Planning",
};

export default function RxPlanMorePage() {
  return (
    <GuidePage
      path="/PEPGuide/rxplan/rxplanmore"
      title="More About Treatment Planning"
    >
      <div className="pep-prose">
        <p>
          Once you&apos;ve met with the peer mentor and you understand the basics, this is
          where treatment planning really starts to work on you. I&apos;ll be honest: this was
          the part of the program I underestimated the most going in, and the part that did
          the most for me in the end. As always, the binder and your staff are the authority
          on how any of this is actually scored; what follows is my read on how to get the
          most out of it.
        </p>

        <h2>A mirror held by more than one set of hands</h2>
        <p>
          The plan runs on what you could fairly call a{" "}
          <strong>360-degree evaluation</strong>. Three sources weigh in on the same plan:
        </p>
        <ul className="pep-list">
          <li>
            <strong>You</strong>, assessing yourself.
          </li>
          <li>
            <strong>Your peers</strong>, who&apos;ve been living and programming alongside
            you.
          </li>
          <li>
            <strong>The treatment team</strong>, watching with clinical eyes.
          </li>
        </ul>
        <p>
          In practice, you&apos;ll put pluses and minuses on your plan based on things
          you&apos;ve seen in yourself — either from your life before treatment or from the
          week since the last treatment planning session. Then your peers take that
          information and hold up a mirror for you to look into. They&apos;ll point to places
          on your plan where they saw a behavior show up — sometimes one you&apos;d already
          caught in yourself, and sometimes one you completely missed. The treatment team does
          this too. Three angles on the same person, which is exactly the point: the things we
          can&apos;t see in ourselves are usually the things someone else can.
        </p>

        <h2>What&apos;s actually on the plan</h2>
        <p>
          Without reproducing the program&apos;s own forms, here&apos;s the shape of what
          you&apos;ll be working with, so the scoring makes sense.
        </p>
        <p>
          The plan is organized around a handful of <strong>overall goals</strong> — the big
          problem areas identified for you, each with its own page or set of pages. Under each
          goal is a list of <strong>specific criteria</strong>: individual behaviors or
          symptoms, each with its own number. Those numbers matter, because they&apos;re how
          feedback gets logged. When a behavior comes up, it gets tied back to the criterion
          number (or numbers) it fits.
        </p>
        <p>
          For each goal, the plan also tracks a few kinds of <strong>ratings</strong>, and
          each of the three sources — self, peer, treatment team — has its own line:
        </p>
        <ul className="pep-list">
          <li>
            <strong>Severity</strong> — how strongly a given problem is showing up right now,
            on a scale that runs from no symptoms at all up through mild, moderate, severe,
            and most-severe.
          </li>
          <li>
            <strong>Risk of relapse</strong> — for the relevant goals, a read on how much
            danger there is in the near term (and what the risk would be if you were dropped
            back into your old environment).
          </li>
          <li>
            <strong>Commitment and confidence</strong> — how committed you are to a goal and
            how much confidence you have in your ability to reach it.
          </li>
        </ul>
        <p>
          Two things to understand about those ratings. First, they move in{" "}
          <strong>quarter-point increments</strong>{" "}— you&apos;re not stuck with whole
          numbers, and a quarter point is a real, usable amount of movement. Second, and
          I&apos;ll come back to this below, they don&apos;t lurch around week to week.
        </p>

        <h2>Feedback: specific, for a specific peer</h2>
        <p>
          Here&apos;s the single biggest lever you have on getting value out of the Sunday
          sessions with your peers:{" "}
          <strong>show up with specific feedback for specific people.</strong>
        </p>
        <p>
          Let me make that concrete, because &ldquo;specific&rdquo; is doing a lot of work in
          that sentence. Specific looks like:
        </p>
        <div className="info-panel">
          <p className="italic text-foreground">
            &ldquo;Peer X left a dirty dish in the sink this morning and expected someone else
            to wash it.&rdquo;
          </p>
        </div>
        <div className="info-panel">
          <p className="italic text-foreground">
            &ldquo;On the car ride to programming, Peer Y said he really wished he could have
            a drink.&rdquo;
          </p>
        </div>
        <p>
          Specific does <em>not</em>{" "}look like &ldquo;Peer X is always doing this&rdquo; or
          &ldquo;I think Peer Y is probably still preoccupied with that.&rdquo; Drop the{" "}
          <em>always</em>. Drop the <em>I think he&apos;s probably</em>. One observed moment —
          a thing that was actually said or actually done, this week, that you actually
          witnessed — is worth more than a paragraph of generalization. Write it down on paper
          when you see it so you&apos;re not reconstructing it from memory come Sunday.
        </p>
        <p>
          Then find the section, or sections, of the treatment plan that the behavior fits,
          and note the number. A single behavior may land under more than one criterion —
          that&apos;s normal, so tag all of them that apply.
        </p>
        <p>
          A few things this is <strong>not</strong>:
        </p>
        <ul className="pep-list">
          <li>
            <strong>It&apos;s not the place to play therapist.</strong>{" "}Take the observed
            behavior, write it down, find the criterion it maps to. That&apos;s your job. You
            do <em>not</em>{" "}need to offer a recommendation, an alternative, or a diagnosis,
            and you shouldn&apos;t — that&apos;s what the treatment team is there for.
          </li>
          <li>
            <strong>It&apos;s not the place to pile on affirmations.</strong>{" "}Encouragement is
            good and it has its place, but this activity runs on limited time. Save the praise
            for one-on-one; don&apos;t spend the group&apos;s minutes on it.
          </li>
        </ul>

        <h2>What this looks like your first few weeks</h2>
        <p>
          Because I got a question like this from the person I&apos;m writing this for, let me
          lay out the honest arc of how newcomers tend to move through this — it&apos;s not
          the same at week one as it is a month in.
        </p>
        <p>
          <strong>At your first session,</strong>{" "}you&apos;ll probably mostly sit and listen,
          and that&apos;s completely fine. Nobody expects you to arrive with a notebook full
          of sharp observations about people you&apos;ve known for a few days. Take it in.
          Watch how it&apos;s done.
        </p>
        <p>
          <strong>In the weeks after,</strong>{" "}two habits tend to creep in, and they&apos;re
          worth catching in yourself early:
        </p>
        <ul className="pep-list">
          <li>
            <strong>Vague feedback.</strong>{" "}The &ldquo;always,&rdquo; the &ldquo;he seems
            like,&rdquo; the general impression. Push yourself back toward the one specific,
            observed moment every time.
          </li>
          <li>
            <strong>Over-affirming</strong>{" "}— especially if you&apos;re the sort of person who
            tends to rescue or smooth things over. If you notice you&apos;re reaching for
            reassurance to soften every point, that&apos;s a pattern worth naming, and
            it&apos;s often part of your own work.
          </li>
        </ul>
        <p>
          <strong>Playing therapist</strong>{" "}usually shows up later, once you&apos;ve been
          around long enough to feel like you know the terrain. When you catch yourself
          starting to prescribe instead of observe, that&apos;s your cue to hand it back to
          the team.
        </p>

        <h2>A note on the numbers</h2>
        <p>
          Don&apos;t get hung up on the scores. Use the quarter points, and expect movement to
          be <em>small</em>. In general, ratings don&apos;t shift by more than about a quarter
          point from one week to the next. Unless there&apos;s been a genuine breakthrough or
          a real relapse in behavior during the week, it&apos;s unlikely that a peer&apos;s
          personality-trait severity honestly went from, say, 3.75 one week to 2.5 the next.
          When you see a swing that big proposed, it&apos;s usually a sign that someone&apos;s
          reacting to a mood or a single incident rather than to a real, sustained change.
          Steady and honest beats dramatic.
        </p>

        <h2>The plan works on you, too</h2>
        <p>
          One last thing, and it&apos;s the part that surprised me most. This process
          isn&apos;t only a chance to observe your peers — it&apos;s a live chance to work on
          your <em>own</em> traits, in real time, in the room.
        </p>
        <p>
          Watch what you do during the session itself. The peers who are used to being in
          charge will want to run it. The peers who habitually go along to get along will be
          content to sit back and agree with whatever&apos;s already been said. Both of those
          are <em>behaviors</em>{" "}— the same kind of behaviors the plan is trying to surface —
          and the treatment planning session is one of the best places to catch yourself in
          the act. So resist the pull of your default. If you&apos;re the take-charge type,
          make room. If you&apos;re the go-along type, say the thing you actually saw even
          when it&apos;s easier to nod. Don&apos;t get lost in the details, and do help your
          peers see the specific moments — the things they said or did this week — that keep
          quietly putting distance between them and everyone else.
        </p>
        <p>
          That&apos;s what the whole apparatus is for. Not zeros on a page. People seeing
          themselves clearly, and helping each other do the same.
        </p>
      </div>
    </GuidePage>
  );
}

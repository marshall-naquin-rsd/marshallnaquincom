import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Treatment Planning",
};

export default function RxPlanPage() {
  return (
    <GuidePage
      path="/PEPGuide/rxplan"
      title="An Introduction to Treatment Planning"
    >
      <div className="pep-prose">
        <p>
          If there&apos;s one document that ends up sitting at the center of your whole time
          here, it&apos;s your treatment plan. I want to introduce it to you gently, because
          the first time I saw mine I had two reactions at once — <em>this is a lot</em> and{" "}
          <em>I have no idea what I&apos;m supposed to do with this.</em> Both were normal.
          Let me walk you through what it is and, just as important, what not to do with it
          yet. As always, the binder and your treatment staff are the real authority;
          I&apos;m just giving you a running start.
        </p>

        <h2>When it shows up, and the first thing to do</h2>
        <p>
          You&apos;ll usually get your treatment plan before your first weekend here. When it
          lands in your hands, your instinct may be to sit down and start filling it out.
          Don&apos;t. That&apos;s the single most important thing I can tell you in this
          section: <strong>do not start filling it out.</strong>
        </p>
        <p>
          What you <em>should</em> do is start leafing through it. Turn the pages, look at how
          it&apos;s laid out, get a feel for the different sections and the kind of
          information it&apos;s asking for. You&apos;re familiarizing yourself, not working
          it. Think of this first pass the way you&apos;d walk through a new house before you
          move any furniture in — you&apos;re just learning where the rooms are.
        </p>

        <h2>Wait for the peer mentor</h2>
        <p>
          The reason to hold off is that this process is meant to be taught to you, not
          figured out alone. The <strong>peer mentor</strong> — one of your peers who&apos;s
          been elected to a program council position — will sit down with you and the other
          newcomers to go over the plan and the process of using it. That walkthrough is where
          it starts to make sense. It&apos;s a lot easier to leaf through the plan knowing
          that explanation is coming than to wrestle it into submission by yourself the first
          night.
        </p>
        <p>
          You <em>can</em> also approach your sunshine or another experienced member if
          something is nagging at you and you want a little orientation in the meantime.
          That&apos;s fine. But if I were doing it over, I&apos;d wait for the peer mentor
          before beginning any actual work on the plan. Let the person whose job it is to
          teach it teach it to you first.
        </p>

        <h2>What it&apos;s building toward</h2>
        <p>
          Here&apos;s the mindset I wish I&apos;d had walking in, because it takes the
          pressure off.
        </p>
        <p>
          The plan is going to track certain scores over your time here — you&apos;ll see
          them, and it&apos;s natural to fixate on the numbers. Resist that.{" "}
          <strong>The goal is not to get your scores down to zero before you go home.</strong>{" "}
          It isn&apos;t to have every box marked in your favor by discharge either. As they
          say around here, in recovery we seek <strong>progress, not perfection.</strong>
        </p>
        <p>
          What the plan is really for is getting our behavior <em>out of hiding</em>. The
          whole aim is that if you thought or acted in some old, maladaptive way, you now{" "}
          <em>know</em> it — you can see it and name it in yourself. That&apos;s the win. A
          plan that surfaces a hard truth about you is doing exactly what it&apos;s supposed
          to do, even when the number next to it isn&apos;t the one you&apos;d have picked.
          Once you stop treating it as a scorecard to beat and start treating it as a mirror
          to read, the whole thing gets a lot less intimidating.
        </p>
        <p>
          So: get the plan, leaf through it, wait for the peer mentor, and hold onto{" "}
          <em>progress, not perfection.</em> That&apos;s the entire first step. The deeper
          mechanics — how the scoring works, how peer feedback happens, and how the whole
          community weighs in — I&apos;ve laid out in the next section.
        </p>
      </div>
    </GuidePage>
  );
}

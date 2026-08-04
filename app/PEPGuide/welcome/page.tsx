import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Welcome",
};

export default function WelcomePage() {
  return (
    <GuidePage
      path="/PEPGuide/welcome"
      title="Welcome"
      subtitle="From former peer M"
    >
      <div className="pep-prose">
        <p>
          Greetings. You can refer to me as former peer M. I began my treatment at PEP in 2018,
          and I&apos;ve been back various times over the years — for both checkups (called{" "}
          <em>rechecks</em> here) and relapses of sorts. I&apos;ve created this guide as a
          companion, not a replacement for the programming binder. We&apos;ll refer back to the
          binder often across the various sections; think of this companion as tips, if you will,
          on how to get the most out of your time here.
        </p>
        <p>
          First and foremost: review the binder. It has all the information you need to be
          successful. What I&apos;ll do here is point out some of the highlights and give you
          tangible, real-world examples that helped me. And once you&apos;ve settled in, speak
          to your needs, speak to the treatment staff, and listen to the peers who have already
          been here a while. You will get as much out of this program as you are willing to
          receive.
        </p>

        <h2>What to hold onto going in</h2>
        <p>
          Entering treatment is hard, and it may be one of the most important things you ever
          do. Maybe you&apos;re here because you chose to be; maybe it feels like the choice was
          made for you. Either way, it helped me to treat it as an opportunity I&apos;d been
          handed rather than a sentence I&apos;d been given — a door held open, not a door
          slammed shut. The whole thing rests on one demanding idea: the capacity to change your
          life is already in you. The staff won&apos;t do the work to you or for you.
          They&apos;ll do it with you. But the change itself has to come from you.
        </p>

        <h2>The values and culture you&apos;re stepping into</h2>
        <p>
          The program runs on a handful of values, and you&apos;ll feel them from your first
          day. It asks you to communicate openly, honestly, and directly — even when that&apos;s
          the last thing you want to do. It asks you to take responsibility for your own choices,
          to hold yourself accountable and be willing to hold your peers accountable too, to
          treat yourself and everyone around you with respect, and to include everyone rather
          than leave anyone on the outside.
        </p>
        <p>
          The culture is built to support that. Expect structure and consistency in how the days
          run, clear boundaries that everyone is held to, honest confrontation of the
          interpersonal patterns that quietly do people harm, and a setting that protects your
          safety — physical and psychological alike.
        </p>
        <p>
          None of that is window dressing; it is the actual machinery of how people get better
          here. It can feel uncomfortable at the start, because real change usually does. That
          discomfort is not a sign that something is wrong — it is often the sign that the work
          is finally happening. You are not alone in it. I&apos;m glad you&apos;re here.
        </p>
      </div>
    </GuidePage>
  );
}

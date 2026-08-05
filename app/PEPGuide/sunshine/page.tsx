import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Sunshine / Shadow Contract",
};

export default function SunshinePage() {
  return (
    <GuidePage
      path="/PEPGuide/sunshine"
      title="The Sunshine and Shadow Pairing"
    >
      <div className="pep-prose">
        <p>
          If you&apos;re anything like I was, the first time someone explains the sunshine and
          shadow setup, part of you bristles.{" "}
          <em>
            I&apos;m a grown adult. I don&apos;t need a chaperone. I don&apos;t have to ask
            permission to walk to my own car.
          </em>{" "}
          I get it — I thought the same thing. So let me tell you why it exists and why it
          turned out to matter more than I expected. As always, the binder is the authority
          here; this is just me walking you through what it means in practice.
        </p>

        <h2>What it actually is</h2>
        <p>
          When you come into the program, you&apos;ll be paired with a senior member of the
          community. In our language, they&apos;re your <em>sunshine</em>, and you&apos;re
          their <em>shadow</em>. The idea is simple: in these first days, you stay with that
          person. You&apos;re not meant to be on your own.
        </p>
        <p>
          Your sunshine can pull in other senior members to help cover you when they
          can&apos;t be there — that&apos;s normal and expected. The only rule around it is
          that everyone stays in clear communication about who has you and when, so
          there&apos;s never a gap where nobody&apos;s sure. As long as that hand-off is
          clean, you&apos;re covered.
        </p>
        <p>
          Later, once you&apos;ve earned some time &ldquo;off shadow,&rdquo; the expectation
          shifts but doesn&apos;t disappear. Even then, you let your peers know where
          you&apos;re going and when you&apos;ll be back — &ldquo;running an errand, back in
          thirty&rdquo; — so the community always knows where you are. You should never be
          away without another peer knowing.
        </p>

        <h2>Why it isn&apos;t as silly as it sounds</h2>
        <p>
          Here&apos;s the part I want to be straight with you about, because nobody softened
          it for me and I&apos;m glad they didn&apos;t.
        </p>
        <p>
          Everyone who walks in here is somewhere different in their recovery and their life,
          and coming into a program like this is a shock to the system. The stress hits hard,
          the emotional work is heavy, and it comes fast. When that happens, the pull toward
          old comforts — a substance, a situation, whatever your version is — gets loud. Being
          alone is when that pull is most dangerous.
        </p>
        <p>
          That&apos;s really what the pairing is protecting. Not your dignity, not your
          competence — your first vulnerable stretch, when a few unsupervised minutes can undo
          real progress.
        </p>
        <p>
          So in that first week or two especially, the point is that you&apos;re never outside
          the program on your own. And I mean never in the small ways, not just the obvious
          ones. Walking from the apartment to the car. &ldquo;Just running out&rdquo; to grab
          something you forgot. A quick trip to the gas station. Any time you step outside the
          programming location, you&apos;re with your sunshine or with someone else who has
          you. Your sunshine should always know where you are.
        </p>

        <h2>Whose job it is</h2>
        <p>
          This part is worth holding onto, because it cuts both ways.
        </p>
        <p>
          It is <em>always</em>{" "}your responsibility, as the shadow, to make sure you&apos;re
          with someone. That one&apos;s on you — not on anyone tracking you down. If you
          can&apos;t find your sunshine, you find another peer. You don&apos;t just head out.
        </p>
        <p>
          And it&apos;s your sunshine&apos;s responsibility to help — either to get you where
          you need to be, or to help you find someone who can. Nobody&apos;s there to trap you
          or make your life harder. The whole thing works when both people take their half of
          it seriously.
        </p>
        <p>
          I&apos;ll tell you what I&apos;ve watched happen over and over: almost every early
          slip and almost every early rule violation traces back to someone being somewhere
          alone that they shouldn&apos;t have been. And almost all of it could have been
          avoided by sticking to this one guideline. It really is that simple, and that
          important.
        </p>
      </div>
    </GuidePage>
  );
}

import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "PEP GroupMe",
};

export default function GroupMePage() {
  const joinUrl = process.env.NEXT_PUBLIC_PEP_GROUPME_URL;

  return (
    <GuidePage path="/PEPGuide/groupme" title="PEP GroupMe">
      <div className="pep-prose">
        <h2>The peer group chat</h2>
        <p>
          PEP uses GroupMe for the peer group chat. GroupMe works like a group
          text thread but lives in a free app, which makes it easy to add new
          peers when they arrive and remove members who have left the program
          &mdash; without everyone having to re-introduce themselves every time.
        </p>
        <p>
          You don&apos;t need a GroupMe account to join, but creating one with
          your real first name helps everyone know who they&apos;re talking to.
          The chat is peers only, so please don&apos;t forward the join link
          outside the program.
        </p>

        <h2>Joining</h2>
        <p>
          Tap the button below. You&apos;ll be prompted to open or download
          GroupMe, then your request goes to a peer admin for approval &mdash;
          you won&apos;t be inside the group until someone confirms you. If you
          get an error or the link has expired, ask the peer mentor or a current
          peer for an updated one.
        </p>

        {joinUrl ? (
          <a
            href={joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary self-start"
          >
            Join the PEP GroupMe &rarr;
          </a>
        ) : (
          <div className="info-panel">
            The join link isn&apos;t available right now. Ask the peer mentor or
            a current peer for the GroupMe invite.
          </div>
        )}

        <h2>A few norms</h2>
        <ul className="pep-list">
          <li>Use your real first name so people know who you are.</li>
          <li>
            Don&apos;t share the join link outside PEP &mdash; membership is
            limited to active peers.
          </li>
          <li>
            The chat is casual but it&apos;s still a program space. Keep it
            consistent with the culture you&apos;d bring to any group setting
            here.
          </li>
          <li>
            If you leave the program, a peer admin will remove you. No hard
            feelings &mdash; it&apos;s just how the list stays current.
          </li>
        </ul>
      </div>
    </GuidePage>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/pepguide/GuidePage";
import FaqAccordion, { type FaqGroup } from "@/components/pepguide/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqGroups: FaqGroup[] = [
  {
    title: "Your first days",
    items: [
      {
        question: "Do I need to fill out my treatment plan as soon as I get it?",
        answer: (
          <p>
            No — and please don&apos;t. When it lands in your hands, leaf through it to see
            how it&apos;s laid out, then wait for the peer mentor to walk you and the other
            newcomers through it. The process is meant to be taught to you, not decoded alone
            on your first night.{" "}
            <Link href="/PEPGuide/rxplan">More in Treatment Planning</Link>.
          </p>
        ),
      },
      {
        question: "Can I run to the store by myself?",
        answer: (
          <p>
            Not in your first stretch here. You&apos;ll be paired with a senior member — your
            sunshine — and any time you step outside the programming location, you&apos;re
            with them or with another peer covering for them. That includes the small trips:
            walking to your car, running back for something you forgot, a quick stop for gas.
            It is your responsibility, not anyone else&apos;s, to make sure someone is with
            you. <Link href="/PEPGuide/sunshine">More in Sunshine / Shadow Contract</Link>.
          </p>
        ),
      },
    ],
  },
  {
    title: "Cars and driving",
    items: [
      {
        question: "Can I bring my car, and will I be able to drive it?",
        answer: (
          <p>
            You can bring it, but expect it to be searched at admission and randomly after
            that. Early on you may be asked to hand over your keys or simply not to drive for
            a while, and you have to keep a valid license and full insurance the whole time.
            Also worth knowing: getting your keys back is not the same as coming off shadow.{" "}
            <Link href="/PEPGuide/cars">More in Personal Vehicles</Link>.
          </p>
        ),
      },
      {
        question: "Can peers from other Pine Grove programs ride with me?",
        answer: (
          <p>
            No. Passengers are limited to PEP peers specifically — not outside friends or
            family, and not peers from other Pine Grove programs, even ones you came in with
            and still care about. And a male peer and a female peer never ride as just the
            two of them; there always needs to be a third person along.{" "}
            <Link href="/PEPGuide/cars">More in Personal Vehicles</Link>.
          </p>
        ),
      },
    ],
  },
  {
    title: "Practical things",
    items: [
      {
        question: "Can I keep my vitamins and my usual ibuprofen?",
        answer: (
          <p>
            Only after they&apos;re approved. Everything over-the-counter — including
            vitamins, supplements, and protein powder — has to be approved by Dr. Richardson,
            then labeled by PEP staff before it comes back to you. Don&apos;t assume the
            bottle in your bag is fine; run it through the process.{" "}
            <Link href="/PEPGuide/quickref">More in Quick Reference</Link>.
          </p>
        ),
      },
      {
        question: "Where should my family send mail?",
        answer: (
          <p>
            To PEP, not to the apartment — addressed to the Professional Enhancement Program,
            2117 Broadway Drive, Hattiesburg, MS 39402, with your first name and last initial
            on the attention line. Mail is opened in front of a staff member, which is the
            routine for everyone. Give that address out before you come in.{" "}
            <Link href="/PEPGuide/quickref">More in Quick Reference</Link>.
          </p>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <GuidePage path="/PEPGuide/faq" title="Frequently Asked Questions">
      <div className="space-y-6">
        <p className="pep-prose">
          These are the questions I hear most from people about to come in, answered short.
          Tap a question to open it. Each answer points back to the section that covers it
          properly — and all of it defers to your binder and your treatment staff, who are
          the actual authority.
        </p>

        <FaqAccordion groups={faqGroups} />
      </div>
    </GuidePage>
  );
}

import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Personal Vehicles",
};

export default function CarsPage() {
  return (
    <GuidePage path="/PEPGuide/cars" title="Personal Vehicles">
      <div className="pep-prose">
        <p>
          I won&apos;t spend long on this one, but it&apos;s worth walking through, because
          the rules around your car catch people off guard more than you&apos;d think. As
          always, the binder is the authority; this is just me telling you how it actually
          plays out.
        </p>

        <h2>Your car isn&apos;t off-limits, but it isn&apos;t fully yours yet either</h2>
        <p>
          When you come in, expect your vehicle to be searched — at admission, and randomly
          throughout your time here. That&apos;s not personal; it&apos;s the same contraband
          check everyone goes through, and it&apos;s part of what keeps the community safe.
        </p>
        <p>
          Early on, you may be asked to hand over your keys, or simply asked not to drive for
          a while. If there&apos;s ever a concern about your safety or your judgment, that
          request can come at any point in the program, not just at the start. It helps to
          hold this loosely: it isn&apos;t a punishment, it&apos;s a pause while things
          settle.
        </p>
        <p>
          Two things the program will hold you to the whole way through: a valid
          driver&apos;s license, and full insurance coverage. Keep both current. If either
          lapses, you&apos;re not driving, full stop.
        </p>

        <h2>Keys and shadow are two different things</h2>
        <p>
          This is the part I most want you to get straight, because I see people tangle it up
          constantly.
        </p>
        <p>
          Having your keys back is about <em>driving</em>. Being on shadow is about{" "}
          <em>being alone</em>. They are separate. Getting your keys does not mean you&apos;ve
          earned the right to be on your own.
        </p>
        <p>
          So picture it this way. If the program has cleared you to drive and you&apos;ve got
          your keys, you can drive. But if you&apos;re still on shadow, you&apos;re still on
          shadow — which means someone is in that car with you: your sunshine, or another peer
          covering for them. Keys in your pocket never override the shadow. What the keys give
          you is the ability to operate the vehicle; what shadow decides is whether you can be
          by yourself. Don&apos;t let the one talk you into the other.
        </p>

        <h2>Who drives and who rides</h2>
        <p>
          You are the only person who may drive your vehicle while you&apos;re enrolled. Not a
          friend, not a family member, not another peer — you. A valid license and full
          insurance are what make that allowed, which is the other reason the program keeps
          checking on both.
        </p>
        <p>
          As for passengers, the only people who may ride in your car are others from the
          Professional Enhancement community — PEP peers specifically — and only when
          everyone&apos;s following the general PEP guidelines. That obviously rules out
          outside friends and family. But here&apos;s the piece that trips people up, so I
          want to be plain about it: it also rules out peers from other Pine Grove programs.
        </p>
        <p>
          A lot of you will come to PEP from somewhere else in Pine Grove, and you may still
          cross paths with people from those earlier programs — see them around, stay in
          contact, care about them. That&apos;s fine. What isn&apos;t fine, once you&apos;ve
          transitioned into PEP, is giving those peers a ride or having them in your car. They
          aren&apos;t part of <em>this</em>{" "}community&apos;s structure, even though
          they&apos;re part of Pine Grove, and the passenger rule is about PEP specifically.
          So when I say &ldquo;PEP peers only,&rdquo; I mean only PEP — not Pine Grove
          broadly.
        </p>
        <p>
          One guideline that carries straight into the car: the three-person rule. A male peer
          and a female peer should never ride together as just the two of them — there always
          needs to be a third person along. It&apos;s the same principle that shapes so much of
          how the community moves: you protect each other, and you protect yourself, by not
          ending up in a one-on-one situation where things can quietly go sideways. In a
          vehicle, that rule is non-negotiable.
        </p>

        <h2>The short version</h2>
        <p>
          Your car is searched and stays subject to search. You may be asked to give up your
          keys or not to drive, at admission or any time there&apos;s a concern. Keep your
          license and insurance current. Only you drive your vehicle. Only PEP peers ride with
          you — not outside friends or family, and not peers from other Pine Grove programs —
          and never a lone man-and-woman pairing without a third person. And remember that
          getting your keys back is not the same as coming off shadow — those are two separate
          steps, and until you&apos;re off shadow, someone rides with you.
        </p>
      </div>
    </GuidePage>
  );
}

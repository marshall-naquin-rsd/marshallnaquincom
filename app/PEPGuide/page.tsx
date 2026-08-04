import type { Metadata } from "next";
import Link from "next/link";
import GuidePage from "@/components/pepguide/GuidePage";
import SectionList from "@/components/pepguide/SectionList";
import GuideSearch from "@/components/pepguide/GuideSearch";
import { guideBasePath, guideSections } from "@/lib/pepguide";

export const metadata: Metadata = {
  title: "PEP Guide",
};

export default function PEPGuidePage() {
  const sections = guideSections.map((s) => ({
    ...s,
    href: `${guideBasePath}/${s.slug}`,
  }));

  return (
    <GuidePage
      path="/PEPGuide"
      title="PEP Guide"
      subtitle="A companion to the programming binder, from a former peer."
    >
      <div className="space-y-6">
        <GuideSearch />
        <div className="flex flex-wrap gap-3">
          <Link href="/PEPGuide/quickref" className="btn-secondary">
            Quick Reference
          </Link>
          <Link href="/PEPGuide/faq" className="btn-secondary">
            FAQ
          </Link>
        </div>
        <SectionList sections={sections} />
      </div>
    </GuidePage>
  );
}

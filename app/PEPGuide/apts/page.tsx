import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";
import SectionList from "@/components/pepguide/SectionList";
import { aptsBasePath, aptSections } from "@/lib/pepguide";

export const metadata: Metadata = {
  title: "Apartments",
};

export default function AptsPage() {
  const sections = aptSections.map((s) => ({
    ...s,
    href: `${aptsBasePath}/${s.slug}`,
  }));

  return (
    <GuidePage path="/PEPGuide/apts" title="Apartments">
      <SectionList sections={sections} />
    </GuidePage>
  );
}

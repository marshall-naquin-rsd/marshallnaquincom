import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "FAQ | PEP Guide",
};

export default function FAQPage() {
  return (
    <GuidePage path="/PEPGuide/faq" title="FAQ">
      <p className="pep-prose text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

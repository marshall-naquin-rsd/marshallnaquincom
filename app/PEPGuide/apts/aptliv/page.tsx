import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Apartment Living",
};

export default function AptLivPage() {
  return (
    <GuidePage path="/PEPGuide/apts/aptliv" title="Apartment Living">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Apartment Complex Rules",
};

export default function AptRulesPage() {
  return (
    <GuidePage path="/PEPGuide/apts/aptrules" title="Apartment Complex Rules">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

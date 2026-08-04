import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Apartment Cleaning",
};

export default function AptCleaningPage() {
  return (
    <GuidePage path="/PEPGuide/apts/aptcleaning" title="Apartment Cleaning">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

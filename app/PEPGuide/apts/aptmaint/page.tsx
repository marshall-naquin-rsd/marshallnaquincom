import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Apartment Maintenance Issues",
};

export default function AptMaintPage() {
  return (
    <GuidePage path="/PEPGuide/apts/aptmaint" title="Apartment Maintenance Issues">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

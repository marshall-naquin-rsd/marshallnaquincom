import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Treatment Planning",
};

export default function RxPlanPage() {
  return (
    <GuidePage path="/PEPGuide/rxplan" title="Treatment Planning">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

import type { Metadata } from "next";
import GuidePage from "@/components/pepguide/GuidePage";

export const metadata: Metadata = {
  title: "Pool",
};

export default function AptPoolPage() {
  return (
    <GuidePage path="/PEPGuide/apts/aptpool" title="Pool">
      <p className="text-muted-foreground">Content coming soon.</p>
    </GuidePage>
  );
}

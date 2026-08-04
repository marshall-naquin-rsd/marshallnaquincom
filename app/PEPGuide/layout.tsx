import type { Metadata } from "next";
import GuideHeader from "@/components/pepguide/GuideHeader";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: { default: "PEP Guide", template: "%s · PEP Guide" },
  robots: { index: false, follow: false },
};

export default function PEPGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pep-theme flex flex-1 flex-col bg-background text-foreground">
      <GuideHeader />
      {children}
      <CookieConsent />
    </div>
  );
}

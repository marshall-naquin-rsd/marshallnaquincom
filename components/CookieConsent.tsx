"use client";

import { useEffect, useState } from "react";
import { getConsent, setConsent } from "@/lib/cookies";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsent("granted");
    setVisible(false);
  }

  function handleDecline() {
    setConsent("declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          This site uses cookies to remember which sections you&apos;ve read.
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="flex min-h-11 flex-1 items-center justify-center text-sm text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline sm:flex-none sm:px-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-80 sm:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

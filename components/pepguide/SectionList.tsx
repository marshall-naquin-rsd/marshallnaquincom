"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { GuideSection } from "@/lib/pepguide";
import { getReadSlugs, getConsent, clearReadSlugs } from "@/lib/cookies";

type SectionItem = GuideSection & { href: string };

export default function SectionList({ sections }: { sections: SectionItem[] }) {
  const [readSlugs, setReadSlugs] = useState<string[]>([]);
  const [confirmingReset, setConfirmingReset] = useState(false);

  useEffect(() => {
    if (getConsent() === "granted") {
      setReadSlugs(getReadSlugs());
    }
  }, []);

  function handleReset() {
    clearReadSlugs();
    setReadSlugs([]);
    setConfirmingReset(false);
  }

  const readCount = sections.filter(({ slug }) => readSlugs.includes(slug)).length;

  return (
    <div className="space-y-3">
      {/* Progress indicator */}
      {readCount > 0 && (
        <p className="text-sm text-muted-foreground">
          {readCount} of {sections.length} read
        </p>
      )}

      <ul className="space-y-2">
        {sections.map(({ slug, title, href }) => {
          const read = readSlugs.includes(slug);
          return (
            <li key={slug}>
              <Link
                href={href}
                className={[
                  "group flex min-h-13 items-center justify-between rounded-lg border px-4 py-3.5",
                  "transition-all duration-150",
                  read
                    ? "border-mint bg-mint/20 hover:border-primary/40 hover:bg-mint/30 hover:shadow-sm"
                    : "border-border bg-card hover:border-primary/30 hover:bg-card hover:shadow-sm",
                ].join(" ")}
              >
                <span className="font-medium text-foreground">{title}</span>
                <span className="flex shrink-0 items-center gap-2">
                  {read && (
                    <span className="chip chip-mint">
                      ✓ read
                    </span>
                  )}
                  <span className="text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5">
                    ›
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Reset progress */}
      {readSlugs.length > 0 &&
        (confirmingReset ? (
          <div className="flex flex-col gap-3 rounded-lg border border-border px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Clear all read checkmarks? This can&apos;t be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmingReset(false)}
                className="flex min-h-11 flex-1 items-center justify-center text-sm text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline sm:flex-none sm:px-2"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-80 sm:flex-none"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <button
              onClick={() => setConfirmingReset(true)}
              className="flex min-h-11 items-center text-sm text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
            >
              Reset progress
            </button>
          </div>
        ))}
    </div>
  );
}

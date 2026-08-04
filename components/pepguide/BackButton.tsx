"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ENTRY_KEY } from "./NavTracker";

interface BackButtonProps {
  parentHref: string;
  parentTitle: string;
  className?: string;
}

/**
 * Smart back button: calls router.back() when the user navigated here
 * from within the PEP Guide (detected via sessionStorage entry path),
 * otherwise falls back to a Link to the hierarchical parent so that
 * deep-linked pages always have a sensible destination.
 *
 * sessionStorage.getItem is synchronous, so we read it during render
 * rather than in an effect — no state update cascade.
 */
function readCanGoBack(pathname: string): boolean {
  if (typeof window === "undefined") return false;
  const entryPath = sessionStorage.getItem(ENTRY_KEY);
  return !!entryPath && entryPath !== pathname;
}

export default function BackButton({
  parentHref,
  parentTitle,
  className,
}: BackButtonProps) {
  const pathname = usePathname();
  const router = useRouter();
  const canGoBack = readCanGoBack(pathname);

  const cls = className ?? "btn-quiet";

  if (canGoBack) {
    return (
      <button onClick={() => router.back()} className={cls}>
        ← Back
      </button>
    );
  }

  return (
    <Link href={parentHref} className={cls}>
      ← {parentTitle}
    </Link>
  );
}

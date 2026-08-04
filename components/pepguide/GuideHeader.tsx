"use client";

import { usePathname } from "next/navigation";
import { guideBasePath, routeMap } from "@/lib/pepguide";
import Link from "next/link";
import NavTracker from "./NavTracker";
import BackButton from "./BackButton";

export default function GuideHeader() {
  const pathname = usePathname();
  const isHome = pathname === guideBasePath || pathname === `${guideBasePath}/`;
  const info = routeMap[pathname];

  return (
    <>
      <NavTracker />
      <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-sm">
        <nav className="mx-auto flex h-14 max-w-2xl items-center gap-2 px-4 sm:px-6">
          {/* Left: Back (non-home pages only) */}
          <div className="flex w-20 shrink-0 items-center sm:w-28">
            {!isHome && info?.parentHref && (
              <BackButton
                parentHref={info.parentHref}
                parentTitle={info.parentTitle ?? "PEP Guide"}
                className="btn-quiet text-sm"
              />
            )}
          </div>

          {/* Center: PEP Guide home link */}
          <div className="flex flex-1 justify-center">
            <Link
              href={guideBasePath}
              className="text-sm font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
            >
              PEP Guide
            </Link>
          </div>

          {/* Right: spacer keeps center link visually centered */}
          <div className="w-20 shrink-0 sm:w-28" />
        </nav>
      </header>
    </>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { guideBasePath, routeMap } from "@/lib/pepguide";
import ReadTracker from "./ReadTracker";
import BackButton from "./BackButton";

interface GuidePageProps {
  /** Full pathname, e.g. "/PEPGuide/welcome" or "/PEPGuide/apts/aptpool" */
  path: string;
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
}

/**
 * Shell for every PEP Guide content page.
 *
 * Handles: breadcrumb, h1 + subtitle, ReadTracker, children, footer nav
 * (Back · PEP Guide home · Next section), and the persistent disclaimer.
 * The home page (/PEPGuide) uses this component too; it just skips the
 * footer nav and disclaimer.
 */
export default function GuidePage({
  path,
  title,
  subtitle,
  children,
}: GuidePageProps) {
  const isHome = path === guideBasePath;
  const slug = isHome ? "" : (path.split("/").pop() ?? "");
  const info = routeMap[path];

  // Build breadcrumb ancestors (maximum two levels above this page)
  const breadcrumbs: { href: string; title: string }[] = [];
  if (info?.parentHref) {
    const parentInfo = routeMap[info.parentHref];
    if (parentInfo?.parentHref) {
      // Depth-2 page (e.g. aptpool): show grandparent → parent
      const gpTitle = routeMap[parentInfo.parentHref]?.title ?? "PEP Guide";
      breadcrumbs.push({ href: parentInfo.parentHref, title: gpTitle });
    }
    breadcrumbs.push({ href: info.parentHref, title: info.parentTitle ?? "PEP Guide" });
  }

  // Show "PEP Guide home" only when parent isn't already the guide root
  const showHomeLink = !isHome && info?.parentHref !== guideBasePath;

  return (
    <main className="flex flex-1 flex-col items-center px-4 pt-8 pb-32 sm:px-6 sm:pt-12 sm:pb-16">
      {!isHome && slug && <ReadTracker slug={slug} />}

      <div className="w-full max-w-2xl space-y-6">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-border">
                      /
                    </span>
                  )}
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {crumb.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Page heading */}
        <div className="space-y-1">
          <h1 className="heading-xl">{title}</h1>
          {subtitle && (
            <p className="text-sm italic text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Page content */}
        {children}

        {/* Footer navigation */}
        {!isHome && (
          <div className="space-y-4 border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-4">
                {info?.parentHref && (
                  <BackButton
                    parentHref={info.parentHref}
                    parentTitle={info.parentTitle ?? "PEP Guide"}
                  />
                )}
                {showHomeLink && (
                  <Link href={guideBasePath} className="btn-quiet">
                    PEP Guide home
                  </Link>
                )}
              </div>

              {info?.nextHref && (
                <Link href={info.nextHref} className="btn-primary">
                  {info.nextTitle} →
                </Link>
              )}
            </div>

            <p className="border-t border-border/50 pt-4 text-xs italic text-muted-foreground">
              Independent companion guide by a former peer. Not affiliated with,
              endorsed by, or produced by Pine Grove or the Professional
              Enhancement Program. Always defer to your official binder and staff.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hero, site } from "@/lib/copy";

const links = [
  { href: "/#talk", label: "Talks" },
  { href: "/#topics", label: "Topics" },
  { href: "/#formats", label: "Formats" },
  { href: "/#about", label: "About" },
] as const;

export function Masthead() {
  const pathname = usePathname();
  const onBooking = pathname === "/booking";

  return (
    <header className="masthead">
      <Link href="/" className="name-mark">
        {site.name}
      </Link>

      <nav className="nav-desktop" aria-label="Primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        {onBooking ? (
          <span className="btn-primary nav-book" aria-current="page">
            {hero.primaryCta}
          </span>
        ) : (
          <Link href="/booking" className="btn-primary nav-book">
            {hero.primaryCta}
          </Link>
        )}
      </nav>

      {onBooking ? (
        <Link href="/" className="nav-phone-back">
          Back
        </Link>
      ) : (
        <Link href="/booking" className="btn-primary nav-phone-book">
          Book
        </Link>
      )}
    </header>
  );
}

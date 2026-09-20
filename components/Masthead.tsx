"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/copy";

const links = [
  { href: "/#talks", label: "Talks" },
  { href: "/#topics", label: "Topics" },
  { href: "/#formats", label: "Formats" },
  { href: "/about", label: "About" },
] as const;

export function Masthead() {
  const pathname = usePathname();

  return (
    <header className="masthead">
      <Link href="/" className="name-mark">
        <span className="name-mark-serif">{site.name}</span>
        <span className="name-mark-cred">M.D.</span>
      </Link>
      <input
        type="checkbox"
        id="navtoggle"
        className="navtoggle-input"
        aria-label="Toggle navigation"
      />
      <label className="navbtn" htmlFor="navtoggle">
        Menu
      </label>
      <nav className="navlist" aria-label="Primary">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/booking"
          className="btn-primary nav-book"
          aria-current={pathname === "/booking" ? "page" : undefined}
        >
          Book
        </Link>
      </nav>
    </header>
  );
}

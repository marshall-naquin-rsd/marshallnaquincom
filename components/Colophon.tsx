import Link from "next/link";
import { colophon, site } from "@/lib/copy";

export function Colophon() {
  return (
    <footer className="colophon">
      <p>
        {colophon.disclaimer} <a href="tel:988">988</a>.
      </p>
      <nav className="colophon-nav" aria-label="Footer">
        <Link href="/#talks">Talks</Link>
        <Link href="/booking">Book</Link>
        <Link href="/about">About</Link>
        <a href={site.consultingUrl}>{colophon.consulting}</a>
        <a href="tel:988">988</a>
      </nav>
    </footer>
  );
}

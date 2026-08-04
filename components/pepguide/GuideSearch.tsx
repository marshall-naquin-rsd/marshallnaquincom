"use client";

import { useState } from "react";
import Link from "next/link";
import { searchGuide, type SearchEntry } from "@/lib/pepguide-search";

export default function GuideSearch() {
  const [query, setQuery] = useState("");

  const trimmed = query.trim();
  const results: SearchEntry[] = trimmed.length > 0 ? searchGuide(trimmed) : [];
  const showNoMatch = trimmed.length > 0 && results.length === 0;

  return (
    <div className="space-y-1">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search the guide…"
        aria-label="Search the PEP Guide"
        className="w-full rounded-lg border border-border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
      />

      {results.length > 0 && (
        <ul className="divide-y divide-border rounded-lg border border-border bg-card">
          {results.map(({ href, title, summary }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setQuery("")}
                className="flex flex-col gap-0.5 px-4 py-3 text-foreground transition-colors hover:bg-mint/30 hover:text-foreground"
              >
                <span className="text-sm font-medium">{title}</span>
                <span className="text-xs text-muted-foreground">{summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {showNoMatch && (
        <p className="px-1 py-2 text-sm text-muted-foreground">
          No results for &ldquo;{trimmed}&rdquo;.
        </p>
      )}
    </div>
  );
}

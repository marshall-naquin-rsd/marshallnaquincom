"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const INSTAGRAM = "https://www.instagram.com/greenbriargrove/";
const BOOK = "https://dusk.fm/@greenbriargrove";

type Sample = "a" | "b";

export function SampleMenu({ sample }: { sample: Sample }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const other = sample === "a" ? "b" : "a";
  const otherLabel =
    sample === "a" ? "Direction B — Roots" : "Direction A — Field Recording";

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="gbc-menu-btn"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>
      {open ? (
        <div
          className="gbc-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="flex items-center justify-between">
            <p id={titleId} className="gbc-kicker">
              Greenbriar Grove
            </p>
            <button
              type="button"
              className="gbc-menu-btn"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="mt-10 flex flex-col" aria-label="Sample menu">
            <Link className="gbc-menu-link" href={`/GBC/${other}`}>
              {otherLabel}
            </Link>
            <Link className="gbc-menu-link" href="/GBC">
              Both samples
            </Link>
            <a
              className="gbc-menu-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="gbc-menu-link"
              href={BOOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book the band
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}

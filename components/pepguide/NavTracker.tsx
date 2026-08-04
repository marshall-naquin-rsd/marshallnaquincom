"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const ENTRY_KEY = "pep_entry_path";

/**
 * Records the pathname where the user entered the PEP Guide.
 * Lives inside the PEP Guide layout so it is mounted once per visit
 * to this section. Handles React Strict Mode double-invocation: the
 * second mount sees the same pathname and sessionStorage is already set.
 */
export default function NavTracker() {
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(ENTRY_KEY, pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

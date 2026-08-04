"use client";

import { useEffect } from "react";
import { markAsRead } from "@/lib/cookies";

export default function ReadTracker({ slug }: { slug: string }) {
  useEffect(() => {
    markAsRead(slug);
  }, [slug]);

  return null;
}

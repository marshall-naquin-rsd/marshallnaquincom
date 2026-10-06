import type { MetadataRoute } from "next";
import { PARKED_PATH_PREFIXES, SITE_URL } from "@/lib/parked-routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...PARKED_PATH_PREFIXES],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

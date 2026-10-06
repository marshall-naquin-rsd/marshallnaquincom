export const SITE_URL = "https://marshallnaquin.com";

/** Speaker site pages that should be indexed. */
export const PUBLIC_PATHS = ["/", "/about", "/booking"] as const;

/**
 * Unlisted side projects, design kits, and staging routes.
 * Used for robots.txt Disallow (prefix match) and X-Robots-Tag.
 */
export const PARKED_PATH_PREFIXES = [
  "/downloads",
  "/GBC",
  "/gbc",
  "/2027miniconf",
  "/higgsfield-samples",
  "/area7",
  "/area7-ds",
] as const;

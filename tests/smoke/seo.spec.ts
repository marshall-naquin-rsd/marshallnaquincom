import { test, expect } from "@playwright/test";
import {
  PARKED_PATH_PREFIXES,
  PUBLIC_PATHS,
  SITE_URL,
} from "../../lib/parked-routes";

const parkedPages = [
  "/downloads",
  "/GBC",
  "/GBC/a",
  "/2027miniconf",
  "/higgsfield-samples",
  "/area7",
  "/area7/meetings",
  "/area7/map",
] as const;

test.describe("SEO @smoke", () => {
  test("robots.txt allows the speaker site and disallows parked routes", async ({
    request,
  }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/text\/plain/);

    const body = await response.text();
    expect(body).toMatch(/User-Agent:\s*\*/i);
    expect(body).toMatch(/Allow:\s*\/\s*$/m);
    expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);

    for (const prefix of PARKED_PATH_PREFIXES) {
      expect(body, prefix).toContain(`Disallow: ${prefix}`);
    }
  });

  test("sitemap.xml lists only public speaker pages", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/xml/);

    const body = await response.text();
    expect(body).toContain("<urlset");

    for (const path of PUBLIC_PATHS) {
      const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
      expect(body).toContain(`<loc>${url}</loc>`);
    }

    for (const prefix of PARKED_PATH_PREFIXES) {
      expect(body).not.toContain(`${SITE_URL}${prefix}`);
    }
  });

  test("parked HTML is noindexed via meta and X-Robots-Tag", async ({
    request,
  }) => {
    for (const path of parkedPages) {
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
      expect(response.headers()["x-robots-tag"], path).toMatch(/noindex/i);

      const html = await response.text();
      expect(html, path).toMatch(
        /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i,
      );
    }

    const pdf = await request.get("/downloads/Chucks%20Drawings.pdf");
    expect(pdf.status()).toBe(200);
    expect(pdf.headers()["x-robots-tag"]).toMatch(/noindex/i);

    const kit = await request.get("/area7-ds/styles.css");
    expect(kit.status()).toBe(200);
    expect(kit.headers()["x-robots-tag"]).toMatch(/noindex/i);
  });

  test("the speaker site itself stays indexable", async ({ request }) => {
    for (const path of PUBLIC_PATHS) {
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
      expect(response.headers()["x-robots-tag"] ?? "").not.toMatch(/noindex/i);

      const html = await response.text();
      expect(html, path).not.toMatch(
        /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i,
      );
    }
  });
});

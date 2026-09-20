import { test, expect } from "@playwright/test";

test.describe("Home page @smoke", () => {
  test("loads the speaker home and keeps staging unlinked", async ({
    page,
    request,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Marshall Naquin/);
    await expect(
      page.getByRole("heading", {
        name: /It took trip after trip to treatment before I finally stopped gambling/i,
      }),
    ).toBeVisible();

    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: "Talks" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Topics" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Formats" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Book a talk" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Listen to a sample" }).first()).toBeVisible();

    await expect(page.getByRole("heading", { name: "Two short samples" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "How long a room has me" })).toBeVisible();
    await expect(page.locator("audio")).toHaveCount(2);
    await expect(
      page.getByRole("heading", { name: "Arcade, candy, and the draw" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "No idea what addiction was" }),
    ).toBeVisible();

    for (const src of [
      "/audio/arcade-candy-thats-the-draw.mp3",
      "/audio/credentials-no-idea-what-addiction-was.mp3",
    ]) {
      const response = await request.get(src);
      expect(response.status(), src).toBe(200);
    }

    await expect(page.getByRole("link", { name: "Downloads" })).toHaveCount(0);
    await expect(page.getByRole("link", { name: /Area 7/i })).toHaveCount(0);
    await expect(page.locator('a[href="/downloads"]')).toHaveCount(0);
    await expect(page.locator('a[href="/area7"]')).toHaveCount(0);
    await expect(page.locator('a[href="/GBC"]')).toHaveCount(0);
    await expect(page.locator('a[href="/higgsfield-samples"]')).toHaveCount(0);
  });

  test("phone chrome is name plus Book only", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const header = page.locator("header");
    await expect(header.getByRole("link", { name: "Marshall Naquin" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Book", exact: true })).toBeVisible();
    await expect(header.getByRole("link", { name: "Talks" })).toHaveCount(0);
    await expect(header.getByRole("link", { name: "Book a talk" })).toHaveCount(0);
  });
});

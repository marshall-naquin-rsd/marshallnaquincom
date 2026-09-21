import { test, expect } from "@playwright/test";

const BANNER = "Proposal. Not the official Area 7 site. Meeting data is sample only.";

test.describe("Area 7 design-system proposal @smoke", () => {
  test("home is the proposal, not the mini-conference", async ({
    page,
    request,
  }) => {
    const response = await page.goto("/area7");
    expect(response?.status()).toBe(200);
    expect(new URL(page.url()).pathname).toMatch(/^\/area7\/?$/);
    await expect(page).toHaveTitle(/Area 7 Gamblers Anonymous/);
    await expect(page.getByText(BANNER)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /2027 Area 7 Mini-Conference/i }),
    ).toHaveCount(0);

    const css = await request.get("/area7-ds/styles.css");
    expect(css.status()).toBe(200);
    const photo = await request.get("/area7-ds/assets/home-three-rocks.webp");
    expect(photo.status()).toBe(200);
  });

  test("meetings and map pretty URLs load", async ({ page }) => {
    await page.goto("/area7/meetings");
    await expect(page).toHaveTitle(/Meetings/);
    await expect(page.getByText(BANNER)).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Find a meeting/i }),
    ).toBeVisible();

    await page.goto("/area7/map");
    await expect(page).toHaveTitle(/Area 7 meeting map/);
    await expect(page.getByText(BANNER)).toBeVisible();
  });

  test("trailing slash on /area7 still serves the proposal", async ({
    page,
  }) => {
    await page.goto("/area7/");
    await expect(page.getByText(BANNER)).toBeVisible();
    await expect(page).toHaveTitle(/Area 7 Gamblers Anonymous/);
    expect(page.url()).not.toContain("2027miniconf");
  });
});

import { test, expect } from "@playwright/test";

const subpages = [
  { path: "/PEPGuide/welcome", title: "Welcome · PEP Guide" },
  { path: "/PEPGuide/sunshine", title: "Sunshine / Shadow Contract · PEP Guide" },
  { path: "/PEPGuide/cars", title: "Cars · PEP Guide" },
  { path: "/PEPGuide/apts", title: "Apartments · PEP Guide" },
  { path: "/PEPGuide/rxplan", title: "Treatment Planning · PEP Guide" },
  { path: "/PEPGuide/firstassign", title: "First Assignments · PEP Guide" },
];

test.describe("PEP Guide @smoke", () => {
  test("index page loads with correct title", async ({ page }) => {
    await page.goto("/PEPGuide");
    await expect(page).toHaveTitle("PEP Guide");
  });

  test("index page lists all six section links", async ({ page }) => {
    await page.goto("/PEPGuide");
    for (const { path } of subpages) {
      await expect(page.locator(`a[href="${path}"]`)).toBeVisible();
    }
  });

  test("index page has noindex robots meta tag", async ({ page }) => {
    await page.goto("/PEPGuide");
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute("content", /noindex/);
  });

  test("home page has PEP Guide link", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator('a[href="/PEPGuide"]')).toBeVisible();
  });

  for (const { path, title } of subpages) {
    test(`${path} loads and has correct title`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(title);
    });
  }
});

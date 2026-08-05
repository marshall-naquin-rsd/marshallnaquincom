import { test, expect } from "@playwright/test";

/** Routes linked directly from the guide home page. */
const homeLinks = [
  "/PEPGuide/quickref",
  "/PEPGuide/faq",
  "/PEPGuide/groupme",
  "/PEPGuide/welcome",
  "/PEPGuide/sunshine",
  "/PEPGuide/firstassign",
  "/PEPGuide/presfeedback",
  "/PEPGuide/cars",
  "/PEPGuide/apts",
  "/PEPGuide/rxplan",
];

/** Every guide route and its expected document title. */
const pages = [
  { path: "/PEPGuide/welcome", title: "Welcome · PEP Guide" },
  { path: "/PEPGuide/sunshine", title: "Sunshine / Shadow Contract · PEP Guide" },
  { path: "/PEPGuide/firstassign", title: "First Assignments · PEP Guide" },
  { path: "/PEPGuide/presfeedback", title: "Presentations & Feedback · PEP Guide" },
  { path: "/PEPGuide/cars", title: "Personal Vehicles · PEP Guide" },
  { path: "/PEPGuide/apts", title: "Apartments · PEP Guide" },
  { path: "/PEPGuide/apts/aptliv", title: "Apartment Living · PEP Guide" },
  { path: "/PEPGuide/apts/aptrules", title: "Apartment Complex Rules · PEP Guide" },
  { path: "/PEPGuide/apts/aptcleaning", title: "Apartment Cleaning · PEP Guide" },
  { path: "/PEPGuide/apts/aptmaint", title: "Apartment Maintenance Issues · PEP Guide" },
  { path: "/PEPGuide/apts/aptpool", title: "Pool · PEP Guide" },
  { path: "/PEPGuide/rxplan", title: "Treatment Planning · PEP Guide" },
  {
    path: "/PEPGuide/rxplan/rxplanmore",
    title: "More About Treatment Planning · PEP Guide",
  },
  { path: "/PEPGuide/quickref", title: "Quick Reference · PEP Guide" },
  { path: "/PEPGuide/faq", title: "FAQ · PEP Guide" },
  { path: "/PEPGuide/groupme", title: "PEP GroupMe · PEP Guide" },
];

test.describe("PEP Guide @smoke", () => {
  test("index page loads with correct title", async ({ page }) => {
    await page.goto("/PEPGuide");
    await expect(page).toHaveTitle("PEP Guide");
  });

  test("index page lists all section links", async ({ page }) => {
    await page.goto("/PEPGuide");
    for (const href of homeLinks) {
      await expect(page.locator(`a[href="${href}"]`)).toBeVisible();
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

  for (const { path, title } of pages) {
    test(`${path} loads and has correct title`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(title);
    });
  }
});

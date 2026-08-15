import { test, expect } from "@playwright/test";

test.describe("GBC samples @smoke", () => {
  test("chooser and both directions load", async ({ page }) => {
    await page.goto("/GBC");
    await expect(page).toHaveTitle(/Greenbriar Grove/);
    await expect(page.getByRole("heading", { name: /two homepage samples/i })).toBeVisible();

    await page.goto("/GBC/a");
    await expect(page.getByRole("heading", { name: "Live" })).toBeVisible();

    await page.goto("/GBC/b");
    await expect(page.getByRole("heading", { name: "SEE THEM PLAY" })).toBeVisible();
  });
});

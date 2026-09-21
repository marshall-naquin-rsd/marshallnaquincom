import { test, expect } from "@playwright/test";

test.describe("Staging routes @smoke", () => {
  test("stay reachable by URL", async ({ page }) => {
    await page.goto("/downloads");
    await expect(page.getByRole("heading", { name: "Downloads" })).toBeVisible();

    await page.goto("/2027miniconf");
    await expect(
      page.getByRole("heading", { name: /2027 Area 7 Mini-Conference/i }),
    ).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Area 7 conference preview @smoke", () => {
  test("loads and volunteer form can be submitted", async ({ page }) => {
    await page.goto("/area7");
    await expect(page).toHaveTitle(/2027 Area 7 Mini-Conference/);
    await expect(
      page.getByRole("heading", { name: /2027 Area 7 Mini-Conference/i }),
    ).toBeVisible();

    await page.getByRole("button", { name: /count me in/i }).click();
    await expect(
      page.getByRole("heading", { name: /we need you on the committee/i }),
    ).toBeVisible();

    await page.getByLabel(/first name/i).fill("Marshall N.");
    await page.getByLabel(/phone or email/i).fill("marshall@example.com");
    await page.getByRole("button", { name: /send it in/i }).click();
    await expect(
      page.getByRole("heading", { name: /thank you/i }),
    ).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Booking page @smoke", () => {
  test("shows the MN.com-native inquiry fields", async ({ page }) => {
    await page.goto("/booking");
    await expect(page).toHaveTitle(/Book a talk/);
    await expect(
      page.getByRole("heading", { name: "Book a talk" }),
    ).toBeVisible();

    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Organization or event name")).toBeVisible();
    await expect(page.getByLabel("Audience type")).toBeVisible();
    await expect(page.getByLabel("Format")).toBeVisible();
    await expect(page.getByLabel("Preferred dates")).toBeVisible();
    await expect(page.getByLabel("Location or city")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Booking page @smoke", () => {
  test("shows the locked inquiry fields", async ({ page }) => {
    await page.goto("/booking");
    await expect(page).toHaveTitle(/Book a talk/);
    await expect(
      page.getByRole("heading", { name: "One message starts it." }),
    ).toBeVisible();

    await expect(page.getByLabel("Your name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel(/Organization/)).toBeVisible();
    await expect(page.getByText("Who is in the room")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "People in treatment and recovery" }),
    ).toBeVisible();
    await expect(page.getByLabel("Format")).toBeVisible();
    await expect(page.getByLabel("Dates you have in mind")).toBeVisible();
    await expect(page.getByLabel("Anything else I should know")).toBeVisible();
    await expect(page.getByRole("button", { name: "Send it" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Message sent." })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "While you wait" })).toHaveCount(0);
  });

  test("fails gracefully when Resend is not configured", async ({ page }) => {
    await page.goto("/booking");
    await page.getByLabel("Your name").fill("Ada Test");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByRole("button", { name: "Send it" }).click();
    await expect(page.locator(".form-error")).toContainText("RESEND_API_KEY");
    await expect(page.getByRole("heading", { name: "Message sent." })).toHaveCount(0);
  });

  test("sent screen uses reply-time copy, not the samples intro", async ({
    page,
  }) => {
    await page.route("**/api/booking", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true }),
      });
    });

    await page.goto("/booking");
    await page.getByLabel("Your name").fill("Ada Test");
    await page.getByLabel("Email").fill("ada@example.com");
    await page.getByRole("button", { name: "Send it" }).click();

    await expect(page.getByRole("heading", { name: "Message sent." })).toBeVisible();
    await expect(page.getByRole("heading", { name: "While you wait" })).toBeVisible();
    await expect(page.getByText("I’ll reply by email.")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Listen to a sample" }),
    ).toHaveAttribute("href", "/#samples");
    await expect(
      page.getByText("Two short samples from"),
    ).toHaveCount(0);
  });

  test("phone chrome is name plus Back", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/booking");

    const header = page.locator("header");
    await expect(header.getByRole("link", { name: "Marshall Naquin" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Back" })).toBeVisible();
    await expect(header.getByRole("link", { name: "Book" })).toHaveCount(0);
  });
});

import { test, expect } from "@playwright/test";

const assets = [
  "/higgsfield-samples/post2-gamanon-unusable.mp4",
  "/higgsfield-samples/post2-garbled-end.jpg",
  "/higgsfield-samples/post4-meeting-unusable.mp4",
  "/higgsfield-samples/post4-garbled-end.jpg",
  "/higgsfield-samples/post6-app-unusable.mp4",
  "/higgsfield-samples/post6-garbled-end.jpg",
];

test.describe("Higgsfield samples @smoke", () => {
  test("hosts all three unusable Seedance samples", async ({
    page,
    request,
  }) => {
    await page.goto("/higgsfield-samples");

    await expect(page).toHaveTitle(/Higgsfield Seedance samples/i);
    await expect(
      page.getByRole("heading", {
        name: /Higgsfield Seedance samples — unusable text renders/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByText(/charged as successful but required place\/URL text is garbled/i),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: "Post 2 Gam-Anon" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Post 4 meeting" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Post 6 app" }),
    ).toBeVisible();

    await expect(page.locator("video")).toHaveCount(3);
    await expect(
      page.getByRole("img", { name: /end-card still/i }),
    ).toHaveCount(3);

    for (const asset of assets) {
      const response = await request.get(asset);
      expect(response.status(), asset).toBe(200);
    }
  });
});

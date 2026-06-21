import { test, expect } from '@playwright/test';

test.describe('Home page @smoke', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Marshall Naquin/);
  });
});

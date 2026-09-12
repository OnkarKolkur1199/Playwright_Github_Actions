import { test, expect } from '@playwright/test';

test('google test from smoke', { tag: '@sanity' }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
  await page.waitForTimeout(3000);
});
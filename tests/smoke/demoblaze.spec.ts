import { test, expect } from '@playwright/test';

test('demoblaze test from smoke', async ({ page, context }) => {
  await page.goto('https://www.demoblaze.com/');

  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('omikolkur');
  await page.locator('#loginpassword').fill('Test@1234');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(3000);

});
import { test, expect } from '@playwright/test';

test('saucedemo test from smoke', async ({ page, context }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByLabel('Password').fill('secret_sauce')

  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForTimeout(3000);

});
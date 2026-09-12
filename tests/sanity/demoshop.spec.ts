import { test, expect } from '@playwright/test';

test('demoshop test from sanity', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');

    //Soft assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop');
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');

    const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();

    await page.waitForTimeout(3000);

});
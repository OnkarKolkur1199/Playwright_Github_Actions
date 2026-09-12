import {test,expect} from '@playwright/test';

test("testautomationpractice test from regression",async({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.keyboard.press("PageDown")

  page.on("dialog",(dialog) =>{
    console.log("Dialog type is : ", dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("Dialog text is : ", dialog.message());

    test.info().annotations.push({ type: 'DialogType', description: dialog.type() });
    test.info().annotations.push({ type: 'DialogText', description: dialog.message() });
    dialog.accept();
  });

  await page.locator("button#alertBtn").click();

  await page.waitForTimeout(3000);
})

test('demoshop test from regression', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');

    //Soft assertions
    await expect.soft(page).toHaveTitle('Demo Web Shop');
    await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/');

    const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
    await expect.soft(logo).toBeVisible();

    await page.waitForTimeout(3000);

});

test('demoblaze test from regression', async ({ page, context }) => {
  await page.goto('https://www.demoblaze.com/');

  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('omikolkur');
  await page.locator('#loginpassword').fill('Test@1234');

  await page.getByRole('button', { name: 'Log in' }).click();

  await page.waitForTimeout(3000);

});

test('google test from regression', { tag: '@sanity' }, async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
  await page.waitForTimeout(3000);
});
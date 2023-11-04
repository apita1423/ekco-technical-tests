import test, { page, expect } from '@playwright/test';

// Test Case 1 - Navigation
test('test ekco navigation', async({ page }) => {
    await page.goto('https://www.ek.co/');
    await page.pause();

    // check page title text is visible
    await expect(page.getByRole('heading', { name: 'The people who power your possible' })).toBeVisible();
    await page.pause();

    // check login button and form
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.goto("https://portal.ek.co/login?next=");
    await expect(page).toHaveURL("https://portal.ek.co/login?next=");
    await expect(page.locator('.col-md-4')).toBeVisible();
    await page.pause();
});
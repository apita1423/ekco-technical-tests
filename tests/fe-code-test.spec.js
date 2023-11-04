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

    // Test Case 2 - Form Errors - Reused the portal links from above for the form errors test
    // check if login button is clicked first that email and password would show required
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
    await page.pause();

    //Test Case 3 - Invalid Email Error
    await page.getByPlaceholder('Your email').fill('mail.com');
    await page.pause();
});



import { test, expect } from '@playwright/test';
import { ekcoLoginPage } from '../pages/ekco-portal-login';

// Test Case 1 - Navigation
test('test ekco navigation', async({ page }) => {
    // code for the Page Object Model
    const login = new ekcoLoginPage(page);
    await login.gotoekcoLoginPage();
    await login.login('', '');

    await page.goto('https://www.ek.co/');
    await page.pause();

    // check page title text is visible
    await expect(page.getByRole('heading', { name: 'The people who power your possible' })).toBeVisible();

    // check after login button is clicked that the url and login form is visible 
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.goto("https://portal.ek.co/");
    await expect(page).toHaveURL("https://portal.ek.co/login?next=");
    await expect(page.locator('.col-md-4')).toBeVisible();
});

// Test Case 2 - Form Errors
test('test form errors', async({ page }) => {
    await page.goto("https://portal.ek.co/");
    await expect(page.locator('.col-md-4')).toBeVisible();
    await page.getByPlaceholder('Your email').click();
    await page.getByPlaceholder('Your password').click();
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
});

//Test Case 3 - Invalid Email Error
test('test invalid email error', async({ page }) => {
    await page.goto("https://portal.ek.co/");
    await expect(page.locator('.col-md-4')).toBeVisible();
    await page.getByPlaceholder('Your email').fill('mail.com');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText('Email must be a valid email')).toBeVisible();
    await page.getByPlaceholder('Your email').fill('email@mail.com');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText('Email must be a valid email')).toBeHidden();
});
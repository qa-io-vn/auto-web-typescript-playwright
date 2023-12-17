import { test, expect, type Page } from '@playwright/test';
import {user} from "../data/user_data";
import {loginPage} from "../pages/login-page";
import {basePage} from "../pages/base-page";

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Logout feature', () => {
  test.beforeEach(async ({ page }) => {
    await loginPage(page).openAndLogin(user);
  });

  test('Customer logout successfully', async ({ page }) => {
    await basePage(page).logout();
    await expect(loginPage(page).getLoginButton()).toBeVisible();
  });
});
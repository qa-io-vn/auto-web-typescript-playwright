import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Clear completed button', () => {
  test('Customer view product to buy', async ({ page }) => {

  });
  test('Customer view product to buy by order', async ({ page }) => {

  });
  test('Customer add products to cart', async ({ page }) => {

  });
  test('Customer remove products from cart', async ({ page }) => {

  });
});
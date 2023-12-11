import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Clear completed button', () => {
  test('Customer view there card after select products to purchase', async ({ page }) => {

  });
  test('Customer remove products to buy in there cart', async ({ page }) => {

  });
  test('Customer continue to buy more item', async ({ page }) => {

  });
});
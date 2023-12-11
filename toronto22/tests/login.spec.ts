import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Clear completed button', () => {
  test('Login Successfully With Valid Credential', async ({ page }) => {

  });
  test('Login With Invalid Credential', async ({ page }) => {

  });
});
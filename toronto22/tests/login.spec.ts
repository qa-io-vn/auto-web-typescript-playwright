import { test, expect } from '@playwright/test';
import {loginPage} from "../pages/login-page";
import {user} from "../data/user_data";
import {productPage} from "../pages/products-page";


test.describe('Login Feature', () => {

  test('Login Successfully With Valid Credential', async ({ page }) => {
    await loginPage(page).open();
    await loginPage(page).login(user.username,user.password);

    await expect(await productPage(page).getProductTitle()).toBeVisible();
  });
  test('Login With Invalid Credential', async ({ page }) => {
    await loginPage(page).open();
    await loginPage(page).login(user.username,"Invalid Password");

    await expect(loginPage(page).getErrorMessage()).toContainText("Username and password do not match any user in this service");
  });
});
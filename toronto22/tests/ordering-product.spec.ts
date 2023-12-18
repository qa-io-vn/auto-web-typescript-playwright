import { test, expect, type Page } from '@playwright/test';
import {loginPage} from "../pages/login-page";
import {user} from "../data/user_data";
import {productPage} from "../pages/products-page";
import {basePage} from "../pages/base-page";
import {cartPage} from "../pages/cart-page";
import {checkoutInformationPage} from "../pages/checkout-information-page";
import {checkoutOverviewPage} from "../pages/checkout-overview-page";
import {checkoutCompletePage} from "../pages/checkout-complete-page";
test.describe('Ordering product feature', () => {
  test.beforeEach(async ({ page }) => {
    await loginPage(page).openAndLogin(user);
  });

  test('Ordering products successfully', async ({ page }) => {
    const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Onesie'];
    const firstName = 'Toronto22';
    const lastName='Kevin';
    const postalCode='8989';
    await productPage(page).addToCart(products);
    await basePage(page).goToCart();
    await cartPage(page).clickOnCheckout();
    await checkoutInformationPage(page).continue(firstName, lastName, postalCode);
    await checkoutOverviewPage(page).finish();
    await expect(checkoutCompletePage(page).getCompleteLabel()).toBeVisible();
  });
});
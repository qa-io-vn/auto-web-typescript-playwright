import type { Page } from 'playwright';

export class CartPage {
    readonly page: Page;

    readonly checkoutButton = '//a[text()=\'CHECKOUT\']'

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

}

export const cartPage =(page: Page) => {
    return new CartPage(page);
}
import type { Page } from 'playwright';

export class CheckoutCompletePage {
    readonly page: Page;

    readonly completeLabel = '//*[@id="checkout_complete_container"]/h2'

    constructor(page: Page) {
        this.page = page;
    }

    getCompleteLabel() {
        return this.page.locator(this.completeLabel);
    }

}

export const checkoutCompletePage =(page: Page) => {
    return new CheckoutCompletePage(page);
}
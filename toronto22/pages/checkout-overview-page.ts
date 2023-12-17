import type { Page } from 'playwright';

export class CheckoutOverviewPage {
    readonly page: Page;

    readonly finishButton = '//a[text()=\'FINISH\']'

    constructor(page: Page) {
        this.page = page;
    }

    async finish() {
        await this.page.locator(this.finishButton).click();
    }

}

export const checkoutOverviewPage =(page: Page) => {
    return new CheckoutOverviewPage(page);
}
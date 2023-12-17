import type { Page } from 'playwright';

export class CheckoutInformationPage {
    readonly page: Page;

    readonly firstNameInput = '//*[@id="first-name"]'
    readonly lastNameInput = '//*[@id="last-name"]'
    readonly postalCodeInput = '//*[@id="postal-code"]'
    readonly continueButton = '//input[@value="CONTINUE"]'

    constructor(page: Page) {
        this.page = page;
    }

    async continue(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.postalCodeInput).fill(postalCode);
        await this.page.locator(this.continueButton).click();
    }

}

export const checkoutInformationPage =(page: Page) => {
    return new CheckoutInformationPage(page);
}
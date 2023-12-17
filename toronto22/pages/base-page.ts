import type {Page} from 'playwright';

export class BasePage {
    readonly page: Page;

    readonly openMenuButton = '//*[@id="menu_button_container"]/div/div[3]/div/button'
    readonly logoutButton = '#logout_sidebar_link'
    readonly cartIcon = '//*[@id="shopping_cart_container"]'

    constructor(page: Page) {
        this.page = page;
    }

    async logout() {
        await this.page.locator(this.openMenuButton).click();
        await this.page.locator(this.logoutButton).click();
    }

    async goToCart() {
        await this.page.locator(this.cartIcon).click();
    }
}

export const basePage = (page: Page) => {
    return new BasePage(page);
}
import type { Page } from 'playwright';

export class ProductsPage {
    readonly page: Page;

    readonly productTitle = '//*[@id="inventory_filter_container"]/div'
    readonly addToCartButton = '//button[text()="ADD TO CART"]/../..//a/div'


    constructor(page: Page) {
        this.page = page;
    }

    async getProductTitle() {
        return this.page.locator(this.productTitle);
    }

    async addToCart(items: string[]){
        items.forEach(item => {
            this.page.locator(this.addToCartButton)
                .filter({ has: this.page.getByText(item) })
            .click();
        });
    }
}

export const productPage =(page: Page) => {
    return new ProductsPage(page);
}
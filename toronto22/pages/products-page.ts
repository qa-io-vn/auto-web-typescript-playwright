import type {Page} from 'playwright';

export class ProductsPage {
	readonly page: Page;

	readonly productTitle = '//*[@id="inventory_filter_container"]/div';

	addToCartButton(item: string) {
		return `//div[text()="${item}"]/../../..//button`;
	}


	constructor(page: Page) {
		this.page = page;
	}

	async getProductTitle() {
		return this.page.locator(this.productTitle);
	}

	async addToCart(items: string[]) {
		for (const item of items) {
			await this.page.locator(this.addToCartButton(item))
				.click();
		}
	}
}

export const productPage = (page: Page) => {
	return new ProductsPage(page);
}
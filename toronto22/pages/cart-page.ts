import type {Page} from 'playwright';

export class CartPage {
	readonly page: Page;

	readonly checkoutButton = '//a[text()=\'CHECKOUT\']'
	readonly selectedItems = '.inventory_item_name'

	removeItemButton(item: string) {
		return `//div[text()="${item}"]/../..//button`
	}

	constructor(page: Page) {
		this.page = page;
	}

	async clickOnCheckout() {
		await this.page.locator(this.checkoutButton).click();
	}

	async remove(items: string[]) {
		for (const item of items) {
				await this.page.locator(this.removeItemButton(item)).click();
			}
	}

	async getSelectedItems() {
		return await this.page.locator(this.selectedItems).allInnerTexts();
	}

}

export const cartPage = (page: Page) => {
	return new CartPage(page);
}
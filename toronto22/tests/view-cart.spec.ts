import {test, expect, type Page} from '@playwright/test';
import {loginPage} from "../pages/login-page";
import {user} from "../data/user_data";
import {productPage} from "../pages/products-page";
import {basePage} from "../pages/base-page";
import {cartPage} from "../pages/cart-page";

test.describe('View cart feature', () => {
	test.beforeEach(async ({page}) => {
		await loginPage(page).openAndLogin(user);
	});

	const products =
		[
			'Sauce Labs Bike Light',
			'Sauce Labs Backpack',
			'Sauce Labs Bolt T-Shirt',
			'Sauce Labs Fleece Jacket',
			'Sauce Labs Onesie',
			'Test.allTheThings() T-Shirt (Red)'
		];

	test('Customer view there card after select products to purchase', async ({page}) => {
		await productPage(page).addToCart(products);
		await basePage(page).goToCart();
		const actual = await cartPage(page).getSelectedItems();
		expect(actual).toStrictEqual(products);

	});
	test('Customer remove products to buy in there cart', async ({page}) => {
		const removedProducts =
			[
				'Sauce Labs Onesie',
				'Test.allTheThings() T-Shirt (Red)'
			];
		await productPage(page).addToCart(products);
		await basePage(page).goToCart();
		await cartPage(page).remove(removedProducts)

		const actual = await cartPage(page).getSelectedItems();

		const expected =
			[
				'Sauce Labs Bike Light',
				'Sauce Labs Backpack',
				'Sauce Labs Bolt T-Shirt',
				'Sauce Labs Fleece Jacket',
			];
		expect(actual).toStrictEqual(expected);
	});
	test('Customer continue to buy more item', async ({page}) => {

	});
});
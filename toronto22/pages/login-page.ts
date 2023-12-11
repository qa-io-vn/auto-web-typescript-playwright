import type { Page } from 'playwright';

export class HomePage {
    readonly page: Page;

    readonly baseUrl = 'http://angular.realworld.io/';

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async goToLoginPage() {
        await this.page.click('a[routerlink="/login"]');
    }


    async goToSettings() {
        await this.page.click('a[routerlink="/settings"]');
    }
}
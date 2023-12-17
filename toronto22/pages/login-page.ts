import type { Page } from 'playwright';

export class LoginPage {
    readonly page: Page;

    readonly baseUrl = 'https://www.saucedemo.com/v1/index.html';

    readonly userNameInput = '#user-name'
    readonly passwordInput = '#password'
    readonly loginButton = '#login-button'
    readonly errorMessageLabel = '//h3[@data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(this.baseUrl);
    }

    async login(username: string, password: string) {
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async openAndLogin(user: any){
        await this.open();
        await this.login(user.username, user.password)
    }


    getErrorMessage(){
        return this.page.locator(this.errorMessageLabel);
    }

    getLoginButton(){
        return this.page.locator(this.loginButton);
    }

}

export const loginPage = (page: Page) => {
    return new LoginPage(page)
}
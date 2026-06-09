import { Page, Locator, expect } from "@playwright/test";
import { URLS } from "../../constants/urls";

export class LoginPage {
  private readonly page: Page;

  // Locators
  private readonly txtEmail: Locator;
  private readonly txtPassword: Locator;
  private readonly btnLogin: Locator;
  private readonly lblError: Locator;
  private readonly txtUsernameOnNavbar: Locator;

  constructor(page: Page) {
    this.page = page;

    this.txtEmail = page.locator('//input[@id="email"]');
    this.txtPassword = page.locator('//input[@id="password"]');
    this.btnLogin = page.locator('//button[contains(text(),"Đăng nhập")]');
    this.lblError = page.locator(
      '//div[contains(text(),"Email hoặc mật khẩu không đúng")]',
    );
    this.txtUsernameOnNavbar = page.locator(
      '//span[normalize-space()="Phuc Thai Van"]',
    );
  }

  async gotoUserLogin() {
    await this.page.goto(`${URLS.USER}/auth/signin`);
  }

  async enterEmail(email: string) {
    await this.txtEmail.fill(email);
  }

  async enterPassword(password: string) {
    await this.txtPassword.fill(password);
  }

  async clickLogin() {
    await this.btnLogin.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifyErrorMessage() {
    await this.lblError.textContent();
  }

  async getEmailValidationMessage(): Promise<string> {
    return await this.txtEmail.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );
  }

  async verifyEmailValidationMessage(expectedMessage: string) {
    const actualMessage = await this.getEmailValidationMessage();

    expect(actualMessage).toContain(expectedMessage);
  }

  async getPasswordValidationMessage(): Promise<string> {
    return await this.txtPassword.evaluate(
      (el: HTMLInputElement) => el.validationMessage,
    );
  }

  async verifyPasswordValidationMessage(expectedMessage: string) {
    const actualMessage = await this.getPasswordValidationMessage();

    expect(actualMessage).toContain(expectedMessage);
  }

  async verifyLoginSuccess() {
    await this.page.waitForURL(`${URLS.USER}/`);
    await expect(this.txtUsernameOnNavbar).toBeVisible();
  }
}

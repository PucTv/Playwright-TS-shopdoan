import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  private readonly page: Page;

  private readonly btnBuyNow: Locator;
  private readonly radioCOD: Locator;
  private readonly btnPlaceOrder: Locator;
  private readonly txtTotalAmount: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btnBuyNow = page.locator('//button[contains(.,"Mua ngay")]');

    this.radioCOD = page.locator('//input[@value="COD"]');

    this.btnPlaceOrder = page.locator('//button[contains(.,"Đặt hàng")]');

    this.txtTotalAmount = page.locator(
      '//span[contains(@class,"total-price")]',
    );
  }

  async clickBuyNow() {
    await this.btnBuyNow.click();
  }

  async selectCODPaymentMethod() {
    await this.radioCOD.check();
  }

  async clickPlaceOrder() {
    await this.btnPlaceOrder.click();
  }

  async getTotalAmount(): Promise<string> {
    return (await this.txtTotalAmount.textContent()) ?? "";
  }

  async verifyTotalAmount(expectedAmount: string) {
    const actualAmount = await this.getTotalAmount();

    expect(actualAmount).toContain(expectedAmount);
  }
}

import {expect} from "@playwright/test";
import {BasePage} from "./BasePage";

export class ShopPage extends BasePage {
  public pagePath = "/shop";

  private productList = this.page.locator(".shop .product-list");

  async expectLoaded(message = "Expected Shop page to be opened") {
    await expect(this.productList, message).toBeVisible();
  }

  async openProductDetailsByName(name: string) {
    await this.page.getByRole("heading", {name}).click();
  }
}

import {expect} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class HeaderComponent extends BaseComponent {
  private shopLink = this.page.getByRole("link", {name: "Shop"});
  private cartLink = this.page.getByRole("button", {name: "your cart"});

  async expectLoaded() {
    await expect(this.shopLink).toBeVisible();
  }

  async openCart(){
    await this.cartLink.click()
  }

  async openShop(){
    await this.shopLink.click()
  }
}

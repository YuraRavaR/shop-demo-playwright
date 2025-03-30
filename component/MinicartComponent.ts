import {expect} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class MinicartComponent extends BaseComponent {
  private proceedToCheckoutButton = this.page.getByRole("button", {name: "Proceed To Checkout"});
  private placeOrderButton = this.page.getByRole("button", {name: "Place Order"});

  async expectLoaded() {
    await expect(this.proceedToCheckoutButton.or(this.placeOrderButton)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
  async closeCart(){
    await this.page.getByRole('button', { name: 'close the cart' }).click()
  }
}

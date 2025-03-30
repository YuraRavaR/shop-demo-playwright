import {expect} from "@playwright/test";
import {BasePage} from "../BasePage";
import {ReviewComponent} from "./component/ReviewComponent";

export class ProductPage extends BasePage {
  public pagePath = "/product";

  private addToBagButton = this.page.getByRole("button", {name: "Add To Bag"});
  private removeFromBagButton = this.page.getByRole("button", {name: "Remove From Bag"});

  public reviewComponent = new ReviewComponent(this.page);

  async expectLoaded(message = "Expected Product page to be opened") {
    await expect(this.addToBagButton.or(this.removeFromBagButton), message).toBeVisible();
  }

  // TODO: Rewrite to accept only product slug
  override async open(productPath: string): Promise<void> {
    await this.page.goto(productPath);
  }

  async changeQuantity(quantity: number) {
    await this.page.getByPlaceholder("Product Quantity").fill(quantity.toString());
  }

  async addToBag() {
    await this.expectLoaded();
    await this.addToBagButton.click();
  }
}

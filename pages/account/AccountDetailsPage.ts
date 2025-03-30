import {expect} from "@playwright/test";
import {BasePage} from "../BasePage";

export class AccountDetailsPage extends BasePage {
  public pagePath = "/details";

  private heading = this.page.getByRole("heading", {name: "Account Details"});

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }
}

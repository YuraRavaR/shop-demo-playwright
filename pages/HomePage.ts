import {expect} from "@playwright/test";
import {BasePage} from "./BasePage";

export class HomePage extends BasePage {
  public pagePath = "/";

  private carousel = this.page.locator(".main .homepage .home-carousel");

  async expectLoaded(message = "Expected Home page to be opened") {
    await expect(this.carousel, message).toBeVisible();
  }
}

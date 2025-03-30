import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class SignInPage extends BasePage {
  public pagePath = "/login";

  private signInButton = this.page.getByRole("button", {name: "Login"});
  private emailInput = this.page.getByRole("main").getByPlaceholder("Please Enter Your Email");
  private passwordInput = this.page.getByPlaceholder("Please Enter Your Password");

  async expectLoaded() {
    await expect(this.signInButton).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
  }

  async signIn(user: {email: string; password: string}) {
    await this.expectLoaded();
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.signInButton.click();
  }
}

import {expect} from "@playwright/test";
import {BasePage} from "./BasePage";

export class ContactUsPage extends BasePage {
  public pagePath = "/contact";

  private fullNameInput = this.page.getByPlaceholder("You Full Name");
  private emailInput = this.page.getByPlaceholder("Your Email Address");
  private messageInput = this.page.getByPlaceholder("Please Describe Your Message");
  private submitButton = this.page.getByRole("button", {name: "Submit"});

  async expectLoaded() {
    await expect(this.fullNameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.messageInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async submitContactUsForm(options: {fullName: string; email: string; message: string}) {
    await this.expectLoaded();
    await this.fullNameInput.fill(options.fullName);
    await this.emailInput.fill(options.email);
    await this.messageInput.fill(options.message);
    await this.submitButton.click();
  }
}

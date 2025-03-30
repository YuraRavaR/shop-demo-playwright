import {Page} from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  public abstract pagePath: string;

  abstract expectLoaded(message?: string): Promise<void>;

  async open(path?: string) {
    await this.page.goto(path ?? this.pagePath);
    await this.expectLoaded();
  }
}

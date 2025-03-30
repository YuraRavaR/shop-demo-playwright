import {Page} from "@playwright/test";
import {HeaderComponent} from "../component/HeaderComponent";
import { MinicartComponent } from "../component/MinicartComponent";

export abstract class BasePage {
  public header: HeaderComponent;
  public minicart: MinicartComponent;

  constructor(protected page: Page) {
    this.header = new HeaderComponent(page);
    this.minicart = new MinicartComponent(page);
  }

  public abstract pagePath: string;

  abstract expectLoaded(message?: string): Promise<void>;

  async open(path?: string) {
    await this.page.goto(path ?? this.pagePath);
    await this.expectLoaded();
  }
}

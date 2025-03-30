import {Page} from "@playwright/test";
import { HeaderComponent } from "./HeaderComponent";

export abstract class BaseComponent {
  constructor(protected page: Page) {
  }
  abstract expectLoaded(message?: string): Promise<void>;
}

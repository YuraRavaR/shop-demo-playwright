import {test, expect} from "@playwright/test";
import {SignInPage} from "../pages/SignInPage";

const data = {
  email: "test+e1f76f13-0f04-4f2e-86d8-0e78e3df2ddd@test.com",
  password: "xotabu4@gmail.com",
};

test("Logged in user can buy a product", async ({page}) => {
  const signInPage = new SignInPage(page);
  await signInPage.open();
  await signInPage.signIn(data);

  await page.getByRole("link", {name: "Shop"}).click();
  await page.getByRole("link", {name: "MARINATED CUCUMBERS NEZHIN"}).click();
  await page.getByRole("button", {name: "Add To Bag"}).click();
  await page.getByRole("button", {name: "Place Order"}).click();
  await expect(page.getByRole("heading", {name: "Thank you for your order."})).toBeVisible();
});

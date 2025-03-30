import {test, expect} from "@playwright/test";
import {SignInPage} from "../pages/SignInPage";
import {HomePage} from "../pages/HomePage";
import {ShopPage} from "../pages/ShopPage";
import {ProductPage} from "../pages/product/ProductPage";
import {ConfirmationPage} from "../pages/ConfirmationPage";

const data = {
  email: "test+e1f76f13-0f04-4f2e-86d8-0e78e3df2ddd@test.com",
  password: "xotabu4@gmail.com",
};

test("Logged in user can buy a product", async ({page}) => {
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const shopPage = new ShopPage(page);
  const productPage = new ProductPage(page);
  const confirmationPage = new ConfirmationPage(page);
  await signInPage.open();
  await signInPage.signIn(data);

  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("MARINATED CUCUMBERS NEZHIN");
  await productPage.addToBag();

  await productPage.minicart.placeOrder();

  await confirmationPage.expectOrderPlaced();
});

test("Logged in user can buy multiply products", async ({page}) => {
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);
  const shopPage = new ShopPage(page);
  const productPage = new ProductPage(page);
  const confirmationPage = new ConfirmationPage(page);
  await signInPage.open();
  await signInPage.signIn(data);

  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("MARINATED CUCUMBERS NEZHIN");
  await productPage.addToBag();

  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("CHERRY TOMATOES");
  await productPage.addToBag();

  await productPage.minicart.placeOrder();

  await confirmationPage.expectOrderPlaced();
});

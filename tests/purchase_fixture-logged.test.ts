import {loggedUserFixture, test1} from "../fixtures/fixture";

loggedUserFixture("Logged in user can buy a product", async ({homePage, shopPage, productPage, confirmationPage}) => {
  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("MARINATED CUCUMBERS NEZHIN");
  await productPage.addToBag();

  await productPage.minicart.placeOrder();

  await confirmationPage.expectOrderPlaced();
});

loggedUserFixture("Logged in user can buy multiply products", async ({homePage, shopPage, productPage, confirmationPage}) => {
  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("MARINATED CUCUMBERS NEZHIN");
  await productPage.addToBag();
  await productPage.minicart.closeCart();


  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("CHERRY TOMATOES");
  await productPage.addToBag();

  await productPage.minicart.placeOrder();

  await confirmationPage.expectOrderPlaced();
});

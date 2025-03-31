import {test1} from "../fixtures/fixture";

const data = {
  email: "test+e1f76f13-0f04-4f2e-86d8-0e78e3df2ddd@test.com",
  password: "xotabu4@gmail.com",
};

test1("Logged in user can buy a product", async ({signInPage, homePage, shopPage, productPage, confirmationPage, browserName}) => {
  if(browserName === "firefox" || browserName === "webkit"){
    test1.skip()
  }
  await signInPage.open();
  await signInPage.signIn(data);

  await homePage.header.openShop();
  await shopPage.openProductDetailsByName("MARINATED CUCUMBERS NEZHIN");
  await productPage.addToBag();

  await productPage.minicart.placeOrder();

  await confirmationPage.expectOrderPlaced();
});

test1("Logged in user can buy multiply products", async ({signInPage, homePage, shopPage, productPage, confirmationPage}) => {
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

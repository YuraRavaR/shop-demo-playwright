import {test as base, expect} from "@playwright/test";
import {SignInPage} from "../pages/SignInPage";
import {HomePage} from "../pages/HomePage";
import {ShopPage} from "../pages/ShopPage";
import {ProductPage} from "../pages/product/ProductPage";
import {ConfirmationPage} from "../pages/ConfirmationPage";
import {SignUpPage} from "../pages/SignUpPage";
import {ContactUsPage} from "../pages/ContactUsPage";
import {AccountDetailsPage} from "../pages/account/AccountDetailsPage";
// import data from "../data/userData.json";

const data = {
    email: "test+e1f76f13-0f04-4f2e-86d8-0e78e3df2ddd@test.com",
    password: "xotabu4@gmail.com",
  };

type Pages = {
  homePage: HomePage;
  signInPage: SignInPage;
  signUpPage: SignUpPage;
  shopPage: ShopPage;
  contactUsPage: ContactUsPage;
  confirmationPage: ConfirmationPage;
  accountDetailsPage: AccountDetailsPage;
  productPage: ProductPage;
};

const createPageFixture = (PageClass) => async ({ page }, use) => await use(new PageClass(page));

export const test1 = base.extend<Pages>({
    homePage: createPageFixture(HomePage),
    signInPage: createPageFixture(SignInPage),
    signUpPage: createPageFixture(SignUpPage),
    shopPage: createPageFixture(ShopPage),
    contactUsPage: createPageFixture(ContactUsPage),
    confirmationPage: createPageFixture(ConfirmationPage),
    accountDetailsPage: createPageFixture(AccountDetailsPage),
    productPage: createPageFixture(ProductPage),
});


  export const loggedUserFixture = test1.extend<{loggedUser: void}>({
    loggedUser: [async ({ signInPage}, use) => {
      await signInPage.open();
      await signInPage.signIn(data);
      await use();
    }, { auto: true }],
  });
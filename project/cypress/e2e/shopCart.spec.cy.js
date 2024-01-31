const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("Shop cart on 5 element", () => {
  it("Shop cart should exist after adding products into it", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.filterByBrand(1);
    homePage.addProductToCart();
    homePage.goToCart();
    homePage.getCartBody().should("exist");
  });
});

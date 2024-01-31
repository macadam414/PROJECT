const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("Shop cart clear on 5 element", () => {
  it("Shop cart should not exist after deleting products from it", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.filterByBrand(1);
    homePage.addProductToCart();
    homePage.goToCart();
    homePage.removeProductFromCart();
    homePage.getCartBody().should("not.exist");
  });
});

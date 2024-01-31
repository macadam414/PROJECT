const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("Filters on 5element.by", () => {
  it("should filter search results in price range from 1337 to 4444 from low to high", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.sortProducts(2);
    productsPage.setMinPrice(1337);
    productsPage.setMaxPrice(4444);
    homePage.getProductPrice().then((priceValue) => {
      expect(priceValue).to.be.at.least(1337);
    });
  });
});

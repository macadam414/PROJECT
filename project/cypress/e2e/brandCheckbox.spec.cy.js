const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("Brand checkbox on 5 element", () => {
  it("should filter phones by brand", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.filterByBrand(1);
    productsPage.checkBarndFilterResults("Apple");
  });
});

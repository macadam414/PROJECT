const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("descending sorting on 5 element", () => {
  it("should sort from highest price to lowest", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.sortProducts(1);
    productsPage.getPriceArrayAndCheckSorting("descending");
  });
});

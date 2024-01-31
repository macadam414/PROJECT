const homePage = require("../../pages/homePage");
const productsPage = require("../../pages/productsPage");

describe("Ascending sorting on 5 element", () => {
  it("should sort from lowest price to highest", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    productsPage.sortProducts(3);
    productsPage.getRatesArrayAndCheckSorting();
  });
});

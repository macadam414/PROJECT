const homePage = require("../../pages/homePage");
const comparisonPage = require("../../pages/comparisonPage");

describe("Comparison on 5element.by", () => {
  it("should have a comparison", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    comparisonPage.addProductToComparison();
    comparisonPage.goToComparisonPage();
    comparisonPage.doesComparisonBodyExist().should("exist");
  });
});

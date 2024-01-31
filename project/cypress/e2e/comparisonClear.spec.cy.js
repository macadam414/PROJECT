const homePage = require("../../pages/homePage");
const comparisonPage = require("../../pages/comparisonPage");

describe("Comparison clear on 5element.by", () => {
  it("should not have a comparison", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.findPhonesStraightFromHome();
    comparisonPage.addProductToComparison();
    comparisonPage.goToComparisonPage();
    comparisonPage.removeFromComparison();
    comparisonPage.doesComparisonBodyExist().should("not.exist");
  });
});

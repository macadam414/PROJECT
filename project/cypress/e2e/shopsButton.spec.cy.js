const header = require("../../pages/components/header");
const homePage = require("../../pages/homePage");

describe("Shops button on 5 element", () => {
  it("should move to the shops page", () => {
    homePage.visitHomePage("https://5element.by");
    header.goToShopsPage();
    homePage.checkTitle("магазин");
  });
});

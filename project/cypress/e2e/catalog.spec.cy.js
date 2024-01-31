const homePage = require("../../pages/homePage");

describe("Catalog on 5 element", () => {
  it("Should head to the selected category page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.openFromCatalog("PC");
    homePage.checkTitle("Ноутбуки и компьютеры");
  });
});

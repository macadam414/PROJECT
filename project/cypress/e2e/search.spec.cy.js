const homePage = require("../../pages/homePage");
const searchComponent = require("../../pages/components/searchComponents");

describe("Search on 5element", () => {
  it("Should find iPhone", () => {
    homePage.visitHomePage("https://5element.by/#/search/");
    searchComponent.searchProduct("iPhone");
    searchComponent.checkSearchResults("iPhone");
  });
});


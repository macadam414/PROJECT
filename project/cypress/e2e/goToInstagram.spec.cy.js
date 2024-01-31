const homePage = require("../../pages/homePage");

describe("Instagram button on 5 element", () => {
  it("should head to Instagram page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("ig");
    homePage.checkURL("instagram");
  });
});

const homePage = require("../../pages/homePage");

describe("Odnoklassniki button on 5 element", () => {
  it("should head Odnoklassniki help page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("ok");
    homePage.checkURL("ok");
  });
});

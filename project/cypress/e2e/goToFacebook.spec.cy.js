const homePage = require("../../pages/homePage");

describe("FaceBook button on 5 element", () => {
  it("should head to FaceBook page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("fb");
    homePage.checkURL("facebook");
  });
});

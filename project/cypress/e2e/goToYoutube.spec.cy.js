const homePage = require("../../pages/homePage");

describe("YouTube button on 5 element", () => {
  it("should head to YouTube page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("yt");
    homePage.checkURL("youtube");
  });
});

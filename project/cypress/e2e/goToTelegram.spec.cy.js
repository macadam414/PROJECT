const homePage = require("../../pages/homePage");

describe("Telegram button on 5 element", () => {
  it("should head to telegram page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("tg");
    homePage.checkURL("telegram");
  });
});

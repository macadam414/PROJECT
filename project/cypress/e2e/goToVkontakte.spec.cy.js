const homePage = require("../../pages/homePage");

describe("VK button on 5 element", () => {
  it("should head to VK page", () => {
    homePage.visitHomePage("https://5element.by");
    homePage.goToSocialMedia("vk");
    homePage.checkURL("vk");
  });
});

const header = require("../../pages/components/header");
const homePage = require("../../pages/homePage");

describe("Help button on 5 element", () => {
  it("should head to the help page", () => {
    homePage.visitHomePage("https://5element.by");
    header.goToHelpPage();
    homePage.checkTitle("вопросы");
  });
});

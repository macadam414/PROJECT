const header = require("../../pages/components/header");
const homePage = require("../../pages/homePage");

describe("Contact button on 5 element", () => {
  it("should move to the contacts page", () => {
    homePage.visitHomePage("https://5element.by");
    header.goToContactsPage();
    homePage.checkTitle("Контакты");
  });
});

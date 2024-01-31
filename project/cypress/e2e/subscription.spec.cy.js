const homePage = require("../../pages/homePage");

describe("Subscription on 5 element", () => {
  it("Should subscribe", () => {
    const emailLogin = Math.floor(Math.random() * 10000000000000);
    homePage.visitHomePage("https://5element.by");
    homePage.subscribeViaEmailAndCheckTheSubscriptionStatus(emailLogin);
  });
});

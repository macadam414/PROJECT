const header = require("../../pages/components/header");
const homePage = require("../../pages/homePage");

describe("Payment and delivery button on 5 element", () => {
  it("should head to the payment and delivery page", () => {
    homePage.visitHomePage("https://5element.by");
    header.goToPaymentAndDeliveryPage();
    homePage.checkTitle("Оплата и доставка");
  });
});

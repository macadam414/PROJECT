class Header {
  get shopsButton() {
    return cy.get(":nth-child(1) > .h-nav__link");
  }

  get helpButton() {
    return cy.get(":nth-child(2) > .h-nav__link");
  }

  get paymentAndDeliveryButton() {
    return cy.get(":nth-child(3) > .h-nav__link");
  }

  get orderTrackButton() {
    return cy.get(":nth-child(5) > .h-nav__link");
  }

  get contactsButton() {
    return cy.get(":nth-child(6) > .h-nav__link");
  }

  goToShopsPage() {
    this.shopsButton.click();
  }

  goToHelpPage() {
    this.helpButton.click();
  }

  goToPaymentAndDeliveryPage() {
    this.paymentAndDeliveryButton.click();
  }

  goToOrderTrakPage() {
    this.orderTrackButton.click();
  }

  goToContactsPage() {
    this.contactsButton.click();
  }
}

module.exports = new Header();

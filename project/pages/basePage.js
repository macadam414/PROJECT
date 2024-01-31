class BasePage {
  navigate(url) {
    cy.visit(url);
  }

  checkTitle(expectedTitle) {
    cy.title().should("contain", expectedTitle);
  }

  checkURL(expectedURL) {
    cy.url().should("contain", expectedURL);
  }
}

module.exports = BasePage;

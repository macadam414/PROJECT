const BasePage = require("./basePage");

class ComparisonPage extends BasePage {
  get productToCompare() {
    return cy
      .get(
        "#app > main > div:nth-child(3) > div > div.section-grid > div.section-grid__main > div.catalog-default > div > div > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(3) > div.c-actions > button:nth-child(2)",
      )
      .scrollIntoView();
  }

  get comparisonIcon() {
    return cy.get(":nth-child(1) > .n-item");
  }

  get comparisonPageButton() {
    return cy.get(".h-drop__bttns > .btn");
  }

  get comparisonBody() {
    return cy.get(".compare-body > :nth-child(1)");
  }

  get removeFromeComparisonButton() {
    return cy.get(".c-remove");
  }

  addProductToComparison() {
    this.productToCompare.click();
  }

  goToComparisonPage() {
    this.comparisonIcon.click();
    this.comparisonPageButton.click();
  }

  doesComparisonBodyExist() {
    return this.comparisonBody;
  }

  removeFromComparison() {
    this.removeFromeComparisonButton.click();
  }
}

module.exports = new ComparisonPage();

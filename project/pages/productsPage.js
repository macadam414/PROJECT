const BasePage = require("./basePage");

class ProductsPage extends BasePage {
  get sortingButton() {
    return cy.get(".filter-line > .inp-dropdown > .btn");
  }

  get sortByHigherPrice() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(1) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get sortByLowerPrice() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(2) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get sortByRating() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(3) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get sortTheNewest() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(4) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get sortByDiscount() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(5) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get sortByPopularity() {
    return cy.get(
      ".inp-dropdown__list > :nth-child(6) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get allThePrices() {
    return cy.get("div.c-price");
  }

  get appleCheckBox() {
    return cy.get(
      "#filter-692695 > .filter-body > :nth-child(2) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get bqCheckBox() {
    return cy.get(
      "#filter-692695 > .filter-body > :nth-child(3) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get cubotCheckBox() {
    return cy.get(
      "#filter-692695 > .filter-body > :nth-child(4) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get honorCheckBox() {
    return cy.get(
      "#filter-692695 > .filter-body > :nth-child(5) > .inp-box > .inp-box__label > .inp-box__view",
    );
  }

  get showAllBrands() {
    return cy.get("#filter-692695 > .filter-body > .filter-more > .collapsed");
  }

  get allTheNames() {
    return cy.get(".card-product-full > :nth-child(2) > .c-text");
  }

  get allTheRates() {
    return cy.get(".card-product-full > :nth-child(2) > .c-rating ");
  }

  get minPriceField() {
    return cy.get(
      "#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(1) > .inp",
    );
  }

  get maxPriceField() {
    return cy.get(
      "#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(2) > .inp",
    );
  }

  sortProducts(sortingCategory) {
    this.sortingButton.click();
    if (sortingCategory === 1) {
      this.sortByHigherPrice.click();
    } else if (sortingCategory === 2) {
      this.sortByLowerPrice.click();
    } else if (sortingCategory === 3) {
      this.sortByRating.click();
    } else if (sortingCategory === 4) {
      this.sortTheNewest.click();
    } else if (sortingCategory === 5) {
      this.sortByDiscount.click();
    } else if (sortingCategory === 6) {
      this.sortByPopularity.click();
    }
    cy.wait(3000);
  }

  getPriceArrayAndCheckSorting(sortingType) {
    let pricesArray = [];

    this.allThePrices
      .each(($el) => {
        const price = parseFloat($el.text().replace(/[^\d.]/g, ""));
        if (!isNaN(price)) {
          pricesArray.push(price);
        }
      })
      .then(() => {
        let expectedPricesArray;
        if (sortingType === "ascending") {
          expectedPricesArray = [...pricesArray].sort((a, b) => a - b);
        } else if (sortingType === "descending") {
          expectedPricesArray = [...pricesArray].sort((a, b) => b - a);
        } else {
          throw new Error("Invalid sorting type provided");
        }

        expect(pricesArray).to.deep.equal(expectedPricesArray);
      });
  }

  getRatesArrayAndCheckSorting() {
    let ratesArray = [];

    return this.allTheRates
      .each(($el) => {
        const rate = $el.text();
        if (rate) {
          ratesArray.push(rate);
        }
      })
      .then(() => {
        const expectedRatesArray = [...ratesArray].sort((a, b) => b - a);
        expect(ratesArray).to.deep.equal(expectedRatesArray);
      });
  }

  filterByBrand(brandIndex) {
    this.showAllBrands.scrollIntoView();
    this.showAllBrands.click();
    if (brandIndex === 1) {
      this.appleCheckBox.click();
    } else if (brandIndex === 2) {
      this.bqCheckBox.click();
    } else if (brandIndex === 3) {
      this.cubotCheckBox.click();
    } else if (brandIndex === 4) {
      this.honorCheckBox.click();
    } else {
      throw new Error("Invalid brand index provided");
    }
  }

  checkBarndFilterResults(expectedBrand) {
    this.allTheNames.should("contain.text", expectedBrand);
  }

  setMinPrice(price) {
    this.minPriceField.clear().type(price);
  }

  setMaxPrice(price) {
    this.maxPriceField.focus().clear().type(price);
  }
}

module.exports = new ProductsPage();

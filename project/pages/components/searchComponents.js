class SearchComponent {
  get searchField() {
    return cy.get(".multi-search-header__form > .inp");
  }

  get searchResults() {
    return cy.get(
      "#app main div.product-tabs-content div.catalog-wrap div.c-description a",
    );
  }

  searchProduct(productName) {
    this.searchField.type(`${productName}{enter}`);
  }

  checkSearchResults(productName) {
    this.searchResults.should("contain.text", `${productName}`);
  }
}



module.exports = new SearchComponent();

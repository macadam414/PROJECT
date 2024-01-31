context("GET /https://5element.by", () => {
  it("GET call", () => {
    cy.request("GET", "https://5element.by").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

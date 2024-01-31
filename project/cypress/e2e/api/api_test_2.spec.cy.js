context("POST /https://5element.by", () => {
  it("POST call", () => {
    cy.request({
      method: "POST",
      url: "https://5element.by",
      body: {
        name: "aaaaaaaaaaaaaaaa",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

context("PUT /https://5element.by", () => {
  it("PUT call", () => {
    cy.request({
      method: "PUT",
      url: "https://5element.by",
      body: {
        name: "aaaaaaaaaaaaaaaa",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

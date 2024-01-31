context("DELTE /https://5element.by", () => {
  it("DELETE call", () => {
    cy.request({
      method: "DELETE",
      url: "https://5element.by",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

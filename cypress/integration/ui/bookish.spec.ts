describe("Bookish application", () => {
  it("Visits the bookish", () => {
    cy.visit("http://localhost:3000/");
    cy.get('h2[data-test="heading"]').contains("Bookish");
    // cy.get("div.book-item").should("have.length", 2);
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design"]);
    });
  });
});
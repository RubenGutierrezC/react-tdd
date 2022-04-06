import axios from "axios";

export const cleanUpStubBooks = () => {
  return axios
    .delete("http://localhost:8080/books?_cleanup=true")
    .catch((err) => err);
};

export const feedStubBooks = async () => {
  const books = [
    { name: "Refactoring", id: 1 },
    { name: "Domain-driven design", id: 2 },
    { name: "Building Micro-service", id: 3 },
  ];

  for (const book of books) {
    await axios.post("http://localhost:8080/books", book, {
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const goToApp = () => {
  cy.visit("http://localhost:3000/");
};

export const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains("Bookish");
};

export const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);
    const titles = [...books].map((book) => book.querySelector("h2").innerHTML);

    expect(titles).to.deep.equal(expectation);
  });
};

export const gotoNthBookInTheList = (nth) => {
  cy.get("div.book-item").contains("View Details").eq(nth).click();
  // cy.url().should('include', `/books/${nth + 1}`);
};

export const checkBookDetail = () => {
  cy.get("h2.book-title").contains("Refactoring");
};

export const performSearch = (term) => {
  cy.get('[data-test="search"] input').type(term);
};

/// <reference types="cypress" />

import axios from "axios";

describe("Bookish application", () => {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(async () => {
    const books = [
      {
        name: "Refactoring",
        id: 1,
        description:
          "Non tempor deserunt reprehenderit minim nisi mollit ea elit velit. Duis sunt Lorem adipisicing labore aliqua aliqua dolore nulla deserunt non occaecat sit. Aute sit est qui consectetur irure. Velit eiusmod nostrud eiusmod do dolor quis ipsum Lorem id incididunt labore ex. Non ex incididunt est labore est mollit proident aliquip irure ipsum. Minim velit aliquip in cillum voluptate qui laboris excepteur sint incididunt minim mollit laboris officia. Duis est aliqua in nulla consectetur labore Lorem consectetur mollit minim ea. Consectetur voluptate dolor nostrud voluptate pariatur labore ex occaecat cupidatat id. Consectetur cupidatat do amet consectetur tempor sint eiusmod ea eiusmod.",
      },
      {
        name: "Domain-driven design",
        id: 2,
        description:
          "Explains how to incorporate effective domain modeling into the software development process.",
      },
      {
        name: "Building Microservices",
        id: 3,
        description:
          "Author Sam Newman provides you with a firm grounding in the concepts while diving into current solutions for modeling, integrating, testing, deploying, and monitoring your own autonomous services.",
      },
      {
        name: "Acceptance Test Driven Development with React",
        id: 4,
        description:
          "This book describes how to apply the Acceptance Test Driven Development when developing a Web Application named bookish with React / Redux and other tools in react ecosystem.",
      },
    ];

    for (const book of books) {
      await axios.post("http://localhost:8080/books", book, {
        headers: { "Content-type": "application/json" },
      });
    }
  });

  it("Visits the bookish", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    // cy.get('h2[data-test="heading"]').contains("Bookish");
    // cy.get("div.book-item").should("have.length", 2);
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(4);
      const titles = [...books].map(
        (book) => book.querySelector("h2").innerHTML
      );
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Building Microservices",
        "Acceptance Test Driven Development with React",
      ]);
    });
  });

  it("Goes to the detail page", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });

  it("Searches for a title", () => {
    cy.visit("http://localhost:3000/");
    cy.get("div.book-item").should("have.length", 4);
    cy.get('[data-test="search"] input').type("design");
    cy.get("div.book-item").should("have.length", 1);
    cy.get("div.book-item").eq(0).contains("Domain-driven design");
  });
});

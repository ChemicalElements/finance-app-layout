import Cards from "./Cards";

describe("Cards", () => {
  beforeEach(() => {
    cy.mount(<Cards />);
  });

  it("should contain 3 cards", () => {
    cy.get("[data-cy=cards-card]").should("have.length", 3);
  });
});
